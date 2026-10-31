import React from "react";
import styles from "../../styles/CaseStudyClassic.module.scss";

const alts = {
  problem: "Missed calls illustration",
  solution: "Missed call confirmation illustration",
  outcome: "Hospital illustration",
};

// The image already contains the Figma backdrop blob (and the "Missed Calls" label).
const ClassicArt = ({ type, image }) => {
  return (
    <div className={styles["cs-art"]}>
      <img className={styles["cs-art-img"]} src={image} alt={alts[type] || ""} loading="lazy" />
    </div>
  );
};

export default ClassicArt;
