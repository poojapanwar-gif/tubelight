import CanvasVideo from "@/components/Common/CanvasVideo";
import React from "react";
import Link from "next/link";
import styles from "../../styles/ClickCallBanner.module.scss";

const DialerBanner = ({
  title,
  description,
  primaryBtnText = "Try for free",
  primaryBtnLink = "/contact-us",
  secondaryBtnText = "Talk to Expert",
  secondaryBtnLink = "/contact-us",
  videoSrc = "/images/clicktocallvideo.mp4",
}) => {
  return (
    <div className={styles["click-call-banner"]}>
      <div className={styles["click-call-banner-content"]}>
        <div className={styles["click-call-left-content"]}>
          <h2>{title}</h2>
          <p>{description}</p>
          <div className={styles["both-button"]}>
            <Link href={primaryBtnLink} className={styles["blue-button"]}>
              {primaryBtnText}{" "}
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
            <Link href={secondaryBtnLink}>
              {secondaryBtnText}
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
          <div
            className={styles["click-call-banner-video"]}
            style={{ overflow: "hidden", lineHeight: 0 }}
          >
            <CanvasVideo src={videoSrc} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialerBanner;
