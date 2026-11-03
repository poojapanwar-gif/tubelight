"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/GooglePlay.module.scss";

const GooglePlay = () => {
  const [scale, setScale] = useState(1);
  const scalerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (scalerRef.current) {
        const parentWidth = scalerRef.current.parentElement?.clientWidth || window.innerWidth;
        const available = Math.min(window.innerWidth - 32, parentWidth);
        if (available > 0 && available < 635) {
          setScale(Math.max(0.42, available / 635));
        } else {
          setScale(1);
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section className={styles.googlePlaySection}>
      <div className={styles.container}>
        {/* ============ LEFT CONTENT ============ */}
        <div className={styles.leftCol}>
          <h2 className={styles.heading}>
            Work from anywhere.
            <span>Take every call</span>
          </h2>

          <p className={styles.description}>
            Agents can take any IVR-routed calls or make promo outbound calls from wherever they are. Run Predictive Dialer, OBD or Inbound campaigns and let agents receive the calls directly on the Tubelight app
          </p>

          <ul className={styles.featureList}>
            <li>
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.0002 2.83325C9.19433 2.83325 2.8335 9.19409 2.8335 16.9999C2.8335 24.8058 9.19433 31.1666 17.0002 31.1666C24.806 31.1666 31.1668 24.8058 31.1668 16.9999C31.1668 9.19409 24.806 2.83325 17.0002 2.83325ZM23.7718 13.7416L15.7393 21.7741C15.5401 21.9731 15.2701 22.0848 14.9885 22.0848C14.7069 22.0848 14.4369 21.9731 14.2377 21.7741L10.2285 17.7649C10.0309 17.565 9.92009 17.2952 9.92009 17.0141C9.92009 16.733 10.0309 16.4632 10.2285 16.2633C10.6393 15.8524 11.3193 15.8524 11.7302 16.2633L14.9885 19.5216L22.2702 12.2399C22.681 11.8291 23.361 11.8291 23.7718 12.2399C24.1827 12.6508 24.1827 13.3166 23.7718 13.7416Z"
                  fill="#50E714"
                />
              </svg>
              <span>Receive IVR-routed & inbound campaign calls directly</span>
            </li>
            <li>
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.0002 2.83325C9.19433 2.83325 2.8335 9.19409 2.8335 16.9999C2.8335 24.8058 9.19433 31.1666 17.0002 31.1666C24.806 31.1666 31.1668 24.8058 31.1668 16.9999C31.1668 9.19409 24.806 2.83325 17.0002 2.83325ZM23.7718 13.7416L15.7393 21.7741C15.5401 21.9731 15.2701 22.0848 14.9885 22.0848C14.7069 22.0848 14.4369 21.9731 14.2377 21.7741L10.2285 17.7649C10.0309 17.565 9.92009 17.2952 9.92009 17.0141C9.92009 16.733 10.0309 16.4632 10.2285 16.2633C10.6393 15.8524 11.3193 15.8524 11.7302 16.2633L14.9885 19.5216L22.2702 12.2399C22.681 11.8291 23.361 11.8291 23.7718 12.2399C24.1827 12.6508 24.1827 13.3166 23.7718 13.7416Z"
                  fill="#50E714"
                />
              </svg>
              <span>Launch promo outbound call with Predictive dialer & OBD</span>
            </li>
            <li>
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.0002 2.83325C9.19433 2.83325 2.8335 9.19409 2.8335 16.9999C2.8335 24.8058 9.19433 31.1666 17.0002 31.1666C24.806 31.1666 31.1668 24.8058 31.1668 16.9999C31.1668 9.19409 24.806 2.83325 17.0002 2.83325ZM23.7718 13.7416L15.7393 21.7741C15.5401 21.9731 15.2701 22.0848 14.9885 22.0848C14.7069 22.0848 14.4369 21.9731 14.2377 21.7741L10.2285 17.7649C10.0309 17.565 9.92009 17.2952 9.92009 17.0141C9.92009 16.733 10.0309 16.4632 10.2285 16.2633C10.6393 15.8524 11.3193 15.8524 11.7302 16.2633L14.9885 19.5216L22.2702 12.2399C22.681 11.8291 23.361 11.8291 23.7718 12.2399C24.1827 12.6508 24.1827 13.3166 23.7718 13.7416Z"
                  fill="#50E714"
                />
              </svg>
              <span>Caller pop-ups, auto call logs & recordings in the app</span>
            </li>
          </ul>

          <div className={styles.appBadges}>
            {/* Google Play Store Badge */}
            <Link
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.badgeBtn}
            >
              <div className={styles.badgeIcon}>
                <Image
                  src="/images/googleicon.png"
                  alt="Google Play"
                  width={32}
                  height={32}
                  priority
                />
              </div>
              <div className={styles.badgeText}>
                <span className={styles.badgeSub}>GET IT ON</span>
                <span className={styles.badgeTitle}>Google Play</span>
              </div>
            </Link>

            {/* Apple App Store Badge */}
            <Link
              href="https://apple.com/app-store"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.badgeBtn}
            >
              <div className={styles.badgeIcon}>
                <Image
                  src="/images/storeicon.png"
                  alt="App Store"
                  width={32}
                  height={32}
                  priority
                />
              </div>
              <div className={styles.badgeText}>
                <span className={styles.badgeSub}>DOWNLOAD  ON</span>
                <span className={styles.badgeTitle}>App Store</span>
              </div>
            </Link>
          </div>
        </div>

        {/* ============ RIGHT CODE-ANIMATED DIAGRAM ============ */}
        <div className={styles.rightCol}>
          <div
            ref={scalerRef}
            className={styles.diagramScaler}
            style={scale < 1 ? { height: `${Math.round(470 * scale)}px` } : undefined}
          >
            <div
              className={styles.diagramWrapper}
              style={scale < 1 ? { transform: `scale(${scale})` } : undefined}
            >
              {/* 1. Left 4 Campaign Cards */}
              <div className={styles.cardsCol}>
                {/* Card 1 */}
                <div className={styles.campaignCard}>
                  <div className={styles.cardIconBox}>
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <path d="M4 6H16M4 10H14M4 14H9" stroke="#4F46E5" strokeWidth="2.2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className={styles.cardTextBox}>
                    <h4 className={styles.cardTitle}>IVR-routed calls</h4>
                    <p className={styles.cardSub}>Take calls routed from your IVR</p>
                  </div>
                </div>

                {/* Card 2 */}
                <div className={styles.campaignCard}>
                  <div className={styles.cardIconBox}>
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <path d="M4.5 4H7L8.5 7.5L6.5 9C7.5 11.5 9.5 13.5 12 14.5L13.5 12.5L17 14V16.5C17 17.0523 16.5523 17.5 16 17.5C8.8203 17.5 3 11.6797 3 4.5C3 3.94772 3.44772 3.5 4 3.5H4.5Z" stroke="#4F46E5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className={styles.cardTextBox}>
                    <h4 className={styles.cardTitle}>Predictive Dialer</h4>
                    <p className={styles.cardSub}>Auto-dialled promo &amp; sales calls</p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className={styles.campaignCard}>
                  <div className={styles.cardIconBox}>
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <path d="M12 5L7 8H4V13H7L12 16V5Z" stroke="#4F46E5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 7.5C16 8.5 16.5 9.7 16.5 10.5C16.5 11.3 16 12.5 15 13.5" stroke="#4F46E5" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className={styles.cardTextBox}>
                    <h4 className={styles.cardTitle}>OBD campaigns</h4>
                    <p className={styles.cardSub}>Outbound voice broadcast</p>
                  </div>
                </div>

                {/* Card 4 */}
                <div className={styles.campaignCard}>
                  <div className={styles.cardIconBox}>
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <path d="M3.5 12.5L5 5H15L16.5 12.5V16C16.5 16.5523 16.0523 17 15.5 17H4.5C3.94772 17 3.5 16.5523 3.5 16V12.5Z" stroke="#4F46E5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3.5 12.5H7.5L8.5 14H11.5L12.5 12.5H16.5" stroke="#4F46E5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className={styles.cardTextBox}>
                    <h4 className={styles.cardTitle}>Inbound campaigns</h4>
                    <p className={styles.cardSub}>Calls land directly on the agent</p>
                  </div>
                </div>
              </div>

              {/* 2. SVG Connectors with Animated Flowing Green Pulses */}
              <svg className={styles.connectorsLeft} viewBox="0 0 70 270" fill="none">
                <defs>
                  <filter id="greenGlowFilter" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Curve 1 */}
                <path id="curvePath1" d="M 0 30 C 35 30, 45 135, 70 135" stroke="#8E9CE6" strokeWidth="1.6" strokeDasharray="4 4" opacity="0.65" />
                <circle r="4.5" fill="#50E714" filter="url(#greenGlowFilter)">
                  <animateMotion dur="2.4s" repeatCount="indefinite">
                    <mpath href="#curvePath1" />
                  </animateMotion>
                </circle>
                <circle r="4.5" fill="#50E714" filter="url(#greenGlowFilter)">
                  <animateMotion dur="2.4s" begin="1.2s" repeatCount="indefinite">
                    <mpath href="#curvePath1" />
                  </animateMotion>
                </circle>

                {/* Curve 2 */}
                <path id="curvePath2" d="M 0 100 C 30 100, 45 135, 70 135" stroke="#8E9CE6" strokeWidth="1.6" strokeDasharray="4 4" opacity="0.65" />
                <circle r="4.5" fill="#50E714" filter="url(#greenGlowFilter)">
                  <animateMotion dur="2.4s" begin="0.3s" repeatCount="indefinite">
                    <mpath href="#curvePath2" />
                  </animateMotion>
                </circle>
                <circle r="4.5" fill="#50E714" filter="url(#greenGlowFilter)">
                  <animateMotion dur="2.4s" begin="1.5s" repeatCount="indefinite">
                    <mpath href="#curvePath2" />
                  </animateMotion>
                </circle>

                {/* Curve 3 */}
                <path id="curvePath3" d="M 0 170 C 30 170, 45 135, 70 135" stroke="#8E9CE6" strokeWidth="1.6" strokeDasharray="4 4" opacity="0.65" />
                <circle r="4.5" fill="#50E714" filter="url(#greenGlowFilter)">
                  <animateMotion dur="2.4s" begin="0.6s" repeatCount="indefinite">
                    <mpath href="#curvePath3" />
                  </animateMotion>
                </circle>
                <circle r="4.5" fill="#50E714" filter="url(#greenGlowFilter)">
                  <animateMotion dur="2.4s" begin="1.8s" repeatCount="indefinite">
                    <mpath href="#curvePath3" />
                  </animateMotion>
                </circle>

                {/* Curve 4 */}
                <path id="curvePath4" d="M 0 240 C 35 240, 45 135, 70 135" stroke="#8E9CE6" strokeWidth="1.6" strokeDasharray="4 4" opacity="0.65" />
                <circle r="4.5" fill="#50E714" filter="url(#greenGlowFilter)">
                  <animateMotion dur="2.4s" begin="0.9s" repeatCount="indefinite">
                    <mpath href="#curvePath4" />
                  </animateMotion>
                </circle>
                <circle r="4.5" fill="#50E714" filter="url(#greenGlowFilter)">
                  <animateMotion dur="2.4s" begin="2.1s" repeatCount="indefinite">
                    <mpath href="#curvePath4" />
                  </animateMotion>
                </circle>
              </svg>

              {/* 3. Central Tubelight Cloud Node */}
              <div className={styles.cloudNode}>
                <div className={styles.cloudIconBox}>
                  <span>T</span>
                </div>
                <div className={styles.cloudLabel}>
                  <span className={styles.cloudTitle}>Tubelight Cloud</span>
                  <span className={styles.cloudSubtitle}>Routing &amp; campaigns</span>
                </div>
              </div>

              {/* 4. Right Connector to Phone */}
              <svg className={styles.connectorRight} viewBox="0 0 40 20" fill="none">
                <path id="curvePathPhone" d="M 0 10 L 40 10" stroke="#8E9CE6" strokeWidth="1.6" strokeDasharray="4 4" opacity="0.65" />
                <circle r="4.5" fill="#50E714" filter="url(#greenGlowFilter)">
                  <animateMotion dur="1.2s" repeatCount="indefinite">
                    <mpath href="#curvePathPhone" />
                  </animateMotion>
                </circle>
                <circle r="4.5" fill="#50E714" filter="url(#greenGlowFilter)">
                  <animateMotion dur="1.2s" begin="0.6s" repeatCount="indefinite">
                    <mpath href="#curvePathPhone" />
                  </animateMotion>
                </circle>
              </svg>

              {/* 5. iPhone Mockup Device */}
              <div className={styles.phoneDevice}>
                <div className={styles.phoneScreen}>
                  {/* Status Bar */}
                  <div className={styles.phoneStatusBar}>
                    <span className={styles.phoneTime}>9:41</span>
                    <div className={styles.dynamicIsland} />
                    <div className={styles.statusIcons}>
                      <svg width="13" height="9" viewBox="0 0 14 10" fill="none">
                        <path d="M1 8h2v2H1V8zm3.5-3h2v5h-2V5zm3.5-3h2v8h-2V2zm3.5-2h2v10h-2V0z" fill="#0F172A"/>
                      </svg>
                      <svg width="16" height="8" viewBox="0 0 18 9" fill="none">
                        <rect x="0.5" y="0.5" width="15" height="8" rx="2" stroke="#0F172A"/>
                        <rect x="2" y="2" width="10" height="5" rx="1" fill="#0F172A"/>
                        <path d="M16.5 3v3" stroke="#0F172A" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>

                  {/* Call Type & Animated Waveform */}
                  <div className={styles.callTypeHeader}>
                    <span>INCOMING CALL • INBOUND SALES</span>
                    <div className={styles.waveform}>
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>

                  {/* Caller Avatar */}
                  <div className={styles.callerAvatar}>
                    <span>RM</span>
                  </div>

                  {/* Caller Info */}
                  <div className={styles.callerName}>Rahul Mehta</div>
                  <div className={styles.callerPhone}>+91 98•••••210 • Pune</div>

                  {/* Pills */}
                  <div className={styles.callerTags}>
                    <span className={styles.tagHot}>Hot lead</span>
                    <span className={styles.tagExisting}>Existing customer</span>
                  </div>

                  {/* Customer Info Card */}
                  <div className={styles.infoCard}>
                    <div className={styles.infoCardTitle}>CUSTOMER INFO</div>
                    <div className={styles.infoRow}>
                      <span className={styles.infoLabel}>Last call</span>
                      <span className={styles.infoVal}>2 days ago</span>
                    </div>
                    <div className={styles.infoRow}>
                      <span className={styles.infoLabel}>Interested in</span>
                      <span className={styles.infoVal}>Product demo</span>
                    </div>
                    <div className={styles.infoRow}>
                      <span className={styles.infoLabel}>Assigned to</span>
                      <span className={styles.infoVal}>You</span>
                    </div>
                  </div>

                  {/* Decline & Answer Buttons */}
                  <div className={styles.callActions}>
                    <div className={styles.actionItem}>
                      <div className={styles.btnDecline}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M5 13C6 11.5 8 10.5 10 10.5C12 10.5 14 11.5 15 13" stroke="white" strokeWidth="2.4" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <span>Decline</span>
                    </div>
                    <div className={styles.actionItem}>
                      <div className={styles.btnAnswer}>
                        <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                          <path d="M6 5C5 7 6 10 9 13C12 16 15 17 17 16L14.5 12.5L12 13.5C11 13 9 11 8.5 10L9.5 7.5L6 5Z" fill="white"/>
                        </svg>
                      </div>
                      <span>Answer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GooglePlay;
