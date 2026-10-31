"use client";
import React from "react";
import Link from "next/link";
import styles from "../../styles/ClickUseCases.module.scss";

const InstagramCase = () => {
  const useCaseCard = [
    {
      id: "product",
      link: "/",
      linktext: "Product",
      title: "Product Inquiry Assistant",
      detail: "Respond to product and service inquiries.",
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
          {/* ============ PHASE 1: LIST SELECTION (0s - 4.5s) ============ */}
          <div className="ig-step-container ig-step-a">
            <div
              className="ig-list-card"
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
                  background: "#ffffff",
                  border: "1px solid #E2E8F0",
                  borderRadius: "8px",
                  padding: "6px 10px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span
                  style={{
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    background: "#5E6FF9",
                    color: "#ffffff",
                    fontSize: "10px",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
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

              {/* Row 2: Appoin (Active highlight) */}
              <div
                className="ig-active-row"
                style={{
                  background: "#5E6FF9",
                  borderRadius: "8px",
                  padding: "6px 10px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  boxShadow: "0 2px 8px rgba(94, 111, 249, 0.35)",
                }}
              >
                <span
                  style={{
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.25)",
                    color: "#ffffff",
                    fontSize: "10px",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
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
                  background: "#ffffff",
                  border: "1px solid #E2E8F0",
                  borderRadius: "8px",
                  padding: "6px 10px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span
                  style={{
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    background: "#5E6FF9",
                    color: "#ffffff",
                    fontSize: "10px",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
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

          {/* ============ PHASE 2: INSTANT RESOLUTION (4.5s - 9s) ============ */}
          <div className="ig-step-container ig-step-b">
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
                maxWidth: "240px",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#0F172A",
                }}
              >
                Inquiry Answered in 120ms
              </span>
              <span
                style={{
                  fontSize: "10.5px",
                  fontWeight: 600,
                  color: "#10B981",
                  marginTop: "2px",
                }}
              >
                Product Specs & Catalog Shared
              </span>
              <div
                style={{
                  marginTop: "6px",
                  fontSize: "10px",
                  color: "#5E6FF9",
                  background: "#EEF2FF",
                  padding: "3px 8px",
                  borderRadius: "10px",
                  fontWeight: 600,
                }}
              >
                Instagram Direct AI Assistant
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "promotion",
      link: "/",
      linktext: "Promotion",
      title: "Promotion Engagement Assistant",
      detail: "Engage customers interested in social media promotions.",
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
          {/* ============ PHASE 1: CAMPAIGN TEMPLATE (0s - 4.5s) ============ */}
          <div className="ig-step-container ig-step-a">
            <div
              className="ig-browser-card"
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
              {/* Header Bar */}
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

              {/* Body lines & button */}
              <div style={{ padding: "10px 14px 14px" }}>
                <div
                  style={{
                    width: "78%",
                    height: "4px",
                    background: "#CBD5E1",
                    borderRadius: "2px",
                    margin: "0 auto 6px",
                  }}
                />
                <div
                  style={{
                    width: "55%",
                    height: "4px",
                    background: "#E2E8F0",
                    borderRadius: "2px",
                    margin: "0 auto 12px",
                  }}
                />

                <span
                  className="ig-campaign-btn"
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
                  Campaigns
                </span>
              </div>
            </div>
          </div>

          {/* ============ PHASE 2: PROMO DELIVERED (4.5s - 9s) ============ */}
          <div className="ig-step-container ig-step-b">
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
                Promo Offer Delivered
              </div>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#10B981",
                  marginTop: "4px",
                }}
              >
                ⚡ Story Ad & Reel Reply Triggered
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
                Instagram Campaign Flow Active
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "lead",
      link: "/",
      linktext: "Lead",
      title: "Instagram Lead Capture",
      detail: "Capture sales leads from Instagram DMs.",
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
          {/* ============ PHASE 1: LEAD WINDOW (0s - 4.5s) ============ */}
          <div className="ig-step-container ig-step-a">
            <div
              className="ig-browser-card"
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
              {/* Header Bar */}
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

              {/* Body lines */}
              <div style={{ padding: "16px 14px 18px" }}>
                <div
                  className="ig-line-shimmer"
                  style={{
                    width: "78%",
                    height: "5px",
                    background: "#CBD5E1",
                    borderRadius: "3px",
                    margin: "0 auto 8px",
                  }}
                />
                <div
                  style={{
                    width: "50%",
                    height: "5px",
                    background: "#E2E8F0",
                    borderRadius: "3px",
                    margin: "0 auto",
                  }}
                />
              </div>
            </div>
          </div>

          {/* ============ PHASE 2: LEAD CAPTURED (4.5s - 9s) ============ */}
          <div className="ig-step-container ig-step-b">
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
                📸 Instagram DM Lead Captured
              </div>
              <div style={{ fontSize: "10.5px", color: "#64748B", marginTop: "3px" }}>
                Verified Contact Synced to CRM
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
                High-Intent Prospect Qualified
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "discovery",
      link: "/",
      linktext: "Discovery",
      title: "Product Discovery Assistant",
      detail:
        "Support product discovery and purchase-related questions.",
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
          {/* ============ PHASE 1: LIST SELECTION (0s - 4.5s) ============ */}
          <div className="ig-step-container ig-step-a">
            <div
              className="ig-list-card"
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
              {/* Row 1 */}
              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid #E2E8F0",
                  borderRadius: "8px",
                  padding: "6px 10px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span
                  style={{
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    background: "#5E6FF9",
                    color: "#ffffff",
                    fontSize: "10px",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
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

              {/* Row 2: Appoin (Active highlight) */}
              <div
                className="ig-active-row"
                style={{
                  background: "#5E6FF9",
                  borderRadius: "8px",
                  padding: "6px 10px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  boxShadow: "0 2px 8px rgba(94, 111, 249, 0.35)",
                }}
              >
                <span
                  style={{
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.25)",
                    color: "#ffffff",
                    fontSize: "10px",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
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

              {/* Row 3 */}
              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid #E2E8F0",
                  borderRadius: "8px",
                  padding: "6px 10px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span
                  style={{
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    background: "#5E6FF9",
                    color: "#ffffff",
                    fontSize: "10px",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
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

          {/* ============ PHASE 2: DISCOVERY RESULT (4.5s - 9s) ============ */}
          <div className="ig-step-container ig-step-b">
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
                maxWidth: "240px",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#0F172A",
                }}
              >
                Product Recommendation Sent
              </span>
              <span
                style={{
                  fontSize: "10.5px",
                  fontWeight: 600,
                  color: "#10B981",
                  marginTop: "2px",
                }}
              >
                Interactive Catalog & Checkout Link
              </span>
              <div
                style={{
                  marginTop: "6px",
                  fontSize: "10px",
                  color: "#5E6FF9",
                  background: "#EEF2FF",
                  padding: "3px 8px",
                  borderRadius: "10px",
                  fontWeight: 600,
                }}
              >
                Instagram Shoppable DM Bot
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "route",
      link: "/",
      linktext: "Route",
      title: "Smart Inquiry Routing",
      detail: "Route inquiries to sales or customer service teams.",
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
          {/* ============ PHASE 1: CAMPAIGN TEMPLATE (0s - 4.5s) ============ */}
          <div className="ig-step-container ig-step-a">
            <div
              className="ig-browser-card"
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
              {/* Header Bar */}
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

              {/* Body lines & button */}
              <div style={{ padding: "10px 14px 14px" }}>
                <div
                  style={{
                    width: "78%",
                    height: "4px",
                    background: "#CBD5E1",
                    borderRadius: "2px",
                    margin: "0 auto 6px",
                  }}
                />
                <div
                  style={{
                    width: "55%",
                    height: "4px",
                    background: "#E2E8F0",
                    borderRadius: "2px",
                    margin: "0 auto 12px",
                  }}
                />

                <span
                  className="ig-campaign-btn"
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
                  Campaigns
                </span>
              </div>
            </div>
          </div>

          {/* ============ PHASE 2: ROUTED TO SPECIALIST (4.5s - 9s) ============ */}
          <div className="ig-step-container ig-step-b">
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
                Inquiry Routed to Sales Team
              </div>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#10B981",
                  marginTop: "4px",
                }}
              >
                ⚡ Intent-Based Conversation Assignment
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
                Queue Wait Time &lt; 5s
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "follow-up",
      link: "/",
      linktext: "Follow-up",
      title: "Workflow Follow-up Assistant",
      detail:
        "Follow up on eligible customer conversations through configured workflows.",
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
          {/* ============ PHASE 1: AUTOMATION WINDOW (0s - 4.5s) ============ */}
          <div className="ig-step-container ig-step-a">
            <div
              className="ig-browser-card"
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
              {/* Header Bar */}
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

              {/* Body lines */}
              <div style={{ padding: "16px 14px 18px" }}>
                <div
                  className="ig-line-shimmer"
                  style={{
                    width: "78%",
                    height: "5px",
                    background: "#CBD5E1",
                    borderRadius: "3px",
                    margin: "0 auto 8px",
                  }}
                />
                <div
                  style={{
                    width: "50%",
                    height: "5px",
                    background: "#E2E8F0",
                    borderRadius: "3px",
                    margin: "0 auto",
                  }}
                />
              </div>
            </div>
          </div>

          {/* ============ PHASE 2: FOLLOW-UP TRIGGERED (4.5s - 9s) ============ */}
          <div className="ig-step-container ig-step-b">
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
                🔄 Automated Follow-up Triggered
              </div>
              <div style={{ fontSize: "10.5px", color: "#64748B", marginTop: "3px" }}>
                Re-engaged Drop-off Conversations
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
                Multi-Step Instagram Workflow
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className={styles["click-use-cases"]}>
      {/* Inline animation keyframes for Instagram Use Cases simulation */}
      <style>{`
        /* Step Container Transitions (0s-4.5s and 4.5s-9s) */
        .ig-step-container {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          box-sizing: border-box;
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        @keyframes igVideoCycleA {
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

        @keyframes igVideoCycleB {
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

        .ig-step-a {
          animation: igVideoCycleA 9s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .ig-step-b {
          animation: igVideoCycleB 9s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        /* List Card Soft Float */
        @keyframes igListFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .ig-list-card {
          animation: igListFloat 3.2s ease-in-out infinite;
        }

        /* Active Row Pulse */
        @keyframes igActiveRowPulse {
          0%, 100% { box-shadow: 0 2px 8px rgba(94, 111, 249, 0.35); }
          50% { box-shadow: 0 4px 14px rgba(94, 111, 249, 0.6); }
        }
        .ig-active-row {
          animation: igActiveRowPulse 2.4s ease-in-out infinite;
        }

        /* Browser Card Soft Float */
        @keyframes igBrowserFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .ig-browser-card {
          animation: igBrowserFloat 3.2s ease-in-out infinite;
        }

        /* Campaign Button Pulse */
        @keyframes igCampaignBtnPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 2px 8px rgba(94, 111, 249, 0.35); }
          50% { transform: scale(1.06); box-shadow: 0 4px 14px rgba(94, 111, 249, 0.55); }
        }
        .ig-campaign-btn {
          animation: igCampaignBtnPulse 2.2s ease-in-out infinite;
        }

        /* Line Shimmer */
        @keyframes igLineShimmer {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        .ig-line-shimmer {
          animation: igLineShimmer 2s ease-in-out infinite;
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

export default InstagramCase;
