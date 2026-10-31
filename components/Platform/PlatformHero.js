import React from "react";
import Link from "next/link";
import styles from "../../styles/Platform.module.scss";

const Arrow = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M3.33398 8H12.6673M8.66732 12L12.6673 8L8.66732 4"
      stroke="currentColor"
      strokeWidth="1.46667"
    />
  </svg>
);

const PlatformHero = ({ heading, text }) => {
  return (
    <section className={styles["platform-hero"]}>
      <div className={styles["hero-inner"]}>
        <div className={styles["hero-left"]}>
          <h1>{heading}</h1>
          <p>{text}</p>
          <div className={styles["hero-buttons"]}>
            <Link href="/contact-us" className={styles["blue-button"]}>
              Try for free <Arrow />
            </Link>
            <Link href="/contact-us">
              Talk to Expert <Arrow />
            </Link>
          </div>
        </div>
        <div className={styles["hero-right"]} aria-hidden="true">
          <div className={styles["hero-glow"]} />
        </div>
      </div>
    </section>
  );
};

export default PlatformHero;
