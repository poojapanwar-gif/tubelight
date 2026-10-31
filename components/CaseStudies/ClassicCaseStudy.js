import React from "react";
import Link from "next/link";
import styles from "../../styles/CaseStudyClassic.module.scss";
import ClassicArt from "./ClassicArt";

const ClassicCaseStudy = ({ study }) => {
  return (
    <>
      <section className={styles["cs-classic-hero"]}>
        <span className={styles["hero-circle"]} aria-hidden="true" />
        {/* Left decoration: phone outline with chat bubbles */}
        <div className={styles["hero-phone"]} aria-hidden="true">
          <span className={styles["hero-bubble"]} />
          <span className={`${styles["hero-bubble"]} ${styles["bubble-2"]}`} />
        </div>
        {/* Right decoration: paper plane + dashed trail */}
        <svg
          className={styles["hero-plane"]}
          viewBox="0 0 220 120"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M10 40c40-30 90-30 120 0s70 40 80 10"
            stroke="rgba(255,255,255,0.45)"
            strokeWidth="1.5"
            strokeDasharray="5 6"
          />
          <path d="M8 6l34 10-22 8z" fill="rgba(255,255,255,0.7)" />
          <path d="M20 24l22-8-14 20z" fill="rgba(255,255,255,0.45)" />
        </svg>
        <h1>{study.title}</h1>
        <img
          className={styles["hero-person"]}
          src={study.heroImage}
          alt=""
          aria-hidden="true"
        />
      </section>

      <section className={styles["cs-classic-body"]}>
        {study.rows.map((row, index) => {
          const isLast = index === study.rows.length - 1;
          return (
            <div
              key={row.heading}
              className={`${styles["cs-row"]} ${
                index % 2 === 1 ? styles["is-reversed"] : ""
              }`}
            >
              <div className={styles["cs-row-media"]}>
                <ClassicArt type={row.art} image={row.image} />
              </div>
              <div className={styles["cs-row-text"]}>
                <h2>{row.heading}</h2>
                {row.paragraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
                {isLast && (
                  <Link href="/case-studies" className={styles["cs-back"]}>
                    Back
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ClassicCaseStudy;
