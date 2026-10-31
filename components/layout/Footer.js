import React from "react";
import Link from "next/link";
import styles from "../../styles/Footer.module.scss";

const Footer = () => {
  const footerColumns = [
    {
      title: "Channels",
      links: [
        { label: "WhatsApp API", href: "/whatsapp" },
        { label: "Bulk SMS", href: "/sms-and-otp" },
        { label: "RCS Messaging", href: "/rcs" },
        { label: "Voice & IVR", href: "/ivr-solution" },
        { label: "AI Conversations", href: "/intelligent-conversations" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { label: "Banking & Finance", href: "/case-studies/banking-finance" },
        { label: "Healthcare", href: "/case-studies/health-tech" },
        { label: "Electric Utility", href: "/case-studies/electric-utility" },
        { label: "Insurance", href: "/case-studies/insurance" },
        { label: "Home & Appliances", href: "/case-studies/home-appliance" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about-us" },
        { label: "Contact Us", href: "/contact-us" },
        { label: "Blog", href: "/blogs" },
        { label: "Case Studies", href: "/case-studies" },
      ],
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <div className={styles["foot-grid"]}>
          <div className={styles["foot-brand"]}>
            <Link className={styles.brand} href="/">
              <img
                className={styles["brand-logo"]}
                src="/images/footerlogo.png"
                alt="Tubelight Communications"
              />
            </Link>
            <p>
              The omnichannel customer engagement platform for modern enterprises. Send smarter, resolve faster, convert more.
            </p>
          </div>

          {/* Footer Columns mapped from array */}
          {footerColumns.map((col, idx) => (
            <div key={idx} className={styles["foot-col"]}>
              <h4>{col.title}</h4>
              {col.links.map((link, lIdx) =>
                link.href.startsWith("/") ? (
                  <Link key={lIdx} href={link.href}>
                    {link.label}
                  </Link>
                ) : (
                  <a key={lIdx} href={link.href}>
                    {link.label}
                  </a>
                )
              )}
            </div>
          ))}
        </div>

        <div className={styles["foot-bottom"]}>
          <div className={styles.cp}>
            © 2026 Tubelight Communications Ltd. All rights reserved.
          </div>
          <div className={styles["foot-badges"]}>
            <span>Developed By Bee Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
