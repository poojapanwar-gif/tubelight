"use client";
import React from "react";
import Link from "next/link";
import styles from "../../styles/ClickUseCases.module.scss";

const ContactCenterCase = () => {
  const useCaseCard = [
    {
      id: "inbound-contact-center",
      link: "/inbound-calls",
      linktext: "Inbound Contact Center",
      title: "Customer Support & Service Desk",
      detail:
        "Receive calls and messages from customers through a single number. IVR menus, smart routing and call queuing connect each customer to the best-suited agent, so support is faster and satisfaction is higher",
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
          {/* ============ PHASE 1: IVR CALL ROUTING MENU (Exact Match to Image) ============ */}
          <div className="cc-step-container cc-step-a">
            <div
              className="cc-ivr-card"
              style={{
                width: "86%",
                maxWidth: "245px",
                background: "#ffffff",
                borderRadius: "12px",
                padding: "10px 12px",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.06)",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              {/* Row 1: Emergency Alert */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "9px",
                  background: "#F8FAFC",
                  border: "1px solid #E2E8F0",
                  borderRadius: "7px",
                  padding: "5px 10px",
                  boxSizing: "border-box",
                }}
              >
                <span
                  style={{
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    background: "#5E6FF9",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "10px",
                    fontWeight: 700,
                    flexShrink: 0,
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  1
                </span>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "#0F1828",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Emergency Alert
                </span>
              </div>

              {/* Row 2: Active / Highlighted Option (Appoin) */}
              <div
                className="cc-active-row"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "9px",
                  background: "#5E6FF9",
                  borderRadius: "7px",
                  padding: "5px 10px",
                  boxSizing: "border-box",
                  boxShadow: "0 3px 10px rgba(94, 111, 249, 0.35)",
                }}
              >
                <span
                  style={{
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    background: "#ffffff",
                    color: "#5E6FF9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "10px",
                    fontWeight: 700,
                    flexShrink: 0,
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  2
                </span>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "#ffffff",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Appoin
                </span>
              </div>

              {/* Row 3: System Alert */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "9px",
                  background: "#F8FAFC",
                  border: "1px solid #E2E8F0",
                  borderRadius: "7px",
                  padding: "5px 10px",
                  boxSizing: "border-box",
                }}
              >
                <span
                  style={{
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    background: "#5E6FF9",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "10px",
                    fontWeight: 700,
                    flexShrink: 0,
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  3
                </span>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "#0F1828",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  System Alert
                </span>
              </div>
            </div>
          </div>

          {/* ============ PHASE 2: CALL QUEUE CONNECTED BADGE (4.5s - 9s) ============ */}
          <div className="cc-step-container cc-step-b">
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "#10B981",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 6px 18px rgba(16, 185, 129, 0.35)",
                color: "#ffffff",
                fontSize: "17px",
                fontWeight: 700,
              }}
            >
              ✓
            </div>
            <div
              style={{
                background: "#ffffff",
                borderRadius: "12px",
                padding: "8px 16px",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.06)",
                textAlign: "center",
                marginTop: "8px",
              }}
            >
              <div
                style={{
                  fontSize: "11.5px",
                  fontWeight: 700,
                  color: "#0F1828",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Agent Connected · Queue 0s
              </div>
              <div
                style={{
                  fontSize: "10.5px",
                  fontWeight: 600,
                  color: "#10B981",
                  marginTop: "2px",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Smart Routing to Priya (Support Desk)
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "outbound-contact-center",
      link: "/outbound-dialer",
      linktext: "Outbound Contact Center",
      title: "Sales, Collections & Reminders",
      detail:
        "Run outbound campaigns with auto dialers, click-to-call and bulk messaging. Reach more leads, follow up on payments and send appointment reminders while your agents spend their time on live conversations.",
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
          {/* ============ PHASE 1: CAMPAIGNS DASHBOARD WINDOW (Exact Match to Image) ============ */}
          <div className="cc-step-container cc-step-a">
            <div
              className="cc-campaign-card"
              style={{
                width: "82%",
                maxWidth: "235px",
                background: "#ffffff",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.06)",
                boxSizing: "border-box",
                textAlign: "center",
              }}
            >
              {/* Header Hero Banner (Solid blue) */}
              <div
                style={{
                  width: "100%",
                  height: "36px",
                  background: "#5E6FF9",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "4px",
                    borderRadius: "2px",
                    background: "rgba(255, 255, 255, 0.4)",
                  }}
                />
              </div>

              {/* Body lines & Campaigns Pill */}
              <div style={{ padding: "12px 14px 14px" }}>
                <div
                  style={{
                    width: "88%",
                    height: "4px",
                    background: "#CBD5E1",
                    borderRadius: "2px",
                    margin: "0 auto 6px",
                  }}
                />
                <div
                  style={{
                    width: "60%",
                    height: "4px",
                    background: "#E2E8F0",
                    borderRadius: "2px",
                    margin: "0 auto 12px",
                  }}
                />

                {/* Pill Button: Campaigns */}
                <span
                  className="cc-campaigns-btn"
                  style={{
                    background: "#5E6FF9",
                    color: "#ffffff",
                    borderRadius: "14px",
                    padding: "4px 18px",
                    fontSize: "10px",
                    fontWeight: 600,
                    display: "inline-block",
                    boxShadow: "0 2px 8px rgba(94, 111, 249, 0.35)",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Campaigns
                </span>
              </div>
            </div>
          </div>

          {/* ============ PHASE 2: OUTBOUND DIALER STATS (4.5s - 9s) ============ */}
          <div className="cc-step-container cc-step-b">
            <div
              style={{
                background: "#ffffff",
                borderRadius: "12px",
                padding: "10px 18px",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.06)",
                textAlign: "center",
                maxWidth: "240px",
              }}
            >
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#0F1828",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                ⚡ Predictive Dialer Active
              </div>
              <div
                style={{
                  fontSize: "10.5px",
                  fontWeight: 600,
                  color: "#10B981",
                  marginTop: "4px",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                1,200+ Connected Outbound Calls
              </div>
              <div
                style={{
                  marginTop: "8px",
                  fontSize: "10px",
                  color: "#5E6FF9",
                  background: "#EEF2FF",
                  padding: "3px 8px",
                  borderRadius: "10px",
                  fontWeight: 600,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                85% Agent Talk-Time Utilization
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "ai-powered-contact-center",
      link: "/intelligent-conversations",
      linktext: "AI-Powered Contact Center",
      title: "Conversational AI & Chatbots",
      detail:
        "Let AI voice and chat bots handle routine queries 24/7 and hand over to a human agent when needed. Lower your cost per interaction without lowering the quality of service.",
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
          {/* ============ PHASE 1: BOT WINDOW (Exact Match to Image) ============ */}
          <div className="cc-step-container cc-step-a">
            <div
              className="cc-bot-card"
              style={{
                width: "82%",
                maxWidth: "235px",
                background: "#ffffff",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.06)",
                boxSizing: "border-box",
              }}
            >
              {/* Header Hero Banner (Solid blue) */}
              <div
                style={{
                  width: "100%",
                  height: "36px",
                  background: "#5E6FF9",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "4px",
                    borderRadius: "2px",
                    background: "rgba(255, 255, 255, 0.4)",
                  }}
                />
              </div>

              {/* Placeholder Content Lines */}
              <div style={{ padding: "16px 14px 22px" }}>
                <div
                  style={{
                    width: "90%",
                    height: "4px",
                    background: "#CBD5E1",
                    borderRadius: "2px",
                    marginBottom: "8px",
                  }}
                />
                <div
                  style={{
                    width: "50%",
                    height: "4px",
                    background: "#E2E8F0",
                    borderRadius: "2px",
                  }}
                />
              </div>
            </div>
          </div>

          {/* ============ PHASE 2: AI ASSISTANT IN ACTION (4.5s - 9s) ============ */}
          <div className="cc-step-container cc-step-b">
            <div
              style={{
                background: "#ffffff",
                borderRadius: "12px",
                padding: "10px 18px",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.06)",
                textAlign: "center",
                maxWidth: "240px",
              }}
            >
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#5E6FF9",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                ✦ botTL AI Voice & Chatbot
              </div>
              <div
                style={{
                  fontSize: "10.5px",
                  color: "#64748B",
                  marginTop: "3px",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                24/7 Automated Query Resolution
              </div>
              <div
                style={{
                  marginTop: "6px",
                  fontSize: "10px",
                  color: "#10B981",
                  background: "#ECFDF5",
                  padding: "3px 8px",
                  borderRadius: "10px",
                  fontWeight: 600,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                ✓ 84% Deflected Without Human Agent
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className={styles["click-use-cases"]}>
      {/* Inline animation keyframes for Contact Center simulation */}
      <style>{`
        /* Step Container Transitions (0s-4.5s and 4.5s-9s) */
        .cc-step-container {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        @keyframes ccVideoCycleA {
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

        @keyframes ccVideoCycleB {
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

        .cc-step-a {
          animation: ccVideoCycleA 9s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .cc-step-b {
          animation: ccVideoCycleB 9s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        /* Card 1 IVR Float & Active Row Pulse */
        @keyframes ccCardFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .cc-ivr-card, .cc-campaign-card, .cc-bot-card {
          animation: ccCardFloat 3.2s ease-in-out infinite;
        }

        @keyframes ccActiveRowPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        .cc-active-row {
          animation: ccActiveRowPulse 2.4s ease-in-out infinite;
        }

        /* Card 2 Campaigns Button Pulse */
        @keyframes ccBtnPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 2px 8px rgba(94, 111, 249, 0.35); }
          50% { transform: scale(1.06); box-shadow: 0 4px 14px rgba(94, 111, 249, 0.55); }
        }
        .cc-campaigns-btn {
          animation: ccBtnPulse 2.2s ease-in-out infinite;
        }
      `}</style>

      <h2>Use Cases</h2>
      <h6>One Short Code, many ways to reach and respond to your audience.</h6>
      <div className={styles["use-cases-all-cards"]}>
        {useCaseCard.map((item, index) => (
          <Link href={item.link} key={index}>
            <div className={styles["use-cases-card"]}>
              <div className={styles["use-case-image"]}>
                {item.renderVisual()}
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

export default ContactCenterCase;
