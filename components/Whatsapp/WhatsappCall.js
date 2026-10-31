import React from "react";
import styles from "../../styles/WebsiteCRM.module.scss";
const WhatsappCall = () => {
  const cardData = [
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.7913 38.25L26.8747 36.5833L28.7913 33.3333H24.9997V30H28.7913L26.8747 26.75L29.7913 25.0833L31.6663 28.3333L33.5413 25.0833L36.458 26.75L34.5413 30H38.333V33.3333H34.5413L36.458 36.5833L33.5413 38.25L31.6663 35L29.7913 38.25ZM6.66634 33.3333C5.74967 33.3333 4.96523 33.0072 4.31301 32.355C3.66079 31.7027 3.33412 30.9177 3.33301 30V9.99996C3.33301 9.08329 3.65967 8.29885 4.31301 7.64663C4.96634 6.9944 5.75079 6.66774 6.66634 6.66663H33.333C34.2497 6.66663 35.0347 6.99329 35.688 7.64663C36.3413 8.29996 36.6674 9.0844 36.6663 9.99996V22.9583C35.9441 22.5416 35.1597 22.2155 34.313 21.98C33.4663 21.7444 32.5841 21.6261 31.6663 21.625C28.8886 21.625 26.5208 22.6044 24.563 24.5633C22.6052 26.5222 21.6258 28.89 21.6247 31.6666C21.6247 31.9722 21.6319 32.2572 21.6463 32.5216C21.6608 32.7861 21.6952 33.0566 21.7497 33.3333H6.66634ZM19.9997 21.6666L33.333 13.3333V9.99996L19.9997 18.3333L6.66634 9.99996V13.3333L19.9997 21.6666Z"
            fill="white"
          />
        </svg>
      ),
      title: "Build a Brand",
      detail:
        "WhatsApp has over 98% message open rate & 45-60% click-through rate & carries a fantastic potential for Business Growth.",
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.6668 35L23.3335 23.3333H13.2918L26.6668 5H28.3335L26.6668 16.6667H36.7085L23.3335 35H21.6668ZM5.00016 30V26.6667H19.5002L19.0002 30H5.00016ZM3.3335 21.6667V18.3333H12.8335L10.4168 21.6667H3.3335ZM6.66683 13.3333V10H18.9168L16.5002 13.3333H6.66683Z"
            fill="white"
          />
        </svg>
      ),
      title: "Actionable & Clickable Buttons",
      detail:
        "Adding Clickable CTA Buttons & Quick Replies to messages make them more engaging & powerful. Not just clickable buttons, your messages can include rich media like Images, Videos, Files, emojis & more.",
    },
    {
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.9 27.3L19.15 24.55C18.75 24.15 18.2667 23.95 17.7 23.95C17.1333 23.95 16.65 24.15 16.25 24.55C15.85 24.95 15.65 25.4333 15.65 26C15.65 26.5667 15.85 27.05 16.25 27.45L20.5 31.7C20.9 32.1 21.3667 32.3 21.9 32.3C22.4333 32.3 22.9 32.1 23.3 31.7L31.75 23.25C32.15 22.85 32.35 22.3667 32.35 21.8C32.35 21.2333 32.15 20.75 31.75 20.35C31.35 19.95 30.8667 19.75 30.3 19.75C29.7333 19.75 29.25 19.95 28.85 20.35L21.9 27.3ZM8 16H40V12H8V16ZM8 40C6.9 40 5.95867 39.6087 5.176 38.826C4.39333 38.0433 4.00133 37.1013 4 36V12C4 10.9 4.392 9.95867 5.176 9.176C5.96 8.39333 6.90133 8.00133 8 8H40C41.1 8 42.042 8.392 42.826 9.176C43.61 9.96 44.0013 10.9013 44 12V36C44 37.1 43.6087 38.042 42.826 38.826C42.0433 39.61 41.1013 40.0013 40 40H8Z"
            fill="#F8FAFC"
          />
        </svg>
      ),
      title: "Brand Identity",
      detail:
        "Direct confirmation from WhatsApp, confirming your Brand's reliability. Whenever a user sees the Green Tick on your WhatsApp Profile, they'll know they are talking to a trusted Brand.",
    },
  ];
  return (
    <div className={styles["website-crm-section"]}>
      <h2>Create an exceptional brand experience.</h2>
      <p>
        Leverage 2 billion+ active users in more then 180 countries to take your
        brand places.
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

export default WhatsappCall;
