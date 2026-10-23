"use client";
import React from "react";
import Link from "next/link";
import styles from "../../styles/ClickUseCases.module.scss";

const WebRTCUseCase = () => {
  const useCaseCard = [
    {
      id: "webcall",
      link: "/",
      linktext: "WebCall",
      title: "Websites & landing pages",
      detail:
        "Turn visitors into conversations with a call button that connects them to your team in one click.",
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
          {/* ============ PHASE 1: SCREENSHOT 3 OPTIONS (0s - 4.5s) ============ */}
          <div className="webrtc-step-container webrtc-step-a">
            {/* Row 1: Website visitor · Call us */}
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
                1
              </span>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#1E293B",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Website visitor · Call us
              </span>
            </div>

            {/* Row 2: Landing page · Call now (Active Blue Pill) */}
            <div
              className="webrtc-row-active"
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
                2
              </span>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#ffffff",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Landing page · Call now
              </span>
            </div>

            {/* Row 3: Product page · Talk to sales */}
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
                3
              </span>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#1E293B",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Product page · Talk to sales
              </span>
            </div>
          </div>

          {/* ============ PHASE 2: BROWSER CALL CONNECTED (4.5s - 9s) ============ */}
          <div className="webrtc-step-container webrtc-step-b">
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
              WebRTC Direct Browser Call
            </div>

            {/* Connected Rep card */}
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
                  Sales Specialist
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "#10B981",
                    fontWeight: 600,
                  }}
                >
                  Connected in 0.4s • Zero Plugins
                </div>
              </div>
            </div>

            {/* Live audio wave */}
            <div
              style={{
                display: "flex",
                gap: "4px",
                alignItems: "center",
                height: "16px",
              }}
            >
              <span className="webrtc-wave-bar webrtc-wave-1" />
              <span className="webrtc-wave-bar webrtc-wave-2" />
              <span className="webrtc-wave-bar webrtc-wave-3" />
              <span className="webrtc-wave-bar webrtc-wave-4" />
              <span className="webrtc-wave-bar webrtc-wave-5" />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "crmcall",
      link: "/",
      linktext: "CRMCall",
      title: "Agent desktop & CRM",
      detail:
        "Give agents a softphone inside your CRM so they can call leads and customers without switching tools.",
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
          {/* ============ PHASE 1: SCREENSHOT SOFTPHONE DIALING (0s - 4.5s) ============ */}
          <div className="webrtc-step-container webrtc-step-a">
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
              <div className="webrtc-ring webrtc-ring-1" />
              <div className="webrtc-ring webrtc-ring-2" />
              <div className="webrtc-ring webrtc-ring-3" />

              <div className="webrtc-phone-btn">
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

            {/* Agent softphone / Calling from CRM... badge */}
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
                Agent softphone
              </span>
              <span
                style={{
                  fontSize: "11.5px",
                  fontWeight: 600,
                  color: "#4F46E5",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Calling from CRM...
              </span>
            </div>
          </div>

          {/* ============ PHASE 2: SOFTPHONE CALL ACTIVE (4.5s - 9s) ============ */}
          <div className="webrtc-step-container webrtc-step-b">
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
              <span>CRM Softphone Active • 00:28</span>
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
              Salesforce & HubSpot Auto-Synced
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "supportcall",
      link: "/",
      linktext: "SupportCall",
      title: "In-app customer support",
      detail:
        "Let customers speak to support from inside your app or portal, with context and call history attached.",
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
          {/* ============ PHASE 1: SCREENSHOT EQUALIZER WAVEFORM (0s - 4.5s) ============ */}
          <div className="webrtc-step-container webrtc-step-a">
            {/* Multi-bar prominent soundwave from screenshot */}
            <div
              style={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
                justifyContent: "center",
                height: "80px",
              }}
            >
              <span className="webrtc-prominent-bar webrtc-pwave-1" />
              <span className="webrtc-prominent-bar webrtc-pwave-2" />
              <span className="webrtc-prominent-bar webrtc-pwave-3" />
              <span className="webrtc-prominent-bar webrtc-pwave-4" />
              <span className="webrtc-prominent-bar webrtc-pwave-5" />
              <span className="webrtc-prominent-bar webrtc-pwave-6" />
              <span className="webrtc-prominent-bar webrtc-pwave-7" />
            </div>

            <div
              style={{
                background: "#ffffff",
                borderRadius: "20px",
                padding: "6px 16px",
                fontSize: "12px",
                fontWeight: 600,
                color: "#4F46E5",
                fontFamily: "Inter, sans-serif",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
              }}
            >
              Real-time In-App Audio
            </div>
          </div>

          {/* ============ PHASE 2: CONTEXT & HISTORY ATTACHED (4.5s - 9s) ============ */}
          <div className="webrtc-step-container webrtc-step-b">
            {/* Context chip */}
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
              In-App Context Attached
            </div>

            {/* Support session card */}
            <div
              style={{
                background: "#ffffff",
                borderRadius: "12px",
                padding: "10px 16px",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.08)",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                width: "100%",
                maxWidth: "235px",
                boxSizing: "border-box",
              }}
            >
              <span
                style={{
                  width: "24px",
                  height: "24px",
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
                🎧
              </span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontSize: "12.5px",
                    fontWeight: 700,
                    color: "#1E293B",
                  }}
                >
                  Support Ticket #4912
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "#64748B",
                  }}
                >
                  Call History & Plan Attached
                </div>
              </div>
            </div>

            <span
              style={{
                fontSize: "11px",
                color: "#10B981",
                fontWeight: 600,
              }}
            >
              HD Opus Codec • Ultra Low Latency
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
        .webrtc-step-container {
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

        @keyframes webrtcVideoCycleA {
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

        @keyframes webrtcVideoCycleB {
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

        .webrtc-step-a {
          animation: webrtcVideoCycleA 8.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .webrtc-step-b {
          animation: webrtcVideoCycleB 8.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        @keyframes webrtcPulseActive {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 3px 12px rgba(94, 111, 249, 0.35);
          }
          50% {
            transform: scale(1.02);
            box-shadow: 0 6px 18px rgba(94, 111, 249, 0.55);
          }
        }

        .webrtc-row-active {
          animation: webrtcPulseActive 2.8s ease-in-out infinite;
        }

        @keyframes webrtcRingPulse {
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

        .webrtc-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          border-radius: 50%;
          border: 1.5px solid rgba(79, 70, 229, 0.35);
          pointer-events: none;
          transform: translate(-50%, -50%);
        }

        .webrtc-ring-1 {
          width: 70px;
          height: 70px;
          animation: webrtcRingPulse 2.4s ease-out infinite;
        }

        .webrtc-ring-2 {
          width: 105px;
          height: 105px;
          animation: webrtcRingPulse 2.4s ease-out infinite 0.8s;
        }

        .webrtc-ring-3 {
          width: 140px;
          height: 140px;
          animation: webrtcRingPulse 2.4s ease-out infinite 1.6s;
        }

        @keyframes webrtcPhoneShake {
          0%, 100% { transform: rotate(0deg); }
          10% { transform: rotate(-12deg); }
          20% { transform: rotate(12deg); }
          30% { transform: rotate(-8deg); }
          40% { transform: rotate(8deg); }
          50%, 90% { transform: rotate(0deg); }
        }

        .webrtc-phone-btn {
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
          animation: webrtcPhoneShake 3s ease-in-out infinite;
        }

        @keyframes webrtcProminentWave {
          0%, 100% {
            transform: scaleY(0.4);
          }
          50% {
            transform: scaleY(1.2);
          }
        }

        .webrtc-prominent-bar {
          width: 7px;
          background: #5E6FF9;
          border-radius: 99px;
          display: inline-block;
          transform-origin: center;
        }

        .webrtc-pwave-1 {
          height: 28px;
          animation: webrtcProminentWave 1.3s ease-in-out infinite 0.1s;
        }

        .webrtc-pwave-2 {
          height: 48px;
          animation: webrtcProminentWave 1.3s ease-in-out infinite 0.35s;
        }

        .webrtc-pwave-3 {
          height: 60px;
          animation: webrtcProminentWave 1.3s ease-in-out infinite 0s;
        }

        .webrtc-pwave-4 {
          height: 38px;
          animation: webrtcProminentWave 1.3s ease-in-out infinite 0.5s;
        }

        .webrtc-pwave-5 {
          height: 62px;
          animation: webrtcProminentWave 1.3s ease-in-out infinite 0.15s;
        }

        .webrtc-pwave-6 {
          height: 44px;
          animation: webrtcProminentWave 1.3s ease-in-out infinite 0.4s;
        }

        .webrtc-pwave-7 {
          height: 26px;
          animation: webrtcProminentWave 1.3s ease-in-out infinite 0.25s;
        }

        @keyframes webrtcWaveMotion {
          0%, 100% {
            transform: scaleY(0.35);
          }
          50% {
            transform: scaleY(1.15);
          }
        }

        .webrtc-wave-bar {
          width: 5px;
          background: #10B981;
          border-radius: 99px;
          display: inline-block;
          transform-origin: center;
        }

        .webrtc-wave-1 {
          height: 14px;
          animation: webrtcWaveMotion 1.2s ease-in-out infinite 0.1s;
        }

        .webrtc-wave-2 {
          height: 22px;
          animation: webrtcWaveMotion 1.2s ease-in-out infinite 0.35s;
        }

        .webrtc-wave-3 {
          height: 30px;
          animation: webrtcWaveMotion 1.2s ease-in-out infinite 0s;
        }

        .webrtc-wave-4 {
          height: 22px;
          animation: webrtcWaveMotion 1.2s ease-in-out infinite 0.45s;
        }

        .webrtc-wave-5 {
          height: 14px;
          animation: webrtcWaveMotion 1.2s ease-in-out infinite 0.2s;
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

export default WebRTCUseCase;
