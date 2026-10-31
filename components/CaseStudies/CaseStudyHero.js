import React from "react";
import Link from "next/link";
import styles from "../../styles/CaseStudyDetail.module.scss";
import ChatMockup from "./ChatMockup";
import ElectricUtilityMockup from "./ElectricUtilityMockup";
import HealthcareMockup from "./HealthcareMockup";
import OilCompanyMockup from "./OilCompanyMockup";
import HomeApplianceMockup from "./HomeApplianceMockup";
import BankingMockup from "./BankingMockup";
import InsuranceMockup from "./InsuranceMockup";

const tagTones = ["tone-blue", "tone-green", "tone-blue"];

const CaseStudyHero = ({ study }) => {
  const isElectricUtility = study.slug === "electric-utility";
  const isHealthTech = study.slug === "health-tech";
  const isOilCompany = study.slug === "oil-company";
  const isHomeAppliance = study.slug === "home-appliance";
  const isBanking = study.slug === "banking";
  const isInsurance = study.slug === "insurance";
  const hasVisual = !!(
    study.chatMockup ||
    study.heroImage ||
    isElectricUtility ||
    isHealthTech ||
    isOilCompany ||
    isHomeAppliance ||
    isBanking ||
    isInsurance
  );

  return (
    <section className={styles["cs-hero"]}>
      <span className={styles["cs-hero-glow"]} aria-hidden="true" />
      <div
        className={`${styles["cs-wrap"]} ${styles["cs-hero-grid"]} ${
          hasVisual ? styles["with-visual"] : ""
        }`}
      >
        <div className={styles["cs-hero-copy"]}>
          <nav className={styles["cs-breadcrumb"]} aria-label="Breadcrumb">
            <span>Resources</span>
            <span aria-hidden="true">›</span>
            <Link href="/case-studies">Case Studies</Link>
            <span aria-hidden="true">›</span>
            <strong aria-current="page">{study.breadcrumb}</strong>
          </nav>

          <ul className={styles["cs-tags"]}>
            {study.tags.map((tag, index) => (
              <li key={tag} className={styles[tagTones[index % tagTones.length]]}>
                {tag}
              </li>
            ))}
          </ul>

          <h1>
            {study.heading.text}
            <span>{study.heading.highlight}</span>
          </h1>
          <p className={styles["cs-intro"]}>{study.intro}</p>

          <a href="#solution" className={styles["cs-how-btn"]}>
            See how it works ↓
          </a>

          <dl className={styles["cs-meta"]}>
            {study.meta.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Hero Visual: Code-rendered mockups, ChatMockup, or heroImage */}
        {isElectricUtility ? (
          <div className={styles["cs-hero-visual"]}>
            <ElectricUtilityMockup />
          </div>
        ) : isHealthTech ? (
          <div className={styles["cs-hero-visual"]}>
            <HealthcareMockup />
          </div>
        ) : isOilCompany ? (
          <div className={styles["cs-hero-visual"]}>
            <OilCompanyMockup />
          </div>
        ) : isHomeAppliance ? (
          <div className={styles["cs-hero-visual"]}>
            <HomeApplianceMockup />
          </div>
        ) : isBanking ? (
          <div className={styles["cs-hero-visual"]}>
            <BankingMockup />
          </div>
        ) : isInsurance ? (
          <div className={styles["cs-hero-visual"]}>
            <InsuranceMockup />
          </div>
        ) : study.chatMockup ? (
          <div className={styles["cs-hero-visual"]}>
            <ChatMockup chat={study.chatMockup} />
          </div>
        ) : study.heroImage ? (
          <div className={styles["cs-hero-visual"]}>
            <img
              src={study.heroImage}
              alt={study.title || "Case study banner illustration"}
              className={styles["cs-hero-img"]}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default CaseStudyHero;
