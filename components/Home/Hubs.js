import React from "react";
import styles from "../../styles/Hubs.module.scss";

const Hubs = () => {
  const hubsData = [
    {
      id: "marketing",
      label: "Marketing Hub",
      color: "var(--cyan-deep)",
      photo: "/images/hub-marketing.jpg",
      alt: "Marketing on WhatsApp and Instagram",
      title: "Scale Marketing",
      desc: "Automate customer engagement on WhatsApp & Instagram to drive leads and conversions.",
      link: "#products",
      renderOverlays: () => (
        <>
          <span className={`${styles["hub-ov"]} ${styles["ov-ig"]}`} aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1.1" fill="#fff" stroke="none" />
            </svg>
          </span>
          <span className={`${styles["hub-ov"]} ${styles["ov-wa"]}`} aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="#fff">
              <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2Zm5.4 14c-.2.6-1.2 1.2-1.7 1.2-.4 0-1 .1-3.4-1-2.9-1.2-4.7-4.2-4.9-4.4-.1-.2-1.1-1.5-1.1-2.8 0-1.3.7-2 .9-2.2.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5.2.5.7 1.8.8 1.9.1.1.1.3 0 .5l-.3.5-.4.4c-.1.2-.3.3-.1.6.1.3.7 1.1 1.4 1.8.9.8 1.7 1 2 1.2.2.1.4.1.5-.1l.7-.8c.2-.3.4-.2.6-.1l1.7.8c.3.1.5.2.5.4.1.1.1.6-.1 1.2Z" />
            </svg>
          </span>
          <div className={`${styles["hub-ov"]} ${styles["ov-stats"]}`}>
            <div className={styles["ov-card"]}>
              <span className={styles.l}>Read</span>
              <span className={styles.v}>92%</span>
            </div>
            <div className={styles["ov-card"]}>
              <span className={styles.l}>Replied</span>
              <span className={styles.v}>76%</span>
            </div>
          </div>
          <span className={`${styles["hub-ov"]} ${styles["ov-chip"]}`}>Reserved my spot 😍</span>
        </>
      ),
    },
    {
      id: "support",
      label: "Support Hub",
      color: "var(--wa)",
      photo: "/images/hub-support.jpg",
      alt: "Support agent on a unified team inbox",
      title: "Delight Customers",
      desc: "Stay on top of every customer query with a unified team inbox built for WhatsApp, SMS & Instagram.",
      link: "#product",
      renderOverlays: () => (
        <>
          <div className={`${styles["hub-ov"]} ${styles["ov-tl"]}`}>
            <div className={styles["ov-card"]}>
              <span className={styles.l}>Customer wait time</span>
              <span className={styles.v}>&lt;2 mins</span>
            </div>
          </div>
          <div className={`${styles["hub-ov"]} ${styles["ov-ml"]}`}>
            <div className={styles["ov-card"]}>
              <span className={styles.l}>Agent response time</span>
              <span className={styles.v}>&lt;1 min</span>
            </div>
          </div>
          <span className={`${styles["hub-ov"]} ${styles["ov-bot"]}`} aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
              <rect x="4" y="7" width="16" height="12" rx="3" />
              <path d="M12 7V4M9 13h.01M15 13h.01M8 4h8" />
              <path d="M2 12h2M20 12h2" />
            </svg>
          </span>
        </>
      ),
    },
    {
      id: "sales",
      label: "Sales CRM",
      color: "var(--violet)",
      photo: "/images/hub-sales.jpg",
      alt: "Sales rep closing deals on WhatsApp",
      title: "Win Deals",
      desc: "Capture leads, engage prospects, and close deals faster with a WhatsApp-first Sales CRM.",
      link: "#outcomes",
      renderOverlays: () => (
        <>
          <span className={`${styles["hub-ov"]} ${styles["ov-bub-me"]}`}>
            Hey, can I get more info?
          </span>
          <span className={`${styles["hub-ov"]} ${styles["ov-bub"]}`}>
            Hey Linda, happy to help! What are you looking for?
          </span>
          <div className={`${styles["hub-ov"]} ${styles["ov-contact"]}`}>
            <span className={styles["oc-name"]}>Linda Johnson</span>
            <span className={styles["oc-role"]}>CMO · ACME Global</span>
            <div className={styles["oc-tags"]}>
              <span>Decision maker</span>
              <span>Negotiation</span>
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <section className={styles["hubs-sec"]} id="hubs">
      <div className={styles.wrap}>
        <div className={styles["section-head"]}>
          <h2>Everything You Need to Win</h2>
          <p>Tubelight is a full-stack growth engine for marketing, sales, and support.</p>
        </div>

        <div className={styles["hub-grid"]}>
          {hubsData.map((hub) => (
            <div key={hub.id} className={styles["hub-card"]} style={{ "--c": hub.color }}>
              <span className={styles["hub-label"]}>{hub.label}</span>
              <div className={styles["hub-media"]}>
                <img
                  className={styles["hub-photo"]}
                  src={hub.photo}
                  alt={hub.alt}
                  loading="lazy"
                />
                {hub.renderOverlays()}
              </div>
              <h3>{hub.title}</h3>
              <p>{hub.desc}</p>
              <a className={styles["hub-link"]} href={hub.link}>
                Learn More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hubs;