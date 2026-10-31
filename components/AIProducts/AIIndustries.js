import React from "react";
import styles from "../../styles/AIProduct.module.scss";
import { industriesHeading } from "./data/shared";

const AIIndustries = ({ tags }) => {
  return (
    <section className={styles["ai-industries"]}>
      <div className={styles["ai-container"]}>
        <div className={styles["ai-section-head"]}>
          <span className={styles["ai-eyebrow"]}>{industriesHeading.eyebrow}</span>
          <h2>{industriesHeading.title}</h2>
          <p>{industriesHeading.text}</p>
        </div>
        <ul className={styles["ai-tags"]}>
          {tags.map((tag, i) => (
            <li key={`${tag.label}-${i}`} className={styles["ai-tag"]}>
              {tag.icon && (
                <span className={styles["ai-tag-icon"]} aria-hidden="true">
                  {tag.icon}
                </span>
              )}
              {tag.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AIIndustries;
