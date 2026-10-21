import React from "react";
import styles from "../../styles/FinalCta.module.scss";

const FinalCta = () => {
  const ctaData = {
    title: "Don’t wait for the future. Build it.",
    desc: "Tubelight gives you the tools to connect customer experiences on any channel, full customer context, and AI to work efficiently. All on a single platform with flexible plans and pay-as-you-go pricing.",
    bgImage: "/images/cta-bg.svg?v=3",
    photo: "/images/person-woman.jpg",
    photoAlt: "Happy customer using Tubelight on a laptop",
    buttons: [
      {
        label: "Start for free",
        href: "#trial",
        className: `${styles.btn} ${styles["btn-blue"]}`,
      },
    ],
    links: [
      {
        label: "View pricing",
        href: "#",
        className: styles["cta2-link"],
      },
    ],
  };

  return (
    <section className={styles["cta2-sec"]} id="demo">
      <img
        className={styles["cta2-bg"]}
        src={ctaData.bgImage}
        alt=""
        aria-hidden="true"
      />
      <div className={styles.wrap}>
        <div className={styles.cta2} id="trial">
          <div className={styles["cta2-copy"]}>
            <h2>{ctaData.title}</h2>
            <p>{ctaData.desc}</p>
            <div className={styles["cta2-btns"]}>
              {ctaData.buttons.map((btn, index) => (
                <a key={index} className={btn.className} href={btn.href}>
                  {btn.label}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              ))}
              {ctaData.links.map((link, index) => (
                <a key={index} className={link.className} href={link.href}>
                  {link.label}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <div className={styles["cta2-visual"]}>
            <div className={styles["cta2-photo"]}>
              <img
                src={ctaData.photo}
                alt={ctaData.photoAlt}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;