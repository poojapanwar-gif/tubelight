"use client";
import React from "react";
import Link from "next/link";
import styles from "../../styles/ClickUseCases.module.scss";

const TextEduCase = () => {
  const useCaseCard = [
    {
      id: "schools",
      link: "/textedu",
      linktext: "Schools",
      title: "Parent & Guardian Alerts",
      detail:
        "Send attendance alerts, PTM reminders, fee due notices and holiday or closure updates to the right class, section or entire school.",
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
          {/* ============ PHASE 1: SCHOOL PARENT ATTENDANCE & PTM CARD ============ */}
          <div className="te-step-container te-step-a">
            <div
              className="te-card-float"
              style={{
                width: "88%",
                maxWidth: "250px",
                background: "#ffffff",
                borderRadius: "14px",
                padding: "12px 14px",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.06)",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              {/* Header: School Logo & Title */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "8px",
                      background: "#2563EB",
                      color: "#ffffff",
                      fontWeight: 700,
                      fontSize: "14px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    🎓
                  </div>
                  <div>
                    <div style={{ fontSize: "12px", fontWeight: 700, color: "#0F1828", lineHeight: 1.2 }}>
                      DPS International
                    </div>
                    <div style={{ fontSize: "10px", color: "#64748B" }}>Parent Notice Hub</div>
                  </div>
                </div>
                <span
                  style={{
                    fontSize: "9px",
                    fontWeight: 600,
                    color: "#059669",
                    background: "#ECFDF5",
                    padding: "2px 7px",
                    borderRadius: "6px",
                  }}
                >
                  ✓ Sent
                </span>
              </div>

              {/* Attendance & Alert Message Box */}
              <div
                style={{
                  background: "#F8FAFC",
                  border: "1px solid #E2E8F0",
                  borderRadius: "8px",
                  padding: "8px 10px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <span
                    style={{
                      width: "7px",
                      height: "7px",
                      borderRadius: "50%",
                      background: "#10B981",
                      display: "inline-block",
                    }}
                  />
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "#0F1828" }}>
                    Aarav Sharma · Present
                  </span>
                </div>
                <div style={{ fontSize: "10px", color: "#64748B", marginTop: "4px", lineHeight: 1.3 }}>
                  Class 8-A • PTM scheduled: Sat, 10 AM (Hall B)
                </div>
              </div>

              {/* Delivery Channels */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "9.5px", color: "#64748B" }}>
                <span>Channels: SMS + WhatsApp</span>
                <span style={{ color: "#2563EB", fontWeight: 600 }}>100% Delivered</span>
              </div>
            </div>
          </div>

          {/* ============ PHASE 2: SCHOOL REAL-TIME IMPACT METRICS ============ */}
          <div className="te-step-container te-step-b">
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                background: "#2563EB",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 6px 18px rgba(37, 99, 235, 0.35)",
                color: "#ffffff",
                fontSize: "19px",
                fontWeight: 700,
              }}
            >
              🔔
            </div>
            <div
              style={{
                background: "#ffffff",
                borderRadius: "14px",
                padding: "12px 18px",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.06)",
                textAlign: "center",
                marginTop: "10px",
                maxWidth: "245px",
              }}
            >
              <div
                style={{
                  fontSize: "12.5px",
                  fontWeight: 700,
                  color: "#0F1828",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                99.8% Parent Reach Rate
              </div>
              <div
                style={{
                  fontSize: "10.5px",
                  fontWeight: 600,
                  color: "#2563EB",
                  marginTop: "3px",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                1,850+ Parents Notified in &lt; 3 Secs
              </div>
              <div
                style={{
                  marginTop: "8px",
                  fontSize: "10px",
                  color: "#059669",
                  background: "#ECFDF5",
                  padding: "3px 10px",
                  borderRadius: "10px",
                  fontWeight: 600,
                  display: "inline-block",
                }}
              >
                ✓ Automated Attendance &amp; Fee Triggers
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "colleges",
      link: "/textedu",
      linktext: "Colleges",
      title: "Student Notifications",
      detail:
        "Share timetable changes, exam schedules, results and campus notices with students and faculty the moment they’re ready.",
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
          {/* ============ PHASE 1: COLLEGE CAMPUS BROADCAST NOTICE ============ */}
          <div className="te-step-container te-step-a">
            <div
              className="te-card-float"
              style={{
                width: "88%",
                maxWidth: "250px",
                background: "#ffffff",
                borderRadius: "14px",
                padding: "12px 14px",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.06)",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              {/* Header: University Hub */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "8px",
                      background: "#7C3AED",
                      color: "#ffffff",
                      fontWeight: 700,
                      fontSize: "14px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    🏛️
                  </div>
                  <div>
                    <div style={{ fontSize: "12px", fontWeight: 700, color: "#0F1828", lineHeight: 1.2 }}>
                      Apex University
                    </div>
                    <div style={{ fontSize: "10px", color: "#64748B" }}>Campus Broadcast</div>
                  </div>
                </div>
                <span
                  className="te-live-pulse"
                  style={{
                    fontSize: "9px",
                    fontWeight: 600,
                    color: "#7C3AED",
                    background: "#F5F3FF",
                    padding: "2px 7px",
                    borderRadius: "6px",
                  }}
                >
                  ● Live Alert
                </span>
              </div>

              {/* Exam & Timetable Notice Box */}
              <div
                style={{
                  background: "#F8FAFC",
                  border: "1px solid #E2E8F0",
                  borderRadius: "8px",
                  padding: "8px 10px",
                }}
              >
                <div style={{ fontSize: "11px", fontWeight: 700, color: "#0F1828" }}>
                  End-Sem Exam Timetable Published
                </div>
                <div style={{ fontSize: "10px", color: "#64748B", marginTop: "3px", lineHeight: 1.3 }}>
                  Hall tickets active on student portal. Download before 15th Nov.
                </div>
              </div>

              {/* Target Audience & Delivered */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "9.5px", color: "#64748B" }}>
                <span>Batch: B.Tech &amp; MBA</span>
                <span style={{ color: "#7C3AED", fontWeight: 600 }}>3,420 Notified</span>
              </div>
            </div>
          </div>

          {/* ============ PHASE 2: COLLEGE NOTIFICATION PERFORMANCE ============ */}
          <div className="te-step-container te-step-b">
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                background: "#7C3AED",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 6px 18px rgba(124, 58, 237, 0.35)",
                color: "#ffffff",
                fontSize: "19px",
                fontWeight: 700,
              }}
            >
              📢
            </div>
            <div
              style={{
                background: "#ffffff",
                borderRadius: "14px",
                padding: "12px 18px",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.06)",
                textAlign: "center",
                marginTop: "10px",
                maxWidth: "245px",
              }}
            >
              <div
                style={{
                  fontSize: "12.5px",
                  fontWeight: 700,
                  color: "#0F1828",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Instant Campus Broadcast
              </div>
              <div
                style={{
                  fontSize: "10.5px",
                  fontWeight: 600,
                  color: "#7C3AED",
                  marginTop: "3px",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Zero Notice Drop-off Across Batches
              </div>
              <div
                style={{
                  marginTop: "8px",
                  fontSize: "10px",
                  color: "#059669",
                  background: "#ECFDF5",
                  padding: "3px 10px",
                  borderRadius: "10px",
                  fontWeight: 600,
                  display: "inline-block",
                }}
              >
                ✓ Real-Time WhatsApp &amp; Portal Sync
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "coaching-edtech",
      link: "/textedu",
      linktext: "Coaching & EdTech",
      title: "Admissions & Enquiries",
      detail:
        "Follow up on enquiries, confirm demo classes and send batch reminders so fewer leads and learners slip through.",
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
          {/* ============ PHASE 1: COACHING ENQUIRY & DEMO CLASS CONFIRMATION ============ */}
          <div className="te-step-container te-step-a">
            <div
              className="te-card-float"
              style={{
                width: "88%",
                maxWidth: "250px",
                background: "#ffffff",
                borderRadius: "14px",
                padding: "12px 14px",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.06)",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              {/* Header: EdTech Brand */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "8px",
                      background: "#5E6FF9",
                      color: "#ffffff",
                      fontWeight: 700,
                      fontSize: "14px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    🚀
                  </div>
                  <div>
                    <div style={{ fontSize: "12px", fontWeight: 700, color: "#0F1828", lineHeight: 1.2 }}>
                      Ace Academy
                    </div>
                    <div style={{ fontSize: "10px", color: "#64748B" }}>Admission Lead Flow</div>
                  </div>
                </div>
                <span
                  style={{
                    fontSize: "9px",
                    fontWeight: 600,
                    color: "#D97706",
                    background: "#FEF3C7",
                    padding: "2px 7px",
                    borderRadius: "6px",
                  }}
                >
                  ⚡ Hot Lead
                </span>
              </div>

              {/* Demo Confirmation Box */}
              <div
                style={{
                  background: "#F8FAFC",
                  border: "1px solid #E2E8F0",
                  borderRadius: "8px",
                  padding: "8px 10px",
                }}
              >
                <div style={{ fontSize: "11px", fontWeight: 700, color: "#0F1828" }}>
                  Priya Verma · JEE 2026 Batch
                </div>
                <div style={{ fontSize: "10px", color: "#059669", fontWeight: 600, marginTop: "3px" }}>
                  ✓ Demo Class Confirmed: Tomorrow 5 PM
                </div>
              </div>

              {/* Action Link & Automation */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "9.5px", color: "#64748B" }}>
                <span>Zoom Link Sent on WhatsApp</span>
                <span style={{ color: "#5E6FF9", fontWeight: 600 }}>Auto Drip Active</span>
              </div>
            </div>
          </div>

          {/* ============ PHASE 2: EDTECH CONVERSION METRICS ============ */}
          <div className="te-step-container te-step-b">
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                background: "#5E6FF9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 6px 18px rgba(94, 111, 249, 0.35)",
                color: "#ffffff",
                fontSize: "19px",
                fontWeight: 700,
              }}
            >
              📈
            </div>
            <div
              style={{
                background: "#ffffff",
                borderRadius: "14px",
                padding: "12px 18px",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.06)",
                textAlign: "center",
                marginTop: "10px",
                maxWidth: "245px",
              }}
            >
              <div
                style={{
                  fontSize: "12.5px",
                  fontWeight: 700,
                  color: "#0F1828",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                3.4x Higher Demo Attendance
              </div>
              <div
                style={{
                  fontSize: "10.5px",
                  fontWeight: 600,
                  color: "#5E6FF9",
                  marginTop: "3px",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Automated Drips Drive 42% Conversions
              </div>
              <div
                style={{
                  marginTop: "8px",
                  fontSize: "10px",
                  color: "#059669",
                  background: "#ECFDF5",
                  padding: "3px 10px",
                  borderRadius: "10px",
                  fontWeight: 600,
                  display: "inline-block",
                }}
              >
                ✓ Zero Learner &amp; Lead Leakage
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className={styles["click-use-cases"]}>
      {/* Inline animation keyframes for TextEdu simulation */}
      <style>{`
        /* Step Container Transitions (0s-4.5s and 4.5s-9s) */
        .te-step-container {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        @keyframes teVideoCycleA {
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

        @keyframes teVideoCycleB {
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

        .te-step-a {
          animation: teVideoCycleA 9s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .te-step-b {
          animation: teVideoCycleB 9s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        /* Card Soft Float */
        @keyframes teCardFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .te-card-float {
          animation: teCardFloat 3.2s ease-in-out infinite;
        }

        /* Live Pulse Dot */
        @keyframes teLivePulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        .te-live-pulse {
          animation: teLivePulse 2s ease-in-out infinite;
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

export default TextEduCase;
