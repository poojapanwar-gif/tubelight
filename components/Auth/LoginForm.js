"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "../../styles/Auth.module.scss";

// The portal owns the login session, so this page collects the tenant and hands off
// to the portal sign-in (username + password). There is no public "tenant exists"
// API to check against, so we don't block here.
const LoginForm = ({ portalSignInUrl }) => {
  const [tenant, setTenant] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = tenant.trim();
    if (name.length < 3) {
      setError("Please enter your tenant name.");
      return;
    }
    setLoading(true);
    window.location.href = `${portalSignInUrl}?tenant=${encodeURIComponent(name)}`;
  };

  return (
    <form className={styles["auth-form"]} onSubmit={handleSubmit} noValidate>
      <h1>Login</h1>
      <p className={styles["auth-sub"]}>Login with your corporate credentials.</p>

      <label className={styles.field}>
        <span>Tenant Name</span>
        <input
          type="text"
          value={tenant}
          placeholder="Enter Tenant Name"
          autoComplete="organization"
          onChange={(e) => {
            setTenant(e.target.value.replace(/[^a-z0-9]/gi, ""));
            setError("");
          }}
          aria-invalid={Boolean(error)}
          required
        />
      </label>
      {error && (
        <p className={styles["auth-error"]} role="alert">
          {error}
        </p>
      )}

      <button type="submit" className={styles["auth-btn"]} disabled={loading}>
        {loading ? "Redirecting..." : "Continue"}
      </button>

      <p className={styles["auth-switch"]}>
        Don&apos;t have an account? <Link href="/sign-up">Sign up</Link>
      </p>
    </form>
  );
};

export default LoginForm;
