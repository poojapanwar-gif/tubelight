import styles from "@/styles/Verification.module.scss";
import SectionHead from "./SectionHead";

// Centered heading + text-only cards.
// variant "accent": white rounded cards with blue titles (soft grey section).
// variant "flat": near-white square cards with dark titles (lavender section).
const InfoCards = ({ title, text, cards, variant = "accent" }) => (
  <section
    className={`${styles.section} ${variant === "flat" ? styles["section-lavender"] : ""}`}
  >
    <div className={styles["section-inner"]}>
      <SectionHead title={title} text={text} plain />
      <div
        className={`${styles["info-cards"]} ${variant === "flat" ? styles["info-cards-flat"] : ""}`}
      >
        {cards.map((card) => (
          <div className={styles["info-card"]} key={card.title}>
            <h3>{card.title}</h3>
            <p>{card.detail}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default InfoCards;
