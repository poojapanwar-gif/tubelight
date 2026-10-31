import React from "react";
import styles from "../../styles/FlashMissedCall.module.scss";

const defaultCards = [
  {
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 2.5L4 13.5H11.5L10.5 21.5L19.5 10.5H12L13 2.5Z"
          fill="white"
          stroke="white"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Instant Verification",
    detail:
      "Authenticate users automatically with a quick missed call. The SDK captures incoming call digits instantly without requiring users to answer or type.",
  },
  {
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L4 5.5V11.5C4 16.5 7.4 21.1 12 22.3C16.6 21.1 20 16.5 20 11.5V5.5L12 2Z"
          fill="white"
        />
        <path
          d="M9 11.8L11 13.8L15 9.8"
          stroke="#5E6FF9"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Zero Cost for End Users",
    detail:
      "Calls disconnect automatically before connect, ensuring zero expense for your customers while saving up to 25% on overall OTP delivery costs.",
  },
  {
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="3" fill="white" />
        <path
          d="M16.24 7.76C18.58 10.1 18.58 13.9 16.24 16.24M7.76 7.76C5.42 10.1 5.42 13.9 7.76 16.24"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M19.07 4.93C22.98 8.84 22.98 15.16 19.07 19.07M4.93 4.93C1.02 8.84 1.02 15.16 4.93 19.07"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Bypass SMS Bottlenecks",
    detail:
      "Direct telco-level signaling avoids delivery latency, DND restrictions, and SIM-swap vulnerabilities common with traditional SMS verification.",
  },
];

const FlashMissedCall = ({
  title = "Verify customers with a missed call",
  desc = "A call is made to the user's mobile phone and a request is then passed to the provider’s backend to authenticate that user. The verification can happen automatically without the user even noticing via the SDK, or they can enter their phone number manually in a text field to get verified.",
  cards = defaultCards,
}) => {
  return (
    <div className={styles["flashmissed-call-section"]}>
      <h2>{title}</h2>
      <p>{desc}</p>
      <div
        className={`${styles["website-crm-all-cards"]} ${
          cards.length === 4 ? styles["four-cards"] : ""
        }`}
      >
        {cards.map((item, index) => (
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

export default FlashMissedCall;
