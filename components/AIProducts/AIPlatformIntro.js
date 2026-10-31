import React from "react";
import styles from "../../styles/AIProduct.module.scss";
import { TicketCard } from "./AIWidgets";

const AIPlatformIntro = ({ data }) => {
  return (
    <section className={styles["ai-platform"]}>
      <div className={styles["ai-platform-inner"]}>
        <div className={styles["ai-platform-text"]}>
          <span className={styles["ai-eyebrow"]}>{data.eyebrow}</span>
          <h2>
            {data.title.map((line, i) => (
              <React.Fragment key={i}>
                {i > 0 && " "}
                <span className={styles["ai-title-line"]}>{line}</span>
              </React.Fragment>
            ))}
          </h2>
          {data.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        {data.visual === "ticket" && (
          <div className={styles["ai-platform-visual"]}>
            <TicketCard />
          </div>
        )}
      </div>
    </section>
  );
};

export default AIPlatformIntro;
