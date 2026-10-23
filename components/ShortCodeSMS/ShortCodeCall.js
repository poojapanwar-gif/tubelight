import React from "react";
import styles from "../../styles/WebsiteCRM.module.scss";
const ShortCodeCall = () => {
  const cardData = [
    {
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.0026 2.16699L21.6693 5.41699V11.917C21.6693 17.3337 17.9859 21.992 13.0026 23.8337C8.01927 21.992 4.33594 17.3337 4.33594 11.917V5.41699L13.0026 2.16699Z"
            strokeWidth="1.08333"
            stroke="white"
          />
        </svg>
      ),
      title: "Easy to remember",
      detail:
        "A short, branded number is simple to type and works across telecom operators, so customers reach you without friction.",
    },
    {
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.41406 11.9167C5.41406 13.9279 6.21302 15.8567 7.63517 17.2789C9.05732 18.701 10.9862 19.5 12.9974 19.5M12.9974 19.5C15.0086 19.5 16.9375 18.701 18.3596 17.2789C19.7818 15.8567 20.5807 13.9279 20.5807 11.9167M12.9974 19.5V22.75M12.9974 3.25C12.1354 3.25 11.3088 3.59241 10.6993 4.2019C10.0898 4.8114 9.7474 5.63805 9.7474 6.5V13C9.7474 13.862 10.0898 14.6886 10.6993 15.2981C11.3088 15.9076 12.1354 16.25 12.9974 16.25C13.8593 16.25 14.686 15.9076 15.2955 15.2981C15.905 14.6886 16.2474 13.862 16.2474 13V6.5C16.2474 5.63805 15.905 4.8114 15.2955 4.2019C14.686 3.59241 13.8593 3.25 12.9974 3.25Z"
            strokeWidth="1.08333"
            stroke="white"
          />
        </svg>
      ),
      title: "Two-way messaging",
      detail:
        "Customers can reply to your messages, enabling enquiries, feedback, polls and automated keyword responses.",
    },
    {
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.58333 18.4167L3.25 22.75V5.41667C3.25 4.84203 3.47827 4.29093 3.8846 3.8846C4.29093 3.47827 4.84203 3.25 5.41667 3.25H20.5833C21.158 3.25 21.7091 3.47827 22.1154 3.8846C22.5217 4.29093 22.75 4.84203 22.75 5.41667V15.1667C22.75 15.7413 22.5217 16.2924 22.1154 16.6987C21.7091 17.1051 21.158 17.3333 20.5833 17.3333L7.58333 18.4167Z"
            strokeWidth="1.08333"
            stroke="white"
          />
        </svg>
      ),
      title: "Reports & analytics",
      detail:
        "Track delivery and responses so you can optimise campaigns and improve customer service strategies.",
    },
  ];
  return (
    <div className={styles["website-crm-section"]}>
      <h2>Engage Customers With Two-Way Short Code SMS</h2>
      <p>
       Run opt-in campaigns, alerts and keyword-based replies on one easy-to-remember number, and let your customers respond in real time.
      </p>
      <div className={styles["website-crm-all-cards"]}>
        {cardData.map((item, index) => (
          <div className={styles["website-crm-card"]} key={index}>
            <div className={styles["circle-icon"]}>{item.icon}</div>
            <h5>{item.title}</h5>
            <h6>{item.detail}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShortCodeCall;
