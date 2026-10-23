import React from "react";
import styles from "../../styles/WebsiteCRM.module.scss";
const EmailCall = () => {
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
      title: "Transactional Email",
      detail:
        "Order confirmations, receipts, password resets and alerts — delivered the moment they are triggered.",
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
      title: "Marketing Campaigns",
      detail:
        "Run newsletters, promotions and announcements to your whole audience at scale.",
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
      title: "SMTP & Email API",
      detail:
        "Integrate in minutes with a developer-friendly REST API or a standard SMTP relay.",
    },
    {
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.7999 19.0478V22.4291C24.8015 22.7451 24.7366 23.0579 24.6095 23.3472C24.4824 23.6365 24.2959 23.8958 24.0621 24.1084C23.8283 24.3209 23.5524 24.4819 23.2523 24.581C22.9522 24.68 22.6347 24.7149 22.3203 24.6833C17.2061 24.1644 12.4279 21.8958 8.79303 18.2609C5.15818 14.6261 2.88962 9.84785 2.37068 4.73366C2.33907 4.41926 2.37393 4.10172 2.47297 3.80165C2.57202 3.50159 2.73304 3.2257 2.9456 2.99188C3.15816 2.75807 3.4175 2.57155 3.7068 2.44444C3.9961 2.31733 4.30889 2.25247 4.62487 2.25405H8.00616C8.5498 2.2479 9.07733 2.43844 9.49157 2.79054C9.90581 3.14265 10.1788 3.6326 10.2604 4.17012C10.3731 5.29721 10.7112 6.3116 11.0493 7.32599C11.1916 7.73309 11.2142 8.17247 11.1143 8.592C11.0144 9.01153 10.7963 9.39361 10.4858 9.69289L9.02055 11.1581C10.625 13.9799 12.9614 16.3162 15.7831 17.9207L17.2484 16.4555C17.5598 16.1641 17.9476 15.9671 18.3665 15.8873C18.7855 15.8075 19.2185 15.8482 19.6153 16.0046C20.6297 16.3428 21.644 16.6809 22.7711 16.7936C23.3087 16.8751 23.7986 17.1482 24.1507 17.5624C24.5028 17.9766 24.6934 18.5042 24.6872 19.0478H24.7999Z"
            strokeWidth="1.1271"
            stroke="white"
          />
        </svg>
      ),
      title: "Inbox Deliverability",
      detail:
        "SPF, DKIM and DMARC authentication and sender reputation tools to keep emails out of spam.",
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
            d="M8.66667 7.5835L3.25 13.0002L8.66667 18.4168M17.3333 7.5835L22.75 13.0002L17.3333 18.4168"
            strokeWidth="1.08333"
            stroke="white"
          />
        </svg>
      ),
      title: "Templates & Editor",
      detail:
        "Build responsive, on-brand emails with reusable templates and a simple drag-and-drop editor.",
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
      title: "Analytics & Webhooks",
      detail:
        "Track delivery, opens, clicks and bounces in real time, and sync events to your own systems.",
    },
  ];
  return (
    <div className={styles["website-crm-section"]}>
      <h2>Emails That Reach the Inbox</h2>
      <p>
        Send order updates, receipts and campaigns with the authentication, speed and insights your business needs.
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

export default EmailCall;
