import React from "react";
import Link from "next/link";
import styles from "../../styles/Industries.module.scss";

const Industries = () => {
  const industriesData = [
    {
      title: "Home & Appliances",
      desc: "Enabling self-service for customers, distributors, and dealers with warranty registration and support.",
      img: "/images/ind-realestate.jpg",
      alt: "Home & Appliances",
      color: "var(--rcs)",
      href: "/case-studies/home-appliance",
      uses: ["Warranty registration", "Service booking", "Dealer orders"],
    },
    {
      title: "Healthcare",
      desc: "Cut no-shows with appointment nudges, send \u201Creport ready\u201D alerts and automate medication reminders.",
      img: "/images/ind-health.jpg",
      alt: "Healthcare",
      color: "var(--wa)",
      href: "/case-studies/health-tech",
      uses: ["Appointment nudges", "Report ready", "Refill reminders"],
    },
    {
      title: "Insurance",
      desc: "Simplifying policy services, claim registration, and renewal reminders with automated virtual assistants.",
      img: "/images/ind-education.jpg",
      alt: "Insurance",
      color: "var(--email)",
      href: "/case-studies/insurance",
      uses: ["Policy renewals", "Claim status", "Instant quotes"],
    },
    {
      title: "Banking & Finance",
      desc: "Secure OTP delivery, transaction alerts, EMI and KYC nudges — DLT-registered and audit-ready.",
      img: "/images/ind-finance.jpg",
      alt: "Banking & Finance",
      color: "var(--ai)",
      href: "/case-studies/banking-finance",
      uses: ["OTP & 2FA", "Txn alerts", "Collections"],
    },
    {
      title: "Oil Company",
      desc: "Automating customer engagement, QR loyalty scanning, and gift dispatch for global lubricants networks.",
      img: "/images/ind-ecommerce.jpg",
      alt: "Oil Company",
      color: "var(--voice)",
      href: "/case-studies/oil-company",
      uses: ["Loyalty rewards", "QR scanner", "Distributor connect"],
    },
    {
      title: "Electric Utility",
      desc: "Bringing essential utility services to consumers through WhatsApp with automated bill alerts and payment flows.",
      img: "/images/ind-logistics.jpg",
      alt: "Electric Utility",
      color: "var(--sms)",
      href: "/case-studies/electric-utility",
      uses: ["Bill alerts", "Outage updates", "Instant payments"],
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
            <Link
              key={index}
              href={item.href}
              className={styles.ind}
              style={{ "--c": item.color }}
            >
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
