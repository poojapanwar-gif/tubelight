import React from "react";
import styles from "../../styles/Platform.module.scss";
import PlatformIcon from "./PlatformIcons";

const PlatformSteps = ({ steps }) => {
  return (
    <section className={styles["platform-steps"]}>
      <h2>
        Simple for you
        <br />
        Seamless for your customers
      </h2>
      <div className={styles["steps-row"]}>
        {steps.map((item, index) => (
          <div className={styles["step"]} key={index}>
            <div className={styles["step-circle"]}>
              <div className={styles["step-icon"]}>
                <PlatformIcon name={item.icon} size={22} />
              </div>
            </div>
            <h5>{item.title}</h5>
            <p>{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlatformSteps;
