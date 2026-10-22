"use client";
import React from "react";
import Link from "next/link";
import styles from "../../styles/ClickUseCases.module.scss";

const IVRUseCase = () => {
  const useCaseCard = [
    {
      id: "inbound",
      link: "/",
      linktext: "InboundIVR",
      title: "Smart call answering & routing",
      detail:
        "Greet callers with a custom voice menu, let them self-serve common queries, and route the rest to the right agent or department.",
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
          {/* ============ PHASE 1: IVR MENU SELECTION (0s - 4.5s) ============ */}
          <div className="ivr-step-container ivr-step-a">
            {/* Option 1: Sales */}
            <div
              style={{
                width: "100%",
                maxWidth: "230px",
                background: "#ffffff",
                borderRadius: "8px",
                padding: "7px 12px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.03)",
                boxSizing: "border-box",
              }}
            >
              <span
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  background: "#4338CA",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "11px",
                  fontWeight: 700,
                  flexShrink: 0,
                }}
              >
                1
              </span>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#1E293B",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Sales
              </span>
            </div>

            {/* Option 2: Support (Active Highlighted) */}
            <div
              className="ivrcard-item-active"
              style={{
                width: "100%",
                maxWidth: "230px",
                background: "#C7D2FE",
                borderRadius: "8px",
                padding: "7px 12px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                boxShadow: "0 3px 10px rgba(99, 102, 241, 0.22)",
                boxSizing: "border-box",
                position: "relative",
              }}
            >
              <span
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  background: "#4338CA",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "11px",
                  fontWeight: 700,
                  flexShrink: 0,
                }}
              >
                2
              </span>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#1E293B",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Support
              </span>
              <span
                className="ivrcard-active-dot"
                style={{
                  marginLeft: "auto",
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "#4338CA",
                }}
              />
            </div>

            {/* Option 3: Account balance */}
            <div
              style={{
                width: "100%",
                maxWidth: "230px",
                background: "#ffffff",
                borderRadius: "8px",
                padding: "7px 12px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.03)",
                boxSizing: "border-box",
              }}
            >
              <span
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  background: "#4338CA",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "11px",
                  fontWeight: 700,
                  flexShrink: 0,
                }}
              >
                3
              </span>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#1E293B",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Account balance
              </span>
            </div>
          </div>

          {/* ============ PHASE 2: ROUTED TO AGENT (4.5s - 9s) ============ */}
          <div className="ivr-step-container ivr-step-b">
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
              Routing Call to Agent
            </div>

            {/* Agent connection card */}
            <div
              style={{
                background: "#ffffff",
                borderRadius: "12px",
                padding: "12px 16px",
                width: "100%",
                maxWidth: "230px",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.06)",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #4F46E5, #6366F1)",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: "14px",
                  flexShrink: 0,
                }}
              >
                A
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#1E293B",
                  }}
                >
                  Support Agent
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "#10B981",
                    fontWeight: 600,
                  }}
                >
                  Connected • 00:03
                </div>
              </div>
            </div>

            {/* Mini soundwave */}
            <div
              style={{
                display: "flex",
                gap: "4px",
                alignItems: "center",
                height: "18px",
              }}
            >
              <span className="ivrcard-wave-bar ivrcard-wave-1" />
              <span className="ivrcard-wave-bar ivrcard-wave-2" />
              <span className="ivrcard-wave-bar ivrcard-wave-3" />
              <span className="ivrcard-wave-bar ivrcard-wave-4" />
              <span className="ivrcard-wave-bar ivrcard-wave-5" />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "outbound",
      link: "/",
      linktext: "OutboundIVR",
      title: "Automated voice reminders & alerts",
      detail:
        "Reach thousands of customers at once with appointment reminders, payment alerts and announcements delivered as voice calls.",
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
          {/* ============ PHASE 1: OUTBOUND DIALING (0s - 4.5s) ============ */}
          <div className="ivr-step-container ivr-step-a">
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
              <div className="ivrcard-ring ivrcard-ring-1" />
              <div className="ivrcard-ring ivrcard-ring-2" />
              <div className="ivrcard-ring ivrcard-ring-3" />

              <div className="ivrcard-phone-btn">
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

            <div className="ivrcard-badge">Payment due tomorrow</div>
          </div>

          {/* ============ PHASE 2: CALL DELIVERED & ACTION CONFIRMED (4.5s - 9s) ============ */}
          <div className="ivr-step-container ivr-step-b">
            {/* Green Connected Phone Button */}
            <div
              style={{
                width: "52px",
                height: "52px",
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

            {/* Delivered Outcome Badge */}
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
              <span>Pressed 1: Reminder Confirmed</span>
            </div>

            <span
              style={{
                fontSize: "11px",
                color: "#6B7280",
                fontWeight: 500,
              }}
            >
              Call Duration: 00:24 • Delivered
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "voicesurvey",
      link: "/",
      linktext: "VoiceSurvey",
      title: "Feedback after every call",
      detail:
        "Collect ratings and feedback with a quick keypad response at the end of a call, and track satisfaction in real time.",
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
          {/* ============ PHASE 1: SURVEY RATING (0s - 4.5s) ============ */}
          <div className="ivr-step-container ivr-step-a">
            <div
              style={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {[0, 1, 2, 3, 4].map((starIdx) => (
                <svg
                  key={starIdx}
                  className="ivrcard-star"
                  style={{ animationDelay: `${starIdx * 0.18}s` }}
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="#F59E0B"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                gap: "7px",
                alignItems: "center",
                justifyContent: "center",
                height: "44px",
              }}
            >
              <span className="ivrcard-wave-bar ivrcard-wave-1" />
              <span className="ivrcard-wave-bar ivrcard-wave-2" />
              <span className="ivrcard-wave-bar ivrcard-wave-3" />
              <span className="ivrcard-wave-bar ivrcard-wave-4" />
              <span className="ivrcard-wave-bar ivrcard-wave-5" />
            </div>
          </div>

          {/* ============ PHASE 2: SURVEY COMPLETED / CSAT SCORE (4.5s - 9s) ============ */}
          <div className="ivr-step-container ivr-step-b">
            {/* Big 5 Star Celebration Badge */}
            <div
              style={{
                background: "#FEF3C7",
                border: "1px solid #FCD34D",
                color: "#B45309",
                padding: "6px 14px",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: 700,
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span>★ 5.0 / 5.0 Rating</span>
            </div>

            {/* Success card */}
            <div
              style={{
                background: "#ffffff",
                borderRadius: "12px",
                padding: "10px 18px",
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
                  background: "#10B981",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  fontWeight: 800,
                }}
              >
                ✓
              </span>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#1E293B",
                }}
              >
                Feedback Logged in CRM
              </span>
            </div>

            <span
              style={{
                fontSize: "11px",
                color: "#6B7280",
                fontWeight: 500,
              }}
            >
              CSAT Score: 100% • Real-time Sync
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
        /* Container transitions between Step A and Step B like a playing video */
        .ivr-step-container {
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

        @keyframes ivrVideoCycleA {
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

        @keyframes ivrVideoCycleB {
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

        .ivr-step-a {
          animation: ivrVideoCycleA 8.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .ivr-step-b {
          animation: ivrVideoCycleB 8.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        @keyframes ivrPulseActive {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 3px 10px rgba(99, 102, 241, 0.22);
          }
          50% {
            transform: scale(1.02);
            box-shadow: 0 5px 16px rgba(99, 102, 241, 0.38);
          }
        }

        @keyframes ivrDotBlink {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(0.65); }
        }

        .ivrcard-item-active {
          animation: ivrPulseActive 2.8s ease-in-out infinite;
        }

        .ivrcard-active-dot {
          animation: ivrDotBlink 1.4s ease-in-out infinite;
        }

        @keyframes ivrRingPulse {
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

        @keyframes ivrPhoneShake {
          0%, 100% { transform: rotate(0deg); }
          10% { transform: rotate(-12deg); }
          20% { transform: rotate(12deg); }
          30% { transform: rotate(-8deg); }
          40% { transform: rotate(8deg); }
          50%, 90% { transform: rotate(0deg); }
        }

        @keyframes ivrFloatBadge {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        .ivrcard-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          border-radius: 50%;
          border: 1.5px solid rgba(79, 70, 229, 0.35);
          pointer-events: none;
          transform: translate(-50%, -50%);
        }

        .ivrcard-ring-1 {
          width: 70px;
          height: 70px;
          animation: ivrRingPulse 2.4s ease-out infinite;
        }

        .ivrcard-ring-2 {
          width: 105px;
          height: 105px;
          animation: ivrRingPulse 2.4s ease-out infinite 0.8s;
        }

        .ivrcard-ring-3 {
          width: 140px;
          height: 140px;
          animation: ivrRingPulse 2.4s ease-out infinite 1.6s;
        }

        .ivrcard-phone-btn {
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
          animation: ivrPhoneShake 3s ease-in-out infinite;
        }

        .ivrcard-badge {
          background: #ffffff;
          border-radius: 20px;
          padding: 6px 16px;
          margin-top: 6px;
          font-size: 12.5px;
          font-weight: 600;
          color: #1E293B;
          font-family: Inter, sans-serif;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          position: relative;
          z-index: 2;
          animation: ivrFloatBadge 3s ease-in-out infinite;
        }

        @keyframes ivrStarGlow {
          0%, 100% {
            transform: scale(1);
            filter: drop-shadow(0 0 0 rgba(245, 158, 11, 0));
          }
          50% {
            transform: scale(1.15);
            filter: drop-shadow(0 2px 6px rgba(245, 158, 11, 0.6));
          }
        }

        .ivrcard-star {
          animation: ivrStarGlow 2.4s ease-in-out infinite;
        }

        @keyframes ivrWaveMotion {
          0%, 100% {
            transform: scaleY(0.35);
          }
          50% {
            transform: scaleY(1.15);
          }
        }

        .ivrcard-wave-bar {
          width: 6px;
          background: #4F46E5;
          border-radius: 99px;
          display: inline-block;
          transform-origin: center;
        }

        .ivrcard-wave-1 {
          height: 18px;
          animation: ivrWaveMotion 1.2s ease-in-out infinite 0.1s;
        }

        .ivrcard-wave-2 {
          height: 30px;
          animation: ivrWaveMotion 1.2s ease-in-out infinite 0.35s;
        }

        .ivrcard-wave-3 {
          height: 40px;
          animation: ivrWaveMotion 1.2s ease-in-out infinite 0s;
        }

        .ivrcard-wave-4 {
          height: 30px;
          animation: ivrWaveMotion 1.2s ease-in-out infinite 0.45s;
        }

        .ivrcard-wave-5 {
          height: 18px;
          animation: ivrWaveMotion 1.2s ease-in-out infinite 0.2s;
        }
      `}</style>

      <h2>Use Cases</h2>
      <h6>From the first ring to the last survey question, IVR works across the customer journey.</h6>
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

export default IVRUseCase;
