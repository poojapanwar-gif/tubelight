import React from "react";
import styles from "../../styles/WebsiteCRM.module.scss";
const IVRAutomate = () => {
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
            d="M3.25 13C3.25 10.4141 4.27723 7.93419 6.10571 6.10571C7.93419 4.27723 10.4141 3.25 13 3.25C15.5859 3.25 18.0658 4.27723 19.8943 6.10571C21.7228 7.93419 22.75 10.4141 22.75 13V19.5C22.75 20.0746 22.5217 20.6257 22.1154 21.0321C21.7091 21.4384 21.158 21.6667 20.5833 21.6667H19.5V14.0833H22.75M3.25 13V14.0833H6.5V21.6667H5.41667C4.84203 21.6667 4.29093 21.4384 3.8846 21.0321C3.47827 20.6257 3.25 20.0746 3.25 19.5V13Z"
            strokeWidth="1.08333"
            stroke="white"
          />
        </svg>
      ),
      title: "Automated Greetings",
      detail:
        "Welcome every caller with custom voice prompts, in the language they prefer, around the clock.",
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
            d="M4.33325 6.5H21.6666M4.33325 13H15.1666M4.33325 19.5H10.8333"
            strokeWidth="1.08333"
            stroke="white"
          />
        </svg>
      ),
      title: "Multi-level Menus",
      detail:
        "Build keypad menus with sub-options so callers reach the right department or answer in a few taps.",
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
            d="M6.5 3.25V9.75C6.5 10.612 6.84241 11.4386 7.4519 12.0481C8.0614 12.6576 8.88805 13 9.75 13H16.25C17.112 13 17.9386 13.3424 18.5481 13.9519C19.1576 14.5614 19.5 15.388 19.5 16.25V22.75M9.75 6.5L6.5 3.25L3.25 6.5"
            strokeWidth="1.08333"
            stroke="white"
          />
        </svg>
      ),
      title: "Smart Call Routing",
      detail:
        "Route calls by department, time of day, language or agent availability to cut wait times.",
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
            d="M3.25 13C3.25 10.4141 4.27723 7.93419 6.10571 6.10571C7.93419 4.27723 10.4141 3.25 13 3.25C15.5859 3.25 18.0658 4.27723 19.8943 6.10571C21.7228 7.93419 22.75 10.4141 22.75 13V19.5C22.75 20.0746 22.5217 20.6257 22.1154 21.0321C21.7091 21.4384 21.158 21.6667 20.5833 21.6667H19.5V14.0833H22.75M3.25 13V14.0833H6.5V21.6667H5.41667C4.84203 21.6667 4.29093 21.4384 3.8846 21.0321C3.47827 20.6257 3.25 20.0746 3.25 19.5V13Z"
            strokeWidth="1.08333"
            stroke="white"
          />
        </svg>
      ),
      title: "Self-service Options",
      detail:
        "Let customers check balances, order status or bill details without waiting for an agent.",
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
            d="M4.33325 6.5H21.6666M4.33325 13H15.1666M4.33325 19.5H10.8333"
            strokeWidth="1.08333"
            stroke="white"
          />
        </svg>
      ),
      title: "Voice Broadcast",
      detail:
        "Send reminders, alerts and announcements to thousands of customers as automated calls.",
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
            d="M6.5 3.25V9.75C6.5 10.612 6.84241 11.4386 7.4519 12.0481C8.0614 12.6576 8.88805 13 9.75 13H16.25C17.112 13 17.9386 13.3424 18.5481 13.9519C19.1576 14.5614 19.5 15.388 19.5 16.25V22.75M9.75 6.5L6.5 3.25L3.25 6.5"
            strokeWidth="1.08333"
            stroke="white"
          />
        </svg>
      ),
      title: "Reports and Analytics",
      detail:
        "Track call volumes, drop-offs and menu choices with call logs and real-time dashboards.",
    },
  ];
  return (
    <div className={styles["website-crm-section"]}>
      <h2>Everything You Need to Automate Voice Journeys</h2>
      <p>
        Set up professional call flows in minutes and give every caller a faster, smoother experience.
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

export default IVRAutomate;
