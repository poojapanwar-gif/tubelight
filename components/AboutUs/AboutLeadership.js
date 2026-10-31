import React from "react";
import styles from "../../styles/AboutUs.module.scss";

const AboutLeadership = () => {
  const leaders = [
    {
      name: "Praveen Singh",
      role: "CEO and CO-Founder",
      image: "/images/leadership/praveen-singh.jpg",
    },
    {
      name: "Dheerendra Singh",
      role: "Managing Director",
      image: "/images/leadership/dheerendra-singh.jpg",
    },
    {
      name: "Vishnu Sharma",
      role: "CTO",
      image: "/images/leadership/vishnu-sharma.jpg",
    },
    {
      name: "Durgesh Singh",
      role: "Technology Head - Messaging",
      image: "/images/leadership/durgesh-singh.jpg",
    },
  ];

  return (
    <section className={styles["about-leadership-section"]}>
      <h2>Our Leadership</h2>
      <div className={styles["leadership-cards"]}>
        {leaders.map((leader, index) => (
          <div className={styles["leadership-card"]} key={index}>
            <div className={styles["leader-photo"]}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={leader.image}
                alt={`${leader.name}, ${leader.role}`}
                width={264}
                height={334}
                loading="lazy"
              />
            </div>
            <div className={styles["leader-plate"]}>
              <h4>{leader.name}</h4>
              <p>{leader.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutLeadership;
