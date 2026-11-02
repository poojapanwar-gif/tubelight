import React from "react";
import styles from "../../styles/WebsiteCRM.module.scss";
const PredectiveCall = () => {
  const cardData = [
    {
      icon: "01",
      title: "Automated Predictive Dialing",
      detail: "Initiate outbound calls using configurable dialing strategies.",
    },
    {
      icon:"02",
      title: "Intelligent Call Pacing",
      detail:
        "Adjust dialing activity based on agent availability and campaign performance.",
    },
    {
      icon: "03",
      title: "Campaign Management",
      detail:
        " Configure campaigns, contact lists, schedules, and dialing rules.",
    },
    {
      icon: "04",
      title: "Real-Time Monitoring",
      detail:
        "Track call attempts, connections, agent availability, and campaign performance.",
    },
    {
      icon: "05",
      title: "Call Disposition",
      detail:
        "Record call outcomes to support reporting and future campaign decisions.",
    },
    {
      icon: "06",
      title: "Performance Analytics:",
      detail:
        "Analyze connect rates, agent utilization, talk time, and campaign results.",
    },
  ];
  return (
    <div className={styles["website-crm-section"]}>
      <h2>Smarter Outbound Calling Starts Here</h2>
      <p>
        Manual dialing and inefficient call allocation can leave agents waiting
        between conversations. A Predictive Dialer uses configurable dialing
        logic and available campaign data to initiate calls ahead of agent
        availability, helping improve agent utilization while balancing
        connection rates and available capacity.
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

export default PredectiveCall;
