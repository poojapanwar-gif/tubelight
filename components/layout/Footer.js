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
        { label: "RCS Messaging", href: "#channels" },
        { label: "Voice & IVR", href: "#channels" },
        { label: "AI Conversations", href: "#channels" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { label: "Banking & Finance", href: "#industries" },
        { label: "E-commerce", href: "#industries" },
        { label: "Healthcare", href: "#industries" },
        { label: "Logistics", href: "#industries" },
        { label: "Real Estate", href: "#industries" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Platform", href: "#product" },
        { label: "Integrations", href: "#integrations" },
        { label: "Results", href: "#results" },
        { label: "Request Demo", href: "#demo" },
        { label: "Contact", href: "#trial" },
      ],
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <div className={styles["foot-grid"]}>
          <div className={styles["foot-brand"]}>
            <a className={styles.brand} href="#top">
              <img
                className={styles["brand-logo"]}
                src="/images/footerlogo.png"
                alt="Tubelight Communications"
              />
            </a>
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