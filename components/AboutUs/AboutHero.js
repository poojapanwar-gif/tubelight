import React from "react";
import styles from "../../styles/AboutUs.module.scss";

const AboutHero = () => {
  const stats = [
    { value: "10K", label: "SMS per second" },
    { value: "<300 MS", label: "Perform latency" },
    { value: "99.99%", label: "Infrastructure uptime" },
    { value: "5K", label: "Calls per second" },
    { value: "24*7", label: "Customer Support" },
  ];

  return (
    <section className={styles["about-hero-section"]}>
      <div className={styles["about-hero-content"]}>
        <span className={styles["about-pill"]}>About Us</span>
        <h1>
          Transforming Customer Communication into Meaningful Connections
        </h1>
        <p>
          Leverage conversational AI and omnichannel messaging to automate
          interactions, strengthen relationships, and drive better business
          outcomes.
        </p>
      </div>
      <div className={styles["about-stats"]}>
        {stats.map((item, index) => (
          <div className={styles["about-stat"]} key={index}>
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutHero;
