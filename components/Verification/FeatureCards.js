import styles from "@/styles/Verification.module.scss";
import SectionHead from "./SectionHead";

// Centered heading + grid of icon cards (3 or 4 columns).
const FeatureCards = ({ title, text, cards, columns = 3, bg = "soft" }) => (
  <section
    className={`${styles.section} ${bg === "white" ? styles["section-white"] : ""} ${
      bg === "lavender" ? styles["section-lavender"] : ""
    }`}
  >
    <div className={styles["section-inner"]}>
      <SectionHead title={title} text={text} />
      <div className={`${styles.cards} ${columns === 4 ? styles["cards-4"] : ""}`}>
        {cards.map((card) => (
          <div className={styles.card} key={card.title}>
            <div className={styles["card-icon"]}>{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.detail}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureCards;
