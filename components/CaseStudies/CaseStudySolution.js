import React from "react";
import styles from "../../styles/CaseStudyDetail.module.scss";
import FlowDiagram from "./FlowDiagram";
import FeatureCards from "./FeatureCards";
import DashedPills from "./DashedPills";

const CaseStudySolution = ({ solution }) => {
  return (
    <section id="solution" className={styles["cs-solution"]}>
      <div className={styles["cs-wrap"]}>
        <span className={styles["cs-eyebrow"]}>Solution</span>
        {solution.heading && <h2 className={styles["cs-section-title"]}>{solution.heading}</h2>}
        {solution.text && <p className={styles["cs-section-lead"]}>{solution.text}</p>}

        {solution.flow && <FlowDiagram flow={solution.flow} />}
        {solution.features && (
          <FeatureCards
            features={solution.features}
            columns={solution.featureColumns || 3}
          />
        )}
        {solution.pills && <DashedPills pills={solution.pills} />}
        {solution.note && <p className={styles["cs-note"]}>{solution.note}</p>}
      </div>
    </section>
  );
};

export default CaseStudySolution;
