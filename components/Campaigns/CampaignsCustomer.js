import React from "react";
import styles from "../../styles/YourCustomer.module.scss";
const CampaignsCustomer = () => {
  const cardContent = [
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
            d="M6 22C5.45 22 4.97917 21.8042 4.5875 21.4125C4.19583 21.0208 4 20.55 4 20V4C4 3.45 4.19583 2.97917 4.5875 2.5875C4.97917 2.19583 5.45 2 6 2H18C18.55 2 19.0208 2.19583 19.4125 2.5875C19.8042 2.97917 20 3.45 20 4V20C20 20.55 19.8042 21.0208 19.4125 21.4125C19.0208 21.8042 18.55 22 18 22H6ZM6 20H18V4H6V20ZM7 18H17L13.55 13.5L11.25 16.5L9.7 14.5L7 18Z"
            fill="white"
          />
        </svg>
      ),
      title: "1. Plan",
      detail: "Upload your contacts and define your audience in minutes.",
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
            d="M8.8 10.95L10.95 8.775L9.55 7.35L8.45 8.45L7.05 7.05L8.125 5.95L7 4.825L4.825 7L8.8 10.95ZM17 19.175L19.175 17L18.05 15.875L16.95 16.95L15.55 15.55L16.625 14.45L15.2 13.05L13.05 15.2L17 19.175ZM7.25 21H3V16.75L7.375 12.375L2 7L7 2L12.4 7.4L16.175 3.6C16.375 3.4 16.6 3.25 16.85 3.15C17.1 3.05 17.3583 3 17.625 3C17.8917 3 18.15 3.05 18.4 3.15C18.65 3.25 18.875 3.4 19.075 3.6L20.4 4.95C20.6 5.15 20.75 5.375 20.85 5.625C20.95 5.875 21 6.13333 21 6.4C21 6.66667 20.95 6.92083 20.85 7.1625C20.75 7.40417 20.6 7.625 20.4 7.825L16.625 11.625L22 17L17 22L11.625 16.625L7.25 21ZM5 19H6.4L16.2 9.225L14.775 7.8L5 17.6V19ZM15.5 8.525L14.775 7.8L16.2 9.225L15.5 8.525Z"
            fill="white"
          />
        </svg>
      ),
      title: "2. Create",
      detail: "Design your message with templates, media, and personalization.",
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
            d="M5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H15V19H19V7H5V19H9V21H5ZM11 21V14.85L9.4 16.45L8 15L12 11L16 15L14.6 16.45L13 14.85V21H11Z"
            fill="white"
          />
        </svg>
      ),
      title: "3. Launch",
      detail: "Schedule or send instantly across your chosen channels.",
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
            d="M9 18L10.4 16.6L8.85 15H13V13H8.85L10.4 11.4L9 10L5 14L9 18ZM15 14L19 10L15 6L13.6 7.4L15.15 9H11V11H15.15L13.6 12.6L15 14ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
            fill="white"
          />
        </svg>
      ),
      title: "4. Convert",
      detail:
        "Track responses, follow up, and turn leads into loyal customers.",
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

export default CampaignsCustomer;
