"use client";
import React, { useState } from "react";
import styles from "../../styles/ElectricUtilityMockup.module.scss";

const ElectricUtilityMockup = () => {
  const [selectedService, setSelectedService] = useState("No power complaint");

  const services = [
    "Account balance",
    "No power complaint",
    "Complaint status",
    "Duplicate bill (PDF)",
  ];

  const botResponses = {
    "No power complaint":
      "Your complaint is registered. We'll keep you updated here.",
    "Duplicate bill (PDF)":
      "Here is your latest bill. Tap the card to download.",
    "Account balance":
      "Your current outstanding balance is ₹ 1,420. Due date: 15th.",
    "Complaint status":
      "Your complaint #TL-8492 is currently In Progress.",
  };

  return (
    <div className={styles.mockupContainer} aria-hidden="true">
      {/* Phone Frame */}
      <div className={styles.phoneFrame}>
        {/* Phone Header */}
        <div className={styles.phoneHeader}>
          <div className={styles.avatar}>E</div>
          <div className={styles.headerInfo}>
            <div className={styles.headerTitleRow}>
              <span className={styles.headerTitle}>Electric Utility</span>
              <span className={styles.verifiedBadge}>
                <svg viewBox="0 0 12 12" fill="none" width="9" height="9">
                  <path
                    d="M10 3L4.5 8.5L2 6"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <span className={styles.headerSub}>Self-service</span>
          </div>
        </div>

        {/* Phone Body */}
        <div className={styles.phoneBody}>
          {/* Bot Message 1 */}
          <div className={styles.botCard}>
            <p className={styles.botText}>Welcome! Choose a service:</p>
            <div className={styles.optionsGrid}>
              {services.map((srv) => (
                <button
                  key={srv}
                  type="button"
                  className={`${styles.optionBtn} ${
                    selectedService === srv ? styles.optionActive : ""
                  }`}
                  onClick={() => setSelectedService(srv)}
                >
                  {srv}
                </button>
              ))}
            </div>
          </div>

          {/* User Reply Bubble */}
          <div className={styles.userBubble}>
            <span>{selectedService}</span>
          </div>

          {/* Bot Message 2 */}
          <div className={styles.botCard}>
            <p className={styles.botText}>
              {botResponses[selectedService] ||
                "Your request has been received. We'll update you shortly."}
            </p>
          </div>
        </div>
      </div>

      {/* Floating Card 1: Duplicate Bill (Top Right) */}
      <div className={`${styles.floatingCard} ${styles.cardTop}`}>
        <div className={styles.cardTopHead}>
          <div className={styles.lightningIcon}>
            <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          <div>
            <h4 className={styles.cardTitle}>Duplicate bill</h4>
            <span className={styles.cardSub}>PDF · downloaded in chat</span>
          </div>
        </div>
        <button
          type="button"
          className={styles.pdfBtn}
          onClick={() => setSelectedService("Duplicate bill (PDF)")}
        >
          Download PDF
        </button>
      </div>

      {/* Floating Card 2: Complaint Status (Bottom Right) */}
      <div className={`${styles.floatingCard} ${styles.cardBottom}`}>
        <div className={styles.cardBottomHead}>
          <h4 className={styles.cardTitle}>Complaint status</h4>
          <span className={styles.badgeGreen}>24×7</span>
        </div>
        <div className={styles.statusSteps}>
          {/* Step 1: Registered */}
          <div className={styles.stepItem}>
            <div className={`${styles.stepDot} ${styles.dotSuccess}`}>
              <svg viewBox="0 0 12 12" fill="none" width="8" height="8">
                <path
                  d="M10 3L4.5 8.5L2 6"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className={styles.stepLabel}>Registered</span>
          </div>

          {/* Step 2: Assigned */}
          <div className={styles.stepItem}>
            <div className={`${styles.stepDot} ${styles.dotActive}`}>
              <span className={styles.innerDot} />
            </div>
            <span className={styles.stepLabel}>Assigned</span>
          </div>

          {/* Step 3: Resolved */}
          <div className={styles.stepItem}>
            <div className={`${styles.stepDot} ${styles.dotPending}`} />
            <span className={styles.stepLabelMuted}>Resolved</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectricUtilityMockup;

