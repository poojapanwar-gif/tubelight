import React from "react";
import styles from "../../styles/CaseStudyDetail.module.scss";

const CaseStudyImpact = ({ impact }) => {
  const hasResults = impact.results && impact.results.length > 0;
  return (
    <section className={`${styles["cs-impact"]} ${!hasResults ? styles["no-results"] : ""}`}>
      <div className={styles["cs-wrap"]}>
        <span className={styles["cs-eyebrow"]}>Impact</span>
        <h2 className={styles["cs-section-title"]}>{impact.heading}</h2>
        <p className={styles["cs-section-lead"]}>{impact.text}</p>

        {hasResults && (
          <div
            className={`${styles["cs-results"]} ${
              impact.numberTone === "grey" ? styles["numbers-grey"] : ""
            }`}
          >
            {impact.results.map((result, index) => (
              <div className={styles["cs-result-card"]} key={result.title}>
                <div className={styles["cs-result-top"]}>
                  <span className={styles["cs-check"]} aria-hidden="true">
                    <svg viewBox="0 0 16 16" fill="none">
                      <path
                        d="M4.5 8.2l2.3 2.3 4.7-4.9"
                        stroke="#ffffff"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className={styles["cs-result-num"]}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3>{result.title}</h3>
                <p>{result.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudyImpact;
