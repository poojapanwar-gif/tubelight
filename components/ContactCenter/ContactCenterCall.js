import React from "react";
import styles from "../../styles/WebsiteCRM.module.scss";
const ContactCenterCall = () => {
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
            d="M13.7854 18.7139C13.2618 18.1903 13 17.5493 13 16.791C13 16.0327 13.2618 15.3917 13.7854 14.8681C14.309 14.3445 14.95 14.0827 15.7083 14.0827C16.4667 14.0827 17.1076 14.3445 17.6313 14.8681C18.1549 15.3917 18.4167 16.0327 18.4167 16.791C18.4167 17.5493 18.1549 18.1903 17.6313 18.7139C17.1076 19.2375 16.4667 19.4993 15.7083 19.4993C14.95 19.4993 14.309 19.2375 13.7854 18.7139ZM5.41667 23.8327C4.82083 23.8327 4.31076 23.6205 3.88646 23.1962C3.46215 22.7719 3.25 22.2618 3.25 21.666V6.49935C3.25 5.90352 3.46215 5.39345 3.88646 4.96914C4.31076 4.54483 4.82083 4.33268 5.41667 4.33268H6.5V2.16602H8.66667V4.33268H17.3333V2.16602H19.5V4.33268H20.5833C21.1792 4.33268 21.6892 4.54483 22.1135 4.96914C22.5378 5.39345 22.75 5.90352 22.75 6.49935V21.666C22.75 22.2618 22.5378 22.7719 22.1135 23.1962C21.6892 23.6205 21.1792 23.8327 20.5833 23.8327H5.41667ZM5.41667 21.666H20.5833V10.8327H5.41667V21.666ZM5.41667 8.66602H20.5833V6.49935H5.41667V8.66602Z"
            fill="white"
          />
        </svg>
      ),
      title: "Unified Omnichannel Experience",
      detail:
        "Manage voice, SMS, WhatsApp and RCS conversations in one place. Agents see the full customer history, so customers never have to repeat themselves.",
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
            d="M9.43594 11.6046C9.64358 11.3969 9.7474 11.1396 9.7474 10.8327C9.7474 10.5257 9.64358 10.2684 9.43594 10.0608C9.2283 9.85317 8.97101 9.74935 8.66406 9.74935C8.35712 9.74935 8.09983 9.85317 7.89219 10.0608C7.68455 10.2684 7.58073 10.5257 7.58073 10.8327C7.58073 11.1396 7.68455 11.3969 7.89219 11.6046C8.09983 11.8122 8.35712 11.916 8.66406 11.916C8.97101 11.916 9.2283 11.8122 9.43594 11.6046ZM13.7693 11.6046C13.9769 11.3969 14.0807 11.1396 14.0807 10.8327C14.0807 10.5257 13.9769 10.2684 13.7693 10.0608C13.5616 9.85317 13.3043 9.74935 12.9974 9.74935C12.6905 9.74935 12.4332 9.85317 12.2255 10.0608C12.0179 10.2684 11.9141 10.5257 11.9141 10.8327C11.9141 11.1396 12.0179 11.3969 12.2255 11.6046C12.4332 11.8122 12.6905 11.916 12.9974 11.916C13.3043 11.916 13.5616 11.8122 13.7693 11.6046ZM18.1026 11.6046C18.3102 11.3969 18.4141 11.1396 18.4141 10.8327C18.4141 10.5257 18.3102 10.2684 18.1026 10.0608C17.895 9.85317 17.6377 9.74935 17.3307 9.74935C17.0238 9.74935 16.7665 9.85317 16.5589 10.0608C16.3512 10.2684 16.2474 10.5257 16.2474 10.8327C16.2474 11.1396 16.3512 11.3969 16.5589 11.6046C16.7665 11.8122 17.0238 11.916 17.3307 11.916C17.6377 11.916 17.895 11.8122 18.1026 11.6046ZM2.16406 23.8327V4.33268C2.16406 3.73685 2.37622 3.22678 2.80052 2.80247C3.22483 2.37817 3.7349 2.16602 4.33073 2.16602H21.6641C22.2599 2.16602 22.77 2.37817 23.1943 2.80247C23.6186 3.22678 23.8307 3.73685 23.8307 4.33268V17.3327C23.8307 17.9285 23.6186 18.4386 23.1943 18.8629C22.77 19.2872 22.2599 19.4993 21.6641 19.4993H6.4974L2.16406 23.8327ZM5.57656 17.3327H21.6641V4.33268H4.33073V18.5514L5.57656 17.3327Z"
            fill="white"
          />
        </svg>
      ),
      title: "Real-Time Monitoring & Analytics",
      detail:
        "Track live calls, agent performance, wait times and resolution rates with real-time dashboards and detailed reports. Use the data to improve service quality and cut costs.",
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
      title: "Smart Routing & Automation",
      detail:
        "Use IVR, skill-based routing and AI-driven automation to send every customer to the right agent or bot quickly. Reduce wait times and increase first-call resolution.",
    },
  ];
  return (
    <div className={styles["website-crm-section"]}>
      <h2>Run Your Customer Conversations From One Contact Center Suite</h2>
      <p>
        Handle inbound and outbound calls, messages and chats from a single
        dashboard. Give your agents the context they need and give your business
        full visibility over every interaction.
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

export default ContactCenterCall;
