import React from "react";
import styles from "../../styles/WebsiteCRM.module.scss";
import { dialerIcons } from "./dialerIcons";

const DialerFeatures = ({
  title,
  description,
  cards = [],
}) => {
  const getCardsClass = () => {
    if (cards.length === 8) return styles["eight-cards"];
    if (cards.length === 7) return styles["seven-cards"];
    if (cards.length === 6) return styles["six-cards"];
    return "";
  };

  return (
    <div className={styles["website-crm-section"]}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div
        className={`${styles["website-crm-all-cards"]} ${getCardsClass()}`}
        data-count={cards.length}
      >
        {cards.map((item, index) => (
          <div className={styles["website-crm-card"]} key={index}>
            <div className={styles["circle-icon"]}>
              {item.icon || dialerIcons[index % dialerIcons.length]}
            </div>
            <h5>{item.title}</h5>
            <h6>{item.detail}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DialerFeatures;

