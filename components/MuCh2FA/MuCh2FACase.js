"use client";
import React from "react";
import Link from "next/link";
import styles from "../../styles/ClickUseCases.module.scss";

const MuCh2FACase = () => {
  const useCaseCard = [
    {
      id: "login-otp",
      link: "/",
      linktext: "Login OTP",
      title: "Login & sign-up",
      detail:
        "Verify new and returning users at login and registration, even when their first channel fails.",
      renderVisual: () => (
        <div
          style={{
            width: "100%",
            height: "200px",
            borderRadius: "14px",
            background: "#EEF2FF",
            position: "relative",
            overflow: "hidden",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* ============ PHASE 1: SCREENSHOT SIGN-IN OTP INPUT (0s - 4.5s) ============ */}
          <div className="much2fa-step-container much2fa-step-a">
            <div className="much2fa-modal-card">
              <div className="much2fa-modal-title">Sign in</div>
              <div className="much2fa-modal-sub">Enter the code we sent</div>

              {/* 6 OTP boxes matching screenshot: 4, 8, 2, 9, 1, empty */}
              <div className="much2fa-otp-row">
                <div className="much2fa-otp-box">4</div>
                <div className="much2fa-otp-box">8</div>
                <div className="much2fa-otp-box">2</div>
                <div className="much2fa-otp-box">9</div>
                <div className="much2fa-otp-box">1</div>
                <div className="much2fa-otp-box much2fa-box-last">
                  <span className="much2fa-caret much2fa-caret-hide" />
                  <span className="much2fa-digit-pop">6</span>
                </div>
              </div>
            </div>

            <div className="much2fa-pill-note">
              <span className="much2fa-dot-live" />
              SMS Delayed → WhatsApp Delivered (0.4s)
            </div>
          </div>

          {/* ============ PHASE 2: INSTANT FAILOVER VERIFIED (4.5s - 9s) ============ */}
          <div className="much2fa-step-container much2fa-step-b">
            {/* Status chip */}
            <div className="much2fa-status-chip">
              <span className="much2fa-dot-green" />
              Smart Channel Failover Active
            </div>

            {/* Connected Card */}
            <div className="much2fa-result-card">
              <div className="much2fa-result-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div style={{ flex: 1, minWidth: 0, textAlign: "left" }}>
                <div className="much2fa-result-title">Login Authenticated</div>
                <div className="much2fa-result-sub">Fallback to WhatsApp in 0.4s</div>
              </div>
            </div>

            <span className="much2fa-metric-badge">
              99.98% Conversion • Zero Drop-off
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "payment-otp",
      link: "/",
      linktext: "Payment OTP",
      title: "Payments & banking",
      detail:
        "Deliver transaction codes reliably, with failover so customers are never stuck at checkout.",
      renderVisual: () => (
        <div
          style={{
            width: "100%",
            height: "200px",
            borderRadius: "14px",
            background: "#EEF2FF",
            position: "relative",
            overflow: "hidden",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* ============ PHASE 1: SCREENSHOT PAYMENT CONFIRMATION (0s - 4.5s) ============ */}
          <div className="much2fa-step-container much2fa-step-a">
            <div className="much2fa-modal-card much2fa-modal-payment">
              <div className="much2fa-modal-title">Confirm payment ₹2,499</div>
              <div className="much2fa-modal-sub">OTP sent to your phone</div>

              {/* 6 OTP boxes matching screenshot: 4, 8, 2, 9, 1, 6 */}
              <div className="much2fa-otp-row">
                <div className="much2fa-otp-box">4</div>
                <div className="much2fa-otp-box">8</div>
                <div className="much2fa-otp-box">2</div>
                <div className="much2fa-otp-box">9</div>
                <div className="much2fa-otp-box">1</div>
                <div className="much2fa-otp-box">6</div>
              </div>

              {/* Pay now button from screenshot */}
              <button type="button" className="much2fa-pay-btn">
                Pay now
              </button>
            </div>
          </div>

          {/* ============ PHASE 2: TRANSACTION APPROVED (4.5s - 9s) ============ */}
          <div className="much2fa-step-container much2fa-step-b">
            {/* Status chip */}
            <div className="much2fa-status-chip">
              <span className="much2fa-dot-green" />
              Bank Gateway Direct Route
            </div>

            {/* Approved Card */}
            <div className="much2fa-result-card">
              <div className="much2fa-result-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div style={{ flex: 1, minWidth: 0, textAlign: "left" }}>
                <div className="much2fa-result-title">Payment Approved ₹2,499</div>
                <div className="much2fa-result-sub">OTP Verified in 0.8s SLA</div>
              </div>
            </div>

            <span className="much2fa-metric-badge much2fa-metric-green">
              Zero Cart Drop • Bank-Grade 2FA
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "account-otp",
      link: "/",
      linktext: "Account OTP",
      title: "Account security (2FA)",
      detail:
        "Add a second factor to sensitive actions and reach users on the channel they actually see.",
      renderVisual: () => (
        <div
          style={{
            width: "100%",
            height: "200px",
            borderRadius: "14px",
            background: "#EEF2FF",
            position: "relative",
            overflow: "hidden",
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* ============ PHASE 1: SCREENSHOT RESET PASSWORD (0s - 4.5s) ============ */}
          <div className="much2fa-step-container much2fa-step-a">
            <div className="much2fa-modal-card">
              <div className="much2fa-modal-title">Reset password</div>
              <div className="much2fa-modal-sub">Verify it is you</div>

              {/* 6 OTP boxes matching screenshot: empty (with typing '4'), 8, 2, 9, 1, 6 */}
              <div className="much2fa-otp-row">
                <div className="much2fa-otp-box much2fa-box-first">
                  <span className="much2fa-caret much2fa-caret-hide" />
                  <span className="much2fa-digit-pop">4</span>
                </div>
                <div className="much2fa-otp-box">8</div>
                <div className="much2fa-otp-box">2</div>
                <div className="much2fa-otp-box">9</div>
                <div className="much2fa-otp-box">1</div>
                <div className="much2fa-otp-box">6</div>
              </div>
            </div>

            <div className="much2fa-pill-note">
              <span className="much2fa-dot-live" />
              Encrypted 2FA Token Matched
            </div>
          </div>

          {/* ============ PHASE 2: ACCOUNT SECURED (4.5s - 9s) ============ */}
          <div className="much2fa-step-container much2fa-step-b">
            {/* Status chip */}
            <div className="much2fa-status-chip">
              <span className="much2fa-dot-green" />
              2FA Security Shield Verified
            </div>

            {/* Secured Card */}
            <div className="much2fa-result-card">
              <div className="much2fa-result-icon much2fa-result-icon-indigo">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              </div>
              <div style={{ flex: 1, minWidth: 0, textAlign: "left" }}>
                <div className="much2fa-result-title">Identity Confirmed</div>
                <div className="much2fa-result-sub">Protected by Multi-Factor Auth</div>
              </div>
            </div>

            <span className="much2fa-metric-badge">
              Brute-Force Protected • Real-Time Alert
            </span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className={styles["click-use-cases"]}>
      {/* Inline styles and keyframes for MuCh 2FA Use Cases animations */}
      <style>{`
        /* Scoped overrides to match screenshot styling */
        .${styles["click-use-cases"]} h2 {
          font-family: Space Grotesk, sans-serif;
          font-weight: 700;
          color: #0D1322;
        }

        .${styles["click-use-cases"]} h6 {
          font-family: Inter, sans-serif;
          color: #5F6784;
          font-weight: 400;
        }

        .${styles["click-use-cases"]} .${styles["use-cases-card"]} {
          border: 1px solid #DCE4F5;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.03);
          border-radius: 20px;
          background: #ffffff;
        }

        .${styles["click-use-cases"]} .${styles["use-cases-card"]} h3 {
          font-family: Space Grotesk, sans-serif;
          font-weight: 600;
          font-size: 32px;
          color: #5E6FF9;
          text-decoration: underline;
          text-underline-offset: 6px;
          text-decoration-thickness: 2px;
          margin-top: 24px;
        }

        .${styles["click-use-cases"]} .${styles["use-cases-card"]} h5 {
          font-family: Inter, sans-serif;
          font-weight: 600;
          font-size: 22px;
          color: #0A0E1A;
          margin-top: 14px;
        }

        .${styles["click-use-cases"]} .${styles["use-cases-card"]} p {
          font-family: Inter, sans-serif;
          font-size: 15px;
          line-height: 23px;
          color: #5F6982;
          margin-top: 10px;
        }

        /* 2-Phase video transitions */
        .much2fa-step-container {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          box-sizing: border-box;
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        @keyframes much2faCycleA {
          0%, 46% {
            opacity: 1;
            transform: scale(1) translateY(0);
            pointer-events: auto;
          }
          50%, 96% {
            opacity: 0;
            transform: scale(0.96) translateY(-8px);
            pointer-events: none;
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
            pointer-events: auto;
          }
        }

        @keyframes much2faCycleB {
          0%, 46% {
            opacity: 0;
            transform: scale(0.96) translateY(8px);
            pointer-events: none;
          }
          50%, 96% {
            opacity: 1;
            transform: scale(1) translateY(0);
            pointer-events: auto;
          }
          100% {
            opacity: 0;
            transform: scale(0.96) translateY(8px);
            pointer-events: none;
          }
        }

        .much2fa-step-a {
          animation: much2faCycleA 8.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .much2fa-step-b {
          animation: much2faCycleB 8.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        /* White Floating Modal Card matching screenshot */
        .much2fa-modal-card {
          background: #ffffff;
          border-radius: 14px;
          padding: 14px 20px;
          box-shadow: 0 8px 24px -4px rgba(79, 70, 229, 0.12), 0 2px 6px rgba(0, 0, 0, 0.04);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-sizing: border-box;
          width: 100%;
          max-width: 245px;
        }

        .much2fa-modal-payment {
          padding: 10px 18px;
        }

        .much2fa-modal-title {
          font-family: Inter, sans-serif;
          font-size: 13.5px;
          font-weight: 700;
          color: #1E293B;
          margin-bottom: 2px;
        }

        .much2fa-modal-sub {
          font-family: Inter, sans-serif;
          font-size: 10.5px;
          font-weight: 500;
          color: #64748B;
          margin-bottom: 11px;
        }

        .much2fa-modal-payment .much2fa-modal-sub {
          margin-bottom: 8px;
        }

        /* 6 OTP boxes row */
        .much2fa-otp-row {
          display: flex;
          gap: 6px;
          align-items: center;
          justify-content: center;
        }

        .much2fa-otp-box {
          width: 27px;
          height: 33px;
          border: 1.5px solid #5E6FF9;
          border-radius: 7px;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: Inter, sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #4338CA;
          box-sizing: border-box;
          position: relative;
        }

        /* Blinking cursor in waiting box */
        @keyframes much2faBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .much2fa-caret {
          display: inline-block;
          width: 1.5px;
          height: 14px;
          background-color: #5E6FF9;
          animation: much2faBlink 0.8s infinite;
        }

        /* Digit typing pop-in */
        @keyframes much2faDigitIn {
          0%, 35% {
            opacity: 0;
            transform: scale(0.3);
          }
          40%, 100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .much2fa-digit-pop {
          display: inline-block;
          animation: much2faDigitIn 8.5s ease forwards infinite;
        }

        @keyframes much2faCaretHide {
          0%, 35% {
            opacity: 1;
            display: inline-block;
          }
          40%, 100% {
            opacity: 0;
            display: none;
          }
        }

        .much2fa-caret-hide {
          animation: much2faCaretHide 8.5s ease forwards infinite;
        }

        /* Pay now button */
        @keyframes much2faPayPress {
          0%, 25% {
            transform: scale(1);
            box-shadow: 0 3px 10px rgba(79, 70, 229, 0.35);
          }
          30% {
            transform: scale(0.93);
            box-shadow: 0 1px 4px rgba(79, 70, 229, 0.2);
            background: #3730A3;
          }
          36%, 100% {
            transform: scale(1);
            box-shadow: 0 3px 10px rgba(79, 70, 229, 0.35);
          }
        }

        .much2fa-pay-btn {
          border: none;
          outline: none;
          cursor: pointer;
          background: #4F46E5;
          color: #ffffff;
          font-family: Inter, sans-serif;
          font-size: 11px;
          font-weight: 700;
          border-radius: 99px;
          padding: 5px 22px;
          margin-top: 9px;
          box-shadow: 0 3px 10px rgba(79, 70, 229, 0.35);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          animation: much2faPayPress 8.5s ease infinite;
        }

        /* Subtle pill note in Phase A */
        .much2fa-pill-note {
          background: rgba(255, 255, 255, 0.85);
          border-radius: 20px;
          padding: 3px 12px;
          font-family: Inter, sans-serif;
          font-size: 10px;
          font-weight: 600;
          color: #4F46E5;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
        }

        .much2fa-dot-live {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #4F46E5;
          animation: much2faBlink 1.2s infinite;
        }

        /* Phase B elements */
        .much2fa-status-chip {
          background: #E0E7FF;
          color: #4338CA;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          font-family: Inter, sans-serif;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .much2fa-dot-green {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10B981;
        }

        .much2fa-result-card {
          background: #ffffff;
          border-radius: 12px;
          padding: 10px 14px;
          width: 100%;
          max-width: 245px;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
          display: flex;
          align-items: center;
          gap: 10px;
          box-sizing: border-box;
        }

        .much2fa-result-icon {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #10B981;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 10px rgba(16, 185, 129, 0.35);
        }

        .much2fa-result-icon-indigo {
          background: #4F46E5;
          box-shadow: 0 4px 10px rgba(79, 70, 229, 0.35);
        }

        .much2fa-result-title {
          font-family: Inter, sans-serif;
          font-size: 12.5px;
          font-weight: 700;
          color: #1E293B;
        }

        .much2fa-result-sub {
          font-family: Inter, sans-serif;
          font-size: 10.5px;
          color: #10B981;
          font-weight: 600;
          margin-top: 1px;
        }

        .much2fa-metric-badge {
          font-family: Inter, sans-serif;
          font-size: 11px;
          color: #4F46E5;
          font-weight: 600;
          background: #E0E7FF;
          padding: 3px 12px;
          border-radius: 12px;
        }

        .much2fa-metric-green {
          color: #10B981;
          background: #DCFCE7;
        }
      `}</style>

      <h2>Use Cases</h2>
      <h6>Anywhere a one-time code protects your users, MuCh helps it arrive.</h6>
      <div className={styles["use-cases-all-cards"]}>
        {useCaseCard.map((item, index) => (
          <Link href={item.link} key={index}>
            <div className={styles["use-cases-card"]}>
              <div
                className={styles["use-case-image"]}
                style={{ width: "100%", height: "200px" }}
              >
                <div style={{ width: "100%", height: "100%" }}>
                  {item.renderVisual()}
                </div>
              </div>
              <h3>{item.linktext}</h3>
              <h5>{item.title}</h5>
              <p>{item.detail}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MuCh2FACase;
