"use client";
import React from "react";
import Link from "next/link";
import styles from "../../styles/ClickUseCases.module.scss";

const OneInBoxCase = () => {
  const useCaseCard = [
    {
      id: "support-inbox",
      link: "/ai-powered-ticketing",
      linktext: "Support Inbox",
      title: "Customer Support Teams",
      detail:
        "Handle support queries from every channel in one queue. Agents see the full conversation history, so customers never have to repeat themselves, and issues are resolved faster.",
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
          {/* ============ PHASE 1: INBOX ROUTING / TICKETING MENU (Exact Match to Image) ============ */}
          <div className="oib-step-container oib-step-a">
            <div
              className="oib-card-float"
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
                className="oib-active-row"
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

          {/* ============ PHASE 2: OMNICHANNEL SUPPORT TICKET RESOLVED (4.5s - 9s) ============ */}
          <div className="oib-step-container oib-step-b">
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
                Unified Support Ticket #408
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
                WhatsApp + Web Chat • Full History Visible
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "sales-inbox",
      link: "/lead-management-system",
      linktext: "Sales Inbox",
      title: "Sales & Lead Management",
      detail:
        "Capture enquiries from WhatsApp, web chat and ads in one place. Assign leads to the right sales rep instantly and follow up before the lead goes cold.",
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
          <div className="oib-step-container oib-step-a">
            <div
              className="oib-card-float"
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
                  className="oib-campaigns-btn"
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

          {/* ============ PHASE 2: SALES LEAD INSTANT ROUTING (4.5s - 9s) ============ */}
          <div className="oib-step-container oib-step-b">
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
                ⚡ Hot Lead Auto-Assigned
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
                WhatsApp Ad Enquiry → Sales Rep
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
                Follow-up SLA: &lt; 30 Seconds
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "campaign-inbox",
      link: "/campaigns",
      linktext: "Campaign Inbox",
      title: "Marketing & Campaign Replies",
      detail:
        "Manage replies to your bulk SMS, WhatsApp and RCS campaigns in one inbox. Turn responses into conversations and conversations into conversions.",
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
          {/* ============ PHASE 1: BOT / CONVERSATION WINDOW (Exact Match to Image) ============ */}
          <div className="oib-step-container oib-step-a">
            <div
              className="oib-card-float"
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

          {/* ============ PHASE 2: 2-WAY CAMPAIGN REPLIES ACTIVE (4.5s - 9s) ============ */}
          <div className="oib-step-container oib-step-b">
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
                ✦ 2-Way Campaign Inflow
              </div>
              <div
                style={{
                  fontSize: "10.5px",
                  color: "#64748B",
                  marginTop: "3px",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Bulk SMS, WhatsApp & RCS Replies
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
                ✓ Live Conversions In Progress
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className={styles["click-use-cases"]}>
      {/* Inline animation keyframes for 1inBox simulation */}
      <style>{`
        /* Step Container Transitions (0s-4.5s and 4.5s-9s) */
        .oib-step-container {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        @keyframes oibVideoCycleA {
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

        @keyframes oibVideoCycleB {
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

        .oib-step-a {
          animation: oibVideoCycleA 9s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .oib-step-b {
          animation: oibVideoCycleB 9s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        /* Card Soft Float */
        @keyframes oibCardFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .oib-card-float {
          animation: oibCardFloat 3.2s ease-in-out infinite;
        }

        /* Active Row Pulse */
        @keyframes oibActiveRowPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        .oib-active-row {
          animation: oibActiveRowPulse 2.4s ease-in-out infinite;
        }

        /* Campaigns Button Pulse */
        @keyframes oibBtnPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 2px 8px rgba(94, 111, 249, 0.35); }
          50% { transform: scale(1.06); box-shadow: 0 4px 14px rgba(94, 111, 249, 0.55); }
        }
        .oib-campaigns-btn {
          animation: oibBtnPulse 2.2s ease-in-out infinite;
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

export default OneInBoxCase;
