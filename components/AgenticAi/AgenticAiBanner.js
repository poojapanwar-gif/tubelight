import React from "react";
import Link from "next/link";
import styles from "../../styles/ClickCallBanner.module.scss";

const AgenticAiBanner = ({
  title = "Turn Every Customer Issue into a",
  highlightText = "Faster Resolution",
  description = "Manage customer queries, automate ticket handling, and improve resolution times with AI-powered ticketing. From ticket creation to prioritization, assignment, escalation, and resolution, bring intelligence and accountability to every support interaction.",
  primaryBtnText = "Try for free",
  primaryBtnLink = "/contact-us",
  secondaryBtnText = "Talk to Expert",
  secondaryBtnLink = "/contact-us",
  videoSrc = "/images/aipoweredticketbanner.mp4",
}) => {
  return (
    <div className={styles["click-call-banner"]}>
      <div className={styles["click-call-banner-content"]}>
        <div className={styles["click-call-left-content"]}>
          <h2>
            {highlightText ? (
              <>
                {title} <span>{highlightText}</span>
              </>
            ) : (
              title
            )}
          </h2>
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
          <div className={styles["click-call-banner-video"]}>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgenticAiBanner;
