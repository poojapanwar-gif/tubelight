import React from "react";
import styles from "../../styles/DataIntegrate.module.scss";
const DataIntegrate = () => {
  return (
    <div className={styles["data-integrate-section"]}>
      <h2>Integrate Phone Call with MuCh for 2FA.</h2>
      <p>
        Priorities can be set-up to initiate OTP among the most effective or
        useful channels based on the use-cases of an enterprise / client. Also,
        failovers are enabled in case of any first channel failing due to any
        reasons if so then the seconds, third can be aligned.
      </p>
      <div className={styles["both-buttons"]}>
        <button className={styles["blue-button"]}>Learn More</button>
        <button>Talk to Expert</button>
      </div>
    </div>
  );
};

export default DataIntegrate;
