import { postOtpRequest, clientIp, isRateLimited, json } from "@/lib/portalApi";

// POST { phone, email } -> { remainingAttempts } ; phone is digits incl. country code, no "+"
export async function POST(request) {
  const { phone, email } = await request.json().catch(() => ({}));
  if (!/^\d{6,20}$/.test(phone || "") || !email) return json({ error: "Invalid phone or email" }, 400);
  if (isRateLimited(`otp:${clientIp(request)}`, 5, 10 * 60 * 1000)) {
    return json({ error: "Too many attempts! Please try later." }, 429);
  }
  try {
    const res = await postOtpRequest({ phone_number: `+${phone}`, email: email.trim(), time: Date.now() });
    const data = await res.json().catch(() => ({}));
    if (res.status === 200) return json({ remainingAttempts: data.remaining_attempts ?? null });
    return json({ error: data.error || "Could not send OTP." }, res.status === 400 ? 400 : 502);
  } catch {
    return json({ error: "An error occurred while sending OTP." }, 502);
  }
}
