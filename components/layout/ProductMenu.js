"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../../styles/ProductMenu.module.scss";

export const productCategories = [
  {
    id: "cpaas",
    label: "CPaaS",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.5002 18.5002C6.43583 18.4973 5.41129 18.0952 4.62916 17.3733C3.84703 16.6513 3.36424 15.6622 3.27627 14.6015C3.18829 13.5408 3.50153 12.4857 4.15405 11.6448C4.80656 10.8039 5.75085 10.2384 6.8002 10.0602C7.2076 8.91549 7.9826 7.93789 9.00418 7.28006C10.0258 6.62224 11.2364 6.32123 12.4471 6.42402C13.6578 6.52682 14.8004 7.02764 15.6965 7.84828C16.5925 8.66892 17.1916 9.76319 17.4002 10.9602C17.8953 10.9865 18.3803 11.11 18.8277 11.3237C19.275 11.5374 19.6759 11.8372 20.0074 12.2058C20.3389 12.5745 20.5946 13.0048 20.7598 13.4723C20.925 13.9397 20.9965 14.4351 20.9702 14.9302C20.9439 15.4253 20.8204 15.9104 20.6067 16.3577C20.393 16.8051 20.0932 17.2059 19.7246 17.5374C19.3559 17.8689 18.9256 18.1246 18.4581 18.2898C17.9907 18.455 17.4953 18.5265 17.0002 18.5002H7.5002Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#5E6FF9"
        />
        <path
          d="M10.4002 12.7002L8.7002 14.4002L10.4002 16.1002M13.6002 12.7002L15.3002 14.4002L13.6002 16.1002"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#5E6FF9"
        />
      </svg>
    ),
    columns: [
      {
        title: "Messaging",
        links: [
          { label: "SMS", href: "/sms-and-otp" },
          { label: "RCS", href: "https://tubelightcommunications.com/rcs" },
          {
            label: "WhatsApp",
            href: "/whatsapp",
          },
          { label: "Email", href: "https://tubelightcommunications.com/email" },
          {
            label: "Shortcode",
            href: "https://tubelightcommunications.com/shortcode",
          },
          { label: "Instagram", href: "#channels" },
          { label: "FB Messenger", href: "#channels" },
          { label: "TextEdu", href: "#channels" },
        ],
      },
      {
        title: "Voice",
        links: [
          {
            label: "Voice Broadcast",
            href: "/voice-broadcast",
          },
          {
            label: "Number Masking",
            href: "/number-masking",
          },
          { label: "IVR", href: "/ivr-solution" },
          { label: "Flow Builder", href: "#channels" },
          { label: "WebRTC", href: "/web-rtc" },
          { label: "Click 2 Call", href: "/clicktocall" },
        ],
      },
    ],
  },
  {
    id: "contact-center",
    label: "Contact Center Suite",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 13V12C5 10.1435 5.7375 8.36301 7.05025 7.05025C8.36301 5.7375 10.1435 5 12 5C13.8565 5 15.637 5.7375 16.9497 7.05025C18.2625 8.36301 19 10.1435 19 12V13"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#5E6FF9"
        />
        <path
          d="M5 13C6.10457 13 7 13.8954 7 15V17C7 18.1046 6.10457 19 5 19C3.89543 19 3 18.1046 3 17V15C3 13.8954 3.89543 13 5 13Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#5E6FF9"
        />
        <path
          d="M19 13C20.1046 13 21 13.8954 21 15V17C21 18.1046 20.1046 19 19 19C17.8954 19 17 18.1046 17 17V15C17 13.8954 17.8954 13 19 13Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#5E6FF9"
        />
        <path
          d="M19 19V19.5C19 20.163 18.7366 20.7989 18.2678 21.2678C17.7989 21.7366 17.163 22 16.5 22H13"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#5E6FF9"
        />
      </svg>
    ),
    columns: [
      {
        title: "Contact Center Suite",
        links: [
          { label: "Predictive Dialer", href: "#predictive-dialer" },
          { label: "Outbound Dialer", href: "#outbound-dialer" },
          { label: "Inbound Calls", href: "#inbound-calls" },
        ],
      },
    ],
  },
  {
    id: "1inbox",
    label: "1inbox",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.5 5.30017L3 12.0002V18.0002C3 18.5306 3.21071 19.0393 3.58579 19.4144C3.96086 19.7895 4.46957 20.0002 5 20.0002H19C19.5304 20.0002 20.0391 19.7895 20.4142 19.4144C20.7893 19.0393 21 18.5306 21 18.0002V12.0002L18.5 5.30017C18.3558 4.91415 18.0959 4.58208 17.7558 4.34939C17.4157 4.11669 17.012 3.99473 16.6 4.00017H7.4C6.98796 3.99473 6.58429 4.11669 6.2442 4.34939C5.9041 4.58208 5.64419 4.91415 5.5 5.30017Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#5E6FF9"
        />
        <path
          d="M3 12H8.2L9.5 14.5H14.5L15.8 12H21"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#5E6FF9"
        />
      </svg>
    ),
    columns: [
      {
        title: "Unified Inbox",
        links: [
          { label: "Multi-Channel Inbox", href: "#inbox" },
          { label: "Team Collaboration", href: "#inbox" },
          { label: "WhatsApp Shared Inbox", href: "#inbox" },
          { label: "Auto-Assignment", href: "#inbox" },
          { label: "SLA & Ticket Tracking", href: "#inbox" },
        ],
      },
    ],
  },
  {
    id: "2fa",
    label: "2FA",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 2H15C16.6569 2 18 3.34315 18 5V19C18 20.6569 16.6569 22 15 22H9C7.34315 22 6 20.6569 6 19V5C6 3.34315 7.34315 2 9 2Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#5E6FF9"
        />
        <path
          d="M12 6.6001L15.5 8.0001V10.8001C15.5 13.0001 14 14.8001 12 15.7001C10 14.8001 8.5 13.0001 8.5 10.8001V8.0001L12 6.6001Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#5E6FF9"
        />
        <path
          d="M10.5996 10.9L11.6996 12L13.4996 10"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#5E6FF9"
        />
        <path
          d="M10.5 19H13.5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#5E6FF9"
        />
      </svg>
    ),
    columns: [
      {
        title: "Two-Factor Auth",
        links: [
          {
            label: "SMS OTP",
            href: "/sms-and-otp",
          },
          {
            label: "Flash Call Verification",
            href: "https://tubelightcommunications.com/flash-call-verification",
          },
          { label: "WhatsApp 2FA", href: "#2fa" },
          { label: "Email OTP", href: "#2fa" },
          { label: "Failover Fallback", href: "#2fa" },
        ],
      },
    ],
  },
  {
    id: "agentic-ai",
    label: "Agentic AI",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 3.5L12.9 9.1L18.5 11L12.9 12.9L11 18.5L9.1 12.9L3.5 11L9.1 9.1L11 3.5Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#5E6FF9"
        />
        <path
          d="M19 3V5M19 5V7M19 5H17M19 5H21"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#5E6FF9"
        />
        <path
          d="M18.5 15.5V17.5M18.5 17.5V19.5M18.5 17.5H16.5M18.5 17.5H20.5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#5E6FF9"
        />
      </svg>
    ),
    columns: [
      {
        title: "Agentic AI",
        links: [
          { label: "Conversational AI", href: "#ai" },
          { label: "Voice AI Bots", href: "#ai" },
          { label: "Intent Recognition", href: "#ai" },
          { label: "Workflow Automation", href: "#ai" },
          { label: "Knowledge Base AI", href: "#ai" },
        ],
      },
    ],
  },
  {
    id: "numbers-auth",
    label: "Numbers & Authentication",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2.7998L19.5 5.7998V11.3998C19.5 15.8998 16.4 19.5998 12 21.2998C7.6 19.5998 4.5 15.8998 4.5 11.3998V5.7998L12 2.7998Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#5E6FF9"
        />
        <path
          d="M10.3 8.2998L10.06 10.6998M10.06 10.6998L9.79 13.3998M10.06 10.6998H8.4M10.06 10.6998H14.16M9.79 13.3998L9.6 15.2998M9.79 13.3998H8M9.79 13.3998H13.89M14.4 8.2998L14.16 10.6998M14.16 10.6998L13.89 13.3998M14.16 10.6998H16M13.89 13.3998L13.7 15.2998M13.89 13.3998H15.6"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#5E6FF9"
        />
      </svg>
    ),
    columns: [
      {
        title: "Numbers & Auth",
        links: [
          {
            label: "Virtual Numbers",
            href: "https://tubelightcommunications.com/numbers",
          },
          { label: "Toll-Free Numbers", href: "#numbers" },
          {
            label: "Phone Verification",
            href: "https://tubelightcommunications.com/phone-verification",
          },
          {
            label: "Number Lookup",
            href: "https://tubelightcommunications.com/number-lookup",
          },
          {
            label: "Data Verification",
            href: "https://tubelightcommunications.com/data-verification",
          },
        ],
      },
    ],
  },
  {
    id: "engage-apps",
    label: "Engage & Apps",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 3H8C9.10457 3 10 3.89543 10 5V8C10 9.10457 9.10457 10 8 10H5C3.89543 10 3 9.10457 3 8V5C3 3.89543 3.89543 3 5 3Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#5E6FF9"
        />
        <path
          d="M16 3H19C20.1046 3 21 3.89543 21 5V8C21 9.10457 20.1046 10 19 10H16C14.8954 10 14 9.10457 14 8V5C14 3.89543 14.8954 3 16 3Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#5E6FF9"
        />
        <path
          d="M5 14H8C9.10457 14 10 14.8954 10 16V19C10 20.1046 9.10457 21 8 21H5C3.89543 21 3 20.1046 3 19V16C3 14.8954 3.89543 14 5 14Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#5E6FF9"
        />
        <path
          d="M14 15.5C14 15.1022 14.158 14.7206 14.4393 14.4393C14.7206 14.158 15.1022 14 15.5 14H19.5C19.8978 14 20.2794 14.158 20.5607 14.4393C20.842 14.7206 21 15.1022 21 15.5V18.5C21 18.8978 20.842 19.2794 20.5607 19.5607C20.2794 19.842 19.8978 20 19.5 20H18L16 21.8V20H15.5C15.1022 20 14.7206 19.842 14.4393 19.5607C14.158 19.2794 14 18.8978 14 18.5V15.5Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#5E6FF9"
        />
      </svg>
    ),
    columns: [
      {
        title: "Engage & Apps",
        links: [
          { label: "Campaign Manager", href: "#engage" },
          { label: "Audience Segmentation", href: "#engage" },
          { label: "Drip Campaigns", href: "#engage" },
          { label: "Surveys & Feedback", href: "#engage" },
          { label: "Webhooks & Triggers", href: "#engage" },
        ],
      },
    ],
  },
];

