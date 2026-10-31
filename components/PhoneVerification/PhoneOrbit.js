"use client";
import React, { useState, useEffect } from "react";
import styles from "../../styles/PhoneOrbit.module.scss";

// 600px orbit circle: Radius = 300, Center = (300, 300)
const cardsData = [
  {
    id: "easy-integration",
    title: "Easy Integration",
    detail:
      "Get verified in no time only a few lines of code with our SDK or Rest API for Android.",
    // Middle-left (180deg)
    x: 0,
    y: 300,
  },
  {
    id: "seamless-ux",
    title: "Seamless UX",
    detail:
      "Our android SDK manages the complete on device phone call verification process from start to finish.",
    // Top-left (230deg)
    x: 108,
    y: 70,
  },
  {
    id: "automatic-otp",
    title: "Automatic OTP Capture",
    detail:
      "A seamless CX from the very first touchpoint. Phone call verification captures the one-time password (OTP) with no user action required.",
    // Top-right (310deg)
    x: 492,
    y: 70,
  },
  {
    id: "optimized-routes",
    title: "Optimized Routes",
    detail:
      "Get the best conversion rates with powerful real-time feedback – our reporting API continuously optimizes for the best routes.",
    // Middle-right (355deg)
    x: 599,
    y: 274,
  },
  {
    id: "top-notch-security",
    title: "Top-Notch Security",
    detail:
      "With a pool of over 100,000 numbers to draw on, Phone call verification is as secure as a 5 digit OTP code.",
    // Bottom-left curve (left side)
    x: 190,
    y: 545,
  },
];

// Decorative glowing dots rotating along the 600px circle
const circleDots = [
  { angle: 25 },
  { angle: 120 },
  { angle: 205 },
  { angle: 270 },
  { angle: 330 },
];

const ORBIT_RADIUS = 299;
const CENTER = 300;

const PhoneOrbit = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-cycle through the cards one by one every 3.8s when not hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cardsData.length);
    }, 3800);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className={styles["phone-orbit-section"]}>
      <div className={styles["phone-orbit-left-right"]}>
        <div className={styles["phone-orbit-left"]}>
          <h2>Features and benefits of Phone Call Verification</h2>
          <p>
            Explore the powerful feature that make your Phone Call Verification
            solution secure, simple, and built for scale.
          </p>
        </div>

        <div className={styles["phone-orbit-right"]}>
          <div className={styles["orbit-container"]}>
            {/* The Rotating Circle Wheel */}
            <div
              className={`${styles["orbit-wheel"]} ${
                isPaused ? styles["paused"] : ""
              }`}
            >
              <svg
                className={styles["orbit-circle-svg"]}
                width="600"
                height="600"
                viewBox="0 0 600 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="phoneOrbitGradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#2F6DEE" />
                    <stop offset="100%" stopColor="#769DEE" />
                  </linearGradient>
                </defs>
                <circle
                  cx="300"
                  cy="300"
                  r="299"
                  stroke="url(#phoneOrbitGradient)"
                  strokeWidth="2"
                />
              </svg>

              {/* Glowing Dots attached to the rotating circle */}
              {circleDots.map((dot, idx) => {
                const rad = (dot.angle * Math.PI) / 180;
                const x = CENTER + ORBIT_RADIUS * Math.cos(rad);
                const y = CENTER + ORBIT_RADIUS * Math.sin(rad);
                return (
                  <div
                    key={idx}
                    className={styles["orbit-dot"]}
                    style={{
                      left: `${x}px`,
                      top: `${y}px`,
                    }}
                  />
                );
              })}
            </div>

            {/* Static Cards Layer: Fixed Positions, Zero Rotation, Stable & Clear */}
            <div className={styles["cards-layer"]}>
              {cardsData.map((card, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <div
                    key={card.id}
                    className={`${styles["orbit-card-anchor"]} ${
                      styles[`anchor-${card.id}`] || ""
                    }`}
                    style={{
                      left: `${card.x}px`,
                      top: `${card.y}px`,
                    }}
                  >
                    <div
                      className={`${styles["orbit-card"]} ${
                        isActive ? styles["active"] : styles["inactive"]
                      }`}
                      onMouseEnter={() => {
                        setIsPaused(true);
                        setActiveIndex(idx);
                      }}
                      onMouseLeave={() => setIsPaused(false)}
                      onClick={() => setActiveIndex(idx)}
                    >
                      <h3 className={styles["card-title"]}>{card.title}</h3>
                      {isActive && (
                        <p className={styles["card-detail"]}>{card.detail}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile Central Feature Display: Shows active card detail cleanly inside the circle */}
            <div className={styles["mobile-center-display"]}>
              <div className={styles["mobile-center-badge"]}>
                <span className={styles["mobile-center-tag"]}>Feature</span>
                <h4 className={styles["mobile-center-title"]}>
                  {cardsData[activeIndex].title}
                </h4>
                <p className={styles["mobile-center-desc"]}>
                  {cardsData[activeIndex].detail}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhoneOrbit;
