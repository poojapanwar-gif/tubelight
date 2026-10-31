import React from "react";
import styles from "../../styles/CaseStudyDetail.module.scss";

const CaseStudyStats = ({ stats }) => {
  return (
    <section className={styles["cs-stats-section"]}>
      <div className={styles["cs-wrap"]}>
        <div className={styles["cs-stats"]}>
          {stats.map((stat) => (
            <div className={styles["cs-stat"]} key={stat.label + stat.value}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyStats;
