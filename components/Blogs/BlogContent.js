import React from "react";
import styles from "../../styles/BlogDetail.module.scss";

// Renders the structured `content` of a post (see blogData.js).

const shieldIcon = (
  <svg viewBox="0 0 26 26" fill="none" aria-hidden="true">
    <path
      d="M13 2.17l8.67 3.25v6.5c0 5.41-3.69 10.07-8.67 11.91-4.98-1.84-8.67-6.5-8.67-11.91v-6.5L13 2.17z"
      stroke="#fff"
      strokeWidth="1.3"
    />
  </svg>
);

const useCaseIcons = {
  bag: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 8h14l-1 12H6L5 8z" />
      <path d="M9 10V7a3 3 0 0 1 6 0v3" strokeLinecap="round" />
    </svg>
  ),
  card: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.6" aria-hidden="true">
      <rect x="3" y="6" width="18" height="12" rx="2.5" />
      <circle cx="9" cy="12" r="1" fill="#111" />
      <circle cx="12" cy="12" r="1" fill="#111" />
      <circle cx="15" cy="12" r="1" fill="#111" />
    </svg>
  ),
  send: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 3L3 10.5l7 2.5 2.5 7L21 3z" />
      <path d="M10 13l5-5" strokeLinecap="round" />
    </svg>
  ),
  headset: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <rect x="3.5" y="13" width="4" height="6" rx="1.5" />
      <rect x="16.5" y="13" width="4" height="6" rx="1.5" />
      <path d="M18.5 19c0 1.5-2 2.5-5 2.5" />
    </svg>
  ),
};

const SectionHead = ({ eyebrow, title, subtitle }) => (
  <div className={styles["section-head"]}>
    <span className={styles.eyebrow}>{eyebrow}</span>
    <h2>{title}</h2>
    {subtitle && <p>{subtitle}</p>}
  </div>
);

const BlogContent = ({ content }) => {
  const { features, comparison, useCases, callout, recommend } = content;

  return (
    <>
      {features && (
        <section className={styles.block}>
          <SectionHead {...features} />
          <div className={styles["feature-grid"]}>
            {features.items.map((f) => (
              <div key={f.title} className={styles["feature-card"]}>
                <span className={styles["feature-icon"]}>{shieldIcon}</span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {comparison && (
        <section className={styles.block}>
          <SectionHead {...comparison} />
          <div className={styles["table-wrap"]}>
            <table className={styles["compare"]}>
              <thead>
                <tr>
                  <th scope="col">
                    <span className={styles["sr-only"]}>Feature</span>
                  </th>
                  <th scope="col">{comparison.columns[0]}</th>
                  <th scope="col">{comparison.columns[1]}</th>
                </tr>
              </thead>
              <tbody>
                {comparison.rows.map((r) => (
                  <tr key={r.label}>
                    <th scope="row">{r.label}</th>
                    <td className={styles.no}>
                      <span aria-hidden="true">&times;</span> {r.sms}
                    </td>
                    <td className={styles.yes}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M5 12.5l4.5 4.5L19 7.5" />
                      </svg>{" "}
                      {r.rcs}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {useCases && (
        <section className={styles.block}>
          <SectionHead {...useCases} />
          <div className={styles["usecase-grid"]}>
            {useCases.items.map((u) => (
              <div key={u.title} className={styles["usecase-card"]}>
                <span className={styles["usecase-icon"]} style={{ background: u.color }}>
                  {useCaseIcons[u.icon]}
                </span>
                <div>
                  <h3>{u.title}</h3>
                  <p>{u.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {callout && (
        <aside className={styles["callout"]}>
          <span className={styles["callout-icon"]}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3.5L2.5 20h19L12 3.5z" />
              <path d="M12 10v4.5M12 17v.2" strokeLinecap="round" />
            </svg>
          </span>
          <div>
            <span className={styles["callout-eyebrow"]}>{callout.eyebrow}</span>
            <h2>{callout.title}</h2>
            <p>{callout.text}</p>
          </div>
        </aside>
      )}

      {recommend && (
        <section className={styles["recommend"]}>
          <span className={styles["recommend-eyebrow"]}>{recommend.eyebrow}</span>
          <h2>{recommend.title}</h2>
          <p>{recommend.text}</p>
          <ul>
            {recommend.points.map((pt) => (
              <li key={pt}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12.5l4.5 4.5L19 7.5" />
                </svg>
                {pt}
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
};

export default BlogContent;
