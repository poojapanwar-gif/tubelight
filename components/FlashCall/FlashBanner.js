import React from 'react'
import Link from "next/link";
import styles from "../../styles/ClickCallBanner.module.scss";

const FlashBanner = ({
  title = "Verify customers",
  highlight = "in a  flash",
  desc = "Verify customers in a flash with a missed call. Flash Call Verification is a quick, low-cost and secure way to validate users in seconds.",
  videoSrc = "/images/flashcallbanner.mp4",
  imageSrc,
  btn1Text = "Try for free",
  btn1Link = "/contact-us",
  btn2Text = "Talk to Expert",
  btn2Link = "/contact-us",
}) => {
  return (
    <div className={styles["click-call-banner"]}>
      <div className={styles["click-call-banner-content"]}>
        <div className={styles["click-call-left-content"]}>
          <h2>
            {title}
            {highlight && (
              <span>
                {" "}
                <br />
                {highlight}
              </span>
            )}
          </h2>
          <p>{desc}</p>
          <div className={styles["both-button"]}>
            <Link href={btn1Link} className={styles["blue-button"]}>
              {btn1Text}{" "}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33398 8H12.6673M8.66732 12L12.6673 8L8.66732 4"
                  stroke="white"
                  strokeWidth="1.46667"
                />
              </svg>
            </Link>
            <Link href={btn2Link}>
              {btn2Text}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33398 8H12.6673M8.66732 12L12.6673 8L8.66732 4"
                  stroke="#0F1828"
                  strokeWidth="1.46667"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className={styles["click-call-right-content"]}>
          <div className={styles["click-call-banner-video"]}>
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={title}
                style={{ width: "100%", height: "auto", objectFit: "contain" }}
              />
            ) : (
              <video
                key={videoSrc}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashBanner;
