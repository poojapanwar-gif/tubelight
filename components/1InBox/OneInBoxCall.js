import React from "react";
import styles from "../../styles/WebsiteCRM.module.scss";
const OneInBoxCall = () => {
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
            d="M21.6665 9.75065V6.50065H18.4165V4.33398H21.6665C22.2623 4.33398 22.7724 4.54614 23.1967 4.97044C23.621 5.39475 23.8332 5.90482 23.8332 6.50065V9.75065H21.6665ZM2.1665 9.75065V6.50065C2.1665 5.90482 2.37866 5.39475 2.80296 4.97044C3.22727 4.54614 3.73734 4.33398 4.33317 4.33398H7.58317V6.50065H4.33317V9.75065H2.1665ZM18.4165 21.6673V19.5007H21.6665V16.2507H23.8332V19.5007C23.8332 20.0965 23.621 20.6066 23.1967 21.0309C22.7724 21.4552 22.2623 21.6673 21.6665 21.6673H18.4165ZM4.33317 21.6673C3.73734 21.6673 3.22727 21.4552 2.80296 21.0309C2.37866 20.6066 2.1665 20.0965 2.1665 19.5007V16.2507H4.33317V19.5007H7.58317V21.6673H4.33317ZM6.49984 17.334V8.66732H19.4998V17.334H6.49984ZM8.6665 15.1673H17.3332V10.834H8.6665V15.1673Z"
            fill="white"
          />
        </svg>
      ),
      title: "Every Channel, One Screen",
      detail:
        "Receive and reply to WhatsApp, SMS, RCS, voice and web chat messages in one place. Your team no longer has to move between platforms or miss a message.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 16H7C7 15.45 6.80417 14.9792 6.4125 14.5875C6.02083 14.1958 5.55 14 5 14V16ZM8.55 16H10C10 14.6167 9.5125 13.4375 8.5375 12.4625C7.5625 11.4875 6.38333 11 5 11V12.45C5.98333 12.45 6.82083 12.7958 7.5125 13.4875C8.20417 14.1792 8.55 15.0167 8.55 16ZM11.55 16H13C13 14.9 12.7917 13.8625 12.375 12.8875C11.9583 11.9125 11.3875 11.0625 10.6625 10.3375C9.9375 9.6125 9.0875 9.04167 8.1125 8.625C7.1375 8.20833 6.1 8 5 8V9.45C6.81667 9.45 8.3625 10.0875 9.6375 11.3625C10.9125 12.6375 11.55 14.1833 11.55 16ZM8 21V19H4C3.45 19 2.97917 18.8042 2.5875 18.4125C2.19583 18.0208 2 17.55 2 17V5C2 4.45 2.19583 3.97917 2.5875 3.5875C2.97917 3.19583 3.45 3 4 3H20C20.55 3 21.0208 3.19583 21.4125 3.5875C21.8042 3.97917 22 4.45 22 5V17C22 17.55 21.8042 18.0208 21.4125 18.4125C21.0208 18.8042 20.55 19 20 19H16V21H8ZM4 17H20V5H4V17Z"
            fill="white"
          />
        </svg>
      ),
      title: "Smart Routing & Collaboration",
      detail:
        "Assign conversations to the right agent or team automatically. Add internal notes, transfer chats and work together without confusing the customer.",
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
            d="M3.25 22.75V20.5833L5.41667 18.4167V22.75H3.25ZM7.58333 22.75V16.25L9.75 14.0833V22.75H7.58333ZM11.9167 22.75V14.0833L14.0833 16.2771V22.75H11.9167ZM16.25 22.75V16.2771L18.4167 14.1104V22.75H16.25ZM20.5833 22.75V11.9167L22.75 9.75V22.75H20.5833ZM3.25 17.1438V14.0833L10.8333 6.5L15.1667 10.8333L22.75 3.25V6.31042L15.1667 13.8938L10.8333 9.56042L3.25 17.1438Z"
            fill="white"
          />
        </svg>
      ),
      title: "Insights & Analytics",
      detail:
        "Track response times, agent performance and conversation volume in real time. Use the data to improve service quality and customer satisfaction.",
    },
  ];
  return (
    <div className={styles["website-crm-section"]}>
      <h2> 1inBox for Every Customer Conversation</h2>
      <p>
        Stop switching between apps and tabs. Manage every channel from a single
        dashboard, with a complete history for each customer, so your team can
        respond quickly and consistently.
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

export default OneInBoxCall;
