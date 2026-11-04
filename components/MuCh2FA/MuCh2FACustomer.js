import React from "react";
import styles from "../../styles/YourCustomer.module.scss";
const MuCh2FACustomer = () => {
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
            d="M8.66667 7.58203L3.25 12.9987L8.66667 18.4154M17.3333 7.58203L22.75 12.9987L17.3333 18.4154"
            strokeWidth="2"
            stroke="white"
          />
        </svg>
      ),
      title: "1. Integrate",
      detail: "Connect once with a single API or the web portal.",
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
            strokeWidth="2"
            stroke="white"
          />
        </svg>
      ),
      title: "2. Prioritise",
      detail: "Choose your channels and set the order they should be tried.",
    },
    {
      icon: (
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1542_169)">
            <path
              d="M13.6481 30.14L4.98145 15.1289L27.1405 12.3428L13.6481 30.14ZM13.8995 26.2421L22.3088 15.1324L8.48283 16.8602L10.3787 20.1438L16.8203 18.3011L12.0037 22.9584L13.8995 26.2421ZM13.8995 26.2421L11.1912 21.5511L8.48283 16.8602L10.3787 20.1438L12.0037 22.9584L13.8995 26.2421Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1542_169">
              <rect
                width="26"
                height="26"
                fill="white"
                transform="translate(0 13) rotate(-30)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "3. Deliver",
      detail: "The OTP goes out on your first-choice channel.",
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
            d="M1.625 15.1654V10.2904H4.875V15.1654H1.625ZM8.125 15.1654V8.66536H11.375V15.1654H8.125ZM14.625 15.1654V6.4987H17.875V15.1654H14.625ZM21.125 15.1654V4.33203H24.375V15.1654H21.125ZM1.625 21.6654V17.332H4.875V21.6654H1.625ZM8.125 21.6654V17.332H11.375V21.6654H8.125ZM14.625 21.6654V17.332H17.875V21.6654H14.625ZM21.125 21.6654V17.332H24.375V21.6654H21.125Z"
            fill="white"
          />
        </svg>
      ),
      title: "4. Failover",
      detail: "If it fails, the next channel takes over automatically.",
    },
  ];
  return (
    <div className={styles["your-customer-section"]}>
      <h2>Simple for You. Seamless for Your Customers.</h2>
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

export default MuCh2FACustomer;
