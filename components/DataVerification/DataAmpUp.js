"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../../styles/DataAmpup.module.scss";

const DataAmpUp = () => {
  const [currentStep, setCurrentStep] = useState(0); // 0: Sign in, 1: Carrier Check, 2: Verified
  const [isPressed, setIsPressed] = useState(false);
  const [carrierProgress, setCarrierProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-playing video-like loop
  useEffect(() => {
    if (isPaused) return;

    let timer;
    if (currentStep === 0) {
      setIsPressed(false);
      // Simulate click on OK button at 2.2 seconds
      const pressTimer = setTimeout(() => {
        setIsPressed(true);
      }, 2200);

      timer = setTimeout(() => {
        setCurrentStep(1);
      }, 3200);

      return () => {
        clearTimeout(pressTimer);
        clearTimeout(timer);
      };
    } else if (currentStep === 1) {
      setCarrierProgress(0);
      const progressInterval = setInterval(() => {
        setCarrierProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + 5;
        });
      }, 100);

      timer = setTimeout(() => {
        setCurrentStep(2);
      }, 3200);

      return () => {
        clearInterval(progressInterval);
        clearTimeout(timer);
      };
    } else if (currentStep === 2) {
      timer = setTimeout(() => {
        setCurrentStep(0);
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, [currentStep, isPaused]);

  return (
    <div className={styles["data-ampup-section"]}>
      <div className={styles["data-ampup-left-right"]}>
        {/* Left Content */}
        <div className={styles["data-ampup-left"]}>
          <h2>
            Amp up safety and build loyalty throughout the customer journey
          </h2>
          <p>
            Offer super secure, seamless verification for smooth UX and quick
            user access to your platform.
          </p>
          <p>
            Thanks to direct integration into carrier networks, Data
            Verification runs quietly in the background, without any
            user-interaction required. Plus, it’s suitable for any mobile device
            with a mobile data connection!
          </p>
          <Link href="/contact-us">Talk to Expert</Link>
        </div>

        {/* Right Side: Animated Video Phone Showcase */}
        <div
          className={styles["data-ampup-right"]}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Phone Frame */}
          <div className={styles["phone-mockup-wrapper"]}>
            <div className={styles["phone-notch"]} />

            <div className={styles["phone-screen"]}>
              {/* Status Bar */}
              <div className={styles["phone-status-bar"]}>
                <span className={styles["status-time"]}>9:41</span>
                <div className={styles["status-icons"]}>
                  <span>5G</span>
                  <span>●●●</span>
                  <span>▮</span>
                </div>
              </div>

              {/* Dynamic Screen Content */}
              <div className={styles["phone-inner-content"]}>
                {/* STEP 1: Sign in Screen (matching reference image) */}
                {currentStep === 0 && (
                  <div className={styles["step-signin"]}>
                    <h4 className={styles["signin-heading"]}>Sign in</h4>

                    <div className={styles["card-instruction"]}>
                      Enter your name and add a profile picture
                    </div>

                    <div className={styles["card-profile-input"]}>
                      <div className={styles["avatar-box"]}>
                        Add
                        <br />
                        Profile
                        <br />
                        Picture
                        <span className={styles["plus-icon"]}>+</span>
                      </div>

                      <div className={styles["names-fields"]}>
                        <div className={styles["name-row"]}>Ram</div>
                        <div className={styles["name-row"]}>Singh</div>
                      </div>
                    </div>

                    <div className={styles["ok-button-wrapper"]}>
                      <button
                        type="button"
                        className={`${styles["ok-btn"]} ${
                          isPressed ? styles["btn-pressed"] : ""
                        }`}
                        onClick={() => setCurrentStep(1)}
                      >
                        OK
                      </button>
                      {isPressed && (
                        <span className={styles["finger-touch"]} />
                      )}
                    </div>
                  </div>
                )}

                {/* STEP 2: Zero-Click Silent Carrier Check */}
                {currentStep === 1 && (
                  <div className={styles["step-carrier"]}>
                    <div className={styles["carrier-tag"]}>
                      <span className={styles["tag-dot"]} />
                      <span>Cellular 5G Active</span>
                    </div>

                    <div className={styles["radar-animation-box"]}>
                      <span className={styles["radar-ring"]} />
                      <span className={styles["radar-ring"]} />
                      <span className={styles["radar-ring"]} />
                      <div className={styles["radar-core-icon"]}>
                        <svg
                          width="26"
                          height="26"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 2L4 5.5V11.5C4 16.5 7.4 21.1 12 22.3C16.6 21.1 20 16.5 20 11.5V5.5L12 2Z"
                            fill="white"
                          />
                          <path
                            d="M9 12L11 14L15 10"
                            stroke="#4D6CF5"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>

                    <h5 className={styles["carrier-title"]}>
                      Silent Carrier Check
                    </h5>
                    <p className={styles["carrier-subtitle"]}>
                      Matching mobile number with carrier data directly in the
                      background...
                    </p>

                    <div className={styles["carrier-progress-container"]}>
                      <div
                        className={styles["carrier-progress-fill"]}
                        style={{ width: `${carrierProgress}%` }}
                      />
                    </div>

                    <span className={styles["carrier-meta"]}>
                      Zero-PIN • No User Action Required
                    </span>
                  </div>
                )}

                {/* STEP 3: Verified Instant Success */}
                {currentStep === 2 && (
                  <div className={styles["step-verified"]}>
                    <div className={styles["success-badge-box"]}>
                      <svg
                        width="34"
                        height="34"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>

                    <h5 className={styles["verified-heading"]}>
                      Identity Verified!
                    </h5>
                    <p className={styles["verified-subtext"]}>
                      Authenticated in 1.4s via mobile network
                    </p>

                    <div className={styles["verified-profile-card"]}>
                      <div className={styles["profile-initials"]}>RS</div>
                      <div className={styles["profile-meta"]}>
                        <div className={styles["profile-name"]}>Ram Singh</div>
                        <div className={styles["profile-carrier"]}>
                          ✓ Carrier Network Validated
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      className={styles["continue-btn"]}
                      onClick={() => setCurrentStep(0)}
                    >
                      Continue to Platform →
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Video Timeline Bar / Step Navigation */}
          <div className={styles["video-timeline"]}>
            <div
              className={`${styles["timeline-tab"]} ${
                currentStep === 0 ? styles["active"] : ""
              }`}
              onClick={() => setCurrentStep(0)}
            >
              <div className={styles["timeline-bar"]}>
                <div
                  className={styles["timeline-fill"]}
                  style={{
                    width:
                      currentStep === 0
                        ? "100%"
                        : currentStep > 0
                        ? "100%"
                        : "0%",
                  }}
                />
              </div>
              <span>1. Sign In</span>
            </div>

            <div
              className={`${styles["timeline-tab"]} ${
                currentStep === 1 ? styles["active"] : ""
              }`}
              onClick={() => setCurrentStep(1)}
            >
              <div className={styles["timeline-bar"]}>
                <div
                  className={styles["timeline-fill"]}
                  style={{
                    width:
                      currentStep === 1
                        ? `${carrierProgress}%`
                        : currentStep > 1
                        ? "100%"
                        : "0%",
                  }}
                />
              </div>
              <span>2. Carrier Check</span>
            </div>

            <div
              className={`${styles["timeline-tab"]} ${
                currentStep === 2 ? styles["active"] : ""
              }`}
              onClick={() => setCurrentStep(2)}
            >
              <div className={styles["timeline-bar"]}>
                <div
                  className={styles["timeline-fill"]}
                  style={{
                    width: currentStep === 2 ? "100%" : "0%",
                  }}
                />
              </div>
              <span>3. Verified</span>
            </div>
          </div>

          {/* Live Indicator */}
          <div className={styles["live-indicator"]}>
            <span className={styles["live-dot"]} />
            <span>Interactive Auto-Playing Video Simulation</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataAmpUp;
