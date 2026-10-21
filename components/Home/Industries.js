import React from "react";
import styles from "../../styles/Industries.module.scss";

const Industries = () => {
  const industriesData = [
    {
      title: "Real Estate",
      desc: "Deliver brochures instantly, automate site-visit reminders and qualify leads the moment they enquire.",
      img: "/images/ind-realestate.jpg",
      alt: "Real estate",
      color: "var(--rcs)",
      uses: ["Brochure on WhatsApp", "Visit reminders", "EMI alerts"],
    },
    {
      title: "Healthcare",
      desc: "Cut no-shows with appointment nudges, send \u201Creport ready\u201D alerts and automate medication reminders.",
      img: "/images/ind-health.jpg",
      alt: "Healthcare",
      color: "var(--wa)",
      uses: ["Appointment nudges", "Report ready", "Refill reminders"],
    },
    {
      title: "Education",
      desc: "Send admission updates, automate fee reminders and share results and schedules across channels.",
      img: "/images/ind-education.jpg",
      alt: "Education",
      color: "var(--email)",
      uses: ["Admission updates", "Fee reminders", "Result alerts"],
    },
    {
      title: "Finance & Banking",
      desc: "Secure OTP delivery, transaction alerts, EMI and KYC nudges — DLT-registered and audit-ready.",
      img: "/images/ind-finance.jpg",
      alt: "Finance and banking",
      color: "var(--ai)",
      uses: ["OTP & 2FA", "Txn alerts", "Collections"],
    },
    {
      title: "E-commerce",
      desc: "Recover abandoned carts, confirm COD orders and send real-time shipping updates that reduce RTO.",
      img: "/images/ind-ecommerce.jpg",
      alt: "E-commerce",
      color: "var(--voice)",
      uses: ["Cart recovery", "COD confirm", "Shipping updates"],
    },
    {
      title: "Logistics & Delivery",
      desc: "Send live out-for-delivery alerts, confirm OTP at handover and cut failed deliveries with two-way nudges.",
      img: "/images/ind-logistics.jpg",
      alt: "Logistics and delivery",
      color: "var(--sms)",
      uses: ["OFD alerts", "Handover OTP", "RTO reduction"],
    },
  ];

  return (
    <section className={styles["industries-sec"]} id="industries">
      <div className={styles.wrap}>
        <div className={styles["section-head"]}>
          <h2>Solutions scoped to how your industry works</h2>
          <p>
            Pre-built journeys, templates and compliance for the workflows that move your numbers.
          </p>
        </div>

        <div className={styles["ind-grid"]}>
          {industriesData.map((item, index) => (
            <div key={index} className={styles.ind} style={{ "--c": item.color }}>
              <div className={styles["ind-img"]}>
                <img src={item.img} alt={item.alt} loading="lazy" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className={styles.uses}>
                {item.uses.map((use, uIdx) => (
                  <span key={uIdx}>{use}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;