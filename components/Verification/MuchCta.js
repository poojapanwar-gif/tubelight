import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Verification.module.scss";
import networkVisual from "@/public/images/dataverification.png";

// Dark gradient "Integrate <channel> with MuCh for 2FA" banner.
const MuchCta = ({
  title,
  text = "Priorities can be set-up to initiate OTP among the most effective or useful channels based on the use-cases of an enterprise / client.",
}) => (
  <section className={styles.cta}>
    <div className={styles["cta-box"]}>
      <div>
        <h2>
          {title} <span>MuCh for 2FA</span>
        </h2>
        <p>{text}</p>
        <Link href="/contact-us" className={`${styles["btn-primary"]} ${styles["btn-glow"]}`}>
          Talk to Expert
        </Link>
      </div>
      <Image src={networkVisual} alt="Secure multichannel verification network" />
    </div>
  </section>
);

export default MuchCta;
