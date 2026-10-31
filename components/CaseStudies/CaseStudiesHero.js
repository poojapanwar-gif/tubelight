import React from "react";
import styles from "../../styles/CaseStudyList.module.scss";

const CaseStudiesHero = () => {
  return (
    <section className={styles["cs-list-hero"]}>
      <span className={`${styles["glow"]} ${styles["glow-left"]}`} aria-hidden="true" />
      <span className={`${styles["glow"]} ${styles["glow-right"]}`} aria-hidden="true" />
      <div className={styles["cs-list-hero-inner"]}>
        <h1>Case Studies</h1>
        <p>You can see all case studies here</p>
      </div>
    </section>
  );
};

export default CaseStudiesHero;
