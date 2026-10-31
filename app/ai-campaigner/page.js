import AgenticAiBanner from "@/components/AgenticAi/AgenticAiBanner";
import ChannelMarquee from "@/components/AIProducts/ChannelMarquee";
import AgenticPlatfrom from "@/components/AgenticAi/AgenticPlatfrom";
import AgenticFeature from "@/components/AgenticAi/AgenticFeature";
import AgenticWorks from "@/components/AgenticAi/AgenticWorks";
import BusinessBenefits from "@/components/Common/BusinessBenefits";
import ThePlatfrom from "@/components/Common/ThePlatfrom";
import ProductsFaqs from "@/components/Common/ProductsFaqs";
import { aiCampaignerFaqData } from "@/data/faqData";
import { dialerPagesData } from "@/data/dialerPagesData";
import React from "react";
import ContactCenter from "@/components/Common/ContactCenter";

const campaignerData = dialerPagesData["ai-campaigner"];

export const metadata = campaignerData.metadata;

const page = () => {
  return (
    <>
      <AgenticAiBanner
        title={campaignerData.banner.title}
        highlightText={campaignerData.banner.highlightText}
        description={campaignerData.banner.description}
        primaryBtnText={campaignerData.banner.primaryBtnText}
        primaryBtnLink={campaignerData.banner.primaryBtnLink}
        secondaryBtnText={campaignerData.banner.secondaryBtnText}
        secondaryBtnLink={campaignerData.banner.secondaryBtnLink}
        videoSrc={campaignerData.banner.videoSrc}
      />
      <ChannelMarquee />
      <AgenticPlatfrom
        eyebrow={campaignerData.platformContent.eyebrow}
        title={campaignerData.platformContent.title}
        paragraphs={campaignerData.platformContent.paragraphs}
        mode="campaigner"
      />
      <AgenticFeature
        eyebrow={campaignerData.features.eyebrow}
        title={campaignerData.features.title}
        mode="campaigner"
      />
      <AgenticWorks mode="campaigner" />
      <BusinessBenefits {...campaignerData.benefits} />
      <ThePlatfrom {...campaignerData.platform} />
      <ProductsFaqs data={aiCampaignerFaqData} />
      <ContactCenter/>
    </>
  );
};

export default page;
