"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import styles from "../../styles/Menu.module.scss";
import ProductMenu from "./ProductMenu";

const Menu = ({ isOpen }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    setOpenDropdown(null);
    if (typeof document !== "undefined") {
      document.activeElement?.blur();
    }
  }, [pathname]);

  const closeAll = () => {
    setOpenDropdown(null);
    if (typeof document !== "undefined") {
      document.activeElement?.blur();
    }
  };

  const toggleDropdown = (key) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  const messagingLinks = [
    {
      title: "WhatsApp",
      sub: "Business API & campaigns",
      href: "https://tubelightcommunications.com/whatsapp",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2Zm5.4 14c-.2.6-1.2 1.2-1.7 1.2-.4 0-1 .1-3.4-1-2.9-1.2-4.7-4.2-4.9-4.4-.1-.2-1.1-1.5-1.1-2.8 0-1.3.7-2 .9-2.2.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5.2.5.7 1.8.8 1.9.1.1.1.3 0 .5l-.3.5-.4.4c-.1.2-.3.3-.1.6.1.3.7 1.1 1.4 1.8.9.8 1.7 1 2 1.2.2.1.4.1.5-.1l.7-.8c.2-.3.4-.2.6-.1l1.7.8c.3.1.5.2.5.4.1.1.1.6-.1 1.2Z" />
        </svg>
      ),
    },
    {
      title: "SMS & OTP",
      sub: "Bulk & transactional",
      href: "https://tubelightcommunications.com/sms",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 11.5a8.4 8.4 0 0 1-12 7.6L3 21l1.9-5.8A8.5 8.5 0 1 1 21 11.5Z" />
        </svg>
      ),
    },
    {
      title: "RCS",
      sub: "Rich business messaging",
      href: "https://tubelightcommunications.com/rcs",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="13" rx="2" />
          <path d="M7 20l5-3 5 3" />
        </svg>
      ),
    },
    {
      title: "Email",
      sub: "Transactional & campaigns",
      href: "https://tubelightcommunications.com/email",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      ),
    },
    {
      title: "Google Business",
      sub: "GBM messaging",
      href: "https://tubelightcommunications.com/gbm",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <path d="M8 12h8M12 8v8" />
        </svg>
      ),
    },
    {
      title: "Short Code",
      sub: "Branded keywords",
      href: "https://tubelightcommunications.com/shortcode",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 7h16M4 12h16M4 17h10" />
        </svg>
      ),
    },
  ];

  const voiceLinks = [
    {
      title: "Click2Call",
      sub: "Browser-based calling",
      href: "/clicktocall",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.6c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.3 1.1l-2.3 2.2Z" />
        </svg>
      ),
    },
    {
      title: "Voice Broadcast",
      sub: "OBD at scale",
      href: "/voice-broadcast",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 10v4h4l5 5V5L7 10H3Z" />
          <path d="M16 9a4 4 0 0 1 0 6" />
        </svg>
      ),
    },
    {
      title: "IVR",
      sub: "Smart call flows",
      href: "/ivr-solution",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <path d="M8 7h8M8 11h8M8 15h5" />
        </svg>
      ),
    },
    {
      title: "Number Masking",
      sub: "Privacy-safe calls",
      href: "/number-masking",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="11" width="16" height="9" rx="2" />
          <path d="M8 11V7a4 4 0 0 1 8 0v4" />
        </svg>
      ),
    },
    {
      title: "WebRTC",
      sub: "Real-time voice/video",
      href: "/web-rtc",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
        </svg>
      ),
    },
  ];

  const platformLinks = [
    {
      title: "Contact Center Suite",
      sub: "Omnichannel helpdesk",
      href: "https://tubelightcommunications.com/contact-center-suite",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />
        </svg>
      ),
    },
    {
      title: "Flow Builder",
      sub: "No-code journeys",
      href: "https://tubelightcommunications.com/flow-builder",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="6" cy="6" r="3" />
          <circle cx="18" cy="18" r="3" />
          <path d="M9 6h7a2 2 0 0 1 2 2v7" />
        </svg>
      ),
    },
    {
      title: "Campaigns",
      sub: "Broadcast & track",
      href: "https://tubelightcommunications.com/campaigns",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 11l18-8-8 18-2-7-8-3Z" />
        </svg>
      ),
    },
    {
      title: "1iNbox",
      sub: "Unified team inbox",
      href: "https://tubelightcommunications.com/1iNbox",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16v16H4z" />
          <path d="M4 13h5l2 3h2l2-3h5" />
        </svg>
      ),
    },
    {
      title: "botTL",
      sub: "AI chat & voice bots",
      href: "https://tubelightcommunications.com/botTL",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="7" width="16" height="12" rx="3" />
          <path d="M12 7V4M9 13h.01M15 13h.01" />
        </svg>
      ),
    },
  ];

  const industryCol1 = [
    {
      title: "Real Estate",
      sub: "Brochures & visit reminders",
      href: "#industries",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 21V9l9-6 9 6v12" />
        </svg>
      ),
    },
    {
      title: "Healthcare",
      sub: "Appointments & reports",
      href: "#industries",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9Z" />
        </svg>
      ),
    },
    {
      title: "Education",
      sub: "Admissions & fees",
      href: "#industries",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 10 12 5 2 10l10 5 10-5Z" />
        </svg>
      ),
    },
  ];

  const industryCol2 = [
    {
      title: "Finance & Banking",
      sub: "OTP, alerts & KYC",
      href: "#industries",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="6" width="18" height="13" rx="2" />
          <path d="M3 10h18" />
        </svg>
      ),
    },
    {
      title: "E-commerce",
      sub: "Cart recovery & COD",
      href: "#industries",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="9" cy="21" r="1.5" />
          <circle cx="18" cy="21" r="1.5" />
          <path d="M2 3h3l2.6 13H19l2-8H6.2" />
        </svg>
      ),
    },
    {
      title: "Logistics",
      sub: "OFD alerts & handover OTP",
      href: "#industries",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M1 3h15v13H1z" />
          <path d="M16 8h4l3 3v5h-7z" />
        </svg>
      ),
    },
  ];

  const verificationIdentity = [
    {
      title: "SMS Verification",
      sub: "OTP at scale",
      href: "https://tubelightcommunications.com/sms-verification",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="11" width="16" height="9" rx="2" />
          <path d="M8 11V7a4 4 0 0 1 8 0v4" />
        </svg>
      ),
    },
    {
      title: "Flash Call",
      sub: "Silent verification",
      href: "https://tubelightcommunications.com/flash-call-verification",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.6c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.3 1.1l-2.3 2.2Z" />
        </svg>
      ),
    },
    {
      title: "Phone Verification",
      sub: "Validate numbers",
      href: "https://tubelightcommunications.com/phone-verification",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12l2 2 4-4" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      ),
    },
  ];

  const verificationData = [
    {
      title: "Number Lookup",
      sub: "Carrier & line type",
      href: "https://tubelightcommunications.com/number-lookup",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      ),
    },
    {
      title: "Data Verification",
      sub: "Clean your database",
      href: "https://tubelightcommunications.com/data-verification",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="6" rx="8" ry="3" />
          <path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6" />
        </svg>
      ),
    },
    {
      title: "Numbers",
      sub: "Virtual & toll-free",
      href: "https://tubelightcommunications.com/numbers",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18" />
        </svg>
      ),
    },
  ];

  const resourcesLinks = [
    {
      title: "Blog",
      sub: "Guides & product news",
      href: "https://tubelightcommunications.com/blogs",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h12l4 4v12H4z" />
          <path d="M8 12h8M8 16h8" />
        </svg>
      ),
    },
    {
      title: "Case Studies",
      sub: "Customer results",
      href: "https://tubelightcommunications.com/case-studies",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 3v18h18" />
          <path d="M7 14l3-4 4 3 5-7" />
        </svg>
      ),
    },
  ];

  const companyLinks = [
    {
      title: "About Us",
      sub: "Our story & mission",
      href: "https://tubelightcommunications.com/about",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21a8 8 0 0 1 16 0" />
        </svg>
      ),
    },
    {
      title: "Careers",
      sub: "Join the team",
      href: "https://tubelightcommunications.com/careers",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
      ),
    },
    {
      title: "Partner With Us",
      sub: "Become a reseller",
      href: "https://tubelightcommunications.com/partner-with-us",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 11a4 4 0 1 0-8 0M2 21a7 7 0 0 1 14 0M18 8l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Contact",
      sub: "Talk to sales",
      href: "https://tubelightcommunications.com/contact-us",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      ),
    },
  ];

  return (
    <nav className={`${styles["nav-links"]} ${isOpen ? styles.open : ""}`} id="navLinks">
      {/* 1. PRODUCTS */}
      <div className={`${styles["nav-item"]} ${styles["product-item"]} ${openDropdown === "products" ? styles.open : ""}`}>
        <button
          className={styles["nav-trigger"]}
          type="button"
          onClick={() => toggleDropdown("products")}
        >
          Products{" "}
          <svg className={styles.chev} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
        <ProductMenu onClose={closeAll} />
      </div>

      {/* 2. SOLUTIONS */}
      <div className={`${styles["nav-item"]} ${openDropdown === "solutions" ? styles.open : ""}`}>
        <button
          className={styles["nav-trigger"]}
          type="button"
          onClick={() => toggleDropdown("solutions")}
        >
          Solutions{" "}
          <svg className={styles.chev} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
        <div className={styles.mega}>
          <div className={`${styles["mega-cols"]} ${styles["mega-2"]}`}>
            <div className={styles["mega-col"]}>
              <div className={styles["mega-col-h"]}>By industry</div>
              {industryCol1.map((item, idx) => (
                <a
                  key={idx}
                  className={styles["mega-link"]}
                  style={{ "--mc": "#5e6ff9" }}
                  href={item.href}
                  onClick={closeAll}
                >
                  <span className={styles["mega-ic"]}>{item.icon}</span>
                  <span className={styles["mega-tx"]}>
                    <b>{item.title}</b>
                    <small>{item.sub}</small>
                  </span>
                </a>
              ))}
            </div>

            <div className={styles["mega-col"]}>
              <div className={styles["mega-col-h"]}>&nbsp;</div>
              {industryCol2.map((item, idx) => (
                <a
                  key={idx}
                  className={styles["mega-link"]}
                  style={{ "--mc": "#5e6ff9" }}
                  href={item.href}
                  onClick={closeAll}
                >
                  <span className={styles["mega-ic"]}>{item.icon}</span>
                  <span className={styles["mega-tx"]}>
                    <b>{item.title}</b>
                    <small>{item.sub}</small>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. VERIFICATION */}
      <div className={`${styles["nav-item"]} ${openDropdown === "verification" ? styles.open : ""}`}>
        <button
          className={styles["nav-trigger"]}
          type="button"
          onClick={() => toggleDropdown("verification")}
        >
          Verification{" "}
          <svg className={styles.chev} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
        <div className={styles.mega}>
          <div className={`${styles["mega-cols"]} ${styles["mega-2"]}`}>
            <div className={styles["mega-col"]}>
              <div className={styles["mega-col-h"]}>Identity</div>
              {verificationIdentity.map((item, idx) => (
                <a
                  key={idx}
                  className={styles["mega-link"]}
                  style={{ "--mc": "#5e6ff9" }}
                  href={item.href}
                  onClick={closeAll}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles["mega-ic"]}>{item.icon}</span>
                  <span className={styles["mega-tx"]}>
                    <b>{item.title}</b>
                    <small>{item.sub}</small>
                  </span>
                </a>
              ))}
            </div>

            <div className={styles["mega-col"]}>
              <div className={styles["mega-col-h"]}>Data</div>
              {verificationData.map((item, idx) => (
                <a
                  key={idx}
                  className={styles["mega-link"]}
                  style={{ "--mc": "#5e6ff9" }}
                  href={item.href}
                  onClick={closeAll}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles["mega-ic"]}>{item.icon}</span>
                  <span className={styles["mega-tx"]}>
                    <b>{item.title}</b>
                    <small>{item.sub}</small>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. RESOURCES */}
      <div className={`${styles["nav-item"]} ${openDropdown === "resources" ? styles.open : ""}`}>
        <button
          className={styles["nav-trigger"]}
          type="button"
          onClick={() => toggleDropdown("resources")}
        >
          Resources{" "}
          <svg className={styles.chev} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
        <div className={`${styles.mega} ${styles["mega-sm"]}`}>
          <div className={`${styles["mega-cols"]} ${styles["mega-1"]}`}>
            <div className={styles["mega-col"]}>
              {resourcesLinks.map((item, idx) => (
                <a
                  key={idx}
                  className={styles["mega-link"]}
                  style={{ "--mc": "#5e6ff9" }}
                  href={item.href}
                  onClick={closeAll}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles["mega-ic"]}>{item.icon}</span>
                  <span className={styles["mega-tx"]}>
                    <b>{item.title}</b>
                    <small>{item.sub}</small>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 5. COMPANY */}
      <div className={`${styles["nav-item"]} ${openDropdown === "company" ? styles.open : ""}`}>
        <button
          className={styles["nav-trigger"]}
          type="button"
          onClick={() => toggleDropdown("company")}
        >
          Company{" "}
          <svg className={styles.chev} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
        <div className={`${styles.mega} ${styles["mega-sm"]}`}>
          <div className={`${styles["mega-cols"]} ${styles["mega-1"]}`}>
            <div className={styles["mega-col"]}>
              {companyLinks.map((item, idx) => (
                <a
                  key={idx}
                  className={styles["mega-link"]}
                  style={{ "--mc": "#5e6ff9" }}
                  href={item.href}
                  onClick={closeAll}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles["mega-ic"]}>{item.icon}</span>
                  <span className={styles["mega-tx"]}>
                    <b>{item.title}</b>
                    <small>{item.sub}</small>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles["nav-mobile-cta"]}>
        <a className={`${styles.btn} ${styles["btn-ghost"]}`} href="#login">
          Login
        </a>
        <a className={`${styles.btn} ${styles["btn-blue"]}`} href="#register">
          Register
        </a>
      </div>
    </nav>
  );
};

export default Menu;