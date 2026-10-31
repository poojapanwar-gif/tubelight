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
            d="M4.33329 21.6667C3.73746 21.6667 3.22739 21.4546 2.80308 21.0302C2.37878 20.6059 2.16663 20.0959 2.16663 19.5V6.50004C2.16663 5.90421 2.37878 5.39414 2.80308 4.96983C3.22739 4.54553 3.73746 4.33337 4.33329 4.33337H21.6666C22.2625 4.33337 22.7725 4.54553 23.1968 4.96983C23.6211 5.39414 23.8333 5.90421 23.8333 6.50004V19.5C23.8333 20.0959 23.6211 20.6059 23.1968 21.0302C22.7725 21.4546 22.2625 21.6667 21.6666 21.6667H4.33329ZM13 14.0834L4.33329 8.66671V19.5H21.6666V8.66671L13 14.0834ZM13 11.9167L21.6666 6.50004H4.33329L13 11.9167ZM4.33329 8.66671V6.50004V19.5V8.66671Z"
            fill="white"
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
            d="M19.5 14.0834V11.9167H23.8333V14.0834H19.5ZM20.8 21.6667L17.3333 19.0667L18.6333 17.3334L22.1 19.9334L20.8 21.6667ZM18.6333 8.66671L17.3333 6.93337L20.8 4.33337L22.1 6.06671L18.6333 8.66671ZM5.41663 20.5834V16.25H4.33329C3.73746 16.25 3.22739 16.0379 2.80308 15.6136C2.37878 15.1893 2.16663 14.6792 2.16663 14.0834V11.9167C2.16663 11.3209 2.37878 10.8108 2.80308 10.3865C3.22739 9.96219 3.73746 9.75004 4.33329 9.75004H8.66663L14.0833 6.50004V19.5L8.66663 16.25H7.58329V20.5834H5.41663ZM11.9166 15.6542V10.3459L9.26246 11.9167H4.33329V14.0834H9.26246L11.9166 15.6542ZM15.1666 16.6292V9.37087C15.6541 9.80421 16.0468 10.3323 16.3448 10.9552C16.6427 11.5782 16.7916 12.2598 16.7916 13C16.7916 13.7403 16.6427 14.4219 16.3448 15.0448C16.0468 15.6677 15.6541 16.1959 15.1666 16.6292Z"
            fill="white"
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
            d="M13 15.1667L10.8333 13L13 10.8334L15.1666 13L13 15.1667ZM10.6979 8.80212L7.98956 6.09379L13 1.08337L18.0104 6.09379L15.3021 8.80212L13 6.50004L10.6979 8.80212ZM6.09373 18.0105L1.08331 13L6.09373 7.98962L8.80206 10.698L6.49998 13L8.80206 15.3021L6.09373 18.0105ZM19.9062 18.0105L17.1979 15.3021L19.5 13L17.1979 10.698L19.9062 7.98962L24.9166 13L19.9062 18.0105ZM13 24.9167L7.98956 19.9063L10.6979 17.198L13 19.5L15.3021 17.198L18.0104 19.9063L13 24.9167Z"
            fill="white"
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
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.41667 22.75C4.82083 22.75 4.31076 22.5378 3.88646 22.1135C3.46215 21.6892 3.25 21.1792 3.25 20.5833V5.41667C3.25 4.82083 3.46215 4.31076 3.88646 3.88646C4.31076 3.46215 4.82083 3.25 5.41667 3.25H20.5833C21.1792 3.25 21.6892 3.46215 22.1135 3.88646C22.5378 4.31076 22.75 4.82083 22.75 5.41667V20.5833C22.75 21.1792 22.5378 21.6892 22.1135 22.1135C21.6892 22.5378 21.1792 22.75 20.5833 22.75H5.41667ZM5.41667 20.5833H20.5833V17.3333H17.3333C16.7917 18.0194 16.1462 18.5521 15.3969 18.9313C14.6476 19.3104 13.8486 19.5 13 19.5C12.1514 19.5 11.3524 19.3104 10.6031 18.9313C9.85382 18.5521 9.20833 18.0194 8.66667 17.3333H5.41667V20.5833ZM14.8688 16.7375C15.4285 16.3403 15.8167 15.8167 16.0333 15.1667H20.5833V5.41667H5.41667V15.1667H9.96667C10.1833 15.8167 10.5715 16.3403 11.1312 16.7375C11.691 17.1347 12.3139 17.3333 13 17.3333C13.6861 17.3333 14.309 17.1347 14.8688 16.7375Z"
            fill="white"
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
            d="M14.0833 19.5V16.25H21.6666V19.5H14.0833ZM4.33329 9.75V6.5H10.8333V9.75H4.33329ZM4.33329 19.5V16.25H7.58329V19.5H4.33329ZM11.9166 21.6667H23.8333V14.0833H11.9166V21.6667ZM2.16663 11.9167H13V4.33333H2.16663V11.9167ZM2.16663 21.6667H9.74996V14.0833H2.16663V21.6667ZM18.4166 11.9167V8.66667H15.1666V6.5H18.4166V3.25H20.5833V6.5H23.8333V8.66667H20.5833V11.9167H18.4166Z"
            fill="white"
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
            d="M3.25 22.75V20.5833L5.41667 18.4167V22.75H3.25ZM7.58333 22.75V16.25L9.75 14.0833V22.75H7.58333ZM11.9167 22.75V14.0833L14.0833 16.2771V22.75H11.9167ZM16.25 22.75V16.2771L18.4167 14.1104V22.75H16.25ZM20.5833 22.75V11.9167L22.75 9.75V22.75H20.5833ZM3.25 17.1438V14.0833L10.8333 6.5L15.1667 10.8333L22.75 3.25V6.31042L15.1667 13.8938L10.8333 9.56042L3.25 17.1438Z"
            fill="white"
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
        Send order updates, receipts and campaigns with the authentication,
        speed and insights your business needs.
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
