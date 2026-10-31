"use client";
import React, { useState } from "react";
import styles from "../../styles/HealthcareMockup.module.scss";

const HealthcareMockup = () => {
  const [selectedLocation, setSelectedLocation] = useState("Pune - Baner");
  const [selectedSlot, setSelectedSlot] = useState("10:30");

  const locations = ["Pune - Baner", "Pune - Kothrud", "Pune - Hinjewadi"];
  const timeSlots = ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30"];

  return (
    <div className={styles.mockupContainer} aria-hidden="true">
      {/* Phone Frame */}
      <div className={styles.phoneFrame}>
        {/* Phone Header */}
        <div className={styles.phoneHeader}>
          <div className={styles.avatar}>H</div>
          <div className={styles.headerInfo}>
            <div className={styles.headerTitleRow}>
              <span className={styles.headerTitle}>Healthcare</span>
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
            <span className={styles.headerSub}>Patient engagement</span>
          </div>
        </div>

        {/* Phone Body */}
        <div className={styles.phoneBody}>
          {/* Bot Message 1 */}
          <div className={styles.botCard}>
            <p className={styles.botText}>
              Welcome! Book an appointment in just a few taps.
            </p>
            <div className={styles.locationPills}>
              {locations.map((loc) => (
                <button
                  key={loc}
                  type="button"
                  className={`${styles.locationBtn} ${
                    selectedLocation === loc ? styles.btnActive : ""
                  }`}
                  onClick={() => setSelectedLocation(loc)}
                >
                  {loc}
                </button>
              ))}
            </div>
          </div>

          {/* User Reply Bubble */}
          <div className={styles.userBubble}>
            <span>{selectedLocation}</span>
          </div>

          {/* Bot Message 2 */}
          <div className={styles.botCard}>
            <p className={styles.botText}>Pick a time slot:</p>
            <div className={styles.slotsGrid}>
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  className={`${styles.slotBtn} ${
                    selectedSlot === slot ? styles.slotActive : ""
                  }`}
                  onClick={() => setSelectedSlot(slot)}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Card 1: Omnichannel engagement (Top Right) */}
      <div className={`${styles.floatingCard} ${styles.cardTop}`}>
        <h4 className={styles.cardTitle}>Omnichannel engagement</h4>
        <span className={styles.cardSub}>One platform across branches</span>
        <div className={styles.channelsRow}>
          <span className={`${styles.channelTag} ${styles.tagGreen}`}>
            WhatsApp
          </span>
          <span className={`${styles.channelTag} ${styles.tagBlue}`}>SMS</span>
          <span className={`${styles.channelTag} ${styles.tagGreen}`}>
            Voice
          </span>
          <span className={`${styles.channelTag} ${styles.tagPurple}`}>
            Email
          </span>
        </div>
      </div>

      {/* Floating Card 2: Appointment Confirmed (Bottom Right) */}
      <div className={`${styles.floatingCard} ${styles.cardBottom}`}>
        <div className={styles.confirmHead}>
          <div className={styles.calendarIcon}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              width="18"
              height="18"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </div>
          <div>
            <h4 className={styles.cardTitle}>Appointment confirmed</h4>
            <span className={styles.cardSub}>
              Mon · {selectedSlot} · {selectedLocation}
            </span>
          </div>
        </div>
        <div className={styles.supportBadge}>
          <span>150+ agents · live support</span>
        </div>
      </div>
    </div>
  );
};

export default HealthcareMockup;

