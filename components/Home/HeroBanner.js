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

        {/* Hero Banner Video */}
        <div className={styles.stage} id="stage" aria-label="Tubelight Omnichannel Platform Video">
          <div className={styles["banner-video-wrap"]}>
            <video
              src="/images/homebanner.webm"
              autoPlay
              loop
              muted
              playsInline
              className={styles["banner-video"]}
            >
              <source src="/images/homebanner.webm" type="video/webm" />
              <source src="/homebanner.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
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