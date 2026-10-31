import React from "react";
import Link from "next/link";
import styles from "../../styles/AboutUs.module.scss";

const AboutCta = () => {
  return (
    <section className={styles["about-cta-section"]}>
      <div className={styles["about-cta-card"]}>
        <div className={styles["about-cta-content"]}>
          <h2>
            Lets Build Better <span>Conversations Together</span>
          </h2>
          <p>Join Tubelight Comminications to engage, support and grow</p>
          <Link href="/contact-us" className={styles["about-cta-btn"]}>
            Book a Demo
          </Link>
        </div>
        <div className={styles["about-cta-visual"]}>
          <img
            className={styles["cta-globe"]}
            src="/images/about/cta-globe.jpg"
            alt="Globe connected to messaging, email and calling channels"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutCta;
