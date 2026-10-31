import AgenticAiBanner from "@/components/AgenticAi/AgenticAiBanner";
import ChannelMarquee from "@/components/AIProducts/ChannelMarquee";
import AgenticPlatfrom from "@/components/AgenticAi/AgenticPlatfrom";
import AgenticFeature from "@/components/AgenticAi/AgenticFeature";
import AgenticWorks from "@/components/AgenticAi/AgenticWorks";
import BusinessBenefits from "@/components/Common/BusinessBenefits";
import ThePlatfrom from "@/components/Common/ThePlatfrom";
import ProductsFaqs from "@/components/Common/ProductsFaqs";
import { aiLeadManagementFaqData } from "@/data/faqData";
import { dialerPagesData } from "@/data/dialerPagesData";
import React from "react";
import ContactCenter from "@/components/Common/ContactCenter";

const leadData = dialerPagesData["ai-powered-lead-management-system"];

export const metadata = leadData.metadata;

const page = () => {
  return (
    <>
      <AgenticAiBanner
        title={leadData.banner.title}
        highlightText={leadData.banner.highlightText}
        description={leadData.banner.description}
        primaryBtnText={leadData.banner.primaryBtnText}
        primaryBtnLink={leadData.banner.primaryBtnLink}
        secondaryBtnText={leadData.banner.secondaryBtnText}
        secondaryBtnLink={leadData.banner.secondaryBtnLink}
        videoSrc={leadData.banner.videoSrc}
      />
      <ChannelMarquee />
      <AgenticPlatfrom
        eyebrow={leadData.platformContent.eyebrow}
        title={leadData.platformContent.title}
        paragraphs={leadData.platformContent.paragraphs}
        mode="leads"
      />
      <AgenticFeature
        eyebrow={leadData.features.eyebrow}
        title={leadData.features.title}
        mode="leads"
      />
      <AgenticWorks mode="leads" />
      <BusinessBenefits {...leadData.benefits} />
      <ThePlatfrom {...leadData.platform} />
      <ProductsFaqs data={aiLeadManagementFaqData} />
      <ContactCenter/>
    </>
  );
};

export default page;
