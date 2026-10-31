import React from "react";
import styles from "../../styles/AboutUs.module.scss";

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <circle cx="7" cy="7" r="6.25" stroke="#5E6FF9" strokeWidth="1.1" />
    <path
      d="M4.4 7.2L6.2 9L9.7 5.3"
      stroke="#5E6FF9"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AboutMission = () => {
  const cardData = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M2 12C3.8 7.6 7.6 5 12 5C16.4 5 20.2 7.6 22 12C20.2 16.4 16.4 19 12 19C7.6 19 3.8 16.4 2 12Z"
            stroke="white"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.6" />
        </svg>
      ),
      eyebrow: "OUR VISION",
      title: (
        <>
          A world where every conversation <span>creates value</span>
        </>
      ),
      points: [
        "Make communication services universally accessible.",
        "Empower businesses to build meaningful customer relationships.",
        "Drive inclusion through connected experiences.",
      ],
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M20.5 9.5C20.8 10.3 21 11.1 21 12C21 17 17 21 12 21C7 21 3 17 3 12C3 7 7 3 12 3C12.9 3 13.7 3.2 14.5 3.5"
            stroke="white"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M16.3 10.7C16.4 11.1 16.5 11.6 16.5 12C16.5 14.5 14.5 16.5 12 16.5C9.5 16.5 7.5 14.5 7.5 12C7.5 9.5 9.5 7.5 12 7.5C12.4 7.5 12.9 7.6 13.3 7.7"
            stroke="white"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M12 12L18 6M18 6V3.5M18 6H20.5"
            stroke="white"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      eyebrow: "OUR MISSION",
      title: (
        <>
          Build the most advanced <span>engagement platform</span>
        </>
      ),
      points: [
        "Deliver innovative, AI-powered communication solutions.",
        "Enable seamless omnichannel engagement at scale.",
        "Help businesses delight customers and drive growth.",
      ],
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M7 4H17V10C17 12.8 14.8 15 12 15C9.2 15 7 12.8 7 10V4Z"
            stroke="white"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M7 6H4V8C4 9.7 5.3 11 7 11M17 6H20V8C20 9.7 18.7 11 17 11M12 15V18M8.5 21H15.5M9.5 18H14.5V21H9.5V18Z"
            stroke="white"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      eyebrow: "OUR GOAL",
      title: (
        <>
          Transform customer experience &amp; <span>accelerate growth</span>
        </>
      ),
      points: [
        "Help businesses engage at the right time, on the right channel.",
        "Improve customer satisfaction and loyalty.",
        "Drive better outcomes through smart automation.",
      ],
    },
  ];

  return (
    <section className={styles["about-mission-section"]}>
      <h2>
        Our Mission. Our Vision. <span>Your Success</span>
      </h2>
      <p className={styles["about-mission-sub"]}>
        We help businesses connect, engage, and grow through secure omnichannel
        messaging, conversational AI, and intelligent automation.
      </p>
      <div className={styles["about-mission-cards"]}>
        {cardData.map((item, index) => (
          <div className={styles["about-mission-card"]} key={index}>
            <div className={styles["mission-icon"]}>
              <div className={styles["mission-icon-inner"]}>{item.icon}</div>
            </div>
            <h6>{item.eyebrow}</h6>
            <h4>{item.title}</h4>
            <span className={styles["mission-divider"]} />
            <ul>
              {item.points.map((point, i) => (
                <li key={i}>
                  <CheckIcon />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutMission;
