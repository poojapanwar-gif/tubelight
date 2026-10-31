import { notFound } from "next/navigation";
import React from "react";
import ClassicCaseStudy from "@/components/CaseStudies/ClassicCaseStudy";
import StructuredCaseStudy from "@/components/CaseStudies/StructuredCaseStudy";
import { caseStudies, getCaseStudy } from "@/components/CaseStudies/caseStudyData";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: `${study.title} Case Study — Tubelight Communications`,
    description: study.metaDescription,
  };
}

const page = async ({ params }) => {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return study.template === "classic" ? (
    <ClassicCaseStudy study={study} />
  ) : (
    <StructuredCaseStudy study={study} />
  );
};

export default page;
