"use client";
import React from "react";
import Link from "next/link";
import styles from "../../styles/ClickUseCases.module.scss";

const MaskingUseCase = () => {
  const useCaseCard = [
    {
      id: "ridemask",
      link: "/",
      linktext: "RideMask",
      title: "Ride-hailing & delivery",
      detail:
        "Let riders and customers coordinate pickups and drop-offs by call without exchanging personal phone numbers.",
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
          }}
        >
          {/* ============ PHASE 1: SCREENSHOT MASKED PROXY NUMBERS (0s - 4.5s) ============ */}
          <div className="masking-step-container masking-step-a">
            {/* Row 1: Customer */}
            <div
              style={{
                width: "100%",
                maxWidth: "235px",
                background: "#ffffff",
                borderRadius: "8px",
                padding: "7px 12px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.03)",
                boxSizing: "border-box",
              }}
            >
              <span
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  background: "#4F46E5",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "11px",
                  fontWeight: 700,
                  flexShrink: 0,
                }}
              >
                C
              </span>
              <span
                style={{
                  fontSize: "12.5px",
                  fontWeight: 600,
                  color: "#1E293B",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Customer ⇄ 180***7712
              </span>
            </div>

            {/* Row 2: Rider / Driver (Active Blue Pill) */}
            <div
              className="masking-row-active"
              style={{
                width: "100%",
                maxWidth: "235px",
                background: "#5E6FF9",
                color: "#ffffff",
                borderRadius: "8px",
                padding: "7px 12px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 3px 12px rgba(94, 111, 249, 0.35)",
                boxSizing: "border-box",
              }}
            >
              <span
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.25)",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "11px",
                  fontWeight: 700,
                  flexShrink: 0,
                }}
              >
                R
              </span>
              <span
                style={{
                  fontSize: "12.5px",
                  fontWeight: 600,
                  color: "#ffffff",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Rider ⇄ 180***7712
              </span>
            </div>

            {/* Row 3: Real numbers hidden */}
            <div
              style={{
                width: "100%",
                maxWidth: "235px",
                background: "#ffffff",
                borderRadius: "8px",
                padding: "7px 12px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.03)",
                boxSizing: "border-box",
              }}
            >
              <span
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  background: "#4F46E5",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  fontWeight: 800,
                  flexShrink: 0,
                }}
              >
                ✓
              </span>
              <span
                style={{
                  fontSize: "12.5px",
                  fontWeight: 600,
                  color: "#1E293B",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Real numbers hidden
              </span>
            </div>
          </div>

          {/* ============ PHASE 2: CONNECTED RIDE CALL (4.5s - 9s) ============ */}
          <div className="masking-step-container masking-step-b">
            {/* Status chip */}
            <div
              style={{
                background: "#E0E7FF",
                color: "#4338CA",
                padding: "4px 12px",
                borderRadius: "20px",
                fontSize: "11px",
                fontWeight: 700,
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
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
              Private Proxy Call Active
            </div>

            {/* Call connected card */}
            <div
              style={{
                background: "#ffffff",
                borderRadius: "12px",
                padding: "12px 16px",
                width: "100%",
                maxWidth: "235px",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.06)",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "#10B981",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.6c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.3 1.1l-2.3 2.2Z" />
                </svg>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#1E293B",
                  }}
                >
                  Rider Coordinate Call
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "#10B981",
                    fontWeight: 600,
                  }}
                >
                  00:15 • Identity 100% Safe
                </div>
              </div>
            </div>

            {/* Audio wave */}
            <div
              style={{
                display: "flex",
                gap: "4px",
                alignItems: "center",
                height: "16px",
              }}
            >
              <span className="masking-wave-bar masking-wave-1" />
              <span className="masking-wave-bar masking-wave-2" />
              <span className="masking-wave-bar masking-wave-3" />
              <span className="masking-wave-bar masking-wave-4" />
              <span className="masking-wave-bar masking-wave-5" />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "marketmask",
      link: "/",
      linktext: "MarketMask",
      title: "E-commerce & marketplaces",
      detail:
        "Connect buyers and sellers for order queries while keeping every transaction and relationship on your platform.",
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
          }}
        >
          {/* ============ PHASE 1: SCREENSHOT BUYER/SELLER RINGING (0s - 4.5s) ============ */}
          <div className="masking-step-container masking-step-a">
            {/* Phone button with concentric rings */}
            <div
              style={{
                position: "relative",
                width: "88px",
                height: "88px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="masking-ring masking-ring-1" />
              <div className="masking-ring masking-ring-2" />
              <div className="masking-ring masking-ring-3" />

              <div className="masking-phone-btn">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ color: "#ffffff" }}
                >
                  <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.6c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.3 1.1l-2.3 2.2Z" />
                </svg>
              </div>
            </div>

            {/* Buyer ⇄ Seller / *******210 badge */}
            <div
              style={{
                background: "#ffffff",
                borderRadius: "14px",
                padding: "6px 18px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                lineHeight: "1.35",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#1E293B",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Buyer ⇄ Seller
              </span>
              <span
                style={{
                  fontSize: "11.5px",
                  fontWeight: 700,
                  color: "#4F46E5",
                  letterSpacing: "0.5px",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                *******210
              </span>
            </div>
          </div>

          {/* ============ PHASE 2: CALL CONNECTED ON PLATFORM (4.5s - 9s) ============ */}
          <div className="masking-step-container masking-step-b">
            {/* Green Connected Phone Button */}
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                background: "#10B981",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 22px rgba(16, 185, 129, 0.4)",
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            <div
              style={{
                background: "#ffffff",
                borderRadius: "20px",
                padding: "8px 18px",
                fontSize: "12.5px",
                fontWeight: 700,
                color: "#1E293B",
                fontFamily: "Inter, sans-serif",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.08)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span style={{ color: "#10B981", fontSize: "14px" }}>✓</span>
              <span>Platform Transaction Safe</span>
            </div>

            <span
              style={{
                fontSize: "11px",
                color: "#10B981",
                fontWeight: 600,
                background: "#DCFCE7",
                padding: "2px 10px",
                borderRadius: "12px",
              }}
            >
              Zero Platform Leakage • Logged
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "servicemask",
      link: "/",
      linktext: "ServiceMask",
      title: "Healthcare, real estate & services",
      detail:
        "Connect patients, tenants and service customers with professionals securely, with recordings and logs for every call.",
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
          }}
        >
          {/* ============ PHASE 1: SCREENSHOT SECURITY LOCK (0s - 4.5s) ============ */}
          <div className="masking-step-container masking-step-a">
            {/* Padlock button with security concentric rings */}
            <div
              style={{
                position: "relative",
                width: "88px",
                height: "88px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="masking-ring masking-ring-1" />
              <div className="masking-ring masking-ring-2" />
              <div className="masking-ring masking-ring-3" />

              <div className="masking-lock-btn">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
            </div>

            {/* Pill: Call Recorded and Protected */}
            <div
              style={{
                background: "#ffffff",
                borderRadius: "20px",
                padding: "7px 18px",
                fontSize: "12px",
                fontWeight: 600,
                color: "#1E293B",
                fontFamily: "Inter, sans-serif",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06)",
                position: "relative",
                zIndex: 2,
              }}
            >
              Call Recorded and Protected
            </div>
          </div>

          {/* ============ PHASE 2: COMPLIANT RECORDED SESSION (4.5s - 9s) ============ */}
          <div className="masking-step-container masking-step-b">
            {/* Encrypted Recording Chip */}
            <div
              style={{
                background: "#FEF2F2",
                border: "1px solid #FECACA",
                color: "#DC2626",
                padding: "5px 12px",
                borderRadius: "20px",
                fontSize: "11px",
                fontWeight: 700,
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "#DC2626",
                }}
                className="masking-rec-dot"
              />
              Recording & Encrypted (HIPAA)
            </div>

            {/* Compliance details card */}
            <div
              style={{
                background: "#ffffff",
                borderRadius: "12px",
                padding: "10px 16px",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.08)",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span
                style={{
                  width: "22px",
                  height: "22px",
                  borderRadius: "50%",
                  background: "#4F46E5",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  fontWeight: 800,
                }}
              >
                🔒
              </span>
              <span
                style={{
                  fontSize: "12.5px",
                  fontWeight: 700,
                  color: "#1E293B",
                }}
              >
                Patient ⇄ Professional Protected
              </span>
            </div>

            <span
              style={{
                fontSize: "11px",
                color: "#6B7280",
                fontWeight: 500,
              }}
            >
              Tamper-proof Call Logs Stored ✓
            </span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className={styles["click-use-cases"]}>
      {/* Inline animation keyframes and styles so no css file changes are needed */}
      <style>{`
        /* Transitions between Step A and Step B like a playing video */
        .masking-step-container {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 12px;
          padding: 16px 20px;
          box-sizing: border-box;
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        @keyframes maskingVideoCycleA {
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

        @keyframes maskingVideoCycleB {
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

        .masking-step-a {
          animation: maskingVideoCycleA 8.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .masking-step-b {
          animation: maskingVideoCycleB 8.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        @keyframes maskingPulseActive {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 3px 12px rgba(94, 111, 249, 0.35);
          }
          50% {
            transform: scale(1.02);
            box-shadow: 0 6px 18px rgba(94, 111, 249, 0.55);
          }
        }

        .masking-row-active {
          animation: maskingPulseActive 2.8s ease-in-out infinite;
        }

        @keyframes maskingRingPulse {
          0% {
            transform: translate(-50%, -50%) scale(0.7);
            opacity: 0.85;
          }
          60% {
            opacity: 0.35;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.65);
            opacity: 0;
          }
        }

        .masking-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          border-radius: 50%;
          border: 1.5px solid rgba(79, 70, 229, 0.35);
          pointer-events: none;
          transform: translate(-50%, -50%);
        }

        .masking-ring-1 {
          width: 70px;
          height: 70px;
          animation: maskingRingPulse 2.4s ease-out infinite;
        }

        .masking-ring-2 {
          width: 105px;
          height: 105px;
          animation: maskingRingPulse 2.4s ease-out infinite 0.8s;
        }

        .masking-ring-3 {
          width: 140px;
          height: 140px;
          animation: maskingRingPulse 2.4s ease-out infinite 1.6s;
        }

        @keyframes maskingPhoneShake {
          0%, 100% { transform: rotate(0deg); }
          10% { transform: rotate(-12deg); }
          20% { transform: rotate(12deg); }
          30% { transform: rotate(-8deg); }
          40% { transform: rotate(8deg); }
          50%, 90% { transform: rotate(0deg); }
        }

        .masking-phone-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #4F46E5;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 22px rgba(79, 70, 229, 0.4);
          position: relative;
          z-index: 2;
          animation: maskingPhoneShake 3s ease-in-out infinite;
        }

        @keyframes maskingLockPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 8px 22px rgba(79, 70, 229, 0.4);
          }
          50% {
            transform: scale(1.06);
            box-shadow: 0 10px 28px rgba(79, 70, 229, 0.6);
          }
        }

        .masking-lock-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #4F46E5;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 22px rgba(79, 70, 229, 0.4);
          position: relative;
          z-index: 2;
          animation: maskingLockPulse 2.6s ease-in-out infinite;
        }

        @keyframes maskingRecBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.2; }
        }

        .masking-rec-dot {
          animation: maskingRecBlink 1.2s infinite;
        }

        @keyframes maskingWaveMotion {
          0%, 100% {
            transform: scaleY(0.35);
          }
          50% {
            transform: scaleY(1.15);
          }
        }

        .masking-wave-bar {
          width: 5px;
          background: #10B981;
          border-radius: 99px;
          display: inline-block;
          transform-origin: center;
        }

        .masking-wave-1 {
          height: 14px;
          animation: maskingWaveMotion 1.2s ease-in-out infinite 0.1s;
        }

        .masking-wave-2 {
          height: 22px;
          animation: maskingWaveMotion 1.2s ease-in-out infinite 0.35s;
        }

        .masking-wave-3 {
          height: 30px;
          animation: maskingWaveMotion 1.2s ease-in-out infinite 0s;
        }

        .masking-wave-4 {
          height: 22px;
          animation: maskingWaveMotion 1.2s ease-in-out infinite 0.45s;
        }

        .masking-wave-5 {
          height: 14px;
          animation: maskingWaveMotion 1.2s ease-in-out infinite 0.2s;
        }
      `}</style>

      <h2>Use Cases</h2>
      <h6>Wherever two parties need to talk but should not share personal numbers, masking keeps the conversation safe.</h6>
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

export default MaskingUseCase;
