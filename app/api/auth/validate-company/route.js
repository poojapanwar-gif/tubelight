import { ENDPOINTS, postEncrypted, json } from "@/lib/portalApi";

// POST { companyName } -> { exists }  (company name == tenant name on the portal)
export async function POST(request) {
  const { companyName } = await request.json().catch(() => ({}));
  const name = (companyName || "").trim();
  if (name.length < 3) return json({ error: "Company name is too short" }, 400);
  try {
    const res = await postEncrypted(ENDPOINTS.validateTenant, { companyName: name });
    return json({ exists: res.status === 409 });
  } catch {
    return json({ error: "Could not verify company name right now." }, 502);
  }
}
