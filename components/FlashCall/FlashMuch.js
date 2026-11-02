import React from "react";
import styles from "../../styles/FlashMunch.module.scss";

const FlashMuch = () => {
  const nodes = [
    {
      id: "sms",
      label: "SMS",
      top: 75,
      left: 250,
      icon: (
        <svg
          width="36"
          height="30"
          viewBox="0 0 36 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 5C0 2.23858 2.23858 0 5 0H31C33.7614 0 36 2.23858 36 5V20C36 22.7614 33.7614 25 31 25H11L3 30V25H5C2.23858 25 0 22.7614 0 20V5Z"
            fill="#5E6FF9"
          />
          <circle cx="11" cy="12.5" r="2.2" fill="white" />
          <circle cx="18" cy="12.5" r="2.2" fill="white" />
          <circle cx="25" cy="12.5" r="2.2" fill="white" />
        </svg>
      ),
    },
    {
      id: "obd",
      label: "OBD Call",
      top: 250,
      left: 425,
      icon: (
        <svg
          width="34"
          height="38"
          viewBox="10 20 420 470"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="obdGrad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#0A58F6" />
              <stop offset="100%" stopColor="#38B6FF" />
            </linearGradient>
          </defs>
          <path
            d="M391 480c-19.52 0-46.94-7.06-88-30-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0 1 28.64-15.2c1-.43 1.93-.84 2.76-1.21 4.95-2.23 12.45-5.6 21.95-2 6.34 2.38 12 7.25 20.86 16 18.17 17.92 43 57.83 52.16 77.43 6.15 13.21 10.22 21.93 10.23 31.71 0 11.45-5.76 20.28-12.75 29.81-1.31 1.79-2.61 3.5-3.87 5.16-7.61 10-9.28 12.89-8.18 18.05 2.23 10.37 18.86 41.24 46.19 68.51s57.31 42.85 67.72 45.07c5.38 1.15 8.33-.59 18.65-8.47 1.48-1.13 3-2.3 4.59-3.47 10.66-7.93 19.08-13.54 30.26-13.54h.06c9.73 0 18.06 4.22 31.86 11.18 18 9.08 59.11 33.59 77.14 51.78 8.77 8.84 13.66 14.48 16.05 20.81 3.6 9.53.21 17-2 22-.37.83-.78 1.74-1.21 2.75a176.49 176.49 0 0 1-15.29 28.58c-10.63 15.9-21.4 28.21-39.38 36.58A67.42 67.42 0 0 1 391 480z"
            fill="url(#obdGrad)"
          />
        </svg>
      ),
    },
    {
      id: "flash",
      label: "Flash Call",
      top: 425,
      left: 250,
      icon: (
        <svg
          width="30"
          height="34"
          viewBox="10 20 420 470"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M391 480c-19.52 0-46.94-7.06-88-30-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0 1 28.64-15.2c1-.43 1.93-.84 2.76-1.21 4.95-2.23 12.45-5.6 21.95-2 6.34 2.38 12 7.25 20.86 16 18.17 17.92 43 57.83 52.16 77.43 6.15 13.21 10.22 21.93 10.23 31.71 0 11.45-5.76 20.28-12.75 29.81-1.31 1.79-2.61 3.5-3.87 5.16-7.61 10-9.28 12.89-8.18 18.05 2.23 10.37 18.86 41.24 46.19 68.51s57.31 42.85 67.72 45.07c5.38 1.15 8.33-.59 18.65-8.47 1.48-1.13 3-2.3 4.59-3.47 10.66-7.93 19.08-13.54 30.26-13.54h.06c9.73 0 18.06 4.22 31.86 11.18 18 9.08 59.11 33.59 77.14 51.78 8.77 8.84 13.66 14.48 16.05 20.81 3.6 9.53.21 17-2 22-.37.83-.78 1.74-1.21 2.75a176.49 176.49 0 0 1-15.29 28.58c-10.63 15.9-21.4 28.21-39.38 36.58A67.42 67.42 0 0 1 391 480z"
            fill="#3B7AFF"
          />
        </svg>
      ),
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      top: 250,
      left: 75,
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="19" fill="#25D366" />
          <path
            d="M27.5 23.3C27.1 23.1 25.1 22.1 24.7 21.9C24.3 21.8 24 21.7 23.7 22.2C23.4 22.6 22.6 23.6 22.4 23.8C22.2 24.1 21.9 24.1 21.5 23.9C21.1 23.7 19.7 23.3 18.1 21.8C16.9 20.7 16 19.3 15.8 18.9C15.6 18.5 15.8 18.3 16 18.1C16.2 17.9 16.4 17.6 16.6 17.3C16.8 17.1 16.9 16.9 17 16.6C17.1 16.4 17.1 16.1 17 15.9C16.9 15.7 16 13.6 15.7 12.8C15.4 12 15 12.1 14.8 12.1C14.5 12.1 14.3 12.1 14 12.1C13.7 12.1 13.3 12.2 12.9 12.6C12.5 13 11.5 14 11.5 16C11.5 18 13 19.9 13.2 20.2C13.4 20.5 16.1 24.6 20.2 26.4C21.2 26.8 21.9 27.1 22.5 27.3C23.5 27.6 24.4 27.5 25.1 27.4C25.9 27.3 27.5 26.4 27.9 25.4C28.2 24.4 28.2 23.6 28.1 23.4C28 23.5 27.8 23.4 27.5 23.3Z"
            fill="white"
          />
        </svg>
      ),
    },
  ];

  const dots = [
    { top: 126.26, left: 373.74 },
    { top: 373.74, left: 373.74 },
    { top: 373.74, left: 126.26 },
    { top: 126.26, left: 126.26 },
  ];

  return (
    <div className={styles["flash-much-section"]}>
      <div className={styles["flash-much-left-right"]}>
        <div className={styles["flash-much-left"]}>
          <h2>
            Integrate flash call with <br />
            <span>MuCh for 2FA</span>
          </h2>
          <p>
            The name itself gives an idea about the Multi-Channel OTPs, the
            various Omni-channel will be included to push the OTPs in the form
            of Text messages, WhatsApp message, OBD call or any other. The
            channels or the mode can be added or removed based on our
            requirements.
          </p>
          <p>
            Priorities can be set-up to initiate OTP among the most effective or
            useful channels based on the use-cases of an enterprise / client.
            Also, failovers are enabled in case of any first channel failing due
            to any reasons if so then the seconds, third can be aligned.
          </p>
        </div>

        <div className={styles["flash-much-right"]}>
          <div className={styles["much-orbit-container"]}>
            {/* 1. Sab se bada circle (500px, dashed #2F6DEE33) */}
            <div className={styles["circle-outer"]} />

            {/* 2. Chota circle (350px, dashed #5E6FF9) */}
            <div className={styles["circle-middle"]} />

            {/* 3. Orbiting ring (500px x 500px, rotating 360deg around center) */}
            <div className={styles["orbit-ring"]}>
              {/* 4 Intermediate Dots on 350px track */}
              {dots.map((dot, idx) => (
                <div
                  key={`dot-${idx}`}
                  className={styles["orbit-dot"]}
                  style={{
                    top: `${dot.top}px`,
                    left: `${dot.left}px`,
                  }}
                />
              ))}

              {/* 4 Channel Nodes on 350px track */}
              {nodes.map((node) => (
                <div
                  key={node.id}
                  className={styles["orbit-node"]}
                  style={{
                    top: `${node.top}px`,
                    left: `${node.left}px`,
                  }}
                >
                  <div className={styles["orbit-node-inner"]}>
                    <div className={styles["channel-card"]}>
                      {node.icon}
                    </div>
                    <span className={styles["channel-label"]}>
                      {node.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* 4. Center Circle: MuCh (120px, #0F1828) */}
            <div className={styles["center-circle"]}>
              <span className={styles["much-title"]}>MuCh</span>
              <span className={styles["much-sub"]}>Multichannel OTP</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashMuch;
