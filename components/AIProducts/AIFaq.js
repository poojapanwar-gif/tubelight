"use client";
import React, { useId, useState } from "react";
import styles from "../../styles/AIProduct.module.scss";
import { faqHeading } from "./data/shared";

const AIFaq = ({ faqs }) => {
  const [open, setOpen] = useState(0);
  const baseId = useId();

  return (
    <section className={styles["ai-faq"]}>
      <div className={styles["ai-faq-inner"]}>
        <div className={styles["ai-faq-head"]}>
          <span className={styles["ai-eyebrow"]}>{faqHeading.eyebrow}</span>
          <h2>{faqHeading.title}</h2>
          <p>{faqHeading.text}</p>
        </div>
        <div className={styles["ai-faq-list"]}>
          {faqs.map((item, i) => {
            const isOpen = open === i;
            const btnId = `${baseId}-q${i}`;
            const panelId = `${baseId}-a${i}`;
            return (
              <div
                key={item.q}
                className={[styles["ai-faq-item"], isOpen ? styles["is-open"] : ""].join(" ")}
              >
                <h3>
                  <button
                    type="button"
                    id={btnId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span>{item.q}</span>
                    <span className={styles["ai-faq-icon"]} aria-hidden="true" />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={styles["ai-faq-panel"]}
                  hidden={!isOpen}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AIFaq;
