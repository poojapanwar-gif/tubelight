import styles from "@/styles/Verification.module.scss";
import CtaButtons from "./CtaButtons";

// Shared hero: heading (+ optional highlighted second line), copy,
// CTA buttons and a page-specific visual on the right.
const VerificationHero = ({
  title,
  highlight,
  text,
  visual,
  showTalk = true,
  talkArrow = false,
  soft = false,
}) => (
  <section className={`${styles.hero} ${soft ? styles["hero-soft"] : ""}`}>
    <div className={styles["hero-inner"]}>
      <div className={styles["hero-text"]}>
        <h1>
          {title}
          {highlight && <span>{highlight}</span>}
        </h1>
        <p>{text}</p>
        <CtaButtons showTalk={showTalk} talkArrow={talkArrow} />
      </div>
      <div className={styles["hero-visual"]}>{visual}</div>
    </div>
  </section>
);

export default VerificationHero;
