"use client";
import React from "react";
import styles from "../../styles/AgenticFeature.module.scss";

const AgenticFeature = ({
  eyebrow = "KEY FEATURES",
  title = "Everything a Modern Support Desk Needs",
  mode = "ticketing",
  customRows,
}) => {
  // Built-in feature sets tailored to each Agentic AI page
  const getFeatureRows = () => {
    if (customRows && customRows.length > 0) return customRows;

    switch (mode) {
                  case "campaigner":
        return [
          {
            rowClass: styles["feature-row-top"],
            cards: [
              {
                id: "camp-omnichannel",
                horizontal: true,
                title: "Omnichannel Campaign Management",
                description:
                  "Manage campaigns across supported channels from a centralized interface, with channel-specific configuration and execution.",
                renderVisual: () => (
                  <div className={styles["omnichannel-visual"]}>
                    <div className={styles["omni-speaker-orb"]}>
                      {/* Bullhorn / Megaphone Icon */}
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.5 8.5C17.8 6.5 16.2 5.5 14.8 5.5L8.5 9H5C3.9 9 3 9.9 3 11V13C3 14.1 3.9 15 5 15H6V19C6 19.6 6.4 20 7 20H8C8.6 20 9 19.6 9 19V15H8.5L14.8 18.5C16.2 18.5 17.8 17.5 18.5 15.5V8.5Z"
                          fill="#ffffff"
                        />
                        <path
                          d="M20.5 9.5C21.4 10.2 22 11.1 22 12C22 12.9 21.4 13.8 20.5 14.5"
                          stroke="#ffffff"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>

                    {/* Smooth curves emerging from behind the orb */}
                    <svg
                      className={styles["omni-connector-svg"]}
                      width="95"
                      height="180"
                      viewBox="0 0 95 180"
                      fill="none"
                    >
                      <path
                        d="M 0 90 C 45 90, 50 18, 95 18"
                        stroke="#c7d2fe"
                        strokeWidth="1.3"
                        strokeDasharray="2.5 3"
                      />
                      <path
                        d="M 0 90 C 45 90, 50 54, 95 54"
                        stroke="#c7d2fe"
                        strokeWidth="1.3"
                        strokeDasharray="2.5 3"
                      />
                      <path
                        d="M 0 90 L 95 90"
                        stroke="#c7d2fe"
                        strokeWidth="1.3"
                        strokeDasharray="2.5 3"
                      />
                      <path
                        d="M 0 90 C 45 90, 50 126, 95 126"
                        stroke="#c7d2fe"
                        strokeWidth="1.3"
                        strokeDasharray="2.5 3"
                      />
                      <path
                        d="M 0 90 C 45 90, 50 162, 95 162"
                        stroke="#c7d2fe"
                        strokeWidth="1.3"
                        strokeDasharray="2.5 3"
                      />
                    </svg>

                    <div className={styles["omni-channels-list"]}>
                      <div className={styles["omni-pill"]}>
                        <span className={styles["dot-blue"]} />
                        <span className={styles["omni-pill-name"]}>SMS</span>
                        <span className={styles["omni-pill-status"]}>Active</span>
                      </div>
                      <div className={styles["omni-pill"]}>
                        <span className={styles["dot-green"]} />
                        <span className={styles["omni-pill-name"]}>WhatsApp</span>
                        <span className={styles["omni-pill-status"]}>Active</span>
                      </div>
                      <div className={styles["omni-pill"]}>
                        <span className={styles["dot-blue-alt"]} />
                        <span className={styles["omni-pill-name"]}>RCS</span>
                        <span className={styles["omni-pill-status"]}>Active</span>
                      </div>
                      <div className={styles["omni-pill"]}>
                        <span className={styles["dot-purple"]} />
                        <span className={styles["omni-pill-name"]}>Email</span>
                        <span className={styles["omni-pill-status"]}>Active</span>
                      </div>
                      <div className={styles["omni-pill"]}>
                        <span className={styles["dot-green-alt"]} />
                        <span className={styles["omni-pill-name"]}>Voice</span>
                        <span className={styles["omni-pill-status"]}>Active</span>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                id: "camp-segmentation",
                title: "Audience Segmentation",
                description:
                  "Create target groups using available customer attributes, consent status, engagement history, and business-defined criteria.",
                renderVisual: () => (
                  <div className={styles["audience-visual"]}>
                    <div className={styles["segment-pills"]}>
                      <span className={`${styles["seg-pill"]} ${styles["seg-new"]}`}>New</span>
                      <span className={`${styles["seg-pill"]} ${styles["seg-ret"]}`}>Returning</span>
                      <span className={`${styles["seg-pill"]} ${styles["seg-high"]}`}>High-value</span>
                      <span className={`${styles["seg-pill"]} ${styles["seg-inact"]}`}>Inactive</span>
                    </div>
                    <div className={styles["segment-bar"]}>
                      <span className={styles["bar-new"]} style={{ width: "24%" }} />
                      <span className={styles["bar-ret"]} style={{ width: "34%" }} />
                      <span className={styles["bar-high"]} style={{ width: "24%" }} />
                      <span className={styles["bar-inact"]} style={{ width: "18%" }} />
                    </div>
                    <div className={styles["segment-filters"]}>
                      <div className={styles["filter-chip"]}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                          <line x1="3" y1="6" x2="21" y2="6"/>
                          <path d="M16 10a4 4 0 0 1-8 0"/>
                        </svg>
                        <span>Last purchase</span>
                      </div>
                      <div className={styles["filter-chip"]}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                          <circle cx="12" cy="10" r="3"/>
                        </svg>
                        <span>City</span>
                      </div>
                      <div className={styles["filter-chip"]}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        <span>Opted-in</span>
                      </div>
                    </div>
                    <p className={styles["segment-caption"]}>
                      Audience built from available customer data and consent status
                    </p>
                  </div>
                ),
              },
            ],
          },
          {
            rowClass: styles["feature-row-middle"],
            cards: [
              {
                id: "camp-personalization",
                title: "AI-Assisted Personalization",
                description:
                  "Generate or refine message content for different audiences, subject to approved templates, channel policies, and platform capabilities.",
                renderVisual: () => (
                  <div className={styles["personalization-wrap"]}>
                    <div className={styles["pers-message-box"]}>
                      <p className={styles["pers-draft-text"]}>
                        Hi <span className={styles["pers-var"]}>&#123;first_name&#125;</span>, your <span className={styles["pers-var"]}>&#123;last_item&#125;</span> offer is ready.
                      </p>
                      <div className={styles["pers-ai-badge"]}>
                        <span>✦</span> AI-assisted draft
                      </div>
                    </div>
                    <div className={styles["pers-vars-list"]}>
                      <div className={styles["pers-var-item"]}>
                        <span>Name</span>
                        <span className={styles["check-green"]}>✓</span>
                      </div>
                      <div className={styles["pers-var-item"]}>
                        <span>Last purchase</span>
                        <span className={styles["check-green"]}>✓</span>
                      </div>
                      <div className={styles["pers-var-item"]}>
                        <span>City</span>
                        <span className={styles["check-green"]}>✓</span>
                      </div>
                      <div className={styles["pers-template-tag"]}>Approved template</div>
                    </div>
                  </div>
                ),
              },
              {
                id: "camp-journeys",
                title: "Automated Customer Journeys",
                description:
                  "Set up trigger-based communication, scheduled follow-ups, and multi-step workflows based on defined customer actions or events.",
                renderVisual: () => (
                  <div className={styles["journey-wrap"]}>
                    <div className={styles["journey-step"]}>
                      <div className={`${styles["journey-circle"]} ${styles["circle-trigger"]}`}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                        </svg>
                      </div>
                      <div className={styles["journey-title"]}>Sign-up</div>
                      <div className={styles["journey-sub"]}>Trigger</div>
                    </div>

                    <div className={styles["journey-line"]} />

                    <div className={styles["journey-step"]}>
                      <div className={`${styles["journey-circle"]} ${styles["circle-delay"]}`}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                      </div>
                      <div className={styles["journey-title"]}>Wait 1 day</div>
                      <div className={styles["journey-sub"]}>Delay</div>
                    </div>

                    <div className={styles["journey-line"]} />

                    <div className={styles["journey-step"]}>
                      <div className={`${styles["journey-circle"]} ${styles["circle-wa"]}`}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                        </svg>
                      </div>
                      <div className={styles["journey-title"]}>WhatsApp</div>
                      <div className={styles["journey-sub"]}>Message</div>
                    </div>

                    <div className={styles["journey-line"]} />

                    <div className={styles["journey-step"]}>
                      <div className={`${styles["journey-circle"]} ${styles["circle-email"]}`}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      </div>
                      <div className={styles["journey-title"]}>Email</div>
                      <div className={styles["journey-sub"]}>Follow-up</div>
                    </div>
                  </div>
                ),
              },
              {
                id: "camp-scheduling",
                title: "Campaign Scheduling",
                description:
                  "Plan campaign delivery according to business requirements, audience time zones, and available scheduling controls.",
                renderVisual: () => (
                  <div className={styles["scheduling-wrap"]}>
                    <div className={styles["sched-days-row"]}>
                      <span className={styles["sched-day"]}>M</span>
                      <span className={styles["sched-day"]}>T</span>
                      <span className={styles["sched-day"]}>W</span>
                      <span className={styles["sched-day"]}>T</span>
                      <span className={`${styles["sched-day"]} ${styles["sched-day-active"]}`}>F</span>
                      <span className={styles["sched-day"]}>S</span>
                      <span className={styles["sched-day"]}>S</span>
                    </div>
                    <div className={styles["sched-pills-row"]}>
                      <div className={styles["sched-time-pill"]}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        <span>4:30 PM</span>
                      </div>
                      <div className={styles["sched-tz-pill"]}>IST</div>
                      <div className={styles["sched-loc-pill"]}>Audience local time</div>
                    </div>
                    <p className={styles["sched-caption"]}>
                      Plan delivery to business requirements and time zones
                    </p>
                  </div>
                ),
              },
            ],
          },
          {
            rowClass: styles["feature-row-middle"],
            cards: [
              {
                id: "camp-followups",
                title: "Intelligent Follow-Ups",
                description:
                  "Configure follow-up communication based on delivery status, engagement events, customer responses, or other supported triggers.",
                renderVisual: () => (
                  <div className={styles["followup-wrap"]}>
                    <div className={styles["followup-row"]}>
                      <div className={styles["followup-left"]}>
                        <div className={styles["followup-icon-check"]}>
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <div className={styles["followup-text"]}>
                          <div className={styles["followup-name"]}>SMS sent</div>
                          <div className={styles["followup-sub"]}>10:30 am</div>
                        </div>
                      </div>
                      <span className={styles["followup-badge-deliv"]}>Delivered</span>
                    </div>

                    <div className={styles["followup-row"]}>
                      <div className={styles["followup-left"]}>
                        <div className={styles["followup-icon-warn"]}>
                          <span className={styles["circle-orange"]} />
                        </div>
                        <div className={styles["followup-text"]}>
                          <div className={styles["followup-name"]}>Unread after 24h</div>
                          <div className={styles["followup-sub"]}>Condition met</div>
                        </div>
                      </div>
                      <span className={styles["followup-badge-unread"]}>If unread</span>
                    </div>

                    <div className={styles["followup-row"]}>
                      <div className={styles["followup-left"]}>
                        <div className={styles["followup-icon-chat"]}>
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2.5">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                          </svg>
                        </div>
                        <div className={styles["followup-text"]}>
                          <div className={styles["followup-name"]}>WhatsApp follow-up</div>
                          <div className={styles["followup-sub"]}>Auto-scheduled</div>
                        </div>
                      </div>
                      <span className={styles["followup-badge-auto"]}>Auto</span>
                    </div>
                  </div>
                ),
              },
              {
                id: "camp-analytics",
                title: "Campaign Performance Analytics",
                description:
                  "Track available metrics such as submitted messages, delivery rates, clicks, responses, conversions, failures, and campaign costs.",
                renderVisual: () => (
                  <div className={styles["camp-analytics-wrap"]}>
                    <div className={styles["camp-legend-row"]}>
                      <div className={styles["legend-item"]}>
                        <span className={`${styles["legend-dot"]} ${styles["dot-blue"]}`} />
                        <span>Delivered</span>
                      </div>
                      <div className={styles["legend-item"]}>
                        <span className={`${styles["legend-dot"]} ${styles["dot-purple"]}`} />
                        <span>Clicks</span>
                      </div>
                      <div className={styles["legend-item"]}>
                        <span className={`${styles["legend-dot"]} ${styles["dot-green"]}`} />
                        <span>Conversions</span>
                      </div>
                    </div>
                    <div className={styles["camp-bars-row"]}>
                      <div className={styles["camp-bar"]} style={{ height: "26px" }} />
                      <div className={styles["camp-bar"]} style={{ height: "46px" }} />
                      <div className={styles["camp-bar"]} style={{ height: "30px" }} />
                      <div className={styles["camp-bar"]} style={{ height: "62px" }} />
                      <div className={styles["camp-bar"]} style={{ height: "38px" }} />
                      <div className={styles["camp-bar"]} style={{ height: "54px" }} />
                      <div className={styles["camp-bar"]} style={{ height: "42px" }} />
                      <div className={styles["camp-bar"]} style={{ height: "70px" }} />
                      <div className={styles["camp-bar"]} style={{ height: "48px" }} />
                      <div className={styles["camp-bar"]} style={{ height: "82px" }} />
                      <div className={styles["camp-bar"]} style={{ height: "66px" }} />
                    </div>
                  </div>
                ),
              },
              {
                id: "camp-compliance",
                title: "Template and Compliance Management",
                description:
                  "Manage approved messaging templates, opt-in requirements, suppression lists, and applicable channel-specific policies.",
                renderVisual: () => (
                  <div className={styles["compliance-wrap"]}>
                    <div className={styles["compliance-shield"]}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <polyline points="9 12 11 14 15 10" />
                      </svg>
                    </div>
                    <div className={styles["compliance-rows"]}>
                      <div className={styles["comp-row"]}>
                        <div className={styles["comp-label"]}>
                          <span className={styles["check-green"]}>✓</span>
                          <span>Approved template</span>
                        </div>
                        <span className={styles["comp-status-tag"]}>Approved</span>
                      </div>
                      <div className={styles["comp-row"]}>
                        <div className={styles["comp-label"]}>
                          <span className={styles["check-green"]}>✓</span>
                          <span>Opt-in requirements</span>
                        </div>
                        <span className={styles["comp-status-tag"]}>Verified</span>
                      </div>
                      <div className={styles["comp-row"]}>
                        <div className={styles["comp-label"]}>
                          <span className={styles["check-green"]}>✓</span>
                          <span>Suppression list</span>
                        </div>
                        <span className={styles["comp-status-tag"]}>Applied</span>
                      </div>
                    </div>
                  </div>
                ),
              },
            ],
          },
        ];

                  case "conversations":
        return [
          {
            rowClass: styles["feature-row-top"],
            cards: [
              {
                id: "conv-workspace",
                title: "Unified Conversation Workspace",
                description:
                  "Manage customer interactions across enabled channels, which may include WhatsApp, Instagram DMs, Facebook Messenger, RCS, Email, WebChat, SMS, and Voice.",
                renderVisual: () => (
                  <div className={styles["conv-workspace-visual"]}>
                    <div className={styles["conv-inbox-pill"]}>
                      <span>✦</span> Unified inbox
                    </div>
                    <svg
                      className={styles["conv-connector-svg"]}
                      width="55"
                      height="100"
                      viewBox="0 0 55 100"
                      fill="none"
                    >
                      <path
                        d="M 0 50 C 25 50, 30 16, 55 16"
                        stroke="#c7d2fe"
                        strokeWidth="1.3"
                        strokeDasharray="2.5 3"
                      />
                      <path
                        d="M 0 50 C 25 50, 30 50, 55 50"
                        stroke="#c7d2fe"
                        strokeWidth="1.3"
                        strokeDasharray="2.5 3"
                      />
                      <path
                        d="M 0 50 C 25 50, 30 84, 55 84"
                        stroke="#c7d2fe"
                        strokeWidth="1.3"
                        strokeDasharray="2.5 3"
                      />
                    </svg>
                    <div className={styles["conv-channels-group"]}>
                      <div className={styles["conv-channels-row"]}>
                        <span className={styles["conv-chan-chip"]}>
                          <span className={styles["dot-wa-circle"]} /> WhatsApp
                        </span>
                        <span className={styles["conv-chan-chip"]}>
                          <span className={styles["dot-insta-circle"]} /> Instagram DM
                        </span>
                        <span className={styles["conv-chan-chip"]}>
                          <span className={styles["dot-fb-circle"]} /> Messenger
                        </span>
                        <span className={styles["conv-chan-chip"]}>
                          <span className={styles["dot-rcs-circle"]} /> RCS
                        </span>
                      </div>
                      <div className={styles["conv-channels-row"]}>
                        <span className={styles["conv-chan-chip"]}>
                          <span className={styles["dot-email-circle"]} /> Email
                        </span>
                        <span className={styles["conv-chan-chip"]}>
                          <span className={styles["dot-webchat-circle"]} /> WebChat
                        </span>
                        <span className={styles["conv-chan-chip"]}>
                          <span className={styles["dot-sms-circle"]} /> SMS
                        </span>
                      </div>
                      <div className={styles["conv-bottom-chip"]}>
                        All conversations in one workspace
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                id: "conv-intent",
                title: "AI-Powered Intent Recognition",
                description:
                  "Identify customer intent from incoming messages to help determine the appropriate response, workflow, or destination.",
                renderVisual: () => (
                  <div className={styles["intent-visual"]}>
                    <div className={styles["intent-left"]}>
                      <div className={styles["intent-query-bubble"]}>
                        &ldquo;Where is my order?&rdquo;
                      </div>
                      <div className={styles["intent-tag-pill"]}>
                        <span>✦</span> Intent detected
                      </div>
                    </div>
                    <div className={styles["intent-arrow"]}>→</div>
                    <div className={styles["intent-right-list"]}>
                      <div className={`${styles["intent-item"]} ${styles["intent-item-active"]}`}>
                        <span className={styles["intent-name"]}>Order status</span>
                        <div className={styles["intent-bar-track"]}>
                          <div className={styles["intent-bar-fill-high"]} />
                        </div>
                      </div>
                      <div className={styles["intent-item"]}>
                        <span className={styles["intent-name"]}>Refund</span>
                        <div className={styles["intent-bar-track"]}>
                          <div className={styles["intent-bar-fill-low"]} style={{ width: "15%" }} />
                        </div>
                      </div>
                      <div className={styles["intent-item"]}>
                        <span className={styles["intent-name"]}>Delivery</span>
                        <div className={styles["intent-bar-track"]}>
                          <div className={styles["intent-bar-fill-low"]} style={{ width: "30%" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                ),
              },
            ],
          },
          {
            rowClass: styles["feature-row-middle"],
            cards: [
              {
                id: "conv-assistance",
                title: "Context-Aware Response Assistance",
                description:
                  "Generate suggested responses using available conversation history and approved knowledge sources, subject to the enabled AI capabilities.",
                renderVisual: () => (
                  <div className={styles["assist-visual"]}>
                    <div className={styles["assist-box"]}>
                      <div className={styles["assist-eyebrow"]}>
                        <span>✦</span> SUGGESTED REPLY
                      </div>
                      <p className={styles["assist-text"]}>
                        Your order ships tomorrow — track it with the link below.
                      </p>
                    </div>
                    <div className={styles["assist-actions"]}>
                      <span className={styles["assist-btn-use"]}>Use reply</span>
                      <span className={styles["assist-badge-source"]}>
                        From approved knowledge
                      </span>
                    </div>
                  </div>
                ),
              },
              {
                id: "conv-execution",
                title: "AI Agent Workflow Execution",
                description:
                  "Use configured AI agents and business rules to perform supported tasks, retrieve permitted information, and initiate approved workflows.",
                renderVisual: () => (
                  <div className={styles["workflow-visual"]}>
                    <div className={styles["wf-step-item"]}>
                      <div className={styles["wf-step-left"]}>
                        <span className={styles["wf-icon-check"]}>✓</span>
                        <span className={styles["wf-step-title"]}>Retrieve order details</span>
                      </div>
                      <span className={styles["wf-step-status"]}>Done</span>
                    </div>
                    <div className={styles["wf-step-item"]}>
                      <div className={styles["wf-step-left"]}>
                        <span className={styles["wf-icon-check"]}>✓</span>
                        <span className={styles["wf-step-title"]}>Check return policy</span>
                      </div>
                      <span className={styles["wf-step-status"]}>Done</span>
                    </div>
                    <div className={`${styles["wf-step-item"]} ${styles["wf-step-active"]}`}>
                      <div className={styles["wf-step-left"]}>
                        <span className={styles["wf-icon-arrow"]}>➤</span>
                        <span className={styles["wf-step-title"]}>Send update</span>
                      </div>
                      <div className={styles["wf-progress-bar"]}>
                        <div className={styles["wf-progress-fill"]} />
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                id: "conv-handover",
                title: "Seamless Human Handover",
                description:
                  "Transfer conversations to human agents when needed, preserving relevant context and conversation history where supported.",
                renderVisual: () => (
                  <div className={styles["handover-visual"]}>
                    <div className={styles["handover-flow"]}>
                      <div className={styles["handover-orb-ai"]}>AI</div>
                      <div className={styles["handover-connector"]}>
                        <span className={styles["handover-pill-badge"]}>Context passed ✓</span>
                      </div>
                      <div className={styles["handover-orb-agent"]}>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#ffffff"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </div>
                    </div>
                    <div className={styles["handover-tags"]}>
                      <span className={styles["ho-tag"]}>Summary</span>
                      <span className={styles["ho-tag"]}>History</span>
                      <span className={styles["ho-tag"]}>Intent</span>
                      <span className={`${styles["ho-tag"]} ${styles["ho-tag-green"]}`}>
                        Agent joined
                      </span>
                    </div>
                  </div>
                ),
              },
            ],
          },
          {
            rowClass: styles["feature-row-middle"],
            cards: [
              {
                id: "conv-routing",
                title: "Intelligent Routing",
                description:
                  "Route conversations based on configured criteria such as topic, team, availability, or customer requirements.",
                renderVisual: () => (
                  <div className={styles["routing-visual"]}>
                    <div className={styles["routing-agent-row"]}>
                      <div className={styles["routing-avatar-blue"]}>A</div>
                      <div className={styles["routing-info"]}>
                        <div className={styles["routing-name"]}>Asha</div>
                        <div className={styles["routing-sub"]}>Billing · Available</div>
                      </div>
                      <div className={styles["routing-track"]}>
                        <div className={styles["routing-fill"]} style={{ width: "45%" }} />
                      </div>
                    </div>
                    <div className={styles["routing-agent-row"]}>
                      <div className={styles["routing-avatar-purple"]}>R</div>
                      <div className={styles["routing-info"]}>
                        <div className={styles["routing-name"]}>Rahul</div>
                        <div className={styles["routing-sub"]}>Sales · Busy</div>
                      </div>
                      <div className={styles["routing-track"]}>
                        <div className={styles["routing-fill-purple"]} style={{ width: "80%" }} />
                      </div>
                    </div>
                    <div className={styles["routing-tags-row"]}>
                      <span className={styles["routing-tag-blue"]}>Skill: Billing</span>
                      <span className={styles["routing-tag-green"]}>→ Asha</span>
                    </div>
                  </div>
                ),
              },
              {
                id: "conv-history",
                title: "Complete Conversation History",
                description:
                  "Help agents understand previous interactions and maintain continuity across supported channels and connected systems.",
                renderVisual: () => (
                  <div className={styles["history-timeline-visual"]}>
                    <div className={styles["hist-row"]}>
                      <div className={`${styles["hist-icon"]} ${styles["hist-icon-green"]}`}>
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                        </svg>
                      </div>
                      <div className={styles["hist-text"]}>
                        <div className={styles["hist-title"]}>Message received</div>
                        <div className={styles["hist-sub"]}>WhatsApp · 10:02 AM</div>
                      </div>
                    </div>
                    <div className={styles["hist-line"]} />
                    <div className={styles["hist-row"]}>
                      <div className={`${styles["hist-icon"]} ${styles["hist-icon-lavender"]}`}>
                        <span>✦</span>
                      </div>
                      <div className={styles["hist-text"]}>
                        <div className={styles["hist-title"]}>AI replied</div>
                        <div className={styles["hist-sub"]}>Intent: order status</div>
                      </div>
                    </div>
                    <div className={styles["hist-line"]} />
                    <div className={styles["hist-row"]}>
                      <div className={`${styles["hist-icon"]} ${styles["hist-icon-purple"]}`}>
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#6366f1"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </div>
                      <div className={styles["hist-text"]}>
                        <div className={styles["hist-title"]}>Agent joined</div>
                        <div className={styles["hist-sub"]}>Context available</div>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                id: "conv-analytics",
                title: "Conversation Analytics",
                description:
                  "Track available metrics such as conversation volumes, response times, resolution outcomes, handovers, and agent performance.",
                renderVisual: () => (
                  <div className={styles["conv-analytics-visual"]}>
                    <div className={styles["conv-legend-row"]}>
                      <div className={styles["conv-legend-item"]}>
                        <span className={`${styles["conv-dot"]} ${styles["dot-blue"]}`} />
                        <span>Volume</span>
                      </div>
                      <div className={styles["conv-legend-item"]}>
                        <span className={`${styles["conv-dot"]} ${styles["dot-purple"]}`} />
                        <span>Handovers</span>
                      </div>
                      <div className={styles["conv-legend-item"]}>
                        <span className={`${styles["conv-dot"]} ${styles["dot-green"]}`} />
                        <span>Resolved</span>
                      </div>
                    </div>
                    <div className={styles["conv-bars-container"]}>
                      <div className={styles["conv-bar"]} style={{ height: "30px", background: "#6366f1" }} />
                      <div className={styles["conv-bar"]} style={{ height: "46px", background: "#6366f1" }} />
                      <div className={styles["conv-bar"]} style={{ height: "34px", background: "#a855f7" }} />
                      <div className={styles["conv-bar"]} style={{ height: "58px", background: "#6366f1" }} />
                      <div className={styles["conv-bar"]} style={{ height: "38px", background: "#6366f1" }} />
                      <div className={styles["conv-bar"]} style={{ height: "70px", background: "#a855f7" }} />
                      <div className={styles["conv-bar"]} style={{ height: "44px", background: "#6366f1" }} />
                      <div className={styles["conv-bar"]} style={{ height: "82px", background: "#6366f1" }} />
                    </div>
                  </div>
                ),
              },
            ],
          },
        ];

      case "leads":
        return [
          {
            rowClass: styles["feature-row-middle"],
            cards: [
              {
                id: "lead-capture",
                title: "Centralized Lead Capture",
                description:
                  "Capture and organize leads from connected websites, landing pages, campaigns, APIs, and other supported sources in one centralized system.",
                renderVisual: () => (
                  <div className={styles["lead-capture-visual"]}>
                    <div className={styles["lead-sources-col"]}>
                      <div className={styles["lead-source-chip"]}>
                        <span
                          className={`${styles["lead-source-dot"]} ${styles["dot-blue"]}`}
                        />
                        <span>Website</span>
                      </div>
                      <div className={styles["lead-source-chip"]}>
                        <span
                          className={`${styles["lead-source-dot"]} ${styles["dot-purple"]}`}
                        />
                        <span>Campaign</span>
                      </div>
                      <div className={styles["lead-source-chip"]}>
                        <span
                          className={`${styles["lead-source-dot"]} ${styles["dot-green"]}`}
                        />
                        <span>API</span>
                      </div>
                    </div>
                    <svg
                      className={styles["lead-capture-svg"]}
                      width="45"
                      height="75"
                      viewBox="0 0 45 75"
                      fill="none"
                    >
                      <path
                        d="M 0 12 C 22 12, 22 37.5, 45 37.5"
                        stroke="#cbd5e1"
                        strokeWidth="1.2"
                        strokeDasharray="2.5 2.5"
                      />
                      <path
                        d="M 0 37.5 C 22 37.5, 22 37.5, 45 37.5"
                        stroke="#cbd5e1"
                        strokeWidth="1.2"
                        strokeDasharray="2.5 2.5"
                      />
                      <path
                        d="M 0 63 C 22 63, 22 37.5, 45 37.5"
                        stroke="#cbd5e1"
                        strokeWidth="1.2"
                        strokeDasharray="2.5 2.5"
                      />
                    </svg>
                    <div className={styles["lead-record-card"]}>
                      <div className={styles["record-eyebrow"]}>LEAD RECORD</div>
                      <div className={styles["record-name"]}>Priya Sharma</div>
                      <div className={styles["record-sub"]}>Source: Website</div>
                      <span className={styles["record-tag-new"]}>New</span>
                    </div>
                  </div>
                ),
              },
              {
                id: "lead-qualification",
                title: "AI-Powered Lead Qualification",
                description:
                  "Analyze available lead information and engagement signals to help identify prospect intent, prioritize opportunities, and support sales qualification.",
                renderVisual: () => (
                  <div className={styles["lead-qual-visual"]}>
                    <div className={styles["qual-gauge-wrap"]}>
                      <svg
                        className={styles["qual-gauge-svg"]}
                        width="66"
                        height="66"
                        viewBox="0 0 66 66"
                      >
                        <circle
                          cx="33"
                          cy="33"
                          r="27"
                          fill="none"
                          stroke="#e2e8f0"
                          strokeWidth="5.5"
                        />
                        <circle
                          cx="33"
                          cy="33"
                          r="27"
                          fill="none"
                          stroke="url(#qualGrad)"
                          strokeWidth="5.5"
                          strokeDasharray="169.6"
                          strokeDashoffset="37.3"
                          strokeLinecap="round"
                          transform="rotate(-90 33 33)"
                        />
                        <defs>
                          <linearGradient id="qualGrad" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#6366f1" />
                            <stop offset="100%" stopColor="#a855f7" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className={styles["qual-gauge-inner"]}>
                        <span className={styles["qual-gauge-num"]}>78%</span>
                        <span className={styles["qual-gauge-lbl"]}>Score</span>
                      </div>
                    </div>
                    <div className={styles["qual-checklist"]}>
                      <div className={styles["qual-pill-status"]}>✦ Qualified</div>
                      <div className={styles["qual-check-row"]}>
                        <span className={styles["check-green"]}>✓</span>
                        <span>Intent signal</span>
                      </div>
                      <div className={styles["qual-check-row"]}>
                        <span className={styles["check-green"]}>✓</span>
                        <span>Budget fit</span>
                      </div>
                      <div className={styles["qual-check-row"]}>
                        <span className={styles["check-green"]}>✓</span>
                        <span>Timeline</span>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                id: "lead-assignment",
                title: "Intelligent Lead Assignment",
                description:
                  "Automatically distribute leads to the right sales representatives or teams using configurable rules such as location, product interest, lead source, territory, or workload.",
                renderVisual: () => (
                  <div className={styles["lead-assign-visual"]}>
                    <div className={styles["assign-pill-btn"]}>
                      <span>✦</span> New lead
                    </div>
                    <svg
                      className={styles["assign-svg-connector"]}
                      width="40"
                      height="70"
                      viewBox="0 0 40 70"
                      fill="none"
                    >
                      <path
                        d="M 0 35 C 20 35, 20 18, 40 18"
                        stroke="#cbd5e1"
                        strokeWidth="1.2"
                        strokeDasharray="2.5 2.5"
                      />
                      <path
                        d="M 0 35 C 20 35, 20 52, 40 52"
                        stroke="#cbd5e1"
                        strokeWidth="1.2"
                        strokeDasharray="2.5 2.5"
                      />
                    </svg>
                    <div className={styles["assign-targets-col"]}>
                      <div
                        className={`${styles["assign-agent-box"]} ${styles["agent-box-active"]}`}
                      >
                        <div className={styles["agent-box-info"]}>
                          <div className={styles["agent-box-name"]}>
                            Asha - Sales West
                          </div>
                          <div className={styles["agent-box-sub"]}>
                            Mumbai · Light workload
                          </div>
                        </div>
                        <span className={styles["check-green"]}>✓</span>
                      </div>
                      <div
                        className={`${styles["assign-agent-box"]} ${styles["agent-box-muted"]}`}
                      >
                        <div className={styles["agent-box-info"]}>
                          <div className={styles["agent-box-name"]}>
                            Rahul - Sales North
                          </div>
                          <div className={styles["agent-box-sub"]}>
                            Delhi · Busy
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ),
              },
            ],
          },
          {
            rowClass: styles["feature-row-middle"],
            cards: [
              {
                id: "lead-followups",
                title: "Automated Follow-Ups",
                description:
                  "Create follow-up workflows using WhatsApp, SMS, Email, Voice, or other enabled channels. Trigger reminders and communication based on lead status, activity, or predefined business rules.",
                renderVisual: () => (
                  <div className={styles["lead-followup-visual"]}>
                    <div className={styles["followup-step"]}>
                      <div
                        className={`${styles["followup-icon-wrap"]} ${styles["icon-wa"]}`}
                      >
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                        </svg>
                      </div>
                      <div className={styles["followup-title"]}>WhatsApp</div>
                      <div className={styles["followup-sub"]}>Day 1</div>
                    </div>
                    <div className={styles["followup-arrow-line"]}>
                      <span className={styles["arrow-head"]}>›</span>
                    </div>
                    <div className={styles["followup-step"]}>
                      <div
                        className={`${styles["followup-icon-wrap"]} ${styles["icon-sms"]}`}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                      </div>
                      <div className={styles["followup-title"]}>SMS</div>
                      <div className={styles["followup-sub"]}>Day 2</div>
                    </div>
                    <div className={styles["followup-arrow-line"]}>
                      <span className={styles["arrow-head"]}>›</span>
                    </div>
                    <div className={styles["followup-step"]}>
                      <div
                        className={`${styles["followup-icon-wrap"]} ${styles["icon-call"]}`}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </div>
                      <div className={styles["followup-title"]}>Call reminder</div>
                      <div className={styles["followup-sub"]}>Day 3</div>
                    </div>
                  </div>
                ),
              },
              {
                id: "lead-scoring",
                title: "Lead Scoring and Prioritization",
                description:
                  "Prioritize prospects using configurable scoring criteria, including engagement, source, profile information, and sales readiness. AI-assisted scoring can be used where supported.",
                renderVisual: () => (
                  <div className={styles["lead-score-visual"]}>
                    <div className={styles["score-row"]}>
                      <span
                        className={`${styles["score-pill"]} ${styles["pill-hot"]}`}
                      >
                        Hot
                      </span>
                      <div className={styles["score-track"]}>
                        <div
                          className={`${styles["score-fill"]} ${styles["fill-hot"]}`}
                          style={{ width: "92%" }}
                        />
                      </div>
                      <span className={styles["score-val"]}>92</span>
                    </div>
                    <div className={styles["score-row"]}>
                      <span
                        className={`${styles["score-pill"]} ${styles["pill-warm"]}`}
                      >
                        Warm
                      </span>
                      <div className={styles["score-track"]}>
                        <div
                          className={`${styles["score-fill"]} ${styles["fill-warm"]}`}
                          style={{ width: "64%" }}
                        />
                      </div>
                      <span className={styles["score-val"]}>64</span>
                    </div>
                    <div className={styles["score-row"]}>
                      <span
                        className={`${styles["score-pill"]} ${styles["pill-cold"]}`}
                      >
                        Cold
                      </span>
                      <div className={styles["score-track"]}>
                        <div
                          className={`${styles["score-fill"]} ${styles["fill-cold"]}`}
                          style={{ width: "31%" }}
                        />
                      </div>
                      <span className={styles["score-val"]}>31</span>
                    </div>
                  </div>
                ),
              },
              {
                id: "lead-history",
                title: "Complete Lead Interaction History",
                description:
                  "Maintain a consolidated view of lead details, previous interactions, campaign responses, follow-up activities, and sales updates wherever the relevant integrations are available.",
                renderVisual: () => (
                  <div className={styles["lead-history-visual"]}>
                    <div className={styles["lhist-row"]}>
                      <div
                        className={`${styles["lhist-icon"]} ${styles["icon-form"]}`}
                      >
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                        </svg>
                      </div>
                      <div className={styles["lhist-text"]}>
                        <div className={styles["lhist-title"]}>
                          Form submitted
                        </div>
                        <div className={styles["lhist-sub"]}>
                          Website · 10:02 AM
                        </div>
                      </div>
                    </div>
                    <div className={styles["lhist-line"]} />
                    <div className={styles["lhist-row"]}>
                      <div
                        className={`${styles["lhist-icon"]} ${styles["icon-wa-tint"]}`}
                      >
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                        </svg>
                      </div>
                      <div className={styles["lhist-text"]}>
                        <div className={styles["lhist-title"]}>
                          WhatsApp reply
                        </div>
                        <div className={styles["lhist-sub"]}>
                          Asked about pricing
                        </div>
                      </div>
                    </div>
                    <div className={styles["lhist-line"]} />
                    <div className={styles["lhist-row"]}>
                      <div
                        className={`${styles["lhist-icon"]} ${styles["icon-call-tint"]}`}
                      >
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </div>
                      <div className={styles["lhist-text"]}>
                        <div className={styles["lhist-title"]}>Call completed</div>
                        <div className={styles["lhist-sub"]}>Demo scheduled</div>
                      </div>
                    </div>
                  </div>
                ),
              },
            ],
          },
          {
            rowClass: styles["feature-row-middle"],
            cards: [
              {
                id: "lead-pipeline",
                title: "Lead Pipeline Management",
                description:
                  "Track leads through customizable stages such as New, Contacted, Qualified, Follow-Up, Opportunity, Converted, and Lost.",
                renderVisual: () => (
                  <div className={styles["lead-pipeline-visual"]}>
                    <div className={styles["pipe-stages-row"]}>
                      <span
                        className={`${styles["pipe-stage-chip"]} ${styles["stage-new"]}`}
                      >
                        New
                      </span>
                      <span
                        className={`${styles["pipe-stage-chip"]} ${styles["stage-contacted"]}`}
                      >
                        Contacted
                      </span>
                      <span
                        className={`${styles["pipe-stage-chip"]} ${styles["stage-qualified"]}`}
                      >
                        Qualified
                      </span>
                      <span
                        className={`${styles["pipe-stage-chip"]} ${styles["stage-converted"]}`}
                      >
                        Converted
                      </span>
                    </div>
                    <div className={styles["pipe-multi-bar"]}>
                      <div className={styles["bar-seg-blue"]} />
                      <div className={styles["bar-seg-purple"]} />
                      <div className={styles["bar-seg-amber"]} />
                      <div className={styles["bar-seg-green"]} />
                    </div>
                    <div className={styles["pipe-sub-row"]}>
                      <span className={styles["pipe-chip-lost"]}>Lost</span>
                      <span className={styles["pipe-subtext"]}>
                        Customizable stages · Follow-Up, Opportunity, Lost
                      </span>
                    </div>
                  </div>
                ),
              },
              {
                id: "lead-insights",
                title: "AI-Assisted Sales Insights",
                description:
                  "Help sales teams summarize lead interactions, identify pending actions, prepare follow-up messages, and surface opportunities requiring attention.",
                renderVisual: () => (
                  <div className={styles["lead-insights-visual"]}>
                    <div className={styles["insight-action-box"]}>
                      <div className={styles["insight-eyebrow"]}>
                        <span>✦</span> NEXT BEST ACTION
                      </div>
                      <p className={styles["insight-msg"]}>
                        Send a pricing follow-up on WhatsApp today.
                      </p>
                    </div>
                    <div className={styles["insight-buttons-row"]}>
                      <span className={styles["insight-btn-subtle"]}>
                        Summary ready
                      </span>
                      <span className={styles["insight-btn-primary"]}>
                        Draft message
                      </span>
                      <span className={styles["insight-btn-green"]}>
                        High intent
                      </span>
                    </div>
                  </div>
                ),
              },
              {
                id: "lead-analytics",
                title: "Lead Performance Analytics",
                description:
                  "Monitor lead volumes, source-wise performance, assignment status, follow-up compliance, conversion rates, and sales pipeline movement through available reports.",
                renderVisual: () => (
                  <div className={styles["lead-analytics-visual"]}>
                    <div className={styles["lanalytics-legend-row"]}>
                      <div className={styles["lanalytics-legend-group"]}>
                        <div className={styles["lanalytics-legend-item"]}>
                          <span
                            className={`${styles["lanalytics-dot"]} ${styles["dot-blue"]}`}
                          />
                          <span>Leads</span>
                        </div>
                        <div className={styles["lanalytics-legend-item"]}>
                          <span
                            className={`${styles["lanalytics-dot"]} ${styles["dot-green"]}`}
                          />
                          <span>Converted</span>
                        </div>
                      </div>
                      <span className={styles["lanalytics-badge-rate"]}>
                        Conversion ↑
                      </span>
                    </div>
                    <div className={styles["lanalytics-chart-bars"]}>
                      <div className={styles["lbar-group"]}>
                        <div
                          className={`${styles["lbar"]} ${styles["lbar-blue"]}`}
                          style={{ height: "30px" }}
                        />
                        <div
                          className={`${styles["lbar"]} ${styles["lbar-green"]}`}
                          style={{ height: "46px" }}
                        />
                      </div>
                      <div className={styles["lbar-group"]}>
                        <div
                          className={`${styles["lbar"]} ${styles["lbar-blue"]}`}
                          style={{ height: "38px" }}
                        />
                        <div
                          className={`${styles["lbar"]} ${styles["lbar-green"]}`}
                          style={{ height: "62px" }}
                        />
                      </div>
                      <div className={styles["lbar-group"]}>
                        <div
                          className={`${styles["lbar"]} ${styles["lbar-blue"]}`}
                          style={{ height: "44px" }}
                        />
                        <div
                          className={`${styles["lbar"]} ${styles["lbar-green"]}`}
                          style={{ height: "74px" }}
                        />
                      </div>
                      <div className={styles["lbar-group"]}>
                        <div
                          className={`${styles["lbar"]} ${styles["lbar-blue"]}`}
                          style={{ height: "50px" }}
                        />
                        <div
                          className={`${styles["lbar"]} ${styles["lbar-green"]}`}
                          style={{ height: "84px" }}
                        />
                      </div>
                    </div>
                  </div>
                ),
              },
            ],
          },
        ];

      case "ticketing":
      default:
        return [
          {
            rowClass: styles["feature-row-top"],
            cards: [
              {
                id: "ticket-creation",
                title: "AI-Powered Ticket Creation",
                description:
                  "Convert incoming customer interactions into structured support tickets with relevant customer details, conversation context, and issue summaries.",
                renderVisual: () => (
                  <div className={styles["tags-list"]}>
                    <span className={styles["tag-pill"]}>Customer Details</span>
                    <span className={styles["tag-pill"]}>Conversation context</span>
                    <span className={styles["tag-pill"]}>Issue summary</span>
                  </div>
                ),
              },
              {
                id: "categorization",
                title: "Intelligent Categorization and Prioritization",
                description:
                  "Classify tickets based on issue type, urgency, customer context, and configurable business rules.",
                renderVisual: () => (
                  <div className={styles["tags-list"]}>
                    <span className={`${styles["tag-pill"]} ${styles["pill-urgent"]}`}>
                      Urgent
                    </span>
                    <span className={`${styles["tag-pill"]} ${styles["pill-billing"]}`}>
                      Billing
                    </span>
                    <span className={`${styles["tag-pill"]} ${styles["pill-low"]}`}>
                      Low
                    </span>
                    <span className={`${styles["tag-pill"]} ${styles["pill-access"]}`}>
                      Access
                    </span>
                  </div>
                ),
              },
            ],
          },
          {
            rowClass: styles["feature-row-middle"],
            cards: [
              {
                id: "assignment",
                title: "Smart Ticket Assignment",
                description:
                  "Route tickets to the appropriate team or agent based on expertise, availability, workload, and predefined routing rules.",
                renderVisual: () => (
                  <div className={styles["assignment-workload"]}>
                    <div className={styles["agent-row"]}>
                      <div className={styles["agent-avatar"]}>A</div>
                      <span className={styles["agent-name"]}>Asha</span>
                      <div className={styles["progress-track"]}>
                        <div className={styles["progress-fill"]} style={{ width: "50%" }} />
                      </div>
                    </div>
                    <div className={styles["agent-row"]}>
                      <div className={styles["agent-avatar"]}>R</div>
                      <span className={styles["agent-name"]}>Rahul</span>
                      <div className={styles["progress-track"]}>
                        <div className={styles["progress-fill"]} style={{ width: "70%" }} />
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                id: "automated-responses",
                title: "Automated Responses and Resolution Assistance",
                description:
                  "Help agents respond faster with AI-generated suggestions, relevant knowledge articles, and automated handling of eligible routine requests.",
                renderVisual: () => (
                  <div className={styles["reply-ready-wrapper"]}>
                    <div className={styles["reply-ready-btn"]}>
                      <span className={styles["star-icon"]}>✦</span>
                      <span>Suggested reply ready</span>
                    </div>
                  </div>
                ),
              },
              {
                id: "sla-monitoring",
                title: "SLA Monitoring and Escalation",
                description:
                  "Track response and resolution deadlines, identify tickets at risk of breaching SLAs, and trigger alerts or escalations based on configured rules.",
                renderVisual: () => (
                  <div className={styles["sla-circle-wrap"]}>
                    <div className={styles["sla-radial"]}>
                      <svg width="60" height="60" viewBox="0 0 60 60">
                        <circle cx="30" cy="30" r="24" fill="none" stroke="#EEF2FF" strokeWidth="5" />
                        <circle
                          cx="30"
                          cy="30"
                          r="24"
                          fill="none"
                          stroke="#5E6FF9"
                          strokeWidth="5"
                          strokeDasharray="150.8"
                          strokeDashoffset="42.2"
                          strokeLinecap="round"
                          transform="rotate(-90 30 30)"
                        />
                      </svg>
                      <span className={styles["sla-percent"]}>72%</span>
                    </div>
                  </div>
                ),
              },
            ],
          },
          {
            rowClass: styles["feature-row-bottom"],
            cards: [
              {
                id: "conversation-history",
                title: "Complete Conversation History",
                description:
                  "Keep relevant customer interactions and ticket updates connected, giving agents the context they need to provide consistent support.",
                renderVisual: () => (
                  <div className={styles["timeline-list"]}>
                    <div className={styles["timeline-item"]}>
                      <span className={styles["bullet-dot"]} />
                      <span>Customer message received</span>
                    </div>
                    <div className={styles["timeline-item"]}>
                      <span className={styles["bullet-dot"]} />
                      <span>Ticket created &amp; routed</span>
                    </div>
                    <div className={styles["timeline-item"]}>
                      <span className={styles["bullet-dot"]} />
                      <span>Agent replied</span>
                    </div>
                  </div>
                ),
              },
              {
                id: "analytics-reporting",
                title: "Ticket Analytics and Reporting",
                description:
                  "Monitor ticket volumes, response times, resolution times, pending queues, SLA performance, and team productivity.",
                renderVisual: () => (
                  <div className={styles["chart-container"]}>
                    <div className={styles["bars-wrapper"]}>
                      <div className={styles["bar"]} style={{ height: "30px" }} />
                      <div className={styles["bar"]} style={{ height: "50px" }} />
                      <div className={styles["bar"]} style={{ height: "38px" }} />
                      <div className={styles["bar"]} style={{ height: "65px" }} />
                      <div className={styles["bar"]} style={{ height: "44px" }} />
                      <div className={styles["bar"]} style={{ height: "50px" }} />
                      <div className={styles["bar"]} style={{ height: "34px" }} />
                      <div className={styles["bar"]} style={{ height: "68px" }} />
                    </div>
                  </div>
                ),
              },
            ],
          },
        ];
    }
  };

  const featureRows = getFeatureRows();

  return (
    <div className={styles["agentic-feature-section"]}>
      <h6>{eyebrow}</h6>
      <h2>{title}</h2>

      <div className={styles["all-agentic-feature-cards"]}>
        {featureRows.map((row, rIdx) => (
          <div key={rIdx} className={row.rowClass}>
            {row.cards.map((card) => (
              <div
                key={card.id}
                className={`${styles["feature-card"]} ${
                  card.horizontal ? styles["feature-card-horizontal"] : ""
                }`}
              >
                <div className={styles["card-header"]}>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
                {card.renderVisual && (
                  <div className={styles["card-visual"]}>
                    {card.renderVisual()}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgenticFeature;
