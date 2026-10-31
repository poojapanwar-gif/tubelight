"use client";
import React, { useState } from "react";
import styles from "../../styles/InsuranceMockup.module.scss";

const InsuranceMockup = () => {
  const [selectedOption, setSelectedOption] = useState("Download E-Card");
  const [claimStep, setClaimStep] = useState(2); // 1 = Intimated, 2 = Under review, 3 = Approved

  const options = [
    "Download E-Card",
    "Claim Status",
    "Network Hospitals",
    "Contact Us",
  ];

  const handleOptionClick = (opt) => {
    setSelectedOption(opt);
    if (opt === "Claim Status") {
      setClaimStep(2);
    }
  };

  const getProgressWidth = () => {
    if (claimStep === 1) return "25%";
    if (claimStep === 2) return "60%";
    if (claimStep === 3) return "100%";
    return "60%";
  };

  return (
    <div className={styles.mockupContainer} aria-hidden="true">
      {/* Phone Frame */}
      <div className={styles.phoneFrame}>
        {/* Phone Header */}
        <div className={styles.phoneHeader}>
          <div className={styles.avatar}>I</div>
          <div className={styles.headerInfo}>
            <div className={styles.headerTitleRow}>
              <span className={styles.headerTitle}>Insurance</span>
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
            <span className={styles.headerSub}>Virtual assistant</span>
          </div>
        </div>

        {/* Phone Body */}
        <div className={styles.phoneBody}>
          {/* Bot Message 1 */}
          <div className={styles.botCard}>
            <p className={styles.botText}>
              Welcome! Please enter your Employee ID to continue.
            </p>
          </div>

          {/* User Reply Bubble */}
          <div className={styles.userBubble}>
            <span>EMP•••482</span>
          </div>

          {/* Bot Message 2 */}
          <div className={styles.botCard}>
            <p className={styles.botTextWithMargin}>
              Verified ✓ What would you like to do?
            </p>
            <div className={styles.optionsGrid}>
              {options.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  className={`${styles.optionBtn} ${
                    selectedOption === opt ? styles.optionActive : ""
                  }`}
                  onClick={() => handleOptionClick(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Card 1: Health e-card (Top Right) */}
      <div className={`${styles.floatingCard} ${styles.cardTop}`}>
        <div className={styles.eCardTopRow}>
          <h4 className={styles.eCardTitle}>Health e-card</h4>
          <span className={styles.plusIcon} title="Add to wallet">
            +
          </span>
        </div>
        <div className={styles.eCardNumber}>•••• 4821</div>
        <div className={styles.eCardSub}>
          Member ID · Employee ID verified
        </div>
      </div>

      {/* Floating Card 2: Claim Status Timeline (Bottom Right) */}
      <div className={`${styles.floatingCard} ${styles.cardBottom}`}>
        <h4 className={styles.claimTitle}>Claim status</h4>

        <div className={styles.timelineRow}>
          {/* Step 1: Intimated */}
          <div
            className={styles.timelineStep}
            onClick={() => setClaimStep(1)}
            title="Click to view Intimated status"
          >
            <div className={styles.stepIconSuccess}>
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
            <span
              className={`${styles.stepLabel} ${
                claimStep === 1 ? styles.labelActive : ""
              }`}
            >
              Intimated
            </span>
          </div>

          {/* Step 2: Under review */}
          <div
            className={styles.timelineStep}
            onClick={() => setClaimStep(2)}
            title="Click to view Under review status"
          >
            <div
              className={
                claimStep >= 2 ? styles.stepIconActive : styles.stepIconPending
              }
            >
              {claimStep >= 2 ? (
                <span className={styles.innerDot} />
              ) : (
                <span className={styles.innerDotMuted} />
              )}
            </div>
            <span
              className={`${styles.stepLabel} ${
                claimStep === 2 ? styles.labelActive : ""
              }`}
            >
              Under review
            </span>
          </div>

          {/* Step 3: Approved */}
          <div
            className={styles.timelineStep}
            onClick={() => setClaimStep(3)}
            title="Click to view Approved status"
          >
            <div
              className={
                claimStep === 3
                  ? styles.stepIconSuccess
                  : styles.stepIconPending
              }
            >
              {claimStep === 3 ? (
                <svg viewBox="0 0 12 12" fill="none" width="8" height="8">
                  <path
                    d="M10 3L4.5 8.5L2 6"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <span className={styles.innerDotMuted} />
              )}
            </div>
            <span
              className={`${styles.stepLabel} ${
                claimStep === 3 ? styles.labelActive : ""
              }`}
            >
              Approved
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className={styles.progressBarTrack}>
          <div
            className={styles.progressBarFill}
            style={{ width: getProgressWidth() }}
          />
        </div>
      </div>
    </div>
  );
};

export default InsuranceMockup;

