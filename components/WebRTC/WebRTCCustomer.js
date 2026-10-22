import React from "react";
import styles from "../../styles/YourCustomer.module.scss";
const WebRTCCustomer = () => {
  const cardContent = [
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
      title: "1. Embed",
      detail:
        "Add the calling widget or SDK to your site, app or CRM in just minutes.",
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
      title: "2. Authorize",
      detail: "Issue a secure token for each user so only approved callers can connect.",
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
      title: "3. Connect",
      detail:
        "Users click to call and talk instantly — browser to phone, in real time.",
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
            d="M22.75 13C22.75 18.3848 18.3848 22.75 13 22.75C7.61522 22.75 3.25 18.3848 3.25 13C3.25 7.61522 7.61522 3.25 13 3.25C18.3848 3.25 22.75 7.61522 22.75 13Z"
            strokeWidth="1.08333"
            stroke="white"
          />
          <path
            d="M13 7.5835V13.0002L16.25 15.1668"
            strokeWidth="1.08333"
            stroke="white"
          />
        </svg>
      ),
      title: "4. Analyze",
      detail: "Review call logs, recordings and quality metrics to improve every conversation.",
    },
  ];
  return (
    <div className={styles["your-customer-section"]}>
      <h2>Simple for you Seamless for your customers</h2>
      <div className={styles["all-customer-cards"]}>
        {cardContent.map((item, index) => (
          <div className={styles["customer-card"]} key={index}>
            <div className={styles["customer-icon-circle"]}>
              <div className={styles["customer-icon"]}>{item.icon}</div>
            </div>
            <h5>{item.title}</h5>
            <p>{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebRTCCustomer;
