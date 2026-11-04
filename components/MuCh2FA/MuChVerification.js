import React from "react";
import Link from "next/link";
import styles from "../../styles/DataVerification.module.scss";
import muchvector from "../../public/images/muchvector.png";
import Image from "next/image";

const MuChVerification = () => {
  return (
    <div className={styles["data-verification-section"]}>
      <div className={styles["data-verification-content"]}>
        <h2>
          Verification, Together With <span>Every Channel</span>
        </h2>
        <p>
          Streamline communications across SMS, WhatsApp, voice and more with
          one integrated, omnichannel platform. Pair MuCh with Flash Call and
          your other channels so verification always reaches the user, whichever
          channel works.
        </p>
        <Link href="/contact-us">Talk to Expert</Link>
        <Image src={muchvector} alt="img" />
      </div>
    </div>
  );
};

export default MuChVerification;
