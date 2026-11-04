import CanvasVideo from "@/components/Common/CanvasVideo";
import React from "react";
import Link from "next/link";
import styles from "../../styles/ClickCallBanner.module.scss";

const WebRTCBanner = () => {
  return (
    <div className={styles["click-call-banner"]}>
      <div className={styles["click-call-banner-content"]}>
        <div className={styles["click-call-left-content"]}>
          <h2>
            WebRTC <span>Calling</span>
          </h2>
          <p>
            WebRTC lets customers and agents make crystal-clear voice calls
            straight from any browser or app — no plugins, no downloads and no
            extra hardware needed.
          </p>
          <div className={styles["both-button"]}>
            <Link href="/contact-us" className={styles["blue-button"]}>
              Try for free{" "}
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
            <Link href="/contact-us">
              Talk to Expert
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
            <CanvasVideo src="/images/webrtcbanner.mp4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebRTCBanner;
