import React from "react";
import styles from "../../styles/Testimonials.module.scss";

const Testimonials = () => {
  const testimonialsData = [
    {
      res: "+38% conversions",
      quote:
        "We moved cart-recovery and order updates onto WhatsApp and RCS through Tubelight. Reply rates tripled and conversions climbed 38% in the first month.",
      av: "CX",
      name: "Head of Growth",
      role: "Leading D2C retail brand",
    },
    {
      res: "42% lower cost-to-serve",
      quote:
        "The AI voice and chat agents now handle the bulk of routine queries and hand off to our team with full context. Cost per resolution dropped 42%.",
      av: "OP",
      name: "VP Customer Experience",
      role: "Private sector NBFC",
    },
    {
      res: "99.9% OTP success",
      quote:
        "OTP and transaction alerts have to land instantly. With automatic channel fallback we get 99.9% delivery — and a single dashboard for compliance.",
      av: "IT",
      name: "Head of Digital",
      role: "Multi-city private bank",
    },
  ];

  return (
    <section className={styles["testimonials-sec"]} id="testimonials">
      <div className={styles.wrap}>
        <div className={styles["section-head"]}>
          <h2>Real teams. Real numbers.</h2>
          <p>
            Enterprises across India run their customer engagement on Tubelight. Here&apos;s what changed.
          </p>
        </div>

        <div className={styles["tst-grid"]}>
          {testimonialsData.map((item, index) => (
            <div key={index} className={styles.tst}>
              <div className={styles.q}>&ldquo;</div>
              <span className={styles.res}>{item.res}</span>
              <p>{item.quote}</p>
              <div className={styles.who}>
                <div className={styles.av}>{item.av}</div>
                <div>
                  <div className={styles.nm}>{item.name}</div>
                  <div className={styles.rl}>{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;