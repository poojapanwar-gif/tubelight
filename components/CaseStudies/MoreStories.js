import React from "react";
import Link from "next/link";
import styles from "../../styles/CaseStudyDetail.module.scss";

const MoreStories = ({ stories }) => {
  return (
    <section className={styles["cs-more"]}>
      <div className={styles["cs-wrap"]}>
        <span className={styles["cs-eyebrow"]}>Keep reading</span>
        <h2 className={styles["cs-section-title"]}>More customer stories</h2>
        <div className={styles["cs-more-grid"]}>
          {stories.map((story) => (
            <Link
              href={`/case-studies/${story.slug}`}
              className={styles["cs-more-card"]}
              key={story.slug}
            >
              <span className={styles["cs-more-tag"]}>{story.tag}</span>
              <h3>{story.title}</h3>
              <span className={styles["cs-more-link"]}>Read case study →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreStories;
