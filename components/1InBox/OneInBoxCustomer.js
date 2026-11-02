import React from "react";
import styles from "../../styles/YourCustomer.module.scss";
const OneInBoxCustomer = () => {
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
            d="M8.66667 7.58398L3.25 13.0007L8.66667 18.4173M17.3333 7.58398L22.75 13.0007L17.3333 18.4173"
            strokeWidth="2"
            stroke="white"
          />
        </svg>
      ),
      title: "1. Connect",
      detail: "Add your WhatsApp, SMS, RCS, voice and chat channels in minutes",
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
          <path d="M5 19V9H7V15.6L18.6 4L20 5.4L8.4 17H15V19H5Z" fill="white" />
        </svg>
      ),
      title: "2. Receive",
      detail: "Every customer message lands in one shared inbox",
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
            d="M2 22V4C2 3.45 2.19583 2.97917 2.5875 2.5875C2.97917 2.19583 3.45 2 4 2H20C20.55 2 21.0208 2.19583 21.4125 2.5875C21.8042 2.97917 22 3.45 22 4V10H20V4H4V17.125L5.15 16H15V18H6L2 22ZM19 23V18H17V12H22L20.3 16H22.5L19 23Z"
            fill="white"
          />
        </svg>
      ),
      title: "3. Respond",
      detail:
        "Your team replies with templates, notes and AI-suggested answers",
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
            d="M14.4 20.0008L13 18.6008L15.6 16.0008L13 13.4008L14.4 12.0008L17 14.6008L19.6 12.0008L21 13.4008L18.4 16.0008L21 18.6008L19.6 20.0008L17 17.4008L14.4 20.0008ZM16.375 11.0008L12.825 7.45078L14.225 6.05078L16.35 8.17578L20.6 3.92578L22 5.35078L16.375 11.0008ZM2 17.0008V15.0008H11V17.0008H2ZM2 9.00078V7.00078H11V9.00078H2Z"
            fill="white"
          />
        </svg>
      ),
      title: "4. Resolve",
      detail: "Close conversations, track results and keep customers happy",
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

export default OneInBoxCustomer;
