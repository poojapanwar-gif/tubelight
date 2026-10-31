import React from "react";
import Link from "next/link";
import styles from "../../styles/CaseStudyList.module.scss";
import { caseStudyCards } from "./caseStudyData";

// Cards with an `image` show the top of the illustration (/images/case-studies/<slug>.png)
// over the card gradient; the caption box covers the lower part of the card.
const CaseStudiesGrid = () => {
  return (
    <section className={styles["cs-list-section"]}>
      <div className={styles["cs-list-grid"]}>
        {caseStudyCards.map((card) => {
          const background = card.image
            ? `url(${card.image}) center / cover no-repeat, ${card.bg}`
            : card.bg;
          const caption = (
            <div className={styles["cs-caption"]}>
              <div className={styles["cs-caption-top"]}>
                <h3>{card.title}</h3>
                {card.slug && (
                  <span className={styles["cs-read-more"]}>Read more</span>
                )}
              </div>
              {card.description && <p>{card.description}</p>}
            </div>
          );
          const inner = (
            <>
              <div
                className={styles["cs-card-visual"]}
                style={{ background }}
                data-img={card.image || undefined}
                aria-hidden="true"
              >
                {!card.image && <span className={styles["cs-card-pattern"]} />}
              </div>
              {caption}
            </>
          );
          return card.slug ? (
            <Link
              key={card.title}
              href={`/case-studies/${card.slug}`}
              className={`${styles["cs-card"]} ${styles["is-link"]}`}
              aria-label={`${card.title} — Read more`}
            >
              {inner}
            </Link>
          ) : (
            <div key={card.title} className={styles["cs-card"]}>
              {inner}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CaseStudiesGrid;