export const integrationsList = [
  { name: "Salesforce", img: "/images/integration1.png" },
  { name: "Zoho", img: "/images/integration2.png" },
  { name: "LeadSquared", img: "/images/integration3.png" },
  { name: "Freshworks", img: "/images/integration4.png" },
  { name: "Kylas", img: "/images/integration5.png" },
  { name: "WordPress Plugins", img: "/images/integration6.png" },
  { name: "Zendesk", img: "/images/integration7.png" },
];

export const quickLinks = [
  { label: "Pricing", href: "#pricing" },
  { label: "Services & Support", href: "#support" },
  { label: "Developer Docs", href: "#developers" },
];

const ProductMenu = ({ onClose }) => {
  const [activeId, setActiveId] = useState("cpaas");
  const [isForceClosed, setIsForceClosed] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsForceClosed(false);
  }, [pathname]);

  const handleLinkClick = (e) => {
    setIsForceClosed(true);
    onClose?.();
    e?.currentTarget?.blur();
    if (typeof document !== "undefined") {
      document.activeElement?.blur();
    }
  };

  const currentCategory =
    productCategories.find((cat) => cat.id === activeId) ||
    productCategories[0];

  return (
    <div
      className={`${styles.productMega} product-mega-panel ${isForceClosed ? styles.forceClosed : ""}`}
      onMouseEnter={() => setIsForceClosed(false)}
    >
      <div className={styles.menuContainer}>
        {/* ============ 1. LEFT CATEGORIES SIDEBAR ============ */}
        <div className={styles.categoriesSidebar}>
          {productCategories.map((cat) => {
            const isActive = cat.id === activeId;
            return (
              <div
                key={cat.id}
                className={`${styles.categoryItem} ${isActive ? styles.active : ""}`}
                onMouseEnter={() => setActiveId(cat.id)}
                onClick={() => setActiveId(cat.id)}
                role="button"
                tabIndex={0}
              >
                <span className={styles.categoryIcon}>{cat.icon}</span>
                <span className={styles.categoryLabel}>{cat.label}</span>
              </div>
            );
          })}
        </div>

        {/* ============ 2. CENTER CONTENT COLUMNS ============ */}
        <div className={styles.centerContent}>
          <div className={styles.dynamicColumns}>
            {currentCategory.columns.map((col, idx) => (
              <div key={idx} className={styles.subColumn}>
                <h4 className={styles.columnTitle}>{col.title}</h4>
                <ul className={styles.linkList}>
                  {col.links.map((link, lIdx) => {
                    const isInternal = link.href.startsWith("/");
                    return (
                      <li key={lIdx}>
                        {isInternal ? (
                          <Link
                            href={link.href}
                            className={styles.menuLink}
                            onClick={handleLinkClick}
                          >
                            {link.label}
                          </Link>
                        ) : (
                          <a
                            href={link.href}
                            className={styles.menuLink}
                            onClick={handleLinkClick}
                            {...(link.href.startsWith("http")
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                          >
                            {link.label}
                          </a>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          {/* Integrations Column */}
          <div className={styles.integrationsColumn}>
            <h4 className={styles.columnTitle}>Integrations</h4>
            <div className={styles.integrationsGrid}>
              {integrationsList.map((item, iIdx) => (
                <div key={iIdx} className={styles.integItem} title={item.name}>
                  <img
                    src={item.img}
                    alt={item.name}
                    className={styles.integImg}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ============ 3. RIGHT SIDEBAR (CTA & QUICK LINKS) ============ */}
        <div className={styles.rightSidebar}>
          <a
            href="https://tubelightcommunications.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
            onClick={handleLinkClick}
          >
            Try It For Free
          </a>

          <div className={styles.quickLinksWrap}>
            <h5 className={styles.quickTitle}>Quick Links</h5>
            <ul className={styles.quickList}>
              {quickLinks.map((ql, qIdx) => {
                const isInternal = ql.href.startsWith("/");
                return (
                  <li key={qIdx}>
                    {isInternal ? (
                      <Link
                        href={ql.href}
                        className={styles.quickLink}
                        onClick={handleLinkClick}
                      >
                        {ql.label}
                      </Link>
                    ) : (
                      <a
                        href={ql.href}
                        className={styles.quickLink}
                        onClick={handleLinkClick}
                      >
                        {ql.label}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductMenu;
