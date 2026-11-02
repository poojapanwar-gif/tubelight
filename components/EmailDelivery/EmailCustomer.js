import React from "react";
import styles from "../../styles/YourCustomer.module.scss";
const EmailCustomer = () => {
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
            d="M8.66667 7.58337L3.25 13L8.66667 18.4167M17.3333 7.58337L22.75 13L17.3333 18.4167"
            strokeWidth="2"
            stroke="white"
          />
        </svg>
      ),
      title: "1. Integrate",
      detail:
        "Connect through the REST API, SMTP relay or web portal in just minutes.",
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
            d="M4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H20C20.55 4 21.0208 4.19583 21.4125 4.5875C21.8042 4.97917 22 5.45 22 6V18C22 18.55 21.8042 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H4ZM4 18H20V8H4V18ZM10.95 16.55L7.4 13L8.85 11.55L10.95 13.65L15.15 9.45L16.6 10.9L10.95 16.55Z"
            fill="white"
          />
        </svg>
      ),
      title: "2. Authenticate",
      detail:
        "Verify your domain with SPF, DKIM and DMARC so inbox providers trust you.",
    },
    {
      icon: (
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1112_1331)">
            <path
              d="M14.5489 27.7711L5.67188 16.306L23.7195 11.5016L14.5489 27.7711ZM14.3575 25.0738L20.6662 13.8656L8.23539 17.1668L10.4958 20.0862L15.5844 17.8003L12.097 22.1543L14.3575 25.0738Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1112_1331">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0 14.693) rotate(-37.7493)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
      title: "3. Send",
      detail:
        "Trigger transactional emails or launch campaigns to your audience.",
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
            d="M3.25 20.75V19.1057L4.75 17.6057V20.75H3.25ZM7.25 20.75V15.1057L8.75 13.6057V20.75H7.25ZM11.25 20.75V13.6057L12.75 15.1307V20.75H11.25ZM15.25 20.75V15.1307L16.75 13.6307V20.75H15.25ZM19.25 20.75V11.1057L20.75 9.60571V20.75H19.25ZM3.25 15.2192V13.1057L10 6.35571L14 10.3557L20.75 3.60571V5.71921L14 12.4692L10 8.46921L3.25 15.2192Z"
            fill="white"
          />
        </svg>
      ),
      title: "4. Track",
      detail:
        "Follow opens, clicks and bounces in real-time reports and improve results.",
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

export default EmailCustomer;
