import React from "react";
import Link from "next/link";
import styles from "../../styles/CaseStudyDetail.module.scss";

const CaseStudyCta = ({ cta }) => {
  return (
    <section className={styles["cs-cta-section"]}>
      <div className={styles["cs-wrap"]}>
        <div className={styles["cs-cta"]}>
          <h2>{cta.title}</h2>
          <p>{cta.text}</p>
          <div className={styles["cs-cta-buttons"]}>
            <Link href="/contact-us" className={styles["cs-cta-primary"]}>
              Request Demo
            </Link>
            <Link href="/contact-us" className={styles["cs-cta-ghost"]}>
              Contact sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyCta;
