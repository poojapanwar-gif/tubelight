import React from "react";
import styles from "../../styles/CaseStudyDetail.module.scss";
import FlowDiagram from "./FlowDiagram";
import FeatureCards from "./FeatureCards";
import DashedPills from "./DashedPills";

const CaseStudyObjective = ({ objective }) => {
  return (
    <section className={styles["cs-objective"]}>
      <div className={styles["cs-wrap"]}>
        <div className={styles["cs-objective-split"]}>
          <div>
            <span className={styles["cs-eyebrow"]}>Objective</span>
            <h2>{objective.heading}</h2>
          </div>
          <p className={styles["cs-objective-text"]}>{objective.text}</p>
        </div>

        {objective.goals && (
          <ul className={styles["cs-goals"]}>
            {objective.goals.map((goal) => (
              <li key={goal}>{goal}</li>
            ))}
          </ul>
        )}

        {objective.flow && <FlowDiagram flow={objective.flow} tone="grey" />}
        {objective.features && (
          <FeatureCards
            features={objective.features}
            columns={objective.featureColumns || 3}
            tone="grey"
          />
        )}
        {objective.pills && <DashedPills pills={objective.pills} />}
      </div>
    </section>
  );
};

export default CaseStudyObjective;
