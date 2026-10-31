import React from "react";
import Link from "next/link";
import styles from "../../styles/AIProduct.module.scss";
import { TicketingDiagram } from "./AIWidgets";

const Arrow = ({ color }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M3.33398 8H12.6673M8.66732 12L12.6673 8L8.66732 4"
      stroke={color}
      strokeWidth="1.46667"
    />
  </svg>
);

const AIHero = ({ data }) => {
  return (
    <section className={styles["ai-hero"]}>
      <div className={styles["ai-hero-inner"]}>
        <div className={styles["ai-hero-text"]}>
          <h1>
            {data.lines.map((line, i) => (
              <span key={i} className={styles["ai-hero-line"]}>
                {line.map((seg, j) => (
                  <span key={j} className={seg.accent ? styles["accent"] : undefined}>
                    {seg.text}
                  </span>
                ))}
              </span>
            ))}
          </h1>
          <p>{data.text}</p>
          <div className={styles["ai-hero-buttons"]}>
            <Link href="/contact-us" className={styles["btn-primary"]}>
              Try for free <Arrow color="#ffffff" />
            </Link>
            <Link href="/contact-us" className={styles["btn-outline"]}>
              Talk to Expert <Arrow color="#5e6ff9" />
            </Link>
          </div>
        </div>
        <div className={styles["ai-hero-visual"]}>
          <div className={styles["ai-hero-card"]}>
            {data.visual === "ticketing" ? <TicketingDiagram /> : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIHero;
