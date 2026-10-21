import React from "react";
import styles from "../../styles/Products.module.scss";

const Products = () => {
  const productsData = [
    {
      title: "AI Conversations",
      isNew: true,
      desc: "Build continuous conversations with persistent memory, intelligence and orchestration for humans and AI.",
      img: "/images/prod-ai.svg?v=3",
      alt: "AI conversations preview",
      color: "var(--ai)",
      btnText: "Start conversations",
      link: "#channels",
    },
    {
      title: "Messaging",
      isNew: false,
      desc: "Send, receive and manage SMS, RCS, WhatsApp, MMS and more on our globally reliable platform.",
      img: "/images/prod-messaging.svg?v=3",
      alt: "Messaging channels preview",
      color: "var(--sms)",
      btnText: "Send messages",
      link: "#channels",
    },
    {
      title: "Email",
      isNew: false,
      desc: "Deliver email at incredible scale with the trusted Tubelight Email API and shared templates.",
      img: "/images/prod-email.svg?v=3",
      alt: "Email campaign preview",
      color: "var(--email)",
      btnText: "Send emails",
      link: "#channels",
    },
    {
      title: "Voice & IVR",
      isNew: false,
      desc: "Build voice experiences that strengthen customer connections while unlocking ROI with data and AI.",
      img: "/images/prod-voice.svg?v=3",
      alt: "Voice call preview",
      color: "var(--voice)",
      btnText: "Make calls",
      link: "#channels",
    },
    {
      title: "User Authentication",
      isNew: false,
      desc: "Fight fraud and keep customer accounts secure with OTP verification and identity lookup tools.",
      img: "/images/prod-auth.svg?v=3",
      alt: "User authentication preview",
      color: "var(--blue)",
      btnText: "Verify users",
      link: "#outcomes",
    },
    {
      title: "Customer Data",
      isNew: false,
      desc: "Unify clean, consented customer data from any source for real-time insights on every customer.",
      img: "/images/prod-data.svg?v=3",
      alt: "Customer data dashboard preview",
      color: "var(--rcs)",
      btnText: "Connect data",
      link: "#integrations",
    },
  ];

  return (
    <section className={styles["products-sec"]} id="products">
      <div className={styles.wrap}>
        <div className={styles["section-head"]}>
          <h2>One platform for every customer conversation</h2>
          <p>
            Composable building blocks for messaging, voice, email, AI and data — connected through a single API.
          </p>
        </div>

        <div className={styles["prod-grid"]}>
          {productsData.map((prod, index) => (
            <a
              key={index}
              className={styles["prod-card"]}
              style={{ "--c": prod.color }}
              href={prod.link}
            >
              <div className={styles["prod-media"]}>
                <img
                  className={styles["prod-img"]}
                  src={prod.img}
                  alt={prod.alt}
                  loading="lazy"
                />
              </div>
              <div className={styles["prod-body"]}>
                <h4>
                  {prod.title}{" "}
                  {prod.isNew && <span className={styles["prod-badge"]}>New</span>}
                </h4>
                <p>{prod.desc}</p>
                <span className={styles["prod-btn"]}>
                  {prod.btnText}{" "}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;