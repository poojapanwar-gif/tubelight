import React from "react";
import styles from "../../styles/CaseStudyDetail.module.scss";

const FeatureCards = ({ features, columns = 3, tone = "white" }) => {
  return (
    <div
      className={`${styles["cs-features"]} ${styles[`cols-${columns}`]} ${
        tone === "grey" ? styles["tone-grey"] : ""
      }`}
    >
      {features.map((feature) => (
        <div className={styles["cs-feature-card"]} key={feature.title}>
          <span className={styles["cs-feature-icon"]} aria-hidden="true">
            {feature.icon}
          </span>
          <h3>{feature.title}</h3>
          <p>{feature.text}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;
