import styles from "@/styles/Verification.module.scss";

// CSS phone frame. variant: "dark" (default), "light" (silver) or "grey".
const PhoneMockup = ({ variant = "dark", statusBar = false, children, className = "" }) => {
  const variantClass =
    variant === "light" ? styles["phone-light"] : variant === "grey" ? styles["phone-grey"] : "";
  return (
    <div className={`${styles.phone} ${variantClass} ${className}`}>
      <span className={styles["phone-notch"]} />
      <div className={styles["phone-screen"]}>
        {statusBar && (
          <div className={styles["phone-status"]}>
            <span>9:41</span>
            <span>●●● ▮</span>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default PhoneMockup;
