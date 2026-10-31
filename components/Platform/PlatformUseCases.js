import React from "react";
import Link from "next/link";
import styles from "../../styles/Platform.module.scss";

// The three small UI mocks shown at the top of the use-case cards.
const ListVisual = () => (
  <div className={styles["visual"]}>
    <div className={styles["visual-list"]}>
      <div className={styles["visual-row"]}>
        <span className={styles["row-num"]}>1</span>Emergency Alert
      </div>
      <div className={`${styles["visual-row"]} ${styles["visual-row-active"]}`}>
        <span className={styles["row-num"]}>2</span>Appoin
      </div>
      <div className={styles["visual-row"]}>
        <span className={styles["row-num"]}>3</span>System Alert
      </div>
    </div>
  </div>
);

const WindowVisual = ({ pill }) => (
  <div className={styles["visual"]}>
    <div className={styles["visual-window"]}>
      <div className={styles["window-bar"]} />
      <div className={styles["window-line"]} />
      <div className={`${styles["window-line"]} ${styles["window-line-short"]}`} />
      {pill ? (
        <span className={styles["window-pill"]}>{pill}</span>
      ) : (
        <div className={styles["window-spacer"]} />
      )}
    </div>
  </div>
);

const visuals = [
  () => <ListVisual />,
  () => <WindowVisual pill="Campaigns" />,
  () => <WindowVisual />,
];

const PlatformUseCases = ({ cards }) => {
  return (
    <section className={styles["platform-use-cases"]}>
      <h2>Use Cases</h2>
      <p className={styles["use-cases-sub"]}>
        One Short Code, many ways to reach and respond to your audience.
      </p>
      <div className={styles["use-cases-cards"]}>
        {cards.map((item, index) => (
          <div className={styles["use-case-card"]} key={index}>
            {visuals[index % visuals.length]()}
            <h3>
              <Link href={item.link}>{item.linktext}</Link>
            </h3>
            <h5>{item.title}</h5>
            <p>{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlatformUseCases;
