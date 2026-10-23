"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "../../styles/WhatsappApi.module.scss";
import logo from "../../public/images/logo.png";

const WhatsappAPI = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          // Replay whenever leaving and returning to this section
          setIsInView(false);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const cardData = [
    {
      id: "send-media",
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 52.5C6.125 52.5 4.94833 52.0108 3.97 51.0325C2.99167 50.0542 2.50167 48.8767 2.5 47.5V15H7.5V47.5H50V52.5H7.5ZM17.5 42.5C16.125 42.5 14.9483 42.0108 13.97 41.0325C12.9917 40.0542 12.5017 38.8767 12.5 37.5V10C12.5 8.625 12.99 7.44833 13.97 6.47C14.95 5.49167 16.1267 5.00167 17.5 5H30L35 10H52.5C53.875 10 55.0525 10.49 56.0325 11.47C57.0125 12.45 57.5017 13.6267 57.5 15V37.5C57.5 38.875 57.0108 40.0525 56.0325 41.0325C55.0542 42.0125 53.8767 42.5017 52.5 42.5H17.5ZM22.5 32.5H47.5L38.875 21.25L33.125 28.75L29.25 23.75L22.5 32.5Z"
            fill="#5E6FF9"
          />
        </svg>
      ),
      title: "Send Media",
      tx: 0,
      ty: -355,
      delay: "0.1s",
    },
    {
      id: "encryption",
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.5 47.5H32.5V40H40V35H32.5V27.5H27.5V35H20V40H27.5V47.5ZM15 55C13.625 55 12.4483 54.5108 11.47 53.5325C10.4917 52.5542 10.0017 51.3767 10 50V25C10 23.625 10.49 22.4483 11.47 21.47C12.45 20.4917 13.6267 20.0017 15 20H17.5V15C17.5 11.5417 18.7192 8.59417 21.1575 6.1575C23.5958 3.72084 26.5433 2.50167 30 2.5C33.4567 2.49834 36.405 3.7175 38.845 6.1575C41.285 8.5975 42.5033 11.545 42.5 15V20H45C46.375 20 47.5525 20.49 48.5325 21.47C49.5125 22.45 50.0017 23.6267 50 25V50C50 51.375 49.5108 52.5525 48.5325 53.5325C47.5542 54.5125 46.3767 55.0017 45 55H15ZM22.5 20H37.5V15C37.5 12.9167 36.7708 11.1458 35.3125 9.6875C33.8542 8.22917 32.0833 7.5 30 7.5C27.9167 7.5 26.1458 8.22917 24.6875 9.6875C23.2292 11.1458 22.5 12.9167 22.5 15V20Z"
            fill="#5E6FF9"
          />
        </svg>
      ),
      title: "Encryption",
      tx: 350,
      ty: -180,
      delay: "0.32s",
    },
    {
      id: "cta",
      icon: (
        <svg
          width="44"
          height="34"
          viewBox="0 0 44 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.5625 16.4375L15.8125 23.6875C16.3125 24.1875 16.5525 24.7708 16.5325 25.4375C16.5125 26.1042 16.2517 26.6875 15.75 27.1875C15.25 27.6458 14.6667 27.8858 14 27.9075C13.3333 27.9292 12.75 27.6892 12.25 27.1875L0.75 15.6875C0.25 15.1875 0 14.6042 0 13.9375C0 13.2708 0.25 12.6875 0.75 12.1875L12.25 0.687499C12.7083 0.229166 13.2817 0 13.97 0C14.6583 0 15.2517 0.229166 15.75 0.687499C16.25 1.1875 16.5 1.78167 16.5 2.47C16.5 3.15833 16.25 3.75167 15.75 4.25L8.5625 11.4375H31.5C34.9583 11.4375 37.9067 12.6567 40.345 15.095C42.7833 17.5333 44.0017 20.4808 44 23.9375V31.4375C44 32.1458 43.76 32.74 43.28 33.22C42.8 33.7 42.2067 33.9392 41.5 33.9375C40.7933 33.9358 40.2 33.6958 39.72 33.2175C39.24 32.7392 39 32.1458 39 31.4375V23.9375C39 21.8542 38.2708 20.0833 36.8125 18.625C35.3542 17.1667 33.5833 16.4375 31.5 16.4375H8.5625Z"
            fill="#5E6FF9"
          />
        </svg>
      ),
      title: "CTA / Reply Buttons",
      tx: 420,
      ty: 35,
      delay: "0.54s",
    },
    {
      id: "pre-approved",
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.5 50C16.125 50 14.9483 49.5108 13.97 48.5325C12.9917 47.5542 12.5017 46.3767 12.5 45V21.875L2.5 10H50C51.375 10 52.5525 10.49 53.5325 11.47C54.5125 12.45 55.0017 13.6267 55 15V45C55 46.375 54.5108 47.5525 53.5325 48.5325C52.5542 49.5125 51.3767 50.0017 50 50H17.5ZM33.75 43.75L37.25 40.25L34.5 37.5H45V32.5H22.5L33.75 43.75ZM22.5 27.5H45L33.75 16.25L30.25 19.75L33 22.5H22.5V27.5Z"
            fill="#5E6FF9"
          />
        </svg>
      ),
      title: "Pre-approved Message Templates",
      tx: 350,
      ty: 250,
      delay: "0.76s",
    },
    {
      id: "logo",
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 52.5C12.9167 52.5 11.1458 51.7708 9.6875 50.3125C8.22917 48.8542 7.5 47.0833 7.5 45V30C7.5 29 7.6875 28.0417 8.0625 27.125C8.4375 26.2083 8.97917 25.3958 9.6875 24.6875L24.6875 9.68751C25.3958 8.93751 26.2192 8.38501 27.1575 8.03001C28.0958 7.67501 29.0433 7.49835 30 7.50001C30.9567 7.50168 31.8942 7.67918 32.8125 8.03251C33.7308 8.38585 34.5642 8.93751 35.3125 9.68751L37.1875 11.5625L17.5 31.25V42.5H42.5V31.25L33.5 22.25L40.6875 15.125L50.3125 24.6875C51.0208 25.3958 51.5625 26.2083 51.9375 27.125C52.3125 28.0417 52.5 29 52.5 30V45C52.5 47.0833 51.7708 48.8542 50.3125 50.3125C48.8542 51.7708 47.0833 52.5 45 52.5H15Z"
            fill="#5E6FF9"
          />
        </svg>
      ),
      title: "Your Logo",
      tx: -350,
      ty: 250,
      delay: "0.98s",
    },
    {
      id: "brand",
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25 42.5H47.5V27.5H25V42.5ZM10 50C8.625 50 7.44833 49.5108 6.47 48.5325C5.49167 47.5542 5.00167 46.3767 5 45V15C5 13.625 5.49 12.4483 6.47 11.47C7.45 10.4917 8.62667 10.0017 10 10H50C51.375 10 52.5525 10.49 53.5325 11.47C54.5125 12.45 55.0017 13.6267 55 15V45C55 46.375 54.5108 47.5525 53.5325 48.5325C52.5542 49.5125 51.3767 50.0017 50 50H10Z"
            fill="#5E6FF9"
          />
        </svg>
      ),
      title: "Your Brand",
      tx: -420,
      ty: 35,
      delay: "1.20s",
    },
    {
      id: "verified",
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.375 31.75L23.875 28.25C23.375 27.75 22.7917 27.5 22.125 27.5C21.4583 27.5 20.875 27.75 20.375 28.25C19.875 28.75 19.625 29.3442 19.625 30.0325C19.625 30.7208 19.875 31.3142 20.375 31.8125L25.625 37.125C26.125 37.625 26.7083 37.875 27.375 37.875C28.0417 37.875 28.625 37.625 29.125 37.125L39.75 26.5C40.25 26 40.5 25.4067 40.5 24.72C40.5 24.0333 40.25 23.4392 39.75 22.9375C39.25 22.4358 38.6567 22.1858 37.97 22.1875C37.2833 22.1892 36.6892 22.4392 36.1875 22.9375L27.375 31.75ZM29.1875 54.6875C28.9375 54.6458 28.6875 54.5833 28.4375 54.5C22.8125 52.625 18.3333 49.1558 15 44.0925C11.6667 39.0292 10 33.5817 10 27.75V15.9375C10 14.8958 10.3025 13.9583 10.9075 13.125C11.5125 12.2917 12.2933 11.6875 13.25 11.3125L28.25 5.6875C28.8333 5.47917 29.4167 5.375 30 5.375C30.5833 5.375 31.1667 5.47917 31.75 5.6875L46.75 11.3125C47.7083 11.6875 48.49 12.2917 49.095 13.125C49.7 13.9583 50.0017 14.8958 50 15.9375V27.75C50 33.5833 48.3333 39.0317 45 44.095C41.6667 49.1583 37.1875 52.6267 31.5625 54.5C31.3125 54.5833 31.0625 54.6458 30.8125 54.6875C30.5625 54.7292 30.2917 54.75 30 54.75C29.7083 54.75 29.4375 54.7292 29.1875 54.6875Z"
            fill="#5E6FF9"
          />
        </svg>
      ),
      title: "Get Verified",
      tx: -350,
      ty: -180,
      delay: "1.42s",
    },
  ];

  return (
    <div className={styles["whatsapp-api-section"]} ref={sectionRef}>
      <h2>Whatsapp API Business Solution Profile</h2>
      <div className={styles["whatsapp-api-circle-content"]}>
        {/* Center Live Smartphone Video Screen */}
        <div className={styles["phone-wrapper"]}>
          {/* Dynamic Island Notch */}
          <div className={styles["dynamic-island"]} />

          {/* iOS Status Bar */}
          <div className={styles["status-bar"]}>
            <span className={styles["status-time"]}>9:41</span>
            <div className={styles["status-icons"]}>
              <span className={styles["status-signal"]}>📶</span>
              <span className={styles["status-wifi"]}>􀙇</span>
              <span className={styles["status-battery"]}>🔋</span>
            </div>
          </div>

          {/* WhatsApp Dark App Header */}
          <div className={styles["wa-header"]}>
            <span className={styles["wa-back-btn"]}>←</span>
            <div className={styles["wa-avatar"]}>
              <Image src={logo} alt="Tubelight" width={26} height={10} priority />
            </div>
            <div className={styles["wa-info"]}>
              <div className={styles["wa-name"]}>Tubelight Communications</div>
              <div className={styles["wa-status"]}>Business account</div>
            </div>
            <div className={styles["wa-actions"]}>
              <span>🏬</span>
              <span>📞</span>
              <span>⋮</span>
            </div>
          </div>

          {/* WhatsApp Screen Body: Looping Video Timeline */}
          <div className={styles["wa-screen"]}>
            <div className={styles["video-stage"]}>
              {/* Slide 1: Business Profile View */}
              <div className={styles["profile-view"]}>
                <div className={styles["profile-card"]}>
                  <div className={styles["profile-logo-wrap"]}>
                    <Image
                      src={logo}
                      alt="Tubelight Logo"
                      className={styles["profile-logo-img"]}
                      priority
                    />
                    <div className={styles["profile-tagline"]}>
                      communication is evolution...
                    </div>
                  </div>
                  <div className={styles["profile-title"]}>
                    Tubelight Communications
                  </div>
                  <div className={styles["profile-badge"]}>
                    Business account
                  </div>

                  <div className={styles["profile-details"]}>
                    <div className={styles["profile-row"]}>
                      <span className={styles["green-icon"]}>📞</span>
                      <span>+91 98765 43210</span>
                    </div>
                    <div className={styles["profile-row"]}>
                      <span>📍</span>
                      <span>Mumbai, Maharashtra, India</span>
                    </div>
                    <div className={`${styles["profile-row"]} ${styles["link-row"]}`}>
                      <span>🔗</span>
                      <span>www.tubelightcommunications.com</span>
                    </div>
                  </div>

                  <div className={styles["action-buttons"]}>
                    <div className={`${styles["action-btn"]} ${styles["active-btn"]}`}>
                      <span className={styles["btn-icon"]}>💬</span>
                      <span>Message</span>
                    </div>
                    <div className={styles["action-btn"]}>
                      <span className={styles["btn-icon"]}>📞</span>
                      <span>Call</span>
                    </div>
                    <div className={styles["action-btn"]}>
                      <span className={styles["btn-icon"]}>↗</span>
                      <span>Share</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 2: Active Chat & API Features in Action */}
              <div className={styles["chat-view"]}>
                <div className={styles["enc-pill"]}>
                  🔒 Messages and calls are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them.
                </div>

                <div className={`${styles["msg-bubble"]} ${styles["msg-incoming"]}`}>
                  <div className={styles["msg-text"]}>
                    Hello! Welcome to <strong>Tubelight Communications</strong> 🚀
                  </div>
                  <div className={styles["chat-cta-btn"]}>
                    ⚡ Explore WhatsApp API
                  </div>
                  <div className={styles["msg-time"]}>9:41 AM</div>
                </div>

                <div className={`${styles["msg-bubble"]} ${styles["msg-outgoing"]}`}>
                  <div className={styles["msg-text"]}>
                    I want to integrate Official WhatsApp API for my brand.
                  </div>
                  <div className={styles["msg-time"]}>
                    9:42 AM <span className={styles["blue-ticks"]}>✓✓</span>
                  </div>
                </div>

                <div className={`${styles["msg-bubble"]} ${styles["msg-incoming"]} ${styles["highlight-msg"]}`}>
                  <div className={styles["verified-label"]}>
                    ✅ Official Verified Business API
                  </div>
                  <div className={styles["msg-text"]}>
                    99.9% Delivery Uptime, Automated Bots & Broadcast Templates Activated!
                  </div>
                  <div className={`${styles["chat-cta-btn"]} ${styles["cta-green"]}`}>
                    📲 Get Started Now
                  </div>
                  <div className={styles["msg-time"]}>9:42 AM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom WhatsApp Input Bar */}
          <div className={styles["wa-bottom-bar"]}>
            <span className={styles["emoji-icon"]}>😊</span>
            <div className={styles["input-pill"]}>
              <span className={styles["placeholder-text"]}>Message</span>
              <span className={styles["typing-cursor"]} />
            </div>
            <span className={styles["clip-icon"]}>📎</span>
            <span className={styles["rupee-icon"]}>₹</span>
            <span className={styles["camera-icon"]}>📷</span>
            <div className={styles["mic-btn"]}>🎙</div>
          </div>
        </div>

        {/* Orbit Cards animating one by one from behind phone */}
        {cardData.map((item) => (
          <div
            key={item.id}
            className={`${styles["api-feature-card"]} ${
              isInView ? styles["animate-out"] : ""
            }`}
            style={{
              "--tx": `${item.tx}px`,
              "--ty": `${item.ty}px`,
              "--delay": item.delay,
            }}
          >
            <div className={styles["icon-box"]}>{item.icon}</div>
            <h5>{item.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatsappAPI;
