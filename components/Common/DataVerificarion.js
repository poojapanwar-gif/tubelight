import React from "react";
import styles from "../../styles/DataVerification.module.scss";
import dataverification from "../../public/images/dataverification.png";
import Image from "next/image";
const DataVerificarion = () => {
  return (
    <div className={styles["data-verification-section"]}>
      <div className={styles["data-verification-content"]}>
        <h2>
          Integrate Data Verification with <span>MuCh for 2FA.</span>
        </h2>
        <p>
          Priorities can be set-up to initiate OTP among the most effective or
          useful channels based on the use-cases of an enterprise / client.
          Also, failovers are enabled in case of any first channel failing due
          to any reasons if so then the seconds, third can be aligned.
        </p>
        <button>Talk to Expert</button>
        <Image src={dataverification} alt="img" />
      </div>
    </div>
  );
};

export default DataVerificarion;
