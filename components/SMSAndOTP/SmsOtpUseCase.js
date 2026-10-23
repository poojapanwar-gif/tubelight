"use client";
import React from "react";
import Link from "next/link";
import styles from "../../styles/ClickUseCases.module.scss";

const SmsOtpUseCase = () => {
  const useCaseCard = [
    {
      id: "otpverify",
      link: "/",
      linktext: "OTPVerify",
      title: "Login & transaction verification",
      detail:
        "Verify users at sign-up, login and payment with secure one-time passwords delivered in seconds.",
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
          {/* ============ PHASE 1: OTP INPUT BOXES FILLING (0s - 4.5s) ============ */}
          <div className="sms-step-container sms-step-a">
            {/* Top SMS Notification Banner */}
            <div
              style={{
                background: "#ffffff",
                borderRadius: "20px",
                padding: "4px 14px",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "11px",
                fontWeight: 600,
                color: "#4F46E5",
                boxShadow: "0 2px 8px rgba(94, 111, 249, 0.08)",
                marginBottom: "8px",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#10B981",
                }}
              />
              SMS: Your Code is 121111
            </div>

            {/* 6 Digit OTP Boxes (Exact match to image) */}
            <div
              style={{
                display: "flex",
                gap: "7px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {["1", "2", "1", "1", "1", "1"].map((digit, i) => (
                <div
                  key={i}
                  className={`sms-otp-box sms-otp-${i + 1}`}
                  style={{
                    width: "32px",
                    height: "38px",
                    background: "#ffffff",
                    border: "1.5px solid #5E6FF9",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#5E6FF9",
                    boxShadow: "0 2px 6px rgba(94, 111, 249, 0.12)",
                    fontFamily: "Space Grotesk, sans-serif",
                  }}
                >
                  <span className={`sms-digit sms-digit-${i + 1}`}>{digit}</span>
                </div>
              ))}
            </div>

            {/* Subtitle timer */}
            <div
              style={{
                fontSize: "10.5px",
                color: "#64748B",
                marginTop: "10px",
                fontWeight: 500,
              }}
            >
              Auto-reading OTP • Valid for 10:00
            </div>
          </div>

          {/* ============ PHASE 2: INSTANT VERIFICATION SUCCESS (4.5s - 9s) ============ */}
          <div className="sms-step-container sms-step-b">
            {/* Green Success Badge */}
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "#10B981",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 24px rgba(16, 185, 129, 0.35)",
                color: "#ffffff",
                fontSize: "22px",
                fontWeight: 700,
              }}
            >
              ✓
            </div>

            <div
              style={{
                background: "#ffffff",
                borderRadius: "14px",
                padding: "8px 18px",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.06)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#0F172A",
                }}
              >
                Verification Successful
              </span>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#10B981",
                  marginTop: "2px",
                }}
              >
                Delivered in 0.6s • 99.99% Success
              </span>
            </div>

            <span
              style={{
                fontSize: "10.5px",
                color: "#4F46E5",
                background: "#E0E7FF",
                padding: "3px 10px",
                borderRadius: "12px",
                fontWeight: 600,
              }}
            >
              Bank-Grade 2FA Security
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "bulksms",
      link: "/",
      linktext: "BulkSMS",
      title: "Promotions, alerts & reminders",
      detail:
        "Announce offers, send payment reminders and share order updates with thousands of customers at once.",
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
          {/* ============ PHASE 1: BROADCAST RADAR & SMS ICON (0s - 4.5s) ============ */}
          <div className="sms-step-container sms-step-a">
            {/* Concentric Broadcasting Radar Rings */}
            <div
              style={{
                position: "relative",
                width: "90px",
                height: "90px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="sms-radar-ring sms-ring-1" />
              <div className="sms-radar-ring sms-ring-2" />
              <div className="sms-radar-ring sms-ring-3" />

              {/* Center Blue Speech Bubble Button */}
              <div
                className="sms-center-btn"
                style={{
                  width: "54px",
                  height: "54px",
                  borderRadius: "50%",
                  background: "#5E6FF9",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 24px rgba(94, 111, 249, 0.4)",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                {/* Speech Bubble Icon with 3 dots */}
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4 17.17V4H20V16Z"
                    fill="#ffffff"
                  />
                  <circle cx="8" cy="10" r="1.5" fill="#ffffff" />
                  <circle cx="12" cy="10" r="1.5" fill="#ffffff" />
                  <circle cx="16" cy="10" r="1.5" fill="#ffffff" />
                </svg>
              </div>

              {/* Top-Right "SMS" Pill Badge */}
              <span
                style={{
                  position: "absolute",
                  top: "2px",
                  right: "-10px",
                  background: "#ffffff",
                  color: "#5E6FF9",
                  borderRadius: "10px",
                  padding: "2px 7px",
                  fontSize: "9px",
                  fontWeight: 700,
                  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.08)",
                  border: "1px solid rgba(94, 111, 249, 0.2)",
                  zIndex: 5,
                }}
              >
                SMS
              </span>
            </div>

            {/* Sub-label */}
            <div
              style={{
                background: "#ffffff",
                borderRadius: "14px",
                padding: "5px 16px",
                fontSize: "11.5px",
                fontWeight: 600,
                color: "#4F46E5",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
                marginTop: "6px",
              }}
            >
              Broadcasting to 50,000+ Customers...
            </div>
          </div>

          {/* ============ PHASE 2: DELIVERED STATS (4.5s - 9s) ============ */}
          <div className="sms-step-container sms-step-b">
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "#5E6FF9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 24px rgba(94, 111, 249, 0.35)",
                color: "#ffffff",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </div>

            <div
              style={{
                background: "#ffffff",
                borderRadius: "12px",
                padding: "10px 18px",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.06)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#0F172A",
                }}
              >
                Campaign Delivered
              </span>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#10B981",
                  marginTop: "2px",
                }}
              >
                ⚡ 98.4% Open Rate • Tier-1 Telecom Routes
              </span>
            </div>

            <span
              style={{
                fontSize: "10.5px",
                color: "#10B981",
                background: "#DCFCE7",
                padding: "3px 12px",
                borderRadius: "12px",
                fontWeight: 600,
              }}
            >
              DND Filtered & DLT Compliant
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "twowaysms",
      link: "/",
      linktext: "TwoWaySMS",
      title: "Conversations & feedback",
      detail:
        "Let customers reply with keywords to opt in, book, claim offers or share feedback, and track every response.",
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
          {/* ============ PHASE 1: CHAT CONVERSATION (0s - 4.5s) ============ */}
          <div className="sms-step-container sms-step-a" style={{ padding: "16px 20px" }}>
            {/* Incoming Promotional SMS Bubble (Exact match to image) */}
            <div
              className="sms-bubble-incoming"
              style={{
                alignSelf: "flex-start",
                width: "82%",
                background: "#ffffff",
                borderRadius: "12px 12px 12px 4px",
                padding: "10px 14px",
                boxShadow: "0 3px 10px rgba(0, 0, 0, 0.04)",
                color: "#0F172A",
                fontSize: "11.5px",
                fontWeight: 700,
                lineHeight: "1.35",
                fontFamily: "Inter, sans-serif",
                position: "relative",
              }}
            >
              Flat 20% off today! Reply YES to claim
            </div>

            {/* Outgoing Reply Bubble (Exact match to image) */}
            <div
              className="sms-bubble-reply"
              style={{
                alignSelf: "flex-end",
                background: "#5E6FF9",
                color: "#ffffff",
                borderRadius: "12px 12px 4px 12px",
                padding: "6px 16px",
                fontSize: "12px",
                fontWeight: 600,
                boxShadow: "0 4px 12px rgba(94, 111, 249, 0.35)",
                fontFamily: "Inter, sans-serif",
                marginTop: "10px",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <span>Yes</span>
              <span style={{ fontSize: "10px", opacity: 0.9 }}>✓✓</span>
            </div>
          </div>

          {/* ============ PHASE 2: INSTANT COUPON REWARD (4.5s - 9s) ============ */}
          <div className="sms-step-container sms-step-b" style={{ padding: "16px 20px" }}>
            {/* Verified Automated Response */}
            <div
              style={{
                alignSelf: "flex-start",
                width: "90%",
                background: "#ffffff",
                borderRadius: "12px 12px 12px 4px",
                padding: "10px 14px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                color: "#0F172A",
                fontSize: "11px",
                lineHeight: "1.35",
              }}
            >
              <div
                style={{
                  color: "#10B981",
                  fontWeight: 700,
                  fontSize: "10px",
                  marginBottom: "3px",
                }}
              >
                ⚡ Instant Auto-Reply
              </div>
              🎉 Your coupon code <strong>FLAT20</strong> is active! Applied to your cart.
            </div>

            {/* Status chip */}
            <div
              style={{
                marginTop: "10px",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "#E0E7FF",
                color: "#4338CA",
                padding: "4px 12px",
                borderRadius: "20px",
                fontSize: "10.5px",
                fontWeight: 700,
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#10B981",
                }}
              />
              2-Way Interactive Keyword Engine
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className={styles["click-use-cases"]}>
      {/* Inline animation keyframes for 100% self-contained video demo */}
      <style>{`
        /* Step Container Transitions (0s-4.5s and 4.5s-9s) */
        .sms-step-container {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        @keyframes smsVideoCycleA {
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

        @keyframes smsVideoCycleB {
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

        .sms-step-a {
          animation: smsVideoCycleA 9s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .sms-step-b {
          animation: smsVideoCycleB 9s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        /* OTP Staggered Digits Pop-in Animation */
        @keyframes digitPop {
          0%, 15% {
            opacity: 0;
            transform: scale(0.4) translateY(6px);
          }
          25%, 100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .sms-digit-1 { animation: digitPop 9s infinite 0.1s; }
        .sms-digit-2 { animation: digitPop 9s infinite 0.35s; }
        .sms-digit-3 { animation: digitPop 9s infinite 0.6s; }
        .sms-digit-4 { animation: digitPop 9s infinite 0.85s; }
        .sms-digit-5 { animation: digitPop 9s infinite 1.1s; }
        .sms-digit-6 { animation: digitPop 9s infinite 1.35s; }

        @keyframes boxGlow {
          0%, 35% {
            border-color: #5E6FF9;
            box-shadow: 0 2px 6px rgba(94, 111, 249, 0.12);
          }
          40%, 46% {
            border-color: #10B981;
            box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
          }
          50%, 100% {
            border-color: #5E6FF9;
          }
        }

        .sms-otp-box {
          animation: boxGlow 9s infinite;
        }

        /* Bulk SMS Radar Rings Pulse */
        @keyframes radarExpand {
          0% {
            transform: translate(-50%, -50%) scale(0.6);
            opacity: 0.85;
          }
          60% {
            opacity: 0.35;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.6);
            opacity: 0;
          }
        }

        .sms-radar-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          border-radius: 50%;
          border: 1.5px solid rgba(94, 111, 249, 0.35);
          pointer-events: none;
          transform: translate(-50%, -50%);
        }

        .sms-ring-1 {
          width: 65px;
          height: 65px;
          animation: radarExpand 2.2s ease-out infinite;
        }

        .sms-ring-2 {
          width: 95px;
          height: 95px;
          animation: radarExpand 2.2s ease-out infinite 0.7s;
        }

        .sms-ring-3 {
          width: 125px;
          height: 125px;
          animation: radarExpand 2.2s ease-out infinite 1.4s;
        }

        @keyframes centerBtnPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 8px 24px rgba(94, 111, 249, 0.4);
          }
          50% {
            transform: scale(1.06);
            box-shadow: 0 12px 28px rgba(94, 111, 249, 0.6);
          }
        }

        .sms-center-btn {
          animation: centerBtnPulse 2.2s ease-in-out infinite;
        }

        /* Two Way SMS Chat Bubbles Entry */
        @keyframes bubbleDrop {
          0% {
            opacity: 0;
            transform: translateY(-10px) scale(0.96);
          }
          15%, 100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .sms-bubble-incoming {
          animation: bubbleDrop 9s ease-out infinite;
        }

        @keyframes replySlide {
          0%, 20% {
            opacity: 0;
            transform: translateY(10px) scale(0.9);
          }
          30%, 100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .sms-bubble-reply {
          animation: replySlide 9s cubic-bezier(0.34, 1.3, 0.64, 1) infinite;
        }
      `}</style>

      <h2>Use Cases</h2>
      <h6>From logins to launch offers, SMS reaches customers on the device they always have with them.</h6>
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

export default SmsOtpUseCase;
