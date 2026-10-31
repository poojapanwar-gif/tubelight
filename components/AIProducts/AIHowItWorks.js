import React from "react";
import styles from "../../styles/AIProduct.module.scss";
import { stepsHeading } from "./data/shared";

const AIHowItWorks = ({ steps, layout = "3-3" }) => {
  return (
    <section className={styles["ai-steps"]}>
      <div className={styles["ai-container"]}>
        <div className={styles["ai-section-head"]}>
          <span className={styles["ai-eyebrow"]}>{stepsHeading.eyebrow}</span>
          <h2>{stepsHeading.title}</h2>
        </div>
        <ol
          className={[
            styles["ai-steps-grid"],
            layout === "3-4" ? styles["is-3-4"] : "",
          ].join(" ")}
        >
          {steps.map((step, i) => (
            <li key={step.title} className={styles["ai-step-card"]}>
              <span className={styles["ai-step-num"]}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default AIHowItWorks;
