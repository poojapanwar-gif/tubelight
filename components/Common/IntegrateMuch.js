import React from "react";
import Link from "next/link";
import styles from "../../styles/DataVerification.module.scss";
import dataverification from "../../public/images/dataverification.png";
import Image from "next/image";

const IntegrateMuch = ({
  title = "Integrate SMS with",
  highlight = "MuCh for 2FA.",
  desc = "Priorities can be set-up to initiate OTP among the most effective or useful channels based on the use-cases of an enterprise / client.",
  btnText = "Talk to Expert",
  btnLink = "/contact-us",
}) => {
  return (
    <div className={styles["data-verification-section"]}>
      <div className={styles["data-verification-content"]}>
        <h2>
          {title} <span>{highlight}</span>
        </h2>
        <p>{desc}</p>
        <Link href={btnLink}>{btnText}</Link>
        <Image src={dataverification} alt="img" />
      </div>
    </div>
  );
};

export default IntegrateMuch;
