import styles from "@/styles/Verification.module.scss";

const SectionHead = ({ title, text, plain = false }) => (
  <div className={`${styles["section-head"]} ${plain ? styles["section-head-plain"] : ""}`}>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>
);

export default SectionHead;
