import React from "react";
import styles from "../../styles/PhoneCustomizable.module.scss";
const PhoneCustomizable = () => {
  const cards = [
    {
      title: "Multiple Language Support",
      detail:
        "Let us worry about which language your end user needs their voice call in-our API has it all under control!",
    },
    {
      title: "Callback Function",
      detail:
        "Need confirmation of verification? No problem! We’ve got you covered with a quick callback to your backend when end users have been verified.",
    },
    {
      title: "Digital Inclusion",
      detail:
        "Phone Call Verification is an inclusive method that ensures no user is left behind.",
    },
  ];
  return (
    <div className={styles["phone-customization-section"]}>
      <h2>Customizable verification based on your needs</h2>
      <div className={styles["streamline-all-cards"]}>
        {cards.map((item, index) => (
          <div className={styles["stream-card"]} key={index}>
            <h4>{item.title}</h4>
            <p>{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhoneCustomizable;
