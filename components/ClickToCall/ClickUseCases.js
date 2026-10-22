"use client";
import React from "react";
import Link from "next/link";
import styles from "../../styles/ClickUseCases.module.scss";

const ClickUseCases = () => {
  const useCaseCard = [
    {
      id: "webc2c",
      link: "/",
      linktext: "WebC2C",
      title: "Web-based Click to Call",
      detail:
        "This implementation involves embedding a Click to Call button on a website. When a user click on the button, the system prompts the user to enter their phone number. The System then connects the user to the destination number.",
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
          {/* ============ PHASE 1: WEBSITE WITH POPUP INPUT (0s - 4.5s) ============ */}
          <div className="c2c-step-container c2c-step-a">
            {/* Mini Browser Bar */}
            <div
              style={{
                width: "100%",
                maxWidth: "240px",
                background: "#ffffff",
                borderRadius: "10px",
                padding: "8px 12px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  borderBottom: "1px solid #F1F5F9",
                  paddingBottom: "5px",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#EF4444",
                  }}
                />
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#F59E0B",
                  }}
                />
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#10B981",
                  }}
                />
                <span
                  style={{
                    fontSize: "10px",
                    color: "#94A3B8",
                    marginLeft: "6px",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  yourbrand.com
                </span>
              </div>

              {/* Website Call Prompt Field */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "#F8FAFC",
                  border: "1px solid #E2E8F0",
                  borderRadius: "6px",
                  padding: "4px 8px",
                }}
              >
                <span
                  style={{
                    fontSize: "11px",
                    color: "#334155",
                    fontWeight: 600,
                  }}
                >
                  +91 98765 43210
                </span>
                <span
                  className="c2c-cursor-blink"
                  style={{
                    width: "2px",
                    height: "12px",
                    background: "#4F46E5",
                  }}
                />
              </div>
            </div>

            {/* Embedded "Click to Call" button */}
            <div
              className="c2c-btn-pulse"
              style={{
                background: "linear-gradient(135deg, #4F46E5, #6366F1)",
                color: "#ffffff",
                borderRadius: "20px",
                padding: "7px 18px",
                fontSize: "12px",
                fontWeight: 700,
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 6px 18px rgba(79, 70, 229, 0.35)",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.6c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.3 1.1l-2.3 2.2Z" />
              </svg>
              <span>Click to Call</span>
            </div>
          </div>

          {/* ============ PHASE 2: CALL CONNECTED TO DESTINATION (4.5s - 9s) ============ */}
          <div className="c2c-step-container c2c-step-b">
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
              Web-to-Phone Connected
            </div>

            {/* Connected Destination Card */}
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
                  Sales Executive
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "#10B981",
                    fontWeight: 600,
                  }}
                >
                  On Call • 00:08
                </div>
              </div>
            </div>

            {/* Live voice wave */}
            <div
              style={{
                display: "flex",
                gap: "4px",
                alignItems: "center",
                height: "16px",
              }}
            >
              <span className="c2c-wave-bar c2c-wave-1" />
              <span className="c2c-wave-bar c2c-wave-2" />
              <span className="c2c-wave-bar c2c-wave-3" />
              <span className="c2c-wave-bar c2c-wave-4" />
              <span className="c2c-wave-bar c2c-wave-5" />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "appc2c",
      link: "/",
      linktext: "AppC2C",
      title: "App-based Click to Call",
      detail:
        "This implementation involves involves integration Click to Call functionality into a mobile application. When a user clicks on the button, the app initiates a call to the destination number.",
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
          {/* ============ PHASE 1: IN-APP BUTTON & RIPPLE (0s - 4.5s) ============ */}
          <div className="c2c-step-container c2c-step-a">
            {/* App Mockup Card */}
            <div
              style={{
                width: "100%",
                maxWidth: "230px",
                background: "#ffffff",
                borderRadius: "12px",
                padding: "10px 14px",
                boxShadow: "0 3px 12px rgba(0, 0, 0, 0.05)",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      background: "#EEF2FF",
                      color: "#4F46E5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "12px",
                      fontWeight: 700,
                    }}
                  >
                    📱
                  </div>
                  <div>
                    <div style={{ fontSize: "12px", fontWeight: 700, color: "#1E293B" }}>
                      Delivery App
                    </div>
                    <div style={{ fontSize: "10px", color: "#64748B" }}>
                      Order #4920
                    </div>
                  </div>
                </div>
                <span
                  style={{
                    fontSize: "10px",
                    background: "#DCFCE7",
                    color: "#15803D",
                    fontWeight: 700,
                    padding: "2px 6px",
                    borderRadius: "4px",
                  }}
                >
                  On the way
                </span>
              </div>
            </div>

            {/* In-app Call Button with Pulse */}
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "4px",
              }}
            >
              <div className="c2c-ring c2c-ring-1" />
              <div className="c2c-ring c2c-ring-2" />

              <div
                style={{
                  background: "#4F46E5",
                  color: "#ffffff",
                  borderRadius: "20px",
                  padding: "8px 20px",
                  fontSize: "12.5px",
                  fontWeight: 700,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  boxShadow: "0 6px 20px rgba(79, 70, 229, 0.4)",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.6c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.3 1.1l-2.3 2.2Z" />
                </svg>
                <span>Call Driver</span>
              </div>
            </div>
          </div>

          {/* ============ PHASE 2: IN-APP VoIP CALL ACTIVE (4.5s - 9s) ============ */}
          <div className="c2c-step-container c2c-step-b">
            {/* Active in-app call indicator */}
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
              <span>In-App VoIP Connected</span>
            </div>

            <span
              style={{
                fontSize: "11px",
                color: "#64748B",
                fontWeight: 500,
              }}
            >
              HD Voice Quality • Direct Call
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "adsc2c",
      link: "/",
      linktext: "AdsC2C",
      title: "Click to Call Ads",
      detail:
        "This implementation involves adding a Click to Call button to a search engine or social media advertisement. When a user clicks on the button, the system connects the user to the destination number.",
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
          {/* ============ PHASE 1: SPONSORED AD WITH CALL BUTTON (0s - 4.5s) ============ */}
          <div className="c2c-step-container c2c-step-a">
            {/* Search / Social Ad Card */}
            <div
              style={{
                width: "100%",
                maxWidth: "235px",
                background: "#ffffff",
                borderRadius: "12px",
                padding: "10px 14px",
                boxShadow: "0 3px 12px rgba(0, 0, 0, 0.05)",
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                boxSizing: "border-box",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span
                  style={{
                    fontSize: "9.5px",
                    fontWeight: 800,
                    color: "#1E293B",
                    background: "#F1F5F9",
                    padding: "2px 6px",
                    borderRadius: "4px",
                    letterSpacing: "0.5px",
                  }}
                >
                  AD
                </span>
                <span
                  style={{
                    fontSize: "11px",
                    color: "#64748B",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  cloudtelecom.com
                </span>
              </div>

              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#1E293B",
                }}
              >
                Instant Enterprise Calling
              </div>

              {/* Call Extension on Ad */}
              <div
                style={{
                  background: "#EEF2FF",
                  borderRadius: "6px",
                  padding: "6px 10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "2px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="#4F46E5">
                    <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.6c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.3 1.1l-2.3 2.2Z" />
                  </svg>
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "#4F46E5" }}>
                    Call 1800-123-456
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "9px",
                    fontWeight: 700,
                    color: "#ffffff",
                    background: "#4F46E5",
                    padding: "2px 6px",
                    borderRadius: "4px",
                  }}
                >
                  CLICK
                </span>
              </div>
            </div>
          </div>

          {/* ============ PHASE 2: AD CLICK CONVERTED TO INSTANT CALL (4.5s - 9s) ============ */}
          <div className="c2c-step-container c2c-step-b">
            {/* Success Phone Dial */}
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "#4F46E5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 22px rgba(79, 70, 229, 0.4)",
              }}
            >
              <svg
                width="20"
                height="20"
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
              <span>Lead Connected From Ad</span>
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
              Conversion Recorded • 4.8x ROI
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
        .c2c-step-container {
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

        @keyframes c2cVideoCycleA {
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

        @keyframes c2cVideoCycleB {
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

        .c2c-step-a {
          animation: c2cVideoCycleA 8.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .c2c-step-b {
          animation: c2cVideoCycleB 8.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        @keyframes c2cBtnPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 6px 18px rgba(79, 70, 229, 0.35);
          }
          50% {
            transform: scale(1.04);
            box-shadow: 0 8px 24px rgba(79, 70, 229, 0.5);
          }
        }

        .c2c-btn-pulse {
          animation: c2cBtnPulse 2.4s ease-in-out infinite;
        }

        @keyframes c2cCursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .c2c-cursor-blink {
          animation: c2cCursorBlink 1s infinite;
        }

        @keyframes c2cRingPulse {
          0% {
            transform: translate(-50%, -50%) scale(0.7);
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

        .c2c-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          border-radius: 50%;
          border: 1.5px solid rgba(79, 70, 229, 0.35);
          pointer-events: none;
          transform: translate(-50%, -50%);
        }

        .c2c-ring-1 {
          width: 70px;
          height: 70px;
          animation: c2cRingPulse 2.4s ease-out infinite;
        }

        .c2c-ring-2 {
          width: 105px;
          height: 105px;
          animation: c2cRingPulse 2.4s ease-out infinite 0.8s;
        }

        @keyframes c2cWaveMotion {
          0%, 100% {
            transform: scaleY(0.35);
          }
          50% {
            transform: scaleY(1.15);
          }
        }

        .c2c-wave-bar {
          width: 5px;
          background: #10B981;
          border-radius: 99px;
          display: inline-block;
          transform-origin: center;
        }

        .c2c-wave-1 {
          height: 14px;
          animation: c2cWaveMotion 1.2s ease-in-out infinite 0.1s;
        }

        .c2c-wave-2 {
          height: 22px;
          animation: c2cWaveMotion 1.2s ease-in-out infinite 0.35s;
        }

        .c2c-wave-3 {
          height: 30px;
          animation: c2cWaveMotion 1.2s ease-in-out infinite 0s;
        }

        .c2c-wave-4 {
          height: 22px;
          animation: c2cWaveMotion 1.2s ease-in-out infinite 0.45s;
        }

        .c2c-wave-5 {
          height: 14px;
          animation: c2cWaveMotion 1.2s ease-in-out infinite 0.2s;
        }
      `}</style>

      <h2>Use Cases</h2>
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

export default ClickUseCases;
