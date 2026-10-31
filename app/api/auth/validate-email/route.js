import { ENDPOINTS, postEncrypted, json } from "@/lib/portalApi";

const EMAIL_RE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// POST { email } -> { exists }
export async function POST(request) {
  const { email } = await request.json().catch(() => ({}));
  if (!email || !EMAIL_RE.test(email)) return json({ error: "Invalid email" }, 400);
  try {
    const res = await postEncrypted(ENDPOINTS.validateEmail, { email: email.trim() });
    return json({ exists: res.status === 409 });
  } catch {
    return json({ error: "Could not verify email right now." }, 502);
  }
}
