"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../styles/SmsHowItWorks.module.scss";

const stepsData = [
  {
    step: 1,
    title: "Login",
    detail: "A customer logs in using their username and password",
    iconSrc: "/images/workicon1.png",
    renderPhoneScreen: () => (
      <div className={styles["screen-content"]}>
        <div className={styles["phone-notch"]}></div>
        <h4 className={styles["screen-title"]}>Sign in</h4>

        <div className={styles["form-field"]}>
          <label>Username</label>
          <div className={styles["input-box"]}>••••••••••••</div>
        </div>

        <div className={styles["form-field"]}>
          <label>Password</label>
          <div className={styles["input-box"]}>••••••••••••</div>
        </div>

        <p className={styles["phone-hint"]}>
          Get a verification code at +91•••••••89
        </p>

        <button className={styles["phone-button"]} type="button">
          Get Code
        </button>
      </div>
    ),
  },
  {
    step: 2,
    title: "2FA",
    detail:
      "The customer receives a 2FA SMS message with their unique one-time pin (OTP)",
    iconSrc: "/images/workicon2.png",
    renderPhoneScreen: () => (
      <div className={styles["screen-content"]}>
        <div className={styles["phone-notch"]}></div>
        <h4 className={styles["screen-title"]}>Sign in</h4>

        <div className={styles["sms-bubble"]}>
          <div className={styles["sms-header"]}>
            <span className={styles["sms-sender"]}>Tubelight SMS</span>
            <span className={styles["sms-time"]}>Just now</span>
          </div>
          <p className={styles["sms-text"]}>
            Your one time verification code is <strong>454545</strong>. Please
            type this code in your app to complete the verification.
          </p>
        </div>

        <div className={styles["sms-pulsing-badge"]}>
          <span className={styles["badge-dot"]}></span>
          <span>OTP Received</span>
        </div>
      </div>
    ),
  },
  {
    step: 3,
    title: "OTP",
    detail: "The user inputs the OTP into the login page for authentication",
    iconSrc: "/images/workicon3.png",
    renderPhoneScreen: () => (
      <div className={styles["screen-content"]}>
        <div className={styles["phone-notch"]}></div>
        <h4 className={styles["screen-title"]}>Enter OTP</h4>
        <p className={styles["phone-subhint"]}>
          Enter the 6-digit code sent to your phone
        </p>

        <div className={styles["otp-boxes-row"]}>
          {["4", "5", "4", "5", "4", "5"].map((digit, i) => (
            <div key={i} className={styles["otp-digit-box"]}>
              {digit}
            </div>
          ))}
        </div>

        <p className={styles["phone-resend"]}>Resend code in 00:24</p>

        <button className={styles["phone-button"]} type="button">
          Verify Code
        </button>
      </div>
    ),
  },
  {
    step: 4,
    title: "Authentication",
    detail: "They have successfully verified their identity",
    iconSrc: "/images/workicon4.png",
    renderPhoneScreen: () => (
      <div className={styles["screen-content"]}>
        <div className={styles["phone-notch"]}></div>
        <div className={styles["success-icon-wrap"]}>
          <div className={styles["success-circle"]}>
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 13L9 17L19 7"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <h4 className={styles["screen-title-success"]}>Verified!</h4>
        <p className={styles["phone-success-desc"]}>
          Your identity has been authenticated securely.
        </p>

        <button className={styles["phone-button-success"]} type="button">
          Continue
        </button>
      </div>
    ),
  },
];

const SmsHowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  // Smooth continuous auto-play every 3.5 seconds
  useEffect(() => {
    if (hoveredIdx !== null) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % stepsData.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [hoveredIdx]);

  return (
    <section className={styles["how-it-works-section"]}>
      <h2 className={styles["section-title"]}>How does it work?</h2>

      <div className={styles["how-it-works-container"]}>
        {/* Left Side: 4 Steps List */}
        <div className={styles["steps-left"]}>
          <div className={styles["steps-timeline"]}>
            {stepsData.map((stepItem, index) => {
              const isActive = activeStep === index;
              return (
                <div
                  key={stepItem.step}
                  className={`${styles["step-row"]} ${
                    isActive ? styles["step-active"] : ""
                  }`}
                  onClick={() => setActiveStep(index)}
                  onMouseEnter={() => {
                    setActiveStep(index);
                    setHoveredIdx(index);
                  }}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  <div className={styles["step-badge-column"]}>
                    <div className={styles["step-badge"]}>{stepItem.step}</div>
                    {index < stepsData.length - 1 && (
                      <div className={styles["step-connector-line"]}></div>
                    )}
                  </div>

                  <div className={styles["step-text"]}>
                    <h3 className={styles["step-heading"]}>{stepItem.title}</h3>
                    <p className={styles["step-detail"]}>{stepItem.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: 4 Horizontal Slots with Phone Mockup in the Active Slot */}
        <div className={styles["stages-right"]}>
          {/* Mobile-Only: 4 Icon Boxes in a clean horizontal row directly above the phone */}
          <div className={styles["mobile-icons-row"]}>
            {stepsData.map((stepItem, index) => {
              const isActive = activeStep === index;
              return (
                <div
                  key={`mob-icon-${stepItem.step}`}
                  className={`${styles["mobile-icon-box"]} ${
                    isActive ? styles["mobile-icon-active"] : ""
                  }`}
                  onClick={() => setActiveStep(index)}
                  title={`Step ${stepItem.step}: ${stepItem.title}`}
                >
                  <Image
                    src={stepItem.iconSrc}
                    alt={stepItem.title}
                    width={32}
                    height={32}
                    className={styles["box-img"]}
                  />
                </div>
              );
            })}
          </div>

          <div className={styles["stages-row"]}>
            {stepsData.map((stepItem, index) => {
              const isActive = activeStep === index;
              return (
                <div
                  key={stepItem.step}
                  className={`${styles["stage-slot"]} ${
                    isActive ? styles["slot-active"] : styles["slot-inactive"]
                  }`}
                >
                  {isActive ? (
                    <div
                      className={styles["phone-mockup-wrapper"]}
                      onMouseEnter={() => setHoveredIdx(index)}
                      onMouseLeave={() => setHoveredIdx(null)}
                    >
                      {/* Concentric Pulse Rings behind active phone */}
                      <div className={styles["concentric-ring-outer"]}></div>
                      <div className={styles["concentric-ring-inner"]}></div>

                      {/* Phone Device */}
                      <div className={styles["phone-device"]}>
                        {stepItem.renderPhoneScreen()}
                      </div>
                    </div>
                  ) : (
                    <div
                      className={styles["icon-box"]}
                      onClick={() => setActiveStep(index)}
                      onMouseEnter={() => {
                        setActiveStep(index);
                        setHoveredIdx(index);
                      }}
                      onMouseLeave={() => setHoveredIdx(null)}
                      title={`Go to step ${stepItem.step}: ${stepItem.title}`}
                    >
                      <Image
                        src={stepItem.iconSrc}
                        alt={stepItem.title}
                        width={50}
                        height={50}
                        className={styles["box-img"]}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmsHowItWorks;
