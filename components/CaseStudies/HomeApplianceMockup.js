"use client";
import React, { useState } from "react";
import styles from "../../styles/HomeApplianceMockup.module.scss";

const HomeApplianceMockup = () => {
  const [selectedService, setSelectedService] = useState("Register complaint");
  const [selectedCategory, setSelectedCategory] = useState("Air conditioner");

  const services = [
    "Register complaint",
    "Request demo",
    "Product details",
  ];

  const categories = [
    "Air conditioner",
    "Refrigerator",
    "Washing machine",
  ];

  return (
    <div className={styles.mockupContainer} aria-hidden="true">
      {/* Phone Frame */}
      <div className={styles.phoneFrame}>
        {/* Phone Header */}
        <div className={styles.phoneHeader}>
          <div className={styles.avatar}>H</div>
          <div className={styles.headerInfo}>
            <div className={styles.headerTitleRow}>
              <span className={styles.headerTitle}>Home & Appliance</span>
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
            <span className={styles.headerSub}>WhatsApp + CRM</span>
          </div>
        </div>

        {/* Phone Body */}
        <div className={styles.phoneBody}>
          {/* Bot Message 1 */}
          <div className={styles.botCard}>
            <p className={styles.botText}>Hi! How can we help you today?</p>
            <div className={styles.pillsRow}>
              {services.map((srv) => (
                <button
                  key={srv}
                  type="button"
                  className={`${styles.serviceBtn} ${
                    selectedService === srv ? styles.btnActive : ""
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
            <p className={styles.botText}>Select your product category:</p>
            <div className={styles.pillsRow}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`${styles.serviceBtn} ${
                    selectedCategory === cat ? styles.btnActive : ""
                  }`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Card 1: Self-service for all (Top Right) */}
      <div className={`${styles.floatingCard} ${styles.cardTop}`}>
        <div className={styles.cardTopHead}>
          <div className={styles.usersIcon}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              width="16"
              height="16"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <div>
            <h4 className={styles.cardTitle}>Self-service for all</h4>
            <span className={styles.cardSub}>
              Customers · Distributors · Dealers
            </span>
          </div>
        </div>
      </div>

      {/* Floating Card 2: Complaint Registered (Bottom Right) */}
      <div className={`${styles.floatingCard} ${styles.cardBottom}`}>
        <div className={styles.confirmHead}>
          <div className={styles.checkIcon}>
            <svg viewBox="0 0 12 12" fill="none" width="9" height="9">
              <path
                d="M10 3L4.5 8.5L2 6"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <h4 className={styles.cardTitle}>Complaint registered</h4>
            <span className={styles.cardSub}>Technician visit within 24 hours</span>
          </div>
        </div>
        <div className={styles.badgesRow}>
          <span className={styles.crmBadge}>Synced to CRM</span>
          <span className={styles.idBadge}>#1042</span>
        </div>
      </div>
    </div>
  );
};

export default HomeApplianceMockup;

