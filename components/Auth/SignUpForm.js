"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "../../styles/Auth.module.scss";

const COUNTRIES = [
  { code: "in", name: "India", dial: "91", digits: [10, 10] },
  { code: "us", name: "United States", dial: "1", digits: [10, 10] },
  { code: "ca", name: "Canada", dial: "1", digits: [10, 10] },
  { code: "gb", name: "United Kingdom", dial: "44", digits: [9, 10] },
  { code: "ae", name: "UAE", dial: "971", digits: [8, 9] },
  { code: "sa", name: "Saudi Arabia", dial: "966", digits: [9, 9] },
  { code: "sg", name: "Singapore", dial: "65", digits: [8, 8] },
  { code: "au", name: "Australia", dial: "61", digits: [9, 9] },
  { code: "np", name: "Nepal", dial: "977", digits: [10, 10] },
  { code: "bd", name: "Bangladesh", dial: "880", digits: [10, 10] },
  { code: "lk", name: "Sri Lanka", dial: "94", digits: [9, 9] },
];

const EMAIL_RE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const COMPANY_RE = /^(?=.*[A-Za-z])[A-Za-z0-9_,./()\s'&#+*-]+$/;
const PASSWORD_RE = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.*()_&])[A-Za-z\d@.*()_&]{8,15}$/;
const PASSWORD_HINT =
  "The password must contain 8-15 characters, at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character from the set @ . _ ( * ) &";

const postJson = async (url, body) => {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, data };
};

const initialValues = {
  firstName: "",
  lastName: "",
  company: "",
  country: "in",
  mobile: "",
  email: "",
  password: "",
  terms: false,
  marketing: false,
};

