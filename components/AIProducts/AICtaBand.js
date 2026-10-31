import React from "react";
import Link from "next/link";
import styles from "../../styles/AIProduct.module.scss";

const AICtaBand = ({ data }) => {
  return (
    <section className={styles["ai-cta"]}>
      <div className={styles["ai-cta-box"]}>
        <h2>{data.title}</h2>
        <p>{data.text}</p>
        <div className={styles["ai-cta-buttons"]}>
          <Link href="/contact-us" className={styles["ai-cta-solid"]}>
            Book Your Demo
          </Link>
          <Link href="/contact-us" className={styles["ai-cta-ghost"]}>
            Talk To Our Team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AICtaBand;
