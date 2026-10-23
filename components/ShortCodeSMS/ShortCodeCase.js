"use client";
import React from "react";
import Link from "next/link";
import styles from "../../styles/ClickUseCases.module.scss";

const ShortCodeCase = () => {
  const useCaseCard = [
    {
      id: "alertsc",
      link: "/",
      linktext: "AlertSC",
      title: "Alerts & Notifications",
      detail:
        "Send system alerts, appointment reminders and emergency notifications in bulk to all your customers using the SMS API.",
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
          {/* ============ PHASE 1: ALERT CONFIRMATION RECEIPT (0s - 4.5s) ============ */}
          <div className="sc-step-container sc-step-a">
            {/* White receipt card (Exact match to image) */}
            <div
              className="sc-receipt-card"
              style={{
                width: "84%",
                maxWidth: "245px",
                background: "#ffffff",
                borderRadius: "12px",
                padding: "12px 16px",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.06)",
                boxSizing: "border-box",
                textAlign: "left",
              }}
            >
              {/* Green check & Order confirmed */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "7px",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#0F1828",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                <span
                  style={{
                    width: "15px",
                    height: "15px",
                    borderRadius: "50%",
                    border: "1.5px solid #10B981",
                    color: "#10B981",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "9px",
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  ✓
                </span>
                <span>Order #1042 confirmed</span>
              </div>

              {/* Horizontal decorative bars */}
              <div
                style={{
                  width: "100%",
                  height: "4px",
                  background: "#C7D2FE",
                  borderRadius: "2px",
                  marginTop: "8px",
                }}
              />
              <div
                style={{
                  width: "55%",
                  height: "4px",
                  background: "#E2E8F0",
                  borderRadius: "2px",
                  marginTop: "6px",
                }}
              />

              {/* Bottom total row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "14px",
                  paddingTop: "6px",
                  borderTop: "1px dashed #E2E8F0",
                }}
              >
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "#64748B",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Total
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#0F1828",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  ₹2,499
                </span>
              </div>
            </div>
          </div>

          {/* ============ PHASE 2: INSTANT BULK ALERT STATUS (4.5s - 9s) ============ */}
          <div className="sc-step-container sc-step-b">
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                background: "#10B981",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 6px 18px rgba(16, 185, 129, 0.35)",
                color: "#ffffff",
                fontSize: "18px",
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
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                marginTop: "8px",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#0F172A",
                }}
              >
                Short Code 56767 Triggered
              </span>
              <span
                style={{
                  fontSize: "10.5px",
                  fontWeight: 600,
                  color: "#10B981",
                  marginTop: "2px",
                }}
              >
                Delivered in 1.1s • Tier-1 Telecom
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "optinsc",
      link: "/",
      linktext: "OptInSC",
      title: "Opt-in Campaigns",
      detail:
        "Invite users to text a keyword to your Short Code to subscribe, enter contests, claim offers or request information.",
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
          {/* ============ PHASE 1: CAMPAIGN / KEYWORD BANNER (0s - 4.5s) ============ */}
          <div className="sc-step-container sc-step-a">
            {/* White newsletter email template (Exact match to image) */}
            <div
              className="sc-optin-card"
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

              {/* Body placeholder lines */}
              <div style={{ padding: "10px 14px 12px" }}>
                <div
                  style={{
                    width: "78%",
                    height: "4px",
                    background: "#CBD5E1",
                    borderRadius: "2px",
                    margin: "0 auto 5px",
                  }}
                />
                <div
                  style={{
                    width: "55%",
                    height: "4px",
                    background: "#E2E8F0",
                    borderRadius: "2px",
                    margin: "0 auto 10px",
                  }}
                />

                {/* CTA Button: Shop the sale */}
                <span
                  className="sc-shop-btn"
                  style={{
                    background: "#5E6FF9",
                    color: "#ffffff",
                    borderRadius: "14px",
                    padding: "4px 14px",
                    fontSize: "10px",
                    fontWeight: 600,
                    display: "inline-block",
                    boxShadow: "0 2px 8px rgba(94, 111, 249, 0.35)",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Shop the sale
                </span>
              </div>
            </div>
          </div>

          {/* ============ PHASE 2: OPT-IN KEYWORD SUBSCRIBED (4.5s - 9s) ============ */}
          <div className="sc-step-container sc-step-b">
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
                Text SALE to 56767
              </div>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#10B981",
                  marginTop: "4px",
                }}
              >
                ⚡ 20% Promo Coupon Auto-Replied
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
                }}
              >
                Keyword Auto-Responder Active
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "mediasc",
      link: "/",
      linktext: "MediaSC",
      title: "Print, TV & Outdoor Ads",
      detail:
        "Add a call to action to traditional media so people can text your Short Code for an enquiry or more information.",
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
          {/* ============ PHASE 1: BELL & FLOATING PILLS (0s - 4.5s) ============ */}
          <div
            className="sc-step-container sc-step-a"
            style={{ position: "relative", width: "100%", height: "100%" }}
          >
            {/* Top-Right Pill Badge: Payment received */}
            <div
              className="sc-pill-top"
              style={{
                position: "absolute",
                top: "28px",
                right: "32px",
                background: "#ffffff",
                borderRadius: "12px",
                padding: "3px 10px",
                fontSize: "10px",
                fontWeight: 600,
                color: "#475569",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                fontFamily: "Inter, sans-serif",
                whiteSpace: "nowrap",
                zIndex: 3,
              }}
            >
              Payment received
            </div>

            {/* Central Blue Notification Bell */}
            <div
              className="sc-bell-icon"
              style={{
                position: "absolute",
                top: "50%",
                left: "48%",
                transform: "translate(-50%, -50%)",
                width: "42px",
                height: "42px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#5E6FF9",
                zIndex: 2,
              }}
            >
              <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
                  stroke="#5E6FF9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                  stroke="#5E6FF9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Bottom Pill Badge: Login from different device */}
            <div
              className="sc-pill-bottom"
              style={{
                position: "absolute",
                bottom: "28px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "#ffffff",
                borderRadius: "12px",
                padding: "3px 12px",
                fontSize: "10px",
                fontWeight: 600,
                color: "#475569",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                fontFamily: "Inter, sans-serif",
                whiteSpace: "nowrap",
                zIndex: 3,
              }}
            >
              Login from different device
            </div>
          </div>

          {/* ============ PHASE 2: OUTDOOR MEDIA LEADS (4.5s - 9s) ============ */}
          <div className="sc-step-container sc-step-b">
            <div
              style={{
                background: "#ffffff",
                borderRadius: "12px",
                padding: "10px 16px",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.06)",
                textAlign: "center",
                maxWidth: "240px",
              }}
            >
              <div style={{ fontSize: "12px", fontWeight: 700, color: "#10B981" }}>
                📺 TV & Print Inbound Leads
              </div>
              <div style={{ fontSize: "10.5px", color: "#64748B", marginTop: "3px" }}>
                Text WIN to 56767 • 8,400+ Inbound
              </div>
              <div
                style={{
                  marginTop: "6px",
                  fontSize: "10px",
                  color: "#4F46E5",
                  background: "#E0E7FF",
                  padding: "3px 8px",
                  borderRadius: "10px",
                  fontWeight: 600,
                }}
              >
                Lead Auto-Sync to CRM
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className={styles["click-use-cases"]}>
      {/* Inline animation keyframes for Short Code simulation */}
      <style>{`
        /* Step Container Transitions (0s-4.5s and 4.5s-9s) */
        .sc-step-container {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        @keyframes scVideoCycleA {
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

        @keyframes scVideoCycleB {
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

        .sc-step-a {
          animation: scVideoCycleA 9s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .sc-step-b {
          animation: scVideoCycleB 9s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        /* Card 1 Receipt Soft Float */
        @keyframes scReceiptFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .sc-receipt-card {
          animation: scReceiptFloat 3s ease-in-out infinite;
        }

        /* Card 2 Newsletter Button Pulse */
        @keyframes scShopBtnPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 2px 8px rgba(94, 111, 249, 0.35); }
          50% { transform: scale(1.06); box-shadow: 0 4px 14px rgba(94, 111, 249, 0.55); }
        }
        .sc-shop-btn {
          animation: scShopBtnPulse 2.2s ease-in-out infinite;
        }

        /* Card 3 Bell Wobble & Pills Float */
        @keyframes scBellRing {
          0%, 65%, 100% { transform: translate(-50%, -50%) rotate(0); }
          70% { transform: translate(-50%, -50%) rotate(14deg); }
          75% { transform: translate(-50%, -50%) rotate(-14deg); }
          80% { transform: translate(-50%, -50%) rotate(8deg); }
          85% { transform: translate(-50%, -50%) rotate(-8deg); }
          90% { transform: translate(-50%, -50%) rotate(0); }
        }
        .sc-bell-icon {
          animation: scBellRing 3.5s ease-in-out infinite;
        }

        @keyframes scPillFloat1 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .sc-pill-top {
          animation: scPillFloat1 2.8s ease-in-out infinite;
        }

        @keyframes scPillFloat2 {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(3px); }
        }
        .sc-pill-bottom {
          animation: scPillFloat2 3.2s ease-in-out infinite 0.4s;
        }
      `}</style>

      <h2>Use Cases</h2>
      <h6>One Short Code, many ways to reach and respond to your audience.</h6>
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

export default ShortCodeCase;
