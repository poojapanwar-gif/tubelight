import styles from "@/styles/Verification.module.scss";

// Decorative stage behind a hero phone: glowing ring(s), thin rounded
// connector lines and absolutely positioned badges.
// badges: [{ node, style }]
const HeroStage = ({ phone, badges = [], lines = ["tl", "tr"], innerRing = false }) => (
  <div className={styles.stage}>
    {lines.map((pos) => (
      <span key={pos} className={`${styles["stage-line"]} ${styles[`stage-line-${pos}`]}`} />
    ))}
    <span className={styles["stage-ring"]} />
    {innerRing && <span className={`${styles["stage-ring"]} ${styles["stage-ring-inner"]}`} />}
    <div className={styles["stage-phone"]}>{phone}</div>
    {badges.map((badge, i) => (
      <div key={i} className={styles["stage-badge"]} style={badge.style}>
        {badge.node}
      </div>
    ))}
  </div>
);

export default HeroStage;
