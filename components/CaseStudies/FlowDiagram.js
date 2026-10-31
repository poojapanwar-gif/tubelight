import React from "react";
import styles from "../../styles/CaseStudyDetail.module.scss";

// 4-node flow diagram. `tone="grey"` is used when the section background is white.
const FlowDiagram = ({ flow, tone = "white" }) => {
  return (
    <div
      className={`${styles["cs-flow"]} ${flow.arrows ? styles["has-arrows"] : ""} ${
        tone === "grey" ? styles["tone-grey"] : ""
      }`}
    >
      {flow.nodes.map((node, index) => (
        <React.Fragment key={node.label}>
          {flow.arrows && index > 0 && (
            <span className={styles["cs-flow-arrow"]} aria-hidden="true">
              →
            </span>
          )}
          <div className={styles["cs-flow-node"]}>
            <span className={styles["cs-flow-icon"]} aria-hidden="true">
              {node.icon}
            </span>
            <h4>{node.label}</h4>
            {node.sub && (
              <p>
                {node.subArrow && (
                  <span className={styles["cs-flow-sub-arrow"]} aria-hidden="true">
                    →
                  </span>
                )}
                {node.sub}
              </p>
            )}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default FlowDiagram;
