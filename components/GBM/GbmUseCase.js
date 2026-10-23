"use client";
import React from "react";
import Link from "next/link";
import styles from "../../styles/ClickUseCases.module.scss";

const GbmUseCase = () => {
  const useCaseCard = [
    {
      id: "storechat",
      link: "/",
      linktext: "StoreChat",
      title: "Retail & local stores",
      detail:
        "Answer questions on store hours, stock and offers right from your Google listing, before the customer walks in.",
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
          {/* ============ PHASE 1: GOOGLE BUSINESS LISTING (0s - 4.5s) ============ */}
          <div className="gbm-step-container gbm-step-a">
            {/* White Google Business Card (Exact match to image) */}
            <div
              className="gbm-listing-card"
              style={{
                width: "84%",
                maxWidth: "260px",
                background: "#ffffff",
                borderRadius: "14px",
                padding: "14px 18px",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.06)",
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
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span>Boutique · Open now</span>
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "#10B981",
                  }}
                />
              </div>

              <div
                style={{
                  fontSize: "11px",
                  color: "#64748B",
                  fontFamily: "Inter, sans-serif",
                  marginTop: "4px",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  fontWeight: 500,
                }}
              >
                <span>1.2 km · 4.6</span>
                <span style={{ color: "#F59E0B" }}>★</span>
              </div>

              <div style={{ marginTop: "12px" }}>
                <span
                  className="gbm-chat-btn"
                  style={{
                    background: "#5E6FF9",
                    color: "#ffffff",
                    borderRadius: "16px",
                    padding: "5px 18px",
                    fontSize: "11px",
                    fontWeight: 600,
                    display: "inline-block",
                    boxShadow: "0 3px 10px rgba(94, 111, 249, 0.35)",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  Chat
                </span>
              </div>
            </div>
          </div>

          {/* ============ PHASE 2: ACTIVE CONVERSATION (4.5s - 9s) ============ */}
          <div className="gbm-step-container gbm-step-b">
            <div
              style={{
                width: "88%",
                maxWidth: "270px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              {/* Customer query */}
              <div
                style={{
                  alignSelf: "flex-end",
                  background: "#5E6FF9",
                  color: "#ffffff",
                  borderRadius: "12px 12px 4px 12px",
                  padding: "7px 12px",
                  fontSize: "11px",
                  fontWeight: 500,
                  maxWidth: "85%",
                  boxShadow: "0 3px 8px rgba(94, 111, 249, 0.25)",
                }}
              >
                Do you have blue silk scarf in stock?
              </div>

              {/* Bot / Agent reply */}
              <div
                style={{
                  alignSelf: "flex-start",
                  background: "#ffffff",
                  color: "#0F1828",
                  borderRadius: "12px 12px 12px 4px",
                  padding: "7px 12px",
                  fontSize: "11px",
                  fontWeight: 600,
                  maxWidth: "85%",
                  boxShadow: "0 3px 10px rgba(0, 0, 0, 0.05)",
                }}
              >
                Yes! 2 in stock. Reserved for you! ✨
              </div>
            </div>

            <div
              style={{
                marginTop: "10px",
                fontSize: "10.5px",
                color: "#4F46E5",
                background: "#E0E7FF",
                padding: "3px 10px",
                borderRadius: "12px",
                fontWeight: 600,
              }}
            >
              Google Search & Maps Live Chat
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "branchchat",
      link: "/",
      linktext: "BranchChat",
      title: "Banking & appointments",
      detail:
        "Share branch details and let customers pick a convenient appointment slot in a few taps.",
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
          {/* ============ PHASE 1: 3 STACKED TIME SLOTS (0s - 4.5s) ============ */}
          <div className="gbm-step-container gbm-step-a">
            <div
              style={{
                width: "82%",
                maxWidth: "240px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              {/* Slot 1: 10:00 AM */}
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "8px",
                  padding: "7px 14px",
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
                    background: "#EEF2FF",
                    color: "#5E6FF9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "11px",
                    flexShrink: 0,
                  }}
                >
                  🕒
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#1E293B",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  10:00 AM
                </span>
              </div>

              {/* Slot 2: 12:30 PM */}
              <div
                style={{
                  background: "#ffffff",
                  borderRadius: "8px",
                  padding: "7px 14px",
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
                    background: "#EEF2FF",
                    color: "#5E6FF9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "11px",
                    flexShrink: 0,
                  }}
                >
                  🕒
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#1E293B",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  12:30 PM
                </span>
              </div>

              {/* Slot 3: 04:00 PM (Selected Blue Pill) */}
              <div
                className="gbm-active-slot"
                style={{
                  background: "#5E6FF9",
                  color: "#ffffff",
                  borderRadius: "8px",
                  padding: "7px 14px",
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
                    flexShrink: 0,
                  }}
                >
                  🕒
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#ffffff",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  04:00 PM
                </span>
              </div>
            </div>
          </div>

          {/* ============ PHASE 2: CONFIRMED BOOKING (4.5s - 9s) ============ */}
          <div className="gbm-step-container gbm-step-b">
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
                Slot Booked: 04:00 PM
              </span>
              <span
                style={{
                  fontSize: "10.5px",
                  fontWeight: 600,
                  color: "#10B981",
                  marginTop: "2px",
                }}
              >
                Synced with Google Calendar 📅
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "servicechat",
      link: "/",
      linktext: "ServiceChat",
      title: "Local services & bookings",
      detail:
        "Turn enquiries into bookings with quick replies and handover to a live agent when needed.",
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
          {/* ============ PHASE 1: CHAT ENQUIRY & REPLY (0s - 4.5s) ============ */}
          <div className="gbm-step-container gbm-step-a" style={{ padding: "18px" }}>
            <div
              style={{
                width: "90%",
                maxWidth: "265px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {/* White query bubble (Exact match to image) */}
              <div
                className="gbm-query-bubble"
                style={{
                  alignSelf: "flex-start",
                  background: "#ffffff",
                  borderRadius: "14px 14px 14px 4px",
                  padding: "9px 16px",
                  boxShadow: "0 3px 10px rgba(0, 0, 0, 0.04)",
                  fontSize: "11.5px",
                  fontWeight: 700,
                  color: "#0F1828",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Need a quote for AC repair
              </div>

              {/* Blue reply bubble (Exact match to image) */}
              <div
                className="gbm-reply-bubble"
                style={{
                  alignSelf: "flex-end",
                  background: "#5E6FF9",
                  color: "#ffffff",
                  borderRadius: "14px 14px 4px 14px",
                  padding: "9px 16px",
                  fontSize: "11.5px",
                  fontWeight: 600,
                  boxShadow: "0 4px 12px rgba(94, 111, 249, 0.3)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Sure! Visit tomorrow 11 AM?
              </div>
            </div>
          </div>

          {/* ============ PHASE 2: INSTANT CONFIRMATION & AGENT ASSIGNED (4.5s - 9s) ============ */}
          <div className="gbm-step-container gbm-step-b" style={{ padding: "16px" }}>
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
                ✓ Visit Scheduled • 11:00 AM
              </div>
              <div style={{ fontSize: "11px", color: "#64748B", marginTop: "3px" }}>
                Technician: Ramesh K. assigned
              </div>
              <div style={{ marginTop: "8px" }}>
                <span
                  style={{
                    background: "#EEF2FF",
                    color: "#4F46E5",
                    borderRadius: "12px",
                    padding: "3px 10px",
                    fontSize: "10.5px",
                    fontWeight: 600,
                  }}
                >
                  Live Handover Enabled
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
      {/* Inline animation keyframes for Google Business Messages simulation */}
      <style>{`
        /* Step Container Transitions (0s-4.5s and 4.5s-9s) */
        .gbm-step-container {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        @keyframes gbmVideoCycleA {
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

        @keyframes gbmVideoCycleB {
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

        .gbm-step-a {
          animation: gbmVideoCycleA 9s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .gbm-step-b {
          animation: gbmVideoCycleB 9s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        /* Card 1 Button Pulse */
        @keyframes gbmBtnPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 3px 10px rgba(94, 111, 249, 0.35); }
          50% { transform: scale(1.06); box-shadow: 0 5px 16px rgba(94, 111, 249, 0.55); }
        }
        .gbm-chat-btn {
          animation: gbmBtnPulse 2.2s ease-in-out infinite;
        }

        /* Card 2 Slot Pulse */
        @keyframes gbmActiveSlotPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 3px 12px rgba(94, 111, 249, 0.35); }
          50% { transform: scale(1.03); box-shadow: 0 5px 18px rgba(94, 111, 249, 0.5); }
        }
        .gbm-active-slot {
          animation: gbmActiveSlotPulse 2.4s ease-in-out infinite;
        }

        /* Card 3 Chat Bubbles Drop & Slide */
        @keyframes gbmBubbleIn {
          0% { opacity: 0; transform: translateY(-8px); }
          15%, 100% { opacity: 1; transform: translateY(0); }
        }
        .gbm-query-bubble {
          animation: gbmBubbleIn 9s ease-out infinite;
        }

        @keyframes gbmReplySlide {
          0%, 18% { opacity: 0; transform: translateY(8px); }
          28%, 100% { opacity: 1; transform: translateY(0); }
        }
        .gbm-reply-bubble {
          animation: gbmReplySlide 9s cubic-bezier(0.34, 1.3, 0.64, 1) infinite;
        }
      `}</style>

      <h2>Use Cases</h2>
      <h6>From store hours to appointment bookings, chat answers local customers in the moment.</h6>
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

export default GbmUseCase;
