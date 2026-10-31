"use client";
import React, { useState } from "react";
import styles from "../../styles/BankingMockup.module.scss";

const BankingMockup = () => {
  const [selectedLang, setSelectedLang] = useState("Hindi");
  const [activeService, setActiveService] = useState("Balance");

  const languages = ["Odia", "Hindi", "English"];

  const services = [
    {
      id: "balance",
      label: "Balance",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="16"
          height="16"
        >
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <circle cx="12" cy="12" r="2.5" />
          <path d="M6 12h.01M18 12h.01" />
        </svg>
      ),
    },
    {
      id: "mini_stmt",
      label: "Mini stmt",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="16"
          height="16"
        >
          <path d="M4 4v16a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1z" />
          <path d="M8 7h8M8 11h8M8 15h5" />
        </svg>
      ),
    },
    {
      id: "statement",
      label: "Statement",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="16"
          height="16"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      ),
    },
    {
      id: "locator",
      label: "Locator",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="16"
          height="16"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
    {
      id: "updates",
      label: "Updates",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="16"
          height="16"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <line x1="8" y1="10" x2="16" y2="10" />
        </svg>
      ),
    },
    {
      id: "support",
      label: "Support",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="16"
          height="16"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      ),
    },
  ];

  return (
    <div className={styles.mockupContainer} aria-hidden="true">
      {/* Phone Frame */}
      <div className={styles.phoneFrame}>
        {/* Phone Header */}
        <div className={styles.phoneHeader}>
          <div className={styles.avatar}>B</div>
          <div className={styles.headerInfo}>
            <div className={styles.headerTitleRow}>
              <span className={styles.headerTitle}>Bank</span>
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
            <span className={styles.headerSub}>Official business account</span>
          </div>
        </div>

        {/* Phone Body */}
        <div className={styles.phoneBody}>
          {/* Bot Message 1 */}
          <div className={styles.botCard}>
            <p className={styles.botText}>
              Welcome! Please enter the OTP sent by SMS to verify your mobile number.
            </p>
          </div>

          {/* User Reply Bubble (OTP masked dots) */}
          <div className={styles.userBubble}>
            <span>••••••</span>
          </div>

          {/* Bot Message 2 */}
          <div className={styles.botCard}>
            <p className={styles.botTextWithMargin}>
              Verified ✓ Please choose your language:
            </p>
            <div className={styles.langPillsRow}>
              {languages.map((lang) => (
                <button
                  key={lang}
                  type="button"
                  className={`${styles.langBtn} ${
                    selectedLang === lang ? styles.langActive : ""
                  }`}
                  onClick={() => setSelectedLang(lang)}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Card 1: 6 Banking Services (Top Right) */}
      <div className={`${styles.floatingCard} ${styles.cardTop}`}>
        <div className={styles.cardTopHeader}>
          <h4 className={styles.cardTitle}>6 banking services</h4>
          <span className={styles.cardSub}>All in one WhatsApp chat</span>
        </div>
        <div className={styles.servicesGrid}>
          {services.map((srv) => (
            <div
              key={srv.id}
              className={`${styles.serviceTile} ${
                activeService === srv.label ? styles.tileActive : ""
              }`}
              onClick={() => setActiveService(srv.label)}
              title={srv.label}
            >
              {srv.icon}
              <span className={styles.serviceTileLabel}>{srv.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Card 2: OTP Verified (Bottom Right) */}
      <div className={`${styles.floatingCard} ${styles.cardBottom}`}>
        <div className={styles.shieldHead}>
          <div className={styles.shieldIcon}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="16"
              height="16"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <div>
            <h4 className={styles.cardTitle}>OTP verified</h4>
            <span className={styles.cardSub}>End-to-end secure access</span>
          </div>
        </div>
        <div className={styles.badgesRow}>
          <span className={styles.cbsBadge}>CBS via APIs</span>
          <span className={styles.supportBadge}>24×7</span>
        </div>
      </div>
    </div>
  );
};

export default BankingMockup;

