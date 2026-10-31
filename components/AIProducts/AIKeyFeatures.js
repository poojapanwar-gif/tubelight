import React from "react";
import styles from "../../styles/AIProduct.module.scss";
import { featuresHeading } from "./data/shared";
import { FeatureWidget } from "./AIWidgets";

const AIKeyFeatures = ({ features }) => {
  return (
    <section className={styles["ai-features"]}>
      <div className={styles["ai-container"]}>
        <div className={styles["ai-section-head"]}>
          <span className={styles["ai-eyebrow"]}>{featuresHeading.eyebrow}</span>
          <h2>{featuresHeading.title}</h2>
        </div>
        <div className={styles["ai-features-grid"]}>
          {features.map((card) => (
            <article
              key={card.title}
              className={[
                styles["ai-feature-card"],
                card.variant ? styles[`is-${card.variant}`] : "",
              ].join(" ")}
            >
              <div className={styles["ai-feature-copy"]}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
              {card.widget && <FeatureWidget type={card.widget} />}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIKeyFeatures;
