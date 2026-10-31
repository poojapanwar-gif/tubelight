"use client";
import React, { useState } from "react";
import styles from "../../styles/OilCompanyMockup.module.scss";

const OilCompanyMockup = () => {
  const [selectedAction, setSelectedAction] = useState("Confirm");
  const [deliveryStatus, setDeliveryStatus] = useState("Delivered");

  return (
    <div className={styles.mockupContainer} aria-hidden="true">
      {/* Phone Frame */}
      <div className={styles.phoneFrame}>
        {/* Phone Header */}
        <div className={styles.phoneHeader}>
          <div className={styles.avatar}>L</div>
          <div className={styles.headerInfo}>
            <div className={styles.headerTitleRow}>
              <span className={styles.headerTitle}>Lubricants</span>
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
            <span className={styles.headerSub}>Customer engagement</span>
          </div>
        </div>

        {/* Phone Body */}
        <div className={styles.phoneBody}>
          {/* Bot Message 1 */}
          <div className={styles.botCard}>
            <p className={styles.botText}>
              Thank you for choosing us! Share a few details to claim your gift.
            </p>
            <div className={styles.tagsRow}>
              <span className={`${styles.stepTag} ${styles.tagCompleted}`}>
                Name ✓
              </span>
              <span className={`${styles.stepTag} ${styles.tagCompleted}`}>
                Date of birth ✓
              </span>
              <span className={`${styles.stepTag} ${styles.tagCurrent}`}>
                Address
              </span>
            </div>
          </div>

          {/* Bot Message 2 */}
          <div className={styles.botCard}>
            <p className={styles.botText}>Please confirm your delivery address.</p>
            <div className={styles.actionBtns}>
              <button
                type="button"
                className={`${styles.actionBtn} ${
                  selectedAction === "Confirm" ? styles.actionActive : ""
                }`}
                onClick={() => setSelectedAction("Confirm")}
              >
                Confirm
              </button>
              <button
                type="button"
                className={`${styles.actionBtn} ${
                  selectedAction === "Edit" ? styles.actionActive : ""
                }`}
                onClick={() => setSelectedAction("Edit")}
              >
                Edit
              </button>
            </div>
          </div>

          {/* User Reply Bubble */}
          <div className={styles.userBubble}>
            <span>{selectedAction}</span>
          </div>

          {/* Bot Message 3 */}
          <div className={styles.botCard}>
            <p className={styles.botText}>
              {selectedAction === "Confirm"
                ? "Gift dispatched! You'll get tracking updates here."
                : "Please enter your updated delivery address below."}
            </p>
          </div>
        </div>
      </div>

      {/* Floating Card 1: Gift Dispatched (Top Right) */}
      <div className={`${styles.floatingCard} ${styles.cardTop}`}>
        <div className={styles.cardTopHead}>
          <div className={styles.giftIcon}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              width="16"
              height="16"
            >
              <polyline points="20 12 20 22 4 22 4 12" />
              <rect x="2" y="7" width="20" height="5" />
              <line x1="12" y1="22" x2="12" y2="7" />
              <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
              <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
            </svg>
          </div>
          <div>
            <h4 className={styles.cardTitle}>Gift dispatched</h4>
            <span className={styles.cardSub}>Tracking ID TL•••482</span>
          </div>
        </div>
        <div className={styles.statusSteps}>
          {/* Step 1: Packed */}
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
            <span className={styles.stepLabel}>Packed</span>
          </div>

          {/* Step 2: Shipped */}
          <div className={styles.stepItem}>
            <div className={`${styles.stepDot} ${styles.dotActive}`}>
              <span className={styles.innerDot} />
            </div>
            <span className={styles.stepLabel}>Shipped</span>
          </div>

          {/* Step 3: Delivered */}
          <div className={styles.stepItem}>
            <div
              className={`${styles.stepDot} ${
                deliveryStatus === "Delivered"
                  ? styles.dotActive
                  : styles.dotPending
              }`}
            >
              {deliveryStatus === "Delivered" && (
                <span className={styles.innerDot} />
              )}
            </div>
            <span
              className={
                deliveryStatus === "Delivered"
                  ? styles.stepLabel
                  : styles.stepLabelMuted
              }
            >
              Delivered
            </span>
          </div>
        </div>
      </div>

      {/* Floating Card 2: Delivery Confirmation (Bottom Right) */}
      <div className={`${styles.floatingCard} ${styles.cardBottom}`}>
        <h4 className={styles.cardTitle}>Delivery confirmation</h4>
        <span className={styles.cardSub}>
          Interactive buttons for the customer
        </span>
        <div className={styles.confirmButtons}>
          <button
            type="button"
            className={styles.btnReceived}
            onClick={() => setDeliveryStatus("Delivered")}
          >
            Yes, received
          </button>
          <button
            type="button"
            className={styles.btnIssue}
            onClick={() => setDeliveryStatus("Pending")}
          >
            Report issue
          </button>
        </div>
      </div>
    </div>
  );
};

export default OilCompanyMockup;

