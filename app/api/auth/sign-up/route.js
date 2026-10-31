import { ENDPOINTS, postEncrypted, clientIp, json } from "@/lib/portalApi";

const MESSAGES = {
  400: "Invalid OTP, Please enter correct OTP",
  403: "Invalid OTP, Please enter correct OTP",
  409: "Company Name or Email already exists.",
  410: "Your OTP has expired! Please try again.",
  429: "Too many attempts! Please try later.",
};

// POST { firstName, lastName, company, email, phone, country, password, otp }
export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  const { firstName, lastName, company, email, phone, country, password, otp } = body;
  if (![firstName, lastName, company, email, phone, password, otp].every((v) => typeof v === "string" && v.trim())) {
    return json({ error: "Please fill in all fields." }, 400);
  }

  // Account defaults (balance, role, region) are set here, never taken from the browser.
  const payload = {
    newUser: true,
    tenantName: company.trim(),
    customerId: "",
    name: `${firstName.trim()} ${lastName.trim()}`,
    password,
    email: email.trim(),
    mobileNumber: phone,
    balance: "10",
    role: 2,
    company: company.trim(),
    country: country || "in",
    ipAddress: clientIp(request),
    date: new Date().toString(),
    region: 1,
    otp: otp.trim(),
  };

  try {
    const res = await postEncrypted(ENDPOINTS.createCustomer, payload);
    if (res.ok) return json({ ok: true });
    return json({ error: MESSAGES[res.status] || "Something went wrong!" }, res.status >= 500 ? 502 : res.status);
  } catch {
    return json({ error: "Something went wrong! Please try again!" }, 502);
  }
}
