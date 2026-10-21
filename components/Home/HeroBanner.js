"use client";
import React, { useState, useEffect } from "react";
import styles from "../../styles/HeroBanner.module.scss";

const HeroBanner = () => {
  const words = [
    "Modern Enterprises",
    "Growing Businesses",
    "Scaling Enterprises",
    "Retail Enterprises",
    "Ecommerce Brands",
  ];

  const [currentWord, setCurrentWord] = useState(words[0]);

  useEffect(() => {
    let wi = 0;
    let ci = words[0].length;
    let deleting = false;
    let timeoutId;

    const typeStep = () => {
      const w = words[wi];
      if (!deleting) {
        ci++;
        setCurrentWord(w.slice(0, ci));
        if (ci >= w.length) {
          deleting = true;
          timeoutId = setTimeout(typeStep, 1600);
          return;
        }
        timeoutId = setTimeout(typeStep, 75);
      } else {
        ci--;
        setCurrentWord(w.slice(0, ci));
        if (ci <= 0) {
          deleting = false;
          wi = (wi + 1) % words.length;
          timeoutId = setTimeout(typeStep, 320);
          return;
        }
        timeoutId = setTimeout(typeStep, 40);
      }
    };

    timeoutId = setTimeout(typeStep, 1600);
    return () => clearTimeout(timeoutId);
  }, []);

  const logos = [
    "/images/client-1.png",
    "/images/client-2.png",
    "/images/client-3.png",
    "/images/client-4.png",
    "/images/client-5.png",
    "/images/client-6.png",
    "/images/client-7.png",
    "/images/client-8.png",
    "/images/client-9.png",
    "/images/client-10.png",
  ];

  const beamPaths = [
    { id: "p0", d: "M500,460 C420,370 330,300 250,210", b1: "0s", b2: "1.3s" },
    { id: "p1", d: "M500,460 C580,370 670,300 750,210", b1: "0.4s", b2: "1.7s" },
    { id: "p2", d: "M500,460 C360,440 250,450 150,460", b1: "0.8s", b2: "2.1s" },
    { id: "p3", d: "M500,460 C640,440 750,450 850,460", b1: "1.2s", b2: "0.5s" },
    { id: "p4", d: "M500,460 C420,560 340,640 270,720", b1: "1.6s", b2: "0.9s" },
    { id: "p5", d: "M500,460 C580,560 660,640 730,720", b1: "2.0s", b2: "0.1s" },
  ];

  const channelNodes = [
    {
      name: "WhatsApp",
      color: "var(--wa)",
      left: "25%",
      top: "22.8%",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2Zm5.4 14c-.2.6-1.2 1.2-1.7 1.2-.4 0-1 .1-3.4-1-2.9-1.2-4.7-4.2-4.9-4.4-.1-.2-1.1-1.5-1.1-2.8 0-1.3.7-2 .9-2.2.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5.2.5.7 1.8.8 1.9.1.1.1.3 0 .5l-.3.5-.4.4c-.1.2-.3.3-.1.6.1.3.7 1.1 1.4 1.8.9.8 1.7 1 2 1.2.2.1.4.1.5-.1l.7-.8c.2-.3.4-.2.6-.1l1.7.8c.3.1.5.2.5.4.1.1.1.6-.1 1.2Z" />
        </svg>
      ),
    },
    {
      name: "SMS & OTP",
      color: "var(--sms)",
      left: "75%",
      top: "22.8%",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 11.5a8.4 8.4 0 0 1-12 7.6L3 21l1.9-5.8A8.5 8.5 0 1 1 21 11.5Z" />
          <path d="M8 11h.01M12 11h.01M16 11h.01" />
        </svg>
      ),
    },
    {
      name: "RCS",
      color: "var(--rcs)",
      left: "13%",
      top: "50%",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="13" rx="2" />
          <path d="M7 20l5-3 5 3" />
          <path d="M7 8h10M7 12h6" />
        </svg>
      ),
    },
    {
      name: "Voice & IVR",
      color: "var(--voice)",
      left: "87%",
      top: "50%",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.6c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.3 1.1l-2.3 2.2Z" />
        </svg>
      ),
    },
    {
      name: "Email",
      color: "var(--email)",
      left: "27%",
      top: "78.2%",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      ),
    },
    {
      name: "AI Agent",
      color: "var(--ai)",
      left: "73%",
      top: "78.2%",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="7" width="16" height="12" rx="3" />
          <path d="M12 7V4M9 13h.01M15 13h.01M8 4h8" />
          <path d="M2 12h2M20 12h2" />
        </svg>
      ),
    },
  ];

  return (
    <section className={styles.hero} id="top">
      <div className={styles["hero-fx"]} aria-hidden="true">
        <span className={`${styles.blob} ${styles.b1}`}></span>
        <span className={`${styles.blob} ${styles.b2}`}></span>
        <span className={`${styles.blob} ${styles.b3}`}></span>
        <span className={styles["hero-grid-fx"]}></span>
        <span className={styles["hero-sweep"]}></span>
        <span className={`${styles.spark} ${styles.s1}`}></span>
        <span className={`${styles.spark} ${styles.s2}`}></span>
        <span className={`${styles.spark} ${styles.s3}`}></span>
        <span className={`${styles.spark} ${styles.s4}`}></span>
        <span className={`${styles.spark} ${styles.s5}`}></span>
        <span className={`${styles.spark} ${styles.s6}`}></span>
        <span className={`${styles.spark} ${styles.s7}`}></span>
        <span className={`${styles.spark} ${styles.s8}`}></span>
      </div>

      <div className={`${styles.wrap} ${styles["hero-grid"]}`}>
        {/* Copy */}
        <div className={styles["hero-copy"]}>
          <h1>
            Customer Engagement Platform for <br />
            <span className={`${styles["glow-text"]} ${styles["type-words"]}`} id="flipWords">
              {currentWord}
            </span>
            <span className={styles["type-caret"]} aria-hidden="true"></span>
          </h1>
          <p className={styles.lead}>
            Connect with customers across WhatsApp, SMS, RCS, Voice, Email, and AI-powered conversations — from a single platform.
          </p>
          <div className={styles["hero-cta"]}>
            <a className={`${styles.btn} ${styles["btn-primary"]}`} href="#demo">
              Request Demo
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>

        {/* Animated Omnichannel Journey */}
        <div className={styles.stage} id="stage" aria-label="Animated omnichannel message journey">
          <svg className={styles.beams} viewBox="0 0 1000 920" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
            <defs>
              <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3.2" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="beamGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#5e6ff9" stopOpacity="0" />
                <stop offset="50%" stopColor="#5e6ff9" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#5e6ff9" stopOpacity="0.15" />
              </linearGradient>
            </defs>

            {/* Beams: core(500,460) -> each node */}
            <g stroke="url(#beamGrad)" strokeWidth="1.6" fill="none" opacity="0.85">
              {beamPaths.map((bp) => (
                <path key={bp.id} id={bp.id} d={bp.d} />
              ))}
            </g>

            {/* Traveling packets */}
            <g fill="#5e6ff9" filter="url(#soft)">
              {/* First wave */}
              {beamPaths.map((bp, idx) => (
                <circle key={`wave1-${idx}`} r="4.5" fill="#5e6ff9">
                  <animateMotion dur="2.6s" repeatCount="indefinite" begin={bp.b1}>
                    <mpath href={`#${bp.id}`} />
                  </animateMotion>
                </circle>
              ))}

              {/* Second wave */}
              {beamPaths.map((bp, idx) => (
                <circle key={`wave2-${idx}`} r="3" fill="#5e6ff9">
                  <animateMotion dur="2.6s" repeatCount="indefinite" begin={bp.b2}>
                    <mpath href={`#${bp.id}`} />
                  </animateMotion>
                </circle>
              ))}
            </g>
          </svg>

          {/* Core */}
          <div className={styles.core} id="core" style={{ top: "50%" }}>
            <div className={styles.halo}></div>
            <div className={styles.ring1}></div>
            <div className={styles.ring2}></div>
            <div className={styles.tubewrap}>
              <div className={styles["core-label"]}>
                <img className={styles["core-logo"]} src="/images/footerlogo.png" alt="Tubelight" />
              </div>
            </div>
          </div>

          {/* Channel nodes mapped from array */}
          {channelNodes.map((node, index) => (
            <div
              key={index}
              className={styles.node}
              style={{ "--c": node.color, left: node.left, top: node.top }}
            >
              <div className={styles.ic}>{node.icon}</div>
              <div className={styles.meta}>
                <span className={styles.name}>{node.name}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles["hero-cta"]} ${styles["hero-cta-mobile"]}`}>
          <a className={`${styles.btn} ${styles["btn-primary"]}`} href="#demo">
            Request Demo
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>

      <div className={styles["hero-logos-wrap"]}>
        <div className={styles["hero-logos-cap"]}>Trusted by leading enterprises</div>
        <div className={`${styles["logo-marquee"]} ${styles["hero-logos"]}`}>
          <div className={styles["hl-track"]} id="logoTrackHero">
            {/* Original track */}
            {logos.map((src, idx) => (
              <div key={`logo-1-${idx}`} className={styles.hlogo}>
                <img src={src} alt={`Client logo ${idx + 1}`} loading="lazy" />
              </div>
            ))}
            {/* Duplicated track for seamless infinite marquee */}
            {logos.map((src, idx) => (
              <div key={`logo-2-${idx}`} className={styles.hlogo}>
                <img src={src} alt={`Client logo ${idx + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;