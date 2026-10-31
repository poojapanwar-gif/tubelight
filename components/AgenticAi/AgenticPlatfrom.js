"use client";
import React from "react";
import styles from "../../styles/AgenticPlatfrom.module.scss";

const AgenticPlatfrom = ({
  eyebrow = "THE PLATFORM",
  title = "One Intelligent System for Every Support Request",
  paragraphs,
  mode = "ticketing",
}) => {
  // Render simulation content depending on mode
  const renderSimulation = () => {
    switch (mode) {
      case "campaigner":
        return (
          <>
            <div className={styles["agentic-window-head"]}>
              <div className={styles["agentic-dots"]}>
                <span className={`${styles.dot} ${styles["dot-r"]}`} />
                <span className={`${styles.dot} ${styles["dot-y"]}`} />
                <span className={`${styles.dot} ${styles["dot-g"]}`} />
              </div>
              <div className={styles["agentic-url-bar"]}>
                <span>🔒</span>
                <span>agentic.tubelight.io/campaigner/orchestrator</span>
              </div>
              <div className={styles["agentic-status-pill"]}>
                <span className={styles["pulse-dot"]} />
                <span>Campaign Engine Active</span>
              </div>
            </div>

            <div className={styles["agentic-window-body"]}>
              <div className="agentic-cycle-container">
                {/* PHASE 1: CAMPAIGN CONFIGURATION & SEGMENTATION */}
                <div className="agentic-step-a">
                  <div className={styles["ticket-card"]}>
                    <div className={styles["ticket-header"]}>
                      <div className={styles["ticket-channel"]}>
                        <span className={styles["badge-wa"]}>WhatsApp + RCS</span>
                        <span>Campaign #CMP-8021</span>
                      </div>
                      <div className={styles["ticket-time"]}>Scheduled: Immediate</div>
                    </div>

                    <div className={styles["ticket-user"]}>
                      <div className={styles.avatar}>VIP</div>
                      <div className={styles["user-query"]}>
                        <div className={styles.name}>
                          <span>Festive Mega Sale 2026</span>
                          <span style={{ fontSize: "10px", color: "#64748B", fontWeight: 500 }}>
                            • High-Value Audience
                          </span>
                        </div>
                        <div className={styles["query-text"]}>
                          “Broadcast personalized festive coupon FLAT 30% OFF to 42,500 active shoppers across WhatsApp &amp; RCS with automatic SMS fallback.”
                        </div>
                      </div>
                    </div>

                    <div className={styles["ai-tags-row"]}>
                      <span className={`${styles["ai-tag"]} ${styles["tag-blue"]} tag-pop-1`}>
                        🎯 Segment: 42,500 Verified Buyers
                      </span>
                      <span className={`${styles["ai-tag"]} ${styles["tag-orange"]} tag-pop-2`}>
                        ⚡ Channels: WhatsApp + RCS + SMS
                      </span>
                      <span className={`${styles["ai-tag"]} ${styles["tag-purple"]} tag-pop-3`}>
                        👤 Personalization: Dynamic 1:1
                      </span>
                      <span className={`${styles["ai-tag"]} ${styles["tag-green"]}`}>
                        ✓ DND Suppressed: 100%
                      </span>
                    </div>
                  </div>

                  <div className={`${styles["copilot-card"]} copilot-active-glow`} style={{ marginTop: "14px" }}>
                    <div className={styles["copilot-header"]}>
                      <div className={styles["copilot-title"]}>
                        <span className={styles.sparkle}>✨</span>
                        <span>AI Campaign Optimizer</span>
                      </div>
                      <span className={styles.confidence}>99.1% Projected Delivery</span>
                    </div>

                    <div className={styles["copilot-body"]}>
                      <span className={styles["bot-highlight"]}>AI Optimization: </span>
                      Audience verified. High-intent segments prioritized. Throughput throttled to 120 msg/sec to maximize inbox placement and prevent spam filtering.
                    </div>

                    <div className={styles["copilot-actions"]}>
                      <button className={styles["action-btn"]} type="button">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Execute Omnichannel Broadcast
                      </button>
                      <span className={styles["sla-info"]}>
                        ⏱️ Dispatch ready in 0.4s
                      </span>
                    </div>
                  </div>
                </div>

                {/* PHASE 2: LIVE DELIVERY & ATTRIBUTED SALES */}
                <div className="agentic-step-b">
                  <div className={styles["ticket-card"]}>
                    <div className={styles["ticket-header"]}>
                      <div className={styles["ticket-channel"]}>
                        <span className={styles["badge-wa"]}>WhatsApp + RCS</span>
                        <span>Campaign #CMP-8021</span>
                      </div>
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: 700,
                          color: "#059669",
                          background: "#ECFDF5",
                          padding: "3px 10px",
                          borderRadius: "12px",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        ✓ Dispatched 42,500 Messages
                      </span>
                    </div>

                    <div className={styles["ticket-user"]}>
                      <div className={styles.avatar} style={{ background: "#10B981" }}>
                        ✓
                      </div>
                      <div className={styles["user-query"]}>
                        <div className={styles.name}>
                          <span>Sample Message Delivered to Priya Sharma</span>
                        </div>
                        <div
                          className={styles["query-text"]}
                          style={{
                            background: "#F1F5F9",
                            padding: "8px 12px",
                            borderRadius: "8px",
                            borderLeft: "3px solid #10B981",
                            marginTop: "6px",
                          }}
                        >
                          “Hi Priya, your exclusive festive pass is live! Use code FESTIVE30 for 30% off on your shortlisted apparel. Valid for 24 hours!”
                        </div>
                      </div>
                    </div>

                    <div className={styles["ai-tags-row"]}>
                      <span className={`${styles["ai-tag"]} ${styles["tag-green"]}`}>
                        📈 Delivery: 98.4% (41,820 Delivered)
                      </span>
                      <span className={`${styles["ai-tag"]} ${styles["tag-blue"]}`}>
                        ⚡ Read Rate: 41.2% in first hour
                      </span>
                      <span className={`${styles["ai-tag"]} ${styles["tag-purple"]}`}>
                        🛒 Conversions: 1,840 Orders
                      </span>
                    </div>
                  </div>

                  <div className={styles["copilot-card"]} style={{ marginTop: "14px", background: "#F8FAFC" }}>
                    <div className={styles["copilot-header"]}>
                      <div className={styles["copilot-title"]}>
                        <span>📊 Live Campaign ROI &amp; Revenue Log</span>
                      </div>
                      <span
                        style={{
                          fontSize: "10px",
                          fontWeight: 700,
                          color: "#4F46E5",
                          background: "#EEF2FF",
                          padding: "2px 8px",
                          borderRadius: "5px",
                        }}
                      >
                        3.4x Average ROAS
                      </span>
                    </div>

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        gap: "10px",
                        marginTop: "8px",
                      }}
                    >
                      <div style={{ background: "#ffffff", padding: "10px", borderRadius: "8px", border: "1px solid #E2E8F0", textAlign: "center" }}>
                        <div style={{ fontSize: "18px", fontWeight: 800, color: "#10B981" }}>98.4%</div>
                        <div style={{ fontSize: "10.5px", color: "#64748B", marginTop: "2px" }}>Delivery Rate</div>
                      </div>
                      <div style={{ background: "#ffffff", padding: "10px", borderRadius: "8px", border: "1px solid #E2E8F0", textAlign: "center" }}>
                        <div style={{ fontSize: "18px", fontWeight: 800, color: "#5E6FF9" }}>28.5%</div>
                        <div style={{ fontSize: "10.5px", color: "#64748B", marginTop: "2px" }}>Click-Through</div>
                      </div>
                      <div style={{ background: "#ffffff", padding: "10px", borderRadius: "8px", border: "1px solid #E2E8F0", textAlign: "center" }}>
                        <div style={{ fontSize: "18px", fontWeight: 800, color: "#7C3AED" }}>₹18.6L</div>
                        <div style={{ fontSize: "10.5px", color: "#64748B", marginTop: "2px" }}>Revenue Generated</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${styles["floating-pill"]} ${styles["pill-metrics"]}`}>
                <span>📈 41.2% Open Rate</span>
                <span style={{ color: "#4F46E5" }}>• 3.4x ROAS</span>
              </div>

              <div className={`${styles["floating-pill"]} ${styles["pill-resolved"]}`}>
                <span>🚀 42.5k Dispatched</span>
                <span style={{ color: "#059669" }}>• 98.4% Delivered</span>
              </div>
            </div>
          </>
        );

      case "conversations":
        return (
          <>
            <div className={styles["agentic-window-head"]}>
              <div className={styles["agentic-dots"]}>
                <span className={`${styles.dot} ${styles["dot-r"]}`} />
                <span className={`${styles.dot} ${styles["dot-y"]}`} />
                <span className={`${styles.dot} ${styles["dot-g"]}`} />
              </div>
              <div className={styles["agentic-url-bar"]}>
                <span>🔒</span>
                <span>agentic.tubelight.io/conversations/unified-engine</span>
              </div>
              <div className={styles["agentic-status-pill"]}>
                <span className={styles["pulse-dot"]} />
                <span>Omnichannel Active</span>
              </div>
            </div>

            <div className={styles["agentic-window-body"]}>
              <div className="agentic-cycle-container">
                {/* PHASE 1: INCOMING MULTI-CHANNEL INQUIRY & INTENT DETECTION */}
                <div className="agentic-step-a">
                  <div className={styles["ticket-card"]}>
                    <div className={styles["ticket-header"]}>
                      <div className={styles["ticket-channel"]}>
                        <span className={styles["badge-wa"]}>Instagram DM + WhatsApp</span>
                        <span>Session #CV-5521</span>
                      </div>
                      <div className={styles["ticket-time"]}>Received 3s ago</div>
                    </div>

                    <div className={styles["ticket-user"]}>
                      <div className={styles.avatar}>AR</div>
                      <div className={styles["user-query"]}>
                        <div className={styles.name}>
                          <span>Ananya Roy</span>
                          <span style={{ fontSize: "10px", color: "#64748B", fontWeight: 500 }}>
                            • Cross-Platform Identity Verified
                          </span>
                        </div>
                        <div className={styles["query-text"]}>
                          “Hi! We need enterprise pricing for 50 agents and want to know if you provide custom CRM integrations with Kylas and Salesforce?”
                        </div>
                      </div>
                    </div>

                    <div className={styles["ai-tags-row"]}>
                      <span className={`${styles["ai-tag"]} ${styles["tag-blue"]} tag-pop-1`}>
                        🏷️ Intent: Enterprise Sales Inquiry
                      </span>
                      <span className={`${styles["ai-tag"]} ${styles["tag-orange"]} tag-pop-2`}>
                        ⚡ Urgency: High (SLA: 60s)
                      </span>
                      <span className={`${styles["ai-tag"]} ${styles["tag-purple"]} tag-pop-3`}>
                        👤 Assigned: AE Vikram + AI Co-Pilot
                      </span>
                      <span className={`${styles["ai-tag"]} ${styles["tag-green"]}`}>
                        ✓ Sentiment: High Purchase Intent
                      </span>
                    </div>
                  </div>

                  <div className={`${styles["copilot-card"]} copilot-active-glow`} style={{ marginTop: "14px" }}>
                    <div className={styles["copilot-header"]}>
                      <div className={styles["copilot-title"]}>
                        <span className={styles.sparkle}>✨</span>
                        <span>Context-Aware AI Recommendation</span>
                      </div>
                      <span className={styles.confidence}>98.8% Intent Match</span>
                    </div>

                    <div className={styles["copilot-body"]}>
                      <span className={styles["bot-highlight"]}>Suggested AI Response: </span>
                      “Hi Ananya! Yes, Tubelight provides native bidirectional integrations with Kylas and Salesforce. For 50 agents, our Enterprise tier includes dedicated SLA &amp; custom webhooks.”
                    </div>

                    <div className={styles["copilot-actions"]}>
                      <button className={styles["action-btn"]} type="button">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Send Suggested Reply &amp; Connect AE
                      </button>
                      <span className={styles["sla-info"]}>
                        ⏱️ Context retrieved in 0.3s
                      </span>
                    </div>
                  </div>
                </div>

                {/* PHASE 2: INSTANT HUMAN HANDOVER & UNIFIED CONTEXT */}
                <div className="agentic-step-b">
                  <div className={styles["ticket-card"]}>
                    <div className={styles["ticket-header"]}>
                      <div className={styles["ticket-channel"]}>
                        <span className={styles["badge-wa"]}>Unified Chat</span>
                        <span>Session #CV-5521</span>
                      </div>
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: 700,
                          color: "#059669",
                          background: "#ECFDF5",
                          padding: "3px 10px",
                          borderRadius: "12px",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        ✓ Connected to AE Vikram (Live)
                      </span>
                    </div>

                    <div className={styles["ticket-user"]}>
                      <div className={styles.avatar} style={{ background: "#10B981" }}>
                        ✓
                      </div>
                      <div className={styles["user-query"]}>
                        <div className={styles.name}>
                          <span>Conversation Transferred to Ananya Roy</span>
                        </div>
                        <div
                          className={styles["query-text"]}
                          style={{
                            background: "#F1F5F9",
                            padding: "8px 12px",
                            borderRadius: "8px",
                            borderLeft: "3px solid #10B981",
                            marginTop: "6px",
                          }}
                        >
                          “Hi Ananya, Vikram here from the Enterprise team! I have your complete inquiry notes right in front of me. Let’s set up a 15-minute tailored walkthrough.”
                        </div>
                      </div>
                    </div>

                    <div className={styles["ai-tags-row"]}>
                      <span className={`${styles["ai-tag"]} ${styles["tag-green"]}`}>
                        ⭐ First Response: 12 seconds
                      </span>
                      <span className={`${styles["ai-tag"]} ${styles["tag-blue"]}`}>
                        ⚡ Context Preserved: 100%
                      </span>
                      <span className={`${styles["ai-tag"]} ${styles["tag-purple"]}`}>
                        🛡️ Zero Customer Repetition
                      </span>
                    </div>
                  </div>

                  <div className={styles["copilot-card"]} style={{ marginTop: "14px", background: "#F8FAFC" }}>
                    <div className={styles["copilot-header"]}>
                      <div className={styles["copilot-title"]}>
                        <span>📊 Real-Time Interaction Metrics</span>
                      </div>
                      <span
                        style={{
                          fontSize: "10px",
                          fontWeight: 700,
                          color: "#4F46E5",
                          background: "#EEF2FF",
                          padding: "2px 8px",
                          borderRadius: "5px",
                        }}
                      >
                        Seamless Experience
                      </span>
                    </div>

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        gap: "10px",
                        marginTop: "8px",
                      }}
                    >
                      <div style={{ background: "#ffffff", padding: "10px", borderRadius: "8px", border: "1px solid #E2E8F0", textAlign: "center" }}>
                        <div style={{ fontSize: "18px", fontWeight: 800, color: "#10B981" }}>12s</div>
                        <div style={{ fontSize: "10.5px", color: "#64748B", marginTop: "2px" }}>Response Time</div>
                      </div>
                      <div style={{ background: "#ffffff", padding: "10px", borderRadius: "8px", border: "1px solid #E2E8F0", textAlign: "center" }}>
                        <div style={{ fontSize: "18px", fontWeight: 800, color: "#5E6FF9" }}>88%</div>
                        <div style={{ fontSize: "10.5px", color: "#64748B", marginTop: "2px" }}>FCR Rate</div>
                      </div>
                      <div style={{ background: "#ffffff", padding: "10px", borderRadius: "8px", border: "1px solid #E2E8F0", textAlign: "center" }}>
                        <div style={{ fontSize: "18px", fontWeight: 800, color: "#7C3AED" }}>0s</div>
                        <div style={{ fontSize: "10.5px", color: "#64748B", marginTop: "2px" }}>Handover Delay</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${styles["floating-pill"]} ${styles["pill-metrics"]}`}>
                <span>💬 Unified Omnichannel</span>
                <span style={{ color: "#4F46E5" }}>• Context Synced</span>
              </div>

              <div className={`${styles["floating-pill"]} ${styles["pill-resolved"]}`}>
                <span>🤝 1-Click Handover</span>
                <span style={{ color: "#059669" }}>• 0s Wait Time</span>
              </div>
            </div>
          </>
        );

      case "leads":
        return (
          <>
            <div className={styles["agentic-window-head"]}>
              <div className={styles["agentic-dots"]}>
                <span className={`${styles.dot} ${styles["dot-r"]}`} />
                <span className={`${styles.dot} ${styles["dot-y"]}`} />
                <span className={`${styles.dot} ${styles["dot-g"]}`} />
              </div>
              <div className={styles["agentic-url-bar"]}>
                <span>🔒</span>
                <span>agentic.tubelight.io/leads/smart-pipeline</span>
              </div>
              <div className={styles["agentic-status-pill"]}>
                <span className={styles["pulse-dot"]} />
                <span>Lead Pipeline Active</span>
              </div>
            </div>

            <div className={styles["agentic-window-body"]}>
              <div className="agentic-cycle-container">
                {/* PHASE 1: REAL-TIME LEAD CAPTURE & AI SCORING */}
                <div className="agentic-step-a">
                  <div className={styles["ticket-card"]}>
                    <div className={styles["ticket-header"]}>
                      <div className={styles["ticket-channel"]}>
                        <span className={styles["badge-wa"]}>Meta Ads + Form</span>
                        <span>Lead #LD-7821</span>
                      </div>
                      <div className={styles["ticket-time"]}>Captured 2s ago</div>
                    </div>

                    <div className={styles["ticket-user"]}>
                      <div className={styles.avatar}>KM</div>
                      <div className={styles["user-query"]}>
                        <div className={styles.name}>
                          <span>Kabir Mehta</span>
                          <span style={{ fontSize: "10px", color: "#64748B", fontWeight: 500 }}>
                            • VP Operations • FinTech Enterprise
                          </span>
                        </div>
                        <div className={styles["query-text"]}>
                          “Requested callback for Outbound Predictive Dialer for 120 agents with two-way Salesforce CRM sync and number masking.”
                        </div>
                      </div>
                    </div>

                    <div className={styles["ai-tags-row"]}>
                      <span className={`${styles["ai-tag"]} ${styles["tag-blue"]} tag-pop-1`}>
                        🎯 AI Lead Score: 94/100 (Hot Lead)
                      </span>
                      <span className={`${styles["ai-tag"]} ${styles["tag-orange"]} tag-pop-2`}>
                        ⚡ Priority: Enterprise Tier (120 Seats)
                      </span>
                      <span className={`${styles["ai-tag"]} ${styles["tag-purple"]} tag-pop-3`}>
                        👤 Assigned: Neha Sharma (Top Closer)
                      </span>
                      <span className={`${styles["ai-tag"]} ${styles["tag-green"]}`}>
                        ✓ Verified Business Phone
                      </span>
                    </div>
                  </div>

                  <div className={`${styles["copilot-card"]} copilot-active-glow`} style={{ marginTop: "14px" }}>
                    <div className={styles["copilot-header"]}>
                      <div className={styles["copilot-title"]}>
                        <span className={styles.sparkle}>✨</span>
                        <span>AI Predictive Qualification &amp; Routing</span>
                      </div>
                      <span className={styles.confidence}>99.2% Opportunity Match</span>
                    </div>

                    <div className={styles["copilot-body"]}>
                      <span className={styles["bot-highlight"]}>Auto-Trigger Action: </span>
                      High-budget enterprise prospect detected. Matched with BFSI sales specialist Neha. Automated WhatsApp deck + calendar booking link prepared for instant dispatch.
                    </div>

                    <div className={styles["copilot-actions"]}>
                      <button className={styles["action-btn"]} type="button">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Dispatch Automated WhatsApp Nurture
                      </button>
                      <span className={styles["sla-info"]}>
                        ⏱️ Lead qualified in 0.5s
                      </span>
                    </div>
                  </div>
                </div>

                {/* PHASE 2: INSTANT FOLLOW-UP & DEMO BOOKED */}
                <div className="agentic-step-b">
                  <div className={styles["ticket-card"]}>
                    <div className={styles["ticket-header"]}>
                      <div className={styles["ticket-channel"]}>
                        <span className={styles["badge-wa"]}>WhatsApp Nurture</span>
                        <span>Lead #LD-7821</span>
                      </div>
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: 700,
                          color: "#059669",
                          background: "#ECFDF5",
                          padding: "3px 10px",
                          borderRadius: "12px",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        ✓ Demo Scheduled in 14s
                      </span>
                    </div>

                    <div className={styles["ticket-user"]}>
                      <div className={styles.avatar} style={{ background: "#10B981" }}>
                        ✓
                      </div>
                      <div className={styles["user-query"]}>
                        <div className={styles.name}>
                          <span>Automated Sequence to Kabir Mehta</span>
                        </div>
                        <div
                          className={styles["query-text"]}
                          style={{
                            background: "#F1F5F9",
                            padding: "8px 12px",
                            borderRadius: "8px",
                            borderLeft: "3px solid #10B981",
                            marginTop: "6px",
                          }}
                        >
                          “Hi Kabir, thanks for contacting Tubelight! Here is our Outbound Dialer solution brief. Kabir has confirmed demo meeting for tomorrow at 3:00 PM.”
                        </div>
                      </div>
                    </div>

                    <div className={styles["ai-tags-row"]}>
                      <span className={`${styles["ai-tag"]} ${styles["tag-green"]}`}>
                        ⭐ Lead-to-Response: 14 seconds
                      </span>
                      <span className={`${styles["ai-tag"]} ${styles["tag-blue"]}`}>
                        ⚡ CRM Sync: Salesforce Updated
                      </span>
                      <span className={`${styles["ai-tag"]} ${styles["tag-purple"]}`}>
                        🛡️ Pipeline Stage: Qualified Demo
                      </span>
                    </div>
                  </div>

                  <div className={styles["copilot-card"]} style={{ marginTop: "14px", background: "#F8FAFC" }}>
                    <div className={styles["copilot-header"]}>
                      <div className={styles["copilot-title"]}>
                        <span>📊 Real-Time Pipeline Velocity Log</span>
                      </div>
                      <span
                        style={{
                          fontSize: "10px",
                          fontWeight: 700,
                          color: "#4F46E5",
                          background: "#EEF2FF",
                          padding: "2px 8px",
                          borderRadius: "5px",
                        }}
                      >
                        4.8x Conversion Rate
                      </span>
                    </div>

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        gap: "10px",
                        marginTop: "8px",
                      }}
                    >
                      <div style={{ background: "#ffffff", padding: "10px", borderRadius: "8px", border: "1px solid #E2E8F0", textAlign: "center" }}>
                        <div style={{ fontSize: "18px", fontWeight: 800, color: "#10B981" }}>14s</div>
                        <div style={{ fontSize: "10.5px", color: "#64748B", marginTop: "2px" }}>Response Speed</div>
                      </div>
                      <div style={{ background: "#ffffff", padding: "10px", borderRadius: "8px", border: "1px solid #E2E8F0", textAlign: "center" }}>
                        <div style={{ fontSize: "18px", fontWeight: 800, color: "#5E6FF9" }}>94/100</div>
                        <div style={{ fontSize: "10.5px", color: "#64748B", marginTop: "2px" }}>AI Lead Score</div>
                      </div>
                      <div style={{ background: "#ffffff", padding: "10px", borderRadius: "8px", border: "1px solid #E2E8F0", textAlign: "center" }}>
                        <div style={{ fontSize: "18px", fontWeight: 800, color: "#7C3AED" }}>4.8x</div>
                        <div style={{ fontSize: "10.5px", color: "#64748B", marginTop: "2px" }}>Conversion Lift</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${styles["floating-pill"]} ${styles["pill-metrics"]}`}>
                <span>🎯 Lead Score: 94/100</span>
                <span style={{ color: "#4F46E5" }}>• Hot Prospect</span>
              </div>

              <div className={`${styles["floating-pill"]} ${styles["pill-resolved"]}`}>
                <span>⚡ 14s First Contact</span>
                <span style={{ color: "#059669" }}>• 4.8x ROI</span>
              </div>
            </div>
          </>
        );

      case "ticketing":
      default:
        return (
          <>
            <div className={styles["agentic-window-head"]}>
              <div className={styles["agentic-dots"]}>
                <span className={`${styles.dot} ${styles["dot-r"]}`} />
                <span className={`${styles.dot} ${styles["dot-y"]}`} />
                <span className={`${styles.dot} ${styles["dot-g"]}`} />
              </div>
              <div className={styles["agentic-url-bar"]}>
                <span>🔒</span>
                <span>agentic.tubelight.io/ticketing/live-engine</span>
              </div>
              <div className={styles["agentic-status-pill"]}>
                <span className={styles["pulse-dot"]} />
                <span>AI Engine Active</span>
              </div>
            </div>

            <div className={styles["agentic-window-body"]}>
              <div className="agentic-cycle-container">
                {/* PHASE 1: LIVE INCOMING TICKET & AUTO-CLASSIFICATION */}
                <div className="agentic-step-a">
                  <div className={styles["ticket-card"]}>
                    <div className={styles["ticket-header"]}>
                      <div className={styles["ticket-channel"]}>
                        <span className={styles["badge-wa"]}>WhatsApp</span>
                        <span>Ticket #TK-9482</span>
                      </div>
                      <div className={styles["ticket-time"]}>Ingested 4s ago</div>
                    </div>

                    <div className={styles["ticket-user"]}>
                      <div className={styles.avatar}>RV</div>
                      <div className={styles["user-query"]}>
                        <div className={styles.name}>
                          <span>Rohan Verma</span>
                          <span style={{ fontSize: "10px", color: "#64748B", fontWeight: 500 }}>
                            • Enterprise Customer
                          </span>
                        </div>
                        <div className={styles["query-text"]}>
                          “Payment of ₹4,999 was debited from account, but my Pro plan subscription is
                          still showing pending. Please verify and activate urgently!”
                        </div>
                      </div>
                    </div>

                    <div className={styles["ai-tags-row"]}>
                      <span className={`${styles["ai-tag"]} ${styles["tag-blue"]} tag-pop-1`}>
                        🏷️ Category: Billing &amp; Subscriptions
                      </span>
                      <span className={`${styles["ai-tag"]} ${styles["tag-orange"]} tag-pop-2`}>
                        ⚡ Priority: High (SLA: 15m)
                      </span>
                      <span className={`${styles["ai-tag"]} ${styles["tag-purple"]} tag-pop-3`}>
                        👤 Assigned: Agent Priya + AI Co-Pilot
                      </span>
                      <span className={`${styles["ai-tag"]} ${styles["tag-green"]}`}>
                        ✓ Sentiment: High Intent
                      </span>
                    </div>
                  </div>

                  <div className={`${styles["copilot-card"]} copilot-active-glow`} style={{ marginTop: "14px" }}>
                    <div className={styles["copilot-header"]}>
                      <div className={styles["copilot-title"]}>
                        <span className={styles.sparkle}>✨</span>
                        <span>AI Co-Pilot Knowledge Recommendation</span>
                      </div>
                      <span className={styles.confidence}>99.4% Confidence Match</span>
                    </div>

                    <div className={styles["copilot-body"]}>
                      <span className={styles["bot-highlight"]}>Auto-Detected Solution: </span>
                      Transaction #TXN-88219 verified via Payment Gateway API. Bank held authorization
                      has cleared. Pro plan is queued for 1-click instant activation.
                    </div>

                    <div className={styles["copilot-actions"]}>
                      <button className={styles["action-btn"]} type="button">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Auto-Apply Resolution &amp; Notify
                      </button>
                      <span className={styles["sla-info"]}>
                        ⏱️ Triage completed in 0.8s
                      </span>
                    </div>
                  </div>
                </div>

                {/* PHASE 2: INSTANT RESOLUTION, CSAT & AUDIT TRAIL */}
                <div className="agentic-step-b">
                  <div className={styles["ticket-card"]}>
                    <div className={styles["ticket-header"]}>
                      <div className={styles["ticket-channel"]}>
                        <span className={styles["badge-wa"]}>WhatsApp</span>
                        <span>Ticket #TK-9482</span>
                      </div>
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: 700,
                          color: "#059669",
                          background: "#ECFDF5",
                          padding: "3px 10px",
                          borderRadius: "12px",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        ✓ Auto-Resolved in 38s
                      </span>
                    </div>

                    <div className={styles["ticket-user"]}>
                      <div className={styles.avatar} style={{ background: "#10B981" }}>
                        ✓
                      </div>
                      <div className={styles["user-query"]}>
                        <div className={styles.name}>
                          <span>Resolution Sent to Rohan Verma</span>
                        </div>
                        <div
                          className={styles["query-text"]}
                          style={{
                            background: "#F1F5F9",
                            padding: "8px 12px",
                            borderRadius: "8px",
                            borderLeft: "3px solid #10B981",
                            marginTop: "6px",
                          }}
                        >
                          “Hi Rohan, we verified TXN #88219. Your Pro subscription is now active (+3
                          bonus days credited). Invoice receipt has been sent to your WhatsApp!”
                        </div>
                      </div>
                    </div>

                    <div className={styles["ai-tags-row"]}>
                      <span className={`${styles["ai-tag"]} ${styles["tag-green"]}`}>
                        ⭐ CSAT: 5.0/5.0 ("Super fast resolution!")
                      </span>
                      <span className={`${styles["ai-tag"]} ${styles["tag-blue"]}`}>
                        ⚡ First-Contact Resolution: 100%
                      </span>
                      <span className={`${styles["ai-tag"]} ${styles["tag-purple"]}`}>
                        🛡️ SLA Met: 100% (Queue: 0m)
                      </span>
                    </div>
                  </div>

                  <div className={styles["copilot-card"]} style={{ marginTop: "14px", background: "#F8FAFC" }}>
                    <div className={styles["copilot-header"]}>
                      <div className={styles["copilot-title"]}>
                        <span>📊 Automated Lifecycle Audit Log</span>
                      </div>
                      <span
                        style={{
                          fontSize: "10px",
                          fontWeight: 700,
                          color: "#4F46E5",
                          background: "#EEF2FF",
                          padding: "2px 8px",
                          borderRadius: "5px",
                        }}
                      >
                        Zero Manual Effort
                      </span>
                    </div>

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        gap: "10px",
                        marginTop: "8px",
                      }}
                    >
                      <div style={{ background: "#ffffff", padding: "10px", borderRadius: "8px", border: "1px solid #E2E8F0", textAlign: "center" }}>
                        <div style={{ fontSize: "18px", fontWeight: 800, color: "#10B981" }}>38s</div>
                        <div style={{ fontSize: "10.5px", color: "#64748B", marginTop: "2px" }}>Resolution Time</div>
                      </div>
                      <div style={{ background: "#ffffff", padding: "10px", borderRadius: "8px", border: "1px solid #E2E8F0", textAlign: "center" }}>
                        <div style={{ fontSize: "18px", fontWeight: 800, color: "#5E6FF9" }}>85%</div>
                        <div style={{ fontSize: "10.5px", color: "#64748B", marginTop: "2px" }}>Auto-Deflection</div>
                      </div>
                      <div style={{ background: "#ffffff", padding: "10px", borderRadius: "8px", border: "1px solid #E2E8F0", textAlign: "center" }}>
                        <div style={{ fontSize: "18px", fontWeight: 800, color: "#7C3AED" }}>0 min</div>
                        <div style={{ fontSize: "10.5px", color: "#64748B", marginTop: "2px" }}>Customer Queue</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${styles["floating-pill"]} ${styles["pill-metrics"]}`}>
                <span>🤖 Agentic Co-Pilot</span>
                <span style={{ color: "#4F46E5" }}>• 99.4% Match</span>
              </div>

              <div className={`${styles["floating-pill"]} ${styles["pill-resolved"]}`}>
                <span>⚡ 0s Queue Wait</span>
                <span style={{ color: "#059669" }}>• 100% SLA</span>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className={styles["agentic-platfrom-section"]}>
      <div className={styles["agentic-platfrom-left-right-content"]}>
        {/* Left Side: Editorial & Platform Context */}
        <div className={styles["agentic-platfrom-left-content"]}>
          <h6>{eyebrow}</h6>
          <h2>{title}</h2>
          {paragraphs && paragraphs.length > 0 ? (
            paragraphs.map((p, idx) => <p key={idx}>{p}</p>)
          ) : (
            <>
              <p>
                Traditional ticketing systems rely heavily on manual categorization,
                assignment, follow-ups, and status updates. Our AI-powered ticketing
                solution helps streamline these activities so your team can focus on
                solving customer problems instead of managing tickets.
              </p>
              <p>
                AI agents can assist with repetitive requests, recommend relevant
                responses, identify priority issues, and support human agents
                throughout the ticket lifecycle.
              </p>
            </>
          )}
        </div>

        {/* Right Side: 650px Interactive Simulation Video */}
        <div className={styles["agentic-platfrom-right-content"]}>
          <div className={styles["agentic-video"]}>
            <style>{`
              .agentic-cycle-container {
                position: relative;
                width: 100%;
              }

              @keyframes agenticPhaseA {
                0%, 46% {
                  opacity: 1;
                  transform: scale(1) translateY(0);
                  pointer-events: auto;
                }
                50%, 96% {
                  opacity: 0;
                  transform: scale(0.97) translateY(-6px);
                  pointer-events: none;
                }
                100% {
                  opacity: 1;
                  transform: scale(1) translateY(0);
                  pointer-events: auto;
                }
              }

              @keyframes agenticPhaseB {
                0%, 46% {
                  opacity: 0;
                  transform: scale(0.97) translateY(6px);
                  pointer-events: none;
                }
                50%, 96% {
                  opacity: 1;
                  transform: scale(1) translateY(0);
                  pointer-events: auto;
                }
                100% {
                  opacity: 0;
                  transform: scale(0.97) translateY(6px);
                  pointer-events: none;
                }
              }

              .agentic-step-a {
                animation: agenticPhaseA 10s cubic-bezier(0.4, 0, 0.2, 1) infinite;
              }

              .agentic-step-b {
                position: absolute;
                inset: 0;
                animation: agenticPhaseB 10s cubic-bezier(0.4, 0, 0.2, 1) infinite;
              }

              @keyframes tagPop {
                0% { opacity: 0; transform: scale(0.9); }
                100% { opacity: 1; transform: scale(1); }
              }
              .tag-pop-1 { animation: tagPop 0.4s ease forwards 0.2s; }
              .tag-pop-2 { animation: tagPop 0.4s ease forwards 0.4s; }
              .tag-pop-3 { animation: tagPop 0.4s ease forwards 0.6s; }

              @keyframes copilotGlow {
                0%, 100% { border-color: #C7D2FE; box-shadow: 0 8px 24px rgba(94, 111, 249, 0.08); }
                50% { border-color: #818CF8; box-shadow: 0 10px 28px rgba(94, 111, 249, 0.2); }
              }
              .copilot-active-glow {
                animation: copilotGlow 3s ease-in-out infinite;
              }
            `}</style>

            <div className={styles["agentic-window"]}>
              {renderSimulation()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgenticPlatfrom;
