import React from "react";
import Link from "next/link";
import styles from "@/styles/ContactCenter.module.scss";
import Image from "next/image";
import contactcenter from "@/public/images/contactcenter.png";

const ContactCenter = () => {
  return (
    <div className={styles["contact-center-section"]}>
      <div className={styles["contact-center-content"]}>
        <h2>Contact Center Suite</h2>
        <p>
          Implement voice calling, then sit back and enjoy increased engagement,
          efficiency, and flexibility - as well as cost savings!
        </p>
        <p>
          Keep it easy and expand quicker with a full solution for high-quality
          voice calling and assured call delivery backed by a global carrier
          network.
        </p>
        <Link href="/contact-center-suite">Learn More</Link>
        <Image src={contactcenter} alt="img" />
      </div>
    </div>
  );
};

export default ContactCenter;

