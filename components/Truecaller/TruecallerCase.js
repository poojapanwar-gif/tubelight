"use client";
import React from "react";
import Link from "next/link";
import styles from "../../styles/ClickUseCases.module.scss";

const TruecallerCase = () => {
  const useCaseCard = [
    {
      id: "delivery-call",
      link: "/truecaller",
      linktext: "DeliveryCall",
      title: "Delivery & logistics",
      detail:
        "Let customers know it is the courier calling, so they pick up and your deliveries succeed the first time.",
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
          {/* ============ PHASE 1: TRUECALLER VERIFIED SWIFT DELIVERY CARD ============ */}
          <div className="tc-step-container tc-step-a">
            <div
              className="tc-call-card"
              style={{
                width: "88%",
                maxWidth: "250px",
                background: "#ffffff",
                borderRadius: "16px",
                padding: "14px 16px 12px",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.06)",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              {/* Header: Avatar + Business Name + Verified Shield */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    background: "#F59E0B",
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: "17px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontFamily: "Space Grotesk, sans-serif",
                  }}
                >
                  S
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#0F1828",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Swift Delivery
                  </span>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      color: "#10B981",
                      fontSize: "10px",
                      fontWeight: 600,
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    <span>Verified Business</span>
                  </div>
                </div>
              </div>

              {/* Call Reason */}
              <div
                style={{
                  fontSize: "11px",
                  color: "#64748B",
                  marginTop: "8px",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Your parcel is out for delivery
              </div>

              {/* Accept & Decline Action Buttons */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  gap: "10px",
                  marginTop: "10px",
                }}
              >
                {/* Red Decline */}
                <div
                  style={{
                    width: "26px",
                    height: "26px",
                    borderRadius: "50%",
                    background: "#EF4444",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 6px rgba(239, 68, 68, 0.35)",
                    cursor: "pointer",
                  }}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="#ffffff">
                    <path d="M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08a.996.996 0 0 1 0-1.41C3.28 8.75 7.42 7 12 7s8.72 1.75 11.71 4.67c.39.39.39 1.02 0 1.41l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.11-.7-.28-.79-.74-1.69-1.36-2.67-1.85-.33-.16-.56-.5-.56-.9v-3.1C15.15 9.25 13.6 9 12 9z" />
                  </svg>
                </div>
                {/* Green Accept with Ring */}
                <div
                  className="tc-pickup-pulse"
                  style={{
                    width: "26px",
                    height: "26px",
                    borderRadius: "50%",
                    background: "#10B981",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 8px rgba(16, 185, 129, 0.4)",
                    cursor: "pointer",
                  }}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="#ffffff">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.053 15.053 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1.01A11.36 11.36 0 0 1 8.5 3.99c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.61c0-.55-.45-1-.99-1z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* ============ PHASE 2: VERIFIED DELIVERY SUCCESS METRICS ============ */}
          <div className="tc-step-container tc-step-b">
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
                94% 1st-Attempt Pick-Up Rate
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
                Branded Name &amp; Logo Shown on Call Screen
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "bank-call",
      link: "/truecaller",
      linktext: "BankCall",
      title: "Banking & collections",
      detail:
        "Reach customers on payment reminders and service calls with an identity they can trust.",
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
          {/* ============ PHASE 1: TRUECALLER VERIFIED PRIME BANK CARD ============ */}
          <div className="tc-step-container tc-step-a">
            <div
              className="tc-call-card"
              style={{
                width: "88%",
                maxWidth: "250px",
                background: "#ffffff",
                borderRadius: "16px",
                padding: "14px 16px 12px",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.06)",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              {/* Header: Avatar + Business Name + Verified Shield */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    background: "#2563EB",
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: "17px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontFamily: "Space Grotesk, sans-serif",
                  }}
                >
                  P
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#0F1828",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Prime Bank
                  </span>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      color: "#10B981",
                      fontSize: "10px",
                      fontWeight: 600,
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    <span>Verified Business</span>
                  </div>
                </div>
              </div>

              {/* Call Reason */}
              <div
                style={{
                  fontSize: "11px",
                  color: "#64748B",
                  marginTop: "8px",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Your EMI payment reminder
              </div>

              {/* Accept & Decline Action Buttons */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  gap: "10px",
                  marginTop: "10px",
                }}
              >
                <div
                  style={{
                    width: "26px",
                    height: "26px",
                    borderRadius: "50%",
                    background: "#EF4444",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 6px rgba(239, 68, 68, 0.35)",
                    cursor: "pointer",
                  }}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="#ffffff">
                    <path d="M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08a.996.996 0 0 1 0-1.41C3.28 8.75 7.42 7 12 7s8.72 1.75 11.71 4.67c.39.39.39 1.02 0 1.41l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.11-.7-.28-.79-.74-1.69-1.36-2.67-1.85-.33-.16-.56-.5-.56-.9v-3.1C15.15 9.25 13.6 9 12 9z" />
                  </svg>
                </div>
                <div
                  className="tc-pickup-pulse"
                  style={{
                    width: "26px",
                    height: "26px",
                    borderRadius: "50%",
                    background: "#10B981",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 8px rgba(16, 185, 129, 0.4)",
                    cursor: "pointer",
                  }}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="#ffffff">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.053 15.053 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1.01A11.36 11.36 0 0 1 8.5 3.99c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.61c0-.55-.45-1-.99-1z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* ============ PHASE 2: BANK TRUST & ZERO SPAM RATE ============ */}
          <div className="tc-step-container tc-step-b">
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "#2563EB",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 6px 18px rgba(37, 99, 235, 0.35)",
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
                3.2x Higher EMI Answer Rate
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
                Legitimate Bank Verification · Zero Spam Reports
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "care-call",
      link: "/truecaller",
      linktext: "CareCall",
      title: "Appointments & support",
      detail:
        "Confirm bookings and follow up on service requests with calls customers are happy to answer.",
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
          {/* ============ PHASE 1: TRUECALLER VERIFIED CITYCARE CLINIC ============ */}
          <div className="tc-step-container tc-step-a">
            <div
              className="tc-call-card"
              style={{
                width: "88%",
                maxWidth: "250px",
                background: "#ffffff",
                borderRadius: "16px",
                padding: "14px 16px 12px",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.06)",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              {/* Header: Avatar + Business Name + Verified Shield */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    background: "#10B981",
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: "17px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontFamily: "Space Grotesk, sans-serif",
                  }}
                >
                  C
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#0F1828",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    CityCare Clinic
                  </span>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      color: "#10B981",
                      fontSize: "10px",
                      fontWeight: 600,
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    <span>Verified Business</span>
                  </div>
                </div>
              </div>

              {/* Call Reason */}
              <div
                style={{
                  fontSize: "11px",
                  color: "#64748B",
                  marginTop: "8px",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Appointment confirmation
              </div>

              {/* Accept & Decline Action Buttons */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  gap: "10px",
                  marginTop: "10px",
                }}
              >
                <div
                  style={{
                    width: "26px",
                    height: "26px",
                    borderRadius: "50%",
                    background: "#EF4444",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 6px rgba(239, 68, 68, 0.35)",
                    cursor: "pointer",
                  }}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="#ffffff">
                    <path d="M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08a.996.996 0 0 1 0-1.41C3.28 8.75 7.42 7 12 7s8.72 1.75 11.71 4.67c.39.39.39 1.02 0 1.41l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.11-.7-.28-.79-.74-1.69-1.36-2.67-1.85-.33-.16-.56-.5-.56-.9v-3.1C15.15 9.25 13.6 9 12 9z" />
                  </svg>
                </div>
                <div
                  className="tc-pickup-pulse"
                  style={{
                    width: "26px",
                    height: "26px",
                    borderRadius: "50%",
                    background: "#10B981",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 8px rgba(16, 185, 129, 0.4)",
                    cursor: "pointer",
                  }}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="#ffffff">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.053 15.053 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1.01A11.36 11.36 0 0 1 8.5 3.99c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.61c0-.55-.45-1-.99-1z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* ============ PHASE 2: CLINIC CONFIRMATION SUCCESS ============ */}
          <div className="tc-step-container tc-step-b">
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
                88% Appointment Confirmation Rate
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
                Patients Answer with Trust · Zero No-Shows
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className={styles["click-use-cases"]}>
      {/* Inline animation keyframes for Truecaller simulation */}
      <style>{`
        /* Step Container Transitions (0s-4.5s and 4.5s-9s) */
        .tc-step-container {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        @keyframes tcVideoCycleA {
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

        @keyframes tcVideoCycleB {
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

        .tc-step-a {
          animation: tcVideoCycleA 9s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .tc-step-b {
          animation: tcVideoCycleB 9s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        /* Call Card Gentle Float */
        @keyframes tcCardFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .tc-call-card {
          animation: tcCardFloat 3.2s ease-in-out infinite;
        }

        /* Accept Button Pulse Ring */
        @keyframes tcPulseRing {
          0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.6); }
          70% { box-shadow: 0 0 0 9px rgba(16, 185, 129, 0); }
          100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }
        .tc-pickup-pulse {
          animation: tcPulseRing 1.8s infinite;
        }
      `}</style>

      <h2>Use Cases</h2>
      <h6>Whenever a call matters, a verified identity helps it get answered.</h6>
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

export default TruecallerCase;
