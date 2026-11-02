import React from "react";
import styles from "../../styles/YourCustomer.module.scss";
const BottlCustomer = () => {
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
      title: "1. Integrate",
      detail:
        "Add the chatbot to your website, app or WhatsApp in just minutes",
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
            d="M8.7125 10.7125C8.90417 10.5208 9 10.2833 9 10C9 9.71667 8.90417 9.47917 8.7125 9.2875C8.52083 9.09583 8.28333 9 8 9C7.71667 9 7.47917 9.09583 7.2875 9.2875C7.09583 9.47917 7 9.71667 7 10C7 10.2833 7.09583 10.5208 7.2875 10.7125C7.47917 10.9042 7.71667 11 8 11C8.28333 11 8.52083 10.9042 8.7125 10.7125ZM12.7125 10.7125C12.9042 10.5208 13 10.2833 13 10C13 9.71667 12.9042 9.47917 12.7125 9.2875C12.5208 9.09583 12.2833 9 12 9C11.7167 9 11.4792 9.09583 11.2875 9.2875C11.0958 9.47917 11 9.71667 11 10C11 10.2833 11.0958 10.5208 11.2875 10.7125C11.4792 10.9042 11.7167 11 12 11C12.2833 11 12.5208 10.9042 12.7125 10.7125ZM16.7125 10.7125C16.9042 10.5208 17 10.2833 17 10C17 9.71667 16.9042 9.47917 16.7125 9.2875C16.5208 9.09583 16.2833 9 16 9C15.7167 9 15.4792 9.09583 15.2875 9.2875C15.0958 9.47917 15 9.71667 15 10C15 10.2833 15.0958 10.5208 15.2875 10.7125C15.4792 10.9042 15.7167 11 16 11C16.2833 11 16.5208 10.9042 16.7125 10.7125ZM2 22V4C2 3.45 2.19583 2.97917 2.5875 2.5875C2.97917 2.19583 3.45 2 4 2H20C20.55 2 21.0208 2.19583 21.4125 2.5875C21.8042 2.97917 22 3.45 22 4V16C22 16.55 21.8042 17.0208 21.4125 17.4125C21.0208 17.8042 20.55 18 20 18H6L2 22ZM5.15 16H20V4H4V17.125L5.15 16Z"
            fill="white"
          />
        </svg>
      ),
      title: "2. Chat",
      detail: "Customers message the bot whenever they need help",
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
            d="M6 21V19L7 18H4C3.45 18 2.97917 17.8042 2.5875 17.4125C2.19583 17.0208 2 16.55 2 16V5C2 4.45 2.19583 3.97917 2.5875 3.5875C2.97917 3.19583 3.45 3 4 3H12V5H4V16H20V13H22V16C22 16.55 21.8042 17.0208 21.4125 17.4125C21.0208 17.8042 20.55 18 20 18H17L18 19V21H6ZM15 15L10 10L11.4 8.6L14 11.175V3H16V11.175L18.6 8.6L20 10L15 15Z"
            fill="white"
          />
        </svg>
      ),
      title: "3. Connect",
      detail: "Complex queries are handed to your team with full chat history",
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
      detail: "Engage, assist and turn leads into loyal customers",
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

export default BottlCustomer;