const SignUpForm = ({ portalSignInUrl }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [sending, setSending] = useState(false);
  const [otpOpen, setOtpOpen] = useState(false);
  const [otp, setOtp] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [done, setDone] = useState(false);

  const country = COUNTRIES.find((c) => c.code === values.country) || COUNTRIES[0];
  const phone = `${country.dial}${values.mobile}`;

  const setField = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setStatus({ type: "", message: "" });
  };

  const checkEmail = async () => {
    if (!values.email) return;
    if (!EMAIL_RE.test(values.email)) {
      setErrors((prev) => ({ ...prev, email: "Invalid Email" }));
      return;
    }
    const { ok, data } = await postJson("/api/auth/validate-email", { email: values.email });
    if (ok && data.exists) setErrors((prev) => ({ ...prev, email: "Email already Exists" }));
  };

  const checkCompany = async () => {
    const name = values.company.trim();
    if (!name) return;
    if (!COMPANY_RE.test(name)) {
      setErrors((prev) => ({
        ...prev,
        company: "Company name can only contain letters, numbers and _ , . / ( ) ' & # + * -",
      }));
      return;
    }
    const { ok, data } = await postJson("/api/auth/validate-company", { companyName: name });
    if (ok && data.exists) setErrors((prev) => ({ ...prev, company: "Company Name Already Exists" }));
  };

  const validate = () => {
    const next = {};
    if (!values.firstName.trim()) next.firstName = "Required";
    if (!values.lastName.trim()) next.lastName = "Required";
    if (values.company.trim().length < 3) next.company = "Company Name cannot be less than 3 characters.";
    else if (!COMPANY_RE.test(values.company.trim())) next.company = "Please add valid company name.";
    const [min, max] = country.digits;
    if (values.mobile.length < min || values.mobile.length > max) next.mobile = "Please enter a valid number.";
    if (!EMAIL_RE.test(values.email)) next.email = "Please enter a valid email.";
    if (!PASSWORD_RE.test(values.password)) next.password = PASSWORD_HINT;
    if (!values.terms) next.terms = "Please accept the Terms of Services and Privacy Policy.";
    // Keep "already exists" errors from the on-blur checks.
    if (errors.email && !next.email) next.email = errors.email;
    if (errors.company && !next.company) next.company = errors.company;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const sendOtp = async () => {
    setSending(true);
    const { ok, data } = await postJson("/api/auth/send-otp", { phone, email: values.email });
    setSending(false);
    if (!ok) {
      setStatus({ type: "error", message: data.error || "An error occurred while sending OTP." });
      return false;
    }
    setStatus({ type: "info", message: "OTP sent to your mobile number" });
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    if (await sendOtp()) {
      setOtp("");
      setOtpOpen(true);
    }
  };

  const handleVerify = async () => {
    setVerifying(true);
    const { ok, data } = await postJson("/api/auth/sign-up", {
      firstName: values.firstName,
      lastName: values.lastName,
      company: values.company,
      email: values.email,
      phone,
      country: values.country,
      password: values.password,
      otp,
    });
    setVerifying(false);
    if (!ok) {
      setStatus({ type: "error", message: data.error || "Something went wrong!" });
      return;
    }
    setOtpOpen(false);
    setDone(true);
    setTimeout(() => {
      window.location.href = portalSignInUrl;
    }, 6000);
  };

  if (done) {
    return (
      <div className={styles["auth-form"]}>
        <h1>Welcome aboard!</h1>
        <p className={styles["auth-sub"]}>
          Your account has been created. Taking you to the portal to sign in...
        </p>
        <a className={styles["auth-btn"]} href={portalSignInUrl}>
          Go to Login
        </a>
      </div>
    );
  }

  return (
    <>
      <form className={styles["auth-form"]} onSubmit={handleSubmit} noValidate>
        <h1>Get Started</h1>
        <p className={styles["auth-sub"]}>
          Already have an account? <Link href="/login">Login</Link>
        </p>

        <div className={styles["auth-grid"]}>
          <label className={styles.field}>
            <span>First Name</span>
            <input
              value={values.firstName}
              placeholder="Enter Firstname"
              maxLength={20}
              autoComplete="given-name"
              onChange={(e) => setField("firstName", e.target.value)}
              aria-invalid={Boolean(errors.firstName)}
            />
            {errors.firstName && <em>{errors.firstName}</em>}
          </label>
          <label className={styles.field}>
            <span>Last Name</span>
            <input
              value={values.lastName}
              placeholder="Enter Lastname"
              maxLength={20}
              autoComplete="family-name"
              onChange={(e) => setField("lastName", e.target.value)}
              aria-invalid={Boolean(errors.lastName)}
            />
            {errors.lastName && <em>{errors.lastName}</em>}
          </label>
          <label className={styles.field}>
            <span>Company Name</span>
            <input
              value={values.company}
              placeholder="Company Name"
              autoComplete="organization"
              onChange={(e) => setField("company", e.target.value)}
              onBlur={checkCompany}
              aria-invalid={Boolean(errors.company)}
            />
            {errors.company && <em>{errors.company}</em>}
          </label>
          <div className={styles.field}>
            <span id="mobile-label">Mobile</span>
            <div className={styles["phone-row"]}>
              <select
                aria-label="Country code"
                value={values.country}
                onChange={(e) => setField("country", e.target.value)}
              >
                {COUNTRIES.map((c) => (
                  <option key={c.code} value={c.code} title={c.name}>
                    {c.code.toUpperCase()} +{c.dial}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                inputMode="numeric"
                aria-labelledby="mobile-label"
                value={values.mobile}
                placeholder="Enter Number"
                autoComplete="tel-national"
                onChange={(e) => setField("mobile", e.target.value.replace(/\D/g, "").slice(0, 14))}
                aria-invalid={Boolean(errors.mobile)}
              />
            </div>
            {errors.mobile && <em>{errors.mobile}</em>}
          </div>
          <label className={`${styles.field} ${styles.full}`}>
            <span>Email</span>
            <input
              type="email"
              value={values.email}
              placeholder="Enter Email Address"
              autoComplete="email"
              onChange={(e) => setField("email", e.target.value.trim())}
              onBlur={checkEmail}
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email && <em>{errors.email}</em>}
          </label>
          <label className={`${styles.field} ${styles.full}`}>
            <span>
              Password <small>(Between 8-15 characters)</small>
            </span>
            <div className={styles["password-row"]}>
              <input
                type={showPassword ? "text" : "password"}
                value={values.password}
                placeholder="Enter Password"
                maxLength={15}
                autoComplete="new-password"
                onChange={(e) => setField("password", e.target.value)}
                aria-invalid={Boolean(errors.password)}
              />
              <button
                type="button"
                className={styles["eye-btn"]}
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && <em>{errors.password}</em>}
          </label>
        </div>

        <label className={styles.check}>
          <input type="checkbox" checked={values.terms} onChange={(e) => setField("terms", e.target.checked)} />
          <span>I agree to all the Terms of Services and Privacy Policy</span>
        </label>
        {errors.terms && <em className={styles["check-error"]}>{errors.terms}</em>}
        <label className={styles.check}>
          <input
            type="checkbox"
            checked={values.marketing}
            onChange={(e) => setField("marketing", e.target.checked)}
          />
          <span>I want to receive Tubelight communications news, trends, offers or blogs by email.</span>
        </label>

        {status.message && !otpOpen && (
          <p className={status.type === "error" ? styles["auth-error"] : styles["auth-info"]} role="status">
            {status.message}
          </p>
        )}

        <button type="submit" className={styles["auth-btn"]} disabled={sending}>
          {sending ? "Sending OTP..." : "Sign Up"}
        </button>
      </form>

      {otpOpen && (
        <div className={styles["otp-backdrop"]} role="dialog" aria-modal="true" aria-labelledby="otp-title">
          <div className={styles["otp-card"]}>
            <h2 id="otp-title">Verify your mobile</h2>
            <p>
              A one-time code has been sent to <b>+{phone}</b>
            </p>
            <input
              className={styles["otp-input"]}
              inputMode="numeric"
              autoComplete="one-time-code"
              value={otp}
              maxLength={6}
              placeholder="------"
              aria-label="6-digit OTP"
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
              autoFocus
            />
            {status.message && (
              <p className={status.type === "error" ? styles["auth-error"] : styles["auth-info"]} role="status">
                {status.message}
              </p>
            )}
            <button
              type="button"
              className={styles["auth-btn"]}
              disabled={otp.length !== 6 || verifying}
              onClick={handleVerify}
            >
              {verifying ? "Verifying..." : "Verify & Create Account"}
            </button>
            <div className={styles["otp-actions"]}>
              <button type="button" onClick={sendOtp} disabled={sending}>
                {sending ? "Sending..." : "Resend OTP"}
              </button>
              <button type="button" onClick={() => setOtpOpen(false)}>
                Change details
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUpForm;
