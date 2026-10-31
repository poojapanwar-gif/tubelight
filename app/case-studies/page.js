import CaseStudiesGrid from "@/components/CaseStudies/CaseStudiesGrid";
import CaseStudiesHero from "@/components/CaseStudies/CaseStudiesHero";
import React from "react";

export const metadata = {
  title: "Case Studies — Tubelight Communications",
  description:
    "See how businesses use Tubelight's WhatsApp, voice, SMS and CPaaS solutions to engage customers.",
};

const page = () => {
  return (
    <>
      <CaseStudiesHero />
      <CaseStudiesGrid />
    </>
  );
};

export default page;
