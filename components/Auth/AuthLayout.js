import React from "react";
import styles from "../../styles/Auth.module.scss";

const highlights = [
  { title: "Free Text Credits", text: "No credit card required." },
  {
    title: "Programmable APIs and Tools",
    text: "SMS, WhatsApp, Voice, Verification, Numbers and AI powered chatbots.",
  },
  { title: "Quick and Easy Integration", text: "Get started in minutes." },
];

const AuthLayout = ({ children }) => {
  return (
    <section className={styles["auth-section"]}>
      <div className={styles["auth-inner"]}>
        <aside className={styles["auth-aside"]}>
          <h2>
            Connect, Engage, <span>Enhance.</span>
          </h2>
          <p className={styles["auth-tagline"]}>Let&apos;s build together</p>
          <ul>
            {highlights.map((item) => (
              <li key={item.title}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <div>
                  <b>{item.title}</b>
                  <span>{item.text}</span>
                </div>
              </li>
            ))}
          </ul>
        </aside>
        <div className={styles["auth-card"]}>{children}</div>
      </div>
    </section>
  );
};

export default AuthLayout;
