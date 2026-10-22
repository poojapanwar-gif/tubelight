import React from "react";
import styles from "../../styles/WebsiteCRM.module.scss";
const MaskingCall = () => {
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
      title: "Privacy by Design",
      detail:
        "Keep real phone numbers of customers, riders, agents and sellers hidden on every call.",
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
            d="M5.41406 9.75H20.5807M5.41406 16.25H20.5807M9.7474 3.25L7.58073 22.75M18.4141 3.25L16.2474 22.75"
            strokeWidth="1.08333"
            stroke="white"
          />
        </svg>
      ),
      title: "Virtual Number Pairing",
      detail:
        "Assign a temporary virtual number to each order, booking or session automatically.",
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
      title: "Two-way Anonymous Calls",
      detail:
        "Both parties can call each other through the same virtual number, with no personal details shared.",
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
      title: "Call Recording & Logs",
      detail:
        "Record calls for quality and dispute resolution, with complete call logs for every masked session.",
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
            d="M4.33594 13.0001C4.33407 11.2389 4.8688 9.51898 5.86892 8.06933C6.86904 6.61968 8.28708 5.50913 9.93417 4.88559C11.5813 4.26205 13.3792 4.15511 15.0886 4.57901C16.798 5.00292 18.3377 5.93755 19.5026 7.25843L21.6693 9.7501M16.2526 9.7501H21.6693V4.33343M21.6693 13.0001C21.6711 14.7613 21.1364 16.4812 20.1363 17.9309C19.1362 19.3805 17.7181 20.4911 16.071 21.1146C14.424 21.7381 12.626 21.8451 10.9166 21.4212C9.20719 20.9973 7.66751 20.0626 6.50261 18.7418L4.33594 16.2501M9.75261 16.2501H4.33594V21.6668"
            strokeWidth="1.08333"
            stroke="white"
          />
        </svg>
      ),
      title: "Auto-expiry Rules",
      detail:
        "Let numbers expire when an order closes or after a set time, so old sessions cannot be reused.",
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
            d="M4.33073 21.6663V10.833M10.8307 21.6663V4.33301M17.3307 21.6663V14.083M23.8307 21.6663H2.16406"
            strokeWidth="1.08333"
            stroke="white"
          />
        </svg>
      ),
      title: "Reports and Analytics",
      detail:
        "Track call volumes, durations and connect rates with real-time dashboards and exports.",
    },
  ];
  return (
    <div className={styles["website-crm-section"]}>
      <h2>Privacy Built Into Every Call</h2>
      <p>
        Connect people through virtual numbers so conversations stay smooth,
        secure and fully trackable.
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

export default MaskingCall;
