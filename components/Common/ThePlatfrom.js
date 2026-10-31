import React from "react";
import Link from "next/link";
import styles from "../../styles/ThePlatfrom.module.scss";

const defaultTabs = [
  "📞 Telemarketing",
  "🎯 Lead Generation",
  "💰 Collections",
  "📊 Surveys",
  "🤝 Customer Retention",
  "📢 High-Volume Outbound Contact Centers",
];

const ThePlatfrom = ({
  eyebrow = "THE PLATFORM",
  title = "Built for High-Volume Outbound Teams",
  description = "Wherever agents spend their day on the phone, a Predictive Dialer keeps conversations flowing. It fits telemarketing, lead generation, collections, customer retention, surveys and any high-volume outbound contact center.",
  tabs = defaultTabs,
  ctaTitle = "Optimize Your Outbound Calling",
  ctaDesc = "Connect with more customers, reduce idle time, and boost agent productivity with Tubelight Communication’s smart dialing solutions.",
  primaryBtnText = "Book Your Demo",
  primaryBtnLink = "/contact-us",
  secondaryBtnText = "Talk To Our Team",
  secondaryBtnLink = "/contact-us",
}) => {
  const activeTabs = tabs || defaultTabs;

  return (
    <div className={styles["the-platfrom-section"]}>
      <h6>{eyebrow}</h6>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className={styles["all-tabs"]}>
        {activeTabs.map((item, index) => (
          <div className={styles["tabs"]} key={index}>
            <h5>{item}</h5>
          </div>
        ))}
      </div>
      <div className={styles["your-calling"]}>
        <h2>{ctaTitle}</h2>
        <p>{ctaDesc}</p>
        <div className={styles["both-buttons"]}>
          {primaryBtnLink ? (
            <Link href={primaryBtnLink}>
              <button className={styles["colored-btn"]}>{primaryBtnText}</button>
            </Link>
          ) : (
            <button className={styles["colored-btn"]}>{primaryBtnText}</button>
          )}

          {secondaryBtnLink ? (
            <Link href={secondaryBtnLink}>
              <button>{secondaryBtnText}</button>
            </Link>
          ) : (
            <button>{secondaryBtnText}</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThePlatfrom;
