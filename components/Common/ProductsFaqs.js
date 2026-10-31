"use client";
import React, { useState } from "react";
import styles from "../../styles/ProductsFaqs.module.scss";
import { facebookFaqData } from "@/data/faqData";

const ProductsFaqs = ({
  data,
  faqContent,
  eyebrow,
  title,
  description,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeData = data || facebookFaqData;
  const list = faqContent || activeData?.faqs || activeData?.faqContent || [];
  const sectionEyebrow = eyebrow || activeData?.eyebrow || "FAQs";
  const sectionTitle = title || activeData?.title || "Frequently Asked Questions";
  const sectionDesc =
    description ||
    activeData?.description ||
    "Straight answers about how AI-powered ticketing works.";

  const handleToggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const handleHover = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles["product-faq-section"]}>
      <div className={styles["faq-left-right-content"]}>
        <div className={styles["faq-left-content"]}>
          <h6>{sectionEyebrow}</h6>
          <h2>{sectionTitle}</h2>
          <p>{sectionDesc}</p>
        </div>
        <div className={styles["faq-right-content"]}>
          <div className={styles["all-faqs-question-answer"]}>
            {list.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  className={`${styles["faq-question-answer"]} ${
                    isActive ? styles["active"] : ""
                  }`}
                  key={index}
                  onClick={() => handleToggle(index)}
                  onMouseEnter={() => handleHover(index)}
                >
                  <div className={styles["faq-question"]}>
                    <h4>{item.question}</h4>
                    <div
                      className={`${styles["icon"]} ${
                        isActive ? styles["active-icon"] : ""
                      }`}
                    >
                      {isActive ? (
                        <svg
                          width="12"
                          height="2"
                          viewBox="0 0 12 2"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.3333 1H1"
                            strokeWidth="2"
                            strokeLinecap="round"
                            stroke="white"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 1V11M1 6H11"
                            stroke="#5E6FF9"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  {isActive && <h5>{item.answer}</h5>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsFaqs;
