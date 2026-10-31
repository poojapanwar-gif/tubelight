import React from "react";
import CaseStudyHero from "./CaseStudyHero";
import CaseStudyStats from "./CaseStudyStats";
import CaseStudyObjective from "./CaseStudyObjective";
import CaseStudySolution from "./CaseStudySolution";
import CaseStudyImpact from "./CaseStudyImpact";
import MoreStories from "./MoreStories";
import CaseStudyCta from "./CaseStudyCta";

const StructuredCaseStudy = ({ study }) => {
  return (
    <>
      <CaseStudyHero study={study} />
      <CaseStudyStats stats={study.stats} />
      <CaseStudyObjective objective={study.objective} />
      <CaseStudySolution solution={study.solution} />
      <CaseStudyImpact impact={study.impact} />
      {study.moreStories && <MoreStories stories={study.moreStories} />}
      <CaseStudyCta cta={study.cta} />
    </>
  );
};

export default StructuredCaseStudy;
