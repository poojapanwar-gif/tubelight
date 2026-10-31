import React from "react";
import styles from "../../styles/Platform.module.scss";
import PlatformIcon from "./PlatformIcons";

const PlatformFeatures = ({ heading, text, cards, spacedIntro = false }) => {
  return (
    <section className={styles["platform-features"]}>
      <div className={styles["features-inner"]}>
        <h2>{heading}</h2>
        <p
          className={`${styles["features-intro"]} ${
            spacedIntro ? styles["features-intro-spaced"] : ""
          }`}
        >
          {text}
        </p>
        <div className={styles["features-cards"]}>
          {cards.map((item, index) => (
            <div className={styles["feature-card"]} key={index}>
              <div className={styles["circle-icon"]}>
                <PlatformIcon name={item.icon} />
              </div>
              <h5>{item.title}</h5>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformFeatures;
