import React from "react";
import styles from "@/styles/PhoneSteps.module.scss";

const PhoneStepIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M6.6 3.5c.5-.3 1.1-.2 1.5.2l2.2 2.6c.4.5.4 1.2 0 1.7l-1.4 1.6c1 2.2 2.8 4 5 5l1.6-1.4c.5-.4 1.2-.4 1.7 0l2.6 2.2c.4.4.5 1 .2 1.5l-1 1.7c-.6 1-1.8 1.5-2.9 1.2C10.4 18.4 5.6 13.6 4.2 7.9c-.3-1.1.2-2.3 1.2-2.9l1.2-1.5Z"
      fill="white"
    />
  </svg>
);

const LockStepIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M7 10V7.5C7 4.74 9.24 2.5 12 2.5C14.76 2.5 17 4.74 17 7.5V10"
      stroke="white"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.5 10C3.67 10 3 10.67 3 11.5V19.5C3 20.33 3.67 21 4.5 21H19.5C20.33 21 21 20.33 21 19.5V11.5C21 10.67 20.33 10 19.5 10H4.5ZM12 13.5C11.17 13.5 10.5 14.17 10.5 15C10.5 15.53 10.78 15.99 11.2 16.26L11 18.5H13L12.8 16.26C13.22 15.99 13.5 15.53 13.5 15C13.5 14.17 12.83 13.5 12 13.5Z"
      fill="white"
    />
  </svg>
);

const ChipStepIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.5 8.5C6.5 7.4 7.4 6.5 8.5 6.5H15.5C16.6 6.5 17.5 7.4 17.5 8.5V15.5C17.5 16.6 16.6 17.5 15.5 17.5H8.5C7.4 17.5 6.5 16.6 6.5 15.5V8.5ZM9.5 10C9.5 9.72 9.72 9.5 10 9.5H14C14.28 9.5 14.5 9.72 14.5 10V14C14.5 14.28 14.28 14.5 14 14.5H10C9.72 14.5 9.5 14.28 9.5 14V10Z"
      fill="white"
    />
    <path d="M9 3.5V5.5M12 3.5V5.5M15 3.5V5.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M9 18.5V20.5M12 18.5V20.5M15 18.5V20.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M3.5 9H5.5M3.5 12H5.5M3.5 15H5.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M18.5 9H20.5M18.5 12H20.5M18.5 15H20.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const stepsData = [
  {
    id: "step-phone",
    icon: <PhoneStepIcon />,
    title: "Receive a call",
    detail:
      "User receive an incoming call with a voice code delivered via clear automated text-to-speech software",
  },
  {
    id: "step-lock",
    icon: <LockStepIcon />,
    title: "Enter the Code",
    detail:
      "Simply enter the code manually to securely login and access your platform or system",
  },
  {
    id: "step-chip",
    icon: <ChipStepIcon />,
    title: "Pro-Tip for Accessibility",
    detail:
      "No mobile device? No problem. Users can easily setup landline phones for phone call verification",
  },
];

const PhoneSteps = () => {
  return (
    <section className={styles["phone-steps-section"]}>
      <div className={styles["phone-steps-container"]}>
        <div className={styles["phone-steps-left"]}>
          <h2>
            Enhanced security and global reach- see Phone Call verification in
            action
          </h2>
        </div>

        <div className={styles["phone-steps-right"]}>
          <div className={styles["steps-list"]}>
            {stepsData.map((step, index) => (
              <div
                className={`${styles["step-row"]} ${
                  styles[step.id] || ""
                }`}
                key={step.title}
              >
                <div className={styles["step-icon-column"]}>
                  <div className={styles["step-square"]}>
                    <div className={styles["step-circle"]}>
                      <div className={styles["step-icon-wrapper"]}>
                        {step.icon}
                      </div>
                    </div>
                  </div>
                  {index < stepsData.length - 1 && (
                    <div
                      className={`${styles["step-dotted-line"]} ${
                        index === 1 ? styles["line-delayed"] : ""
                      }`}
                    ></div>
                  )}
                </div>
                <div className={styles["step-content"]}>
                  <h3>{step.title}</h3>
                  <p>{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhoneSteps;
