import React from "react";
import styles from "../../styles/AIProduct.module.scss";
import { benefitsHeading } from "./data/shared";

const AIBenefits = ({ benefits }) => {
  return (
    <section className={styles["ai-benefits"]}>
      <div className={styles["ai-container"]}>
        <div className={styles["ai-section-head"]}>
          <span className={styles["ai-eyebrow"]}>{benefitsHeading.eyebrow}</span>
          <h2>{benefitsHeading.title}</h2>
        </div>
        <ul className={styles["ai-benefits-grid"]}>
          {benefits.map((text) => (
            <li key={text} className={styles["ai-benefit-card"]}>
              <span className={styles["ai-benefit-icon"]} aria-hidden="true" />
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AIBenefits;
