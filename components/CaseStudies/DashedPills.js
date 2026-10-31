import React from "react";
import styles from "../../styles/CaseStudyDetail.module.scss";

const DashedPills = ({ pills }) => {
  return (
    <ul className={styles["cs-pills"]}>
      {pills.map((pill) => (
        <li key={pill}>{pill}</li>
      ))}
    </ul>
  );
};

export default DashedPills;
