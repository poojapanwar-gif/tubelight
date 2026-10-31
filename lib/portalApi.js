import "server-only";
import crypto from "crypto";

// Server-side client for the Tubelight portal auth APIs used by /login and /sign-up.
// Secrets come from server env vars (see .env.example) and never reach the browser.

const PORTAL_URL = process.env.TUBELIGHT_PORTAL_URL || "https://portal.tubelightcommunications.com";

export const ENDPOINTS = {
  validateEmail: `${PORTAL_URL}/api/v1/auth/validate/email`,
  validateTenant: `${PORTAL_URL}/api/v1/auth/validation/tenant`,
  sendOtp: `${PORTAL_URL}/2FA/v1/enc/send-otp/`,
  createCustomer: `${PORTAL_URL}/api/v1/auth/customer`,
};

export const PORTAL_SIGN_IN_URL = `${PORTAL_URL}/sign-in`;

const requireEnv = (name) => {
  const value = process.env[name];
  if (!value) throw new Error(`Missing server env var ${name}`);
  return value;
};

// Matches the portal's CryptoJS scheme: AES-256-CBC, key = SHA-256(secret),
// random 16-byte IV, output = base64(iv || ciphertext).
export const encryptPayload = (payload) => {
  const key = crypto.createHash("sha256").update(requireEnv("TUBELIGHT_ENC_SECRET"), "utf8").digest();
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  const encrypted = Buffer.concat([cipher.update(JSON.stringify(payload), "utf8"), cipher.final()]);
  return Buffer.concat([iv, encrypted]).toString("base64");
};

// POST an encrypted text/plain body (validation + onboarding endpoints).
export const postEncrypted = (url, payload) =>
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "text/plain" },
    body: encryptPayload(payload),
    cache: "no-store",
  });

export const postOtpRequest = (payload) =>
  fetch(ENDPOINTS.sendOtp, {
    method: "POST",
    headers: {
      Authorization: `Token ${requireEnv("TUBELIGHT_API_TOKEN")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: encryptPayload(payload) }),
    cache: "no-store",
  });

export const clientIp = (request) =>
  (request.headers.get("x-forwarded-for") || "").split(",")[0].trim() ||
  request.headers.get("x-real-ip") ||
  "";

// Small in-memory limiter per IP (per server instance) to stop the OTP/SMS
// endpoint being abused through our proxy.
const hits = new Map();
export const isRateLimited = (key, limit, windowMs) => {
  const now = Date.now();
  const recent = (hits.get(key) || []).filter((t) => now - t < windowMs);
  recent.push(now);
  hits.set(key, recent);
  return recent.length > limit;
};

export const json = (body, status = 200) => Response.json(body, { status });
