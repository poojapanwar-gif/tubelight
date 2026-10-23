"use client";
import React from "react";
import Link from "next/link";
import styles from "../../styles/ClickUseCases.module.scss";

const RcsUseCase = () => {
  const useCaseCard = [
    {
      id: "retailrcs",
      link: "/",
      linktext: "RetailRCS",
      title: "Retail",
      detail:
        "Share rich product catalogs and flash sale promotions with interactive carousels and buy-now buttons.",
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
          {/* ============ PHASE 1: 3 PRODUCT CAROUSEL CARDS (0s - 4.5s) ============ */}
          <div className="rcs-step-container rcs-step-a">
            {/* 3 Colorful Product Cards (Exact match to image) */}
            <div
              style={{
                display: "flex",
                gap: "14px",
                alignItems: "center",
                justifyContent: "center",
                perspective: "600px",
              }}
            >
              {/* Card 1: Coral / Pink */}
              <div
                className="rcs-card-coral"
                style={{
                  width: "48px",
                  height: "92px",
                  borderRadius: "12px",
                  background: "linear-gradient(180deg, #FF6B8B 0%, #D83A56 100%)",
                  boxShadow: "0 6px 16px rgba(216, 58, 86, 0.35)",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "8px",
                    left: "8px",
                    right: "8px",
                    height: "3px",
                    background: "rgba(255,255,255,0.45)",
                    borderRadius: "3px",
                  }}
                />
              </div>

              {/* Card 2: Sky Blue (Center active) */}
              <div
                className="rcs-card-blue"
                style={{
                  width: "50px",
                  height: "96px",
                  borderRadius: "12px",
                  background: "linear-gradient(180deg, #8EB8FC 0%, #4D87EE 100%)",
                  boxShadow: "0 8px 22px rgba(77, 135, 238, 0.4)",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "8px",
                    left: "8px",
                    right: "8px",
                    height: "3px",
                    background: "rgba(255,255,255,0.55)",
                    borderRadius: "3px",
                  }}
                />
              </div>

              {/* Card 3: Copper / Bronze */}
              <div
                className="rcs-card-copper"
                style={{
                  width: "48px",
                  height: "92px",
                  borderRadius: "12px",
                  background: "linear-gradient(180deg, #D48C5B 0%, #9B5527 100%)",
                  boxShadow: "0 6px 16px rgba(155, 85, 39, 0.35)",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "8px",
                    left: "8px",
                    right: "8px",
                    height: "3px",
                    background: "rgba(255,255,255,0.45)",
                    borderRadius: "3px",
                  }}
                />
              </div>
            </div>

            {/* Carousel navigation dots */}
            <div
              style={{
                display: "flex",
                gap: "5px",
                alignItems: "center",
                marginTop: "12px",
              }}
            >
              <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#CBD5E1" }} />
              <span style={{ width: "16px", height: "5px", borderRadius: "3px", background: "#5E6FF9" }} />
              <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#CBD5E1" }} />
            </div>
          </div>

          {/* ============ PHASE 2: INSTANT PRODUCT BUY CTA (4.5s - 9s) ============ */}
          <div className="rcs-step-container rcs-step-b">
            <div
              style={{
                background: "#ffffff",
                borderRadius: "14px",
                padding: "10px 18px",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.06)",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                maxWidth: "260px",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  width: "38px",
                  height: "44px",
                  borderRadius: "8px",
                  background: "linear-gradient(180deg, #8EB8FC 0%, #4D87EE 100%)",
                  flexShrink: 0,
                  boxShadow: "0 4px 10px rgba(77, 135, 238, 0.3)",
                }}
              />
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: "12px", fontWeight: 700, color: "#0F1828" }}>
                  Sky Blue Denim
                </div>
                <div style={{ fontSize: "11px", fontWeight: 600, color: "#10B981", marginTop: "2px" }}>
                  ₹1,499 <span style={{ textDecoration: "line-through", color: "#94A3B8", fontSize: "10px" }}>₹2,499</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              style={{
                marginTop: "10px",
                background: "#5E6FF9",
                color: "#ffffff",
                border: "none",
                borderRadius: "20px",
                padding: "6px 20px",
                fontSize: "11px",
                fontWeight: 600,
                boxShadow: "0 4px 12px rgba(94, 111, 249, 0.35)",
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                cursor: "pointer",
              }}
            >
              <span>Buy Now</span>
              <span>⚡</span>
            </button>
          </div>
        </div>
      ),
    },
    {
      id: "bankrcs",
      link: "/",
      linktext: "BankRCS",
      title: "Banking & Finance",
      detail:
        "Send personalized alerts, OTPs and EMI reminders with CTA buttons for immediate action.",
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
          {/* ============ PHASE 1: EMI DUE NOTIFICATION CARD (0s - 4.5s) ============ */}
          <div className="rcs-step-container rcs-step-a">
            {/* White notification card (Exact match to image) */}
            <div
              className="rcs-bank-card"
              style={{
                width: "82%",
                maxWidth: "260px",
                background: "#ffffff",
                borderRadius: "14px",
                padding: "14px 18px",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.05)",
                boxSizing: "border-box",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#0F1828",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                EMI due on 5 Nov
              </div>
              <div
                style={{
                  fontSize: "11px",
                  color: "#64748B",
                  fontFamily: "Inter, sans-serif",
                  marginTop: "3px",
                  fontWeight: 500,
                }}
              >
                Amount ₹ 4,250
              </div>
              <div style={{ marginTop: "10px" }}>
                <span
                  className="rcs-pay-btn"
                  style={{
                    background: "#4F46E5",
                    color: "#ffffff",
                    borderRadius: "16px",
                    padding: "5px 16px",
                    fontSize: "11px",
                    fontWeight: 600,
                    display: "inline-block",
                    boxShadow: "0 3px 10px rgba(79, 70, 229, 0.35)",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Pay now
                </span>
              </div>
            </div>
          </div>

          {/* ============ PHASE 2: INSTANT PAYMENT RECEIPT (4.5s - 9s) ============ */}
          <div className="rcs-step-container rcs-step-b">
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "#10B981",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 6px 18px rgba(16, 185, 129, 0.35)",
                color: "#ffffff",
                fontSize: "20px",
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
                marginTop: "8px",
              }}
            >
              <span
                style={{
                  fontSize: "12.5px",
                  fontWeight: 700,
                  color: "#0F172A",
                }}
              >
                ₹ 4,250 Paid Successfully
              </span>
              <span
                style={{
                  fontSize: "10.5px",
                  fontWeight: 600,
                  color: "#10B981",
                  marginTop: "2px",
                }}
              >
                Ref: #RCS-90481 • Verified Bank Seal
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "travelrcs",
      link: "/",
      linktext: "TravelRCS",
      title: "Travel & Hospitality",
      detail:
        "Provide itinerary updates, mobile check-ins and multilingual assistance in one rich message.",
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
          {/* ============ PHASE 1: FLIGHT ROUTE CARD (0s - 4.5s) ============ */}
          <div className="rcs-step-container rcs-step-a">
            {/* White route card (Exact match to image) */}
            <div
              className="rcs-travel-card"
              style={{
                width: "86%",
                maxWidth: "275px",
                background: "#ffffff",
                borderRadius: "14px",
                padding: "14px 16px",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.05)",
                boxSizing: "border-box",
                textAlign: "left",
              }}
            >
              {/* Route line with airplane */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#0F1828",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  PNQ
                </span>

                {/* Animated Flight Path Line */}
                <div
                  style={{
                    flex: 1,
                    margin: "0 10px",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "0px",
                      borderTop: "1.5px dashed #A5B4FC",
                    }}
                  />
                  {/* Gliding Airplane Icon */}
                  <span
                    className="rcs-airplane"
                    style={{
                      position: "absolute",
                      fontSize: "12px",
                      color: "#4F46E5",
                      top: "-9px",
                    }}
                  >
                    ✈
                  </span>
                </div>

                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#0F1828",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  DEL
                </span>
              </div>

              {/* Mobile check-in CTA button */}
              <div style={{ marginTop: "12px" }}>
                <span
                  className="rcs-checkin-btn"
                  style={{
                    background: "#4F46E5",
                    color: "#ffffff",
                    borderRadius: "16px",
                    padding: "5px 16px",
                    fontSize: "11px",
                    fontWeight: 600,
                    display: "inline-block",
                    boxShadow: "0 3px 10px rgba(79, 70, 229, 0.35)",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Mobile check-in
                </span>
              </div>
            </div>
          </div>

          {/* ============ PHASE 2: BOARDING PASS (4.5s - 9s) ============ */}
          <div className="rcs-step-container rcs-step-b">
            <div
              style={{
                background: "#ffffff",
                borderRadius: "14px",
                padding: "10px 18px",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.06)",
                textAlign: "center",
                maxWidth: "240px",
              }}
            >
              <div style={{ fontSize: "12px", fontWeight: 700, color: "#0F1828" }}>
                Boarding Pass Issued 🎫
              </div>
              <div style={{ fontSize: "11px", color: "#4F46E5", fontWeight: 600, marginTop: "3px" }}>
                Seat 14A • Gate 04 • Zone 2
              </div>
              <div
                style={{
                  marginTop: "8px",
                  padding: "4px 10px",
                  background: "#F1F5F9",
                  borderRadius: "8px",
                  fontSize: "10px",
                  color: "#64748B",
                  fontFamily: "monospace",
                }}
              >
                ||| ||||| || |||| |||||
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "supportrcs",
      link: "/",
      linktext: "SupportRCS",
      title: "Customer Support",
      detail:
        "Enable chat-based assistance within the native messaging app, reducing the need for app downloads.",
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
          {/* ============ PHASE 1: CHAT PROMPT BUBBLE (0s - 4.5s) ============ */}
          <div className="rcs-step-container rcs-step-a" style={{ padding: "20px" }}>
            {/* White query bubble (Exact match to image) */}
            <div
              className="rcs-support-bubble"
              style={{
                width: "90%",
                maxWidth: "250px",
                background: "#ffffff",
                borderRadius: "20px",
                padding: "11px 18px",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.05)",
                fontSize: "12.5px",
                fontWeight: 700,
                color: "#1E293B",
                fontFamily: "Inter, sans-serif",
                textAlign: "left",
                boxSizing: "border-box",
              }}
            >
              Where is my order?
            </div>

            {/* Typing indicator */}
            <div
              style={{
                marginTop: "12px",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                background: "rgba(255, 255, 255, 0.8)",
                padding: "4px 12px",
                borderRadius: "14px",
              }}
            >
              <span className="rcs-dot rcs-dot-1" />
              <span className="rcs-dot rcs-dot-2" />
              <span className="rcs-dot rcs-dot-3" />
            </div>
          </div>

          {/* ============ PHASE 2: LIVE BOT ORDER STATUS (4.5s - 9s) ============ */}
          <div className="rcs-step-container rcs-step-b" style={{ padding: "16px 20px" }}>
            <div
              style={{
                background: "#ffffff",
                borderRadius: "14px",
                padding: "10px 16px",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.06)",
                textAlign: "left",
                width: "90%",
                maxWidth: "260px",
                boxSizing: "border-box",
              }}
            >
              <div style={{ fontSize: "12px", fontWeight: 700, color: "#10B981" }}>
                🚚 Out for delivery today
              </div>
              <div style={{ fontSize: "11px", color: "#64748B", marginTop: "3px" }}>
                Arriving by 4:00 PM • Courier: BlueDart
              </div>
              <div style={{ marginTop: "8px" }}>
                <span
                  style={{
                    background: "#5E6FF9",
                    color: "#ffffff",
                    borderRadius: "12px",
                    padding: "3px 10px",
                    fontSize: "10px",
                    fontWeight: 600,
                  }}
                >
                  Track Live Map 📍
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className={styles["click-use-cases"]}>
      {/* Scoped CSS only for this page: 2 columns per row, exactly matching the design without affecting any other page */}
      <style>{`
        /* Scoped 2-column grid for RcsUseCase ONLY */
        .rcs-two-cols-grid {
          display: grid !important;
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 36px 32px !important;
          max-width: 1100px;
          margin: 40px auto 0 auto !important;
        }

        @media (max-width: 860px) {
          .rcs-two-cols-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }

        /* Step Container Transitions (0s-4.5s and 4.5s-9s) */
        .rcs-step-container {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        @keyframes rcsVideoCycleA {
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

        @keyframes rcsVideoCycleB {
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

        .rcs-step-a {
          animation: rcsVideoCycleA 9s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .rcs-step-b {
          animation: rcsVideoCycleB 9s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        /* Card 1 Carousel Float */
        @keyframes rcsCardFloat1 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @keyframes rcsCardFloat2 {
          0%, 100% { transform: translateY(-3px) scale(1.05); }
          50% { transform: translateY(2px) scale(1.05); }
        }
        @keyframes rcsCardFloat3 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .rcs-card-coral { animation: rcsCardFloat1 3s ease-in-out infinite; }
        .rcs-card-blue { animation: rcsCardFloat2 3s ease-in-out infinite 0.4s; }
        .rcs-card-copper { animation: rcsCardFloat3 3s ease-in-out infinite 0.8s; }

        /* Card 2 Bank Pulse */
        @keyframes rcsBtnPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 3px 10px rgba(79, 70, 229, 0.35); }
          50% { transform: scale(1.06); box-shadow: 0 5px 16px rgba(79, 70, 229, 0.55); }
        }
        .rcs-pay-btn, .rcs-checkin-btn {
          animation: rcsBtnPulse 2.4s ease-in-out infinite;
        }

        /* Card 3 Airplane Flight Animation */
        @keyframes airplaneFly {
          0% {
            left: 5%;
            transform: scale(0.9) rotate(0deg);
          }
          50% {
            left: 80%;
            transform: scale(1.1) rotate(0deg);
          }
          100% {
            left: 5%;
            transform: scale(0.9) rotate(0deg);
          }
        }
        .rcs-airplane {
          animation: airplaneFly 4s ease-in-out infinite;
        }

        /* Card 4 Typing Indicator Dots */
        @keyframes rcsDotBlink {
          0%, 20% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
          100% { opacity: 0.2; transform: scale(0.8); }
        }
        .rcs-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #5E6FF9;
          display: inline-block;
        }
        .rcs-dot-1 { animation: rcsDotBlink 1.4s infinite 0.1s; }
        .rcs-dot-2 { animation: rcsDotBlink 1.4s infinite 0.3s; }
        .rcs-dot-3 { animation: rcsDotBlink 1.4s infinite 0.5s; }
      `}</style>

      <h2>Use Cases</h2>
      <h6>Wherever two parties need to talk but should not share personal numbers, masking keeps the conversation safe.</h6>
      <div className={`${styles["use-cases-all-cards"]} rcs-two-cols-grid`}>
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

export default RcsUseCase;
