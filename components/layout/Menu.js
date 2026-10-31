"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../../styles/Menu.module.scss";
import ProductMenu from "./ProductMenu";

const MenuLink = ({ item, onClick }) => {
  const inner = (
    <>
      <span className={styles["mega-ic"]}>{item.icon}</span>
      <span className={styles["mega-tx"]}>
        <b>{item.title}</b>
        <small>{item.sub}</small>
      </span>
    </>
  );
  return item.href.startsWith("/") ? (
    <Link className={styles["mega-link"]} style={{ "--mc": "#5e6ff9" }} href={item.href} onClick={onClick}>
      {inner}
    </Link>
  ) : (
    <a
      className={styles["mega-link"]}
      style={{ "--mc": "#5e6ff9" }}
      href={item.href}
      onClick={onClick}
      target="_blank"
      rel="noopener noreferrer"
    >
      {inner}
    </a>
  );
};

const Menu = ({ isOpen, onClose }) => {
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
    onClose?.();
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
      href: "/whatsapp",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2Zm5.4 14c-.2.6-1.2 1.2-1.7 1.2-.4 0-1 .1-3.4-1-2.9-1.2-4.7-4.2-4.9-4.4-.1-.2-1.1-1.5-1.1-2.8 0-1.3.7-2 .9-2.2.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5.2.5.7 1.8.8 1.9.1.1.1.3 0 .5l-.3.5-.4.4c-.1.2-.3.3-.1.6.1.3.7 1.1 1.4 1.8.9.8 1.7 1 2 1.2.2.1.4.1.5-.1l.7-.8c.2-.3.4-.2.6-.1l1.7.8c.3.1.5.2.5.4.1.1.1.6-.1 1.2Z" />
        </svg>
      ),
    },
    {
      title: "SMS & OTP",
      sub: "Bulk & transactional",
      href: "/sms-and-otp",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 11.5a8.4 8.4 0 0 1-12 7.6L3 21l1.9-5.8A8.5 8.5 0 1 1 21 11.5Z" />
        </svg>
      ),
    },
    {
      title: "RCS",
      sub: "Rich business messaging",
      href: "/rcs",
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
      href: "/email-delivery",
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
      href: "/gbm",
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
      href: "/short-code-sms",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 7h16M4 12h16M4 17h10" />
        </svg>
      ),
    },
    {
      title: "Instagram",
      sub: "Direct messaging & DMs",
      href: "/instagram",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      title: "FB Messenger",
      sub: "Conversations & automation",
      href: "/facebook",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 11.5a8.4 8.4 0 0 1-12 7.6L3 21l1.9-5.8A8.5 8.5 0 1 1 21 11.5Z" />
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
      href: "/contact-center-suite",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />
        </svg>
      ),
    },
    {
      title: "Campaigns",
      sub: "Broadcast & track",
      href: "/campaigns",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 11l18-8-8 18-2-7-8-3Z" />
        </svg>
      ),
    },
    {
      title: "1iNbox",
      sub: "Unified team inbox",
      href: "/1inbox",
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
      href: "/bottl",
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
      title: "Banking & Finance",
      sub: "WhatsApp banking & KYC",
      href: "/case-studies/banking-finance",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="6" width="18" height="13" rx="2" />
          <path d="M3 10h18" />
        </svg>
      ),
    },
    {
      title: "Healthcare",
      sub: "Appointments & patient care",
      href: "/case-studies/health-tech",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9Z" />
        </svg>
      ),
    },
    {
      title: "Insurance",
      sub: "Policy services & claims",
      href: "/case-studies/insurance",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      ),
    },
  ];

  const industryCol2 = [
    {
      title: "Electric Utility",
      sub: "Consumer utility self-service",
      href: "/case-studies/electric-utility",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
    },
    {
      title: "Home & Appliances",
      sub: "Customer & dealer portal",
      href: "/case-studies/home-appliance",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 21V9l9-6 9 6v12" />
        </svg>
      ),
    },
    {
      title: "Oil Company",
      sub: "Engagement & loyalty dispatch",
      href: "/case-studies/oil-company",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v6m0 4v10M5 7l14 10M5 17L19 7" />
        </svg>
      ),
    },
  ];

  const developerCol1 = [
    {
      title: "SMS",
      sub: "Get started with SMS APIs",
      href: "https://tubelightcommunications.com/dev-doc/developer.html#tag/SMS",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
    {
      title: "Voice",
      sub: "Voice API integration guide",
      href: "https://tubelightcommunications.com/dev-doc/developer.html#tag/Voice",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.6c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.3 1.1l-2.3 2.2Z" />
        </svg>
      ),
    },
    {
      title: "Email",
      sub: "Send emails & view reports",
      href: "https://tubelightcommunications.com/dev-doc/developer.html#tag/Email",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
  ];

  const developerCol2 = [
    {
      title: "WhatsApp",
      sub: "Reach audience via WhatsApp APIs",
      href: "https://tubelightcommunications.com/dev-doc/developer.html#tag/WhatsApp",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
    },
    {
      title: "RCS",
      sub: "Send rich messages with RCS",
      href: "https://tubelightcommunications.com/dev-doc/developer.html#tag/RCS",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="m8 21 4-4 4 4" />
        </svg>
      ),
    },
    {
      title: "2FA",
      sub: "Secure your system using 2FA",
      href: "https://tubelightcommunications.com/dev-doc/developer.html#tag/2FA",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
    },
  ];

  const resourcesLinks = [
    {
      title: "Blog",
      sub: "Guides & product news",
      href: "/blogs",
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
      href: "/case-studies",
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
      href: "/about-us",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21a8 8 0 0 1 16 0" />
        </svg>
      ),
    },
    {
      title: "Contact Us",
      sub: "Talk to our team",
      href: "/contact-us",
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
              <div className={styles["mega-col-h"]}>Case Studies</div>
              {industryCol1.map((item, idx) => (
                <MenuLink key={idx} item={item} onClick={closeAll} />
              ))}
            </div>

            <div className={styles["mega-col"]}>
              <div className={styles["mega-col-h"]}>&nbsp;</div>
              {industryCol2.map((item, idx) => (
                <MenuLink key={idx} item={item} onClick={closeAll} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. DEVELOPER */}
      <div className={`${styles["nav-item"]} ${openDropdown === "developer" ? styles.open : ""}`}>
        <button
          className={styles["nav-trigger"]}
          type="button"
          onClick={() => toggleDropdown("developer")}
        >
          Developer{" "}
          <svg className={styles.chev} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
        <div className={styles.mega}>
          <div className={`${styles["mega-cols"]} ${styles["mega-2"]}`}>
            <div className={styles["mega-col"]}>
              <div className={styles["mega-col-h"]}>APIs & SDKs</div>
              {developerCol1.map((item, idx) => (
                <MenuLink key={idx} item={item} onClick={closeAll} />
              ))}
            </div>

            <div className={styles["mega-col"]}>
              <div className={styles["mega-col-h"]}>Channels & Security</div>
              {developerCol2.map((item, idx) => (
                <MenuLink key={idx} item={item} onClick={closeAll} />
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
                <MenuLink key={idx} item={item} onClick={closeAll} />
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
                <MenuLink key={idx} item={item} onClick={closeAll} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles["nav-mobile-cta"]}>
        <Link className={`${styles.btn} ${styles["btn-ghost"]}`} href="/login" onClick={closeAll}>
          Login
        </Link>
        <Link className={`${styles.btn} ${styles["btn-blue"]}`} href="/sign-up" onClick={closeAll}>
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Menu;