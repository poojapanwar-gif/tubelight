import Link from "next/link";
import styles from "@/styles/Verification.module.scss";
import { ArrowIcon } from "./icons";

// "Try for free →" + "Talk to Expert" pair used by the hero sections.
const CtaButtons = ({ showTalk = true, talkArrow = false, className = "" }) => (
  <div className={`${styles["hero-buttons"]} ${className}`}>
    <Link href="/contact-us" className={styles["btn-primary"]}>
      Try for free <ArrowIcon />
    </Link>
    {showTalk && (
      <Link href="/contact-us" className={styles["btn-outline"]}>
        Talk to Expert {talkArrow && <ArrowIcon />}
      </Link>
    )}
  </div>
);

export default CtaButtons;
