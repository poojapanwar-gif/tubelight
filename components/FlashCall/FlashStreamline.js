import React from "react";
import styles from "../../styles/FlashStreamline.module.scss";
const FlashStreamline = () => {
  const cards = [
    {
      title: "Improved UX",
      detail:
        "Delight customers with smooth, simple authentication that’s up to 70% faster than the SMS industry standard.",
    },
    {
      title: "Higher Conversions",
      detail:
        "Don’t lose customers at the first hurdle. Build verification solutions to match expectations - quick and easy!",
    },
    {
      title: "Lower Acquisition Costs",
      detail:
        "A premium verification service for less! Flash Call Verification can save up to 25% on OTP costs compared to SMS.",
    },
  ];
  return (
    <div className={styles["flash-streamline-section"]}>
      <h2>Streamline UX and reduce costs, securely</h2>
      <div className={styles["streamline-all-cards"]}>
        {
          cards.map((item,index)=>(
            <div className={styles["stream-card"]} key={index}>
              <h4>{item.title}</h4>
              <p>{item.detail}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default FlashStreamline;
