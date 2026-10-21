"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/WhatsAppWidget.module.scss";

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (widgetRef.current && !widgetRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      ref={widgetRef}
      className={`${styles["wa-fab-wrap"]} ${isOpen ? styles.open : ""}`}
      id="waWidget"
    >
      <div className={styles["wa-pop"]} id="waPop" role="dialog" aria-label="Chat on WhatsApp">
        <div className={styles["wa-pop-head"]}>
          <span className={styles["wa-pop-av"]}>
            <svg viewBox="0 0 24 24">
              <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2Zm5.4 14c-.2.6-1.2 1.2-1.7 1.2-.4 0-1 .1-3.4-1-2.9-1.2-4.7-4.2-4.9-4.4-.1-.2-1.1-1.5-1.1-2.8 0-1.3.7-2 .9-2.2.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5.2.5.7 1.8.8 1.9.1.1.1.3 0 .5l-.3.5-.4.4c-.1.2-.3.3-.1.6.1.3.7 1.1 1.4 1.8.9.8 1.7 1 2 1.2.2.1.4.1.5-.1l.7-.8c.2-.3.4-.2.6-.1l1.7.8c.3.1.5.2.5.4.1.1.1.6-.1 1.2Z" />
            </svg>
          </span>
          <div>
            <div className={styles["wa-pop-name"]}>Tubelight</div>
            <div className={styles["wa-pop-status"]}>Typically replies in minutes</div>
          </div>
          <button
            className={styles["wa-pop-close"]}
            id="waClose"
            aria-label="Close chat"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>
        </div>
        <div className={styles["wa-pop-body"]}>
          <div className={styles["wa-pop-msg"]}>
            👋 Hi there! Have a question about WhatsApp, SMS, Voice or AI? Chat with us now.
          </div>
        </div>
        <a
          className={styles["wa-pop-cta"]}
          href="https://wa.me/919876543210?text=Hi%20Tubelight%2C%20I'd%20like%20to%20know%20more"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start chat
          <svg viewBox="0 0 24 24">
            <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2Zm5.4 14c-.2.6-1.2 1.2-1.7 1.2-.4 0-1 .1-3.4-1-2.9-1.2-4.7-4.2-4.9-4.4-.1-.2-1.1-1.5-1.1-2.8 0-1.3.7-2 .9-2.2.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5.2.5.7 1.8.8 1.9.1.1.1.3 0 .5l-.3.5-.4.4c-.1.2-.3.3-.1.6.1.3.7 1.1 1.4 1.8.9.8 1.7 1 2 1.2.2.1.4.1.5-.1l.7-.8c.2-.3.4-.2.6-.1l1.7.8c.3.1.5.2.5.4.1.1.1.6-.1 1.2Z" />
          </svg>
        </a>
      </div>
      <button
        className={styles["wa-fab"]}
        id="waFab"
        aria-label="Chat on WhatsApp"
        aria-expanded={isOpen}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
      >
        <span className={styles["wa-fab-ping"]} aria-hidden="true"></span>
        <svg viewBox="0 0 24 24" fill="#fff">
          <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2Zm5.4 14c-.2.6-1.2 1.2-1.7 1.2-.4 0-1 .1-3.4-1-2.9-1.2-4.7-4.2-4.9-4.4-.1-.2-1.1-1.5-1.1-2.8 0-1.3.7-2 .9-2.2.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5.2.5.7 1.8.8 1.9.1.1.1.3 0 .5l-.3.5-.4.4c-.1.2-.3.3-.1.6.1.3.7 1.1 1.4 1.8.9.8 1.7 1 2 1.2.2.1.4.1.5-.1l.7-.8c.2-.3.4-.2.6-.1l1.7.8c.3.1.5.2.5.4.1.1.1.6-.1 1.2Z" />
        </svg>
      </button>
    </div>
  );
};

export default WhatsAppWidget;
