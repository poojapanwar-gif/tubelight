import AgenticAiBanner from "@/components/AgenticAi/AgenticAiBanner";
import ChannelMarquee from "@/components/AIProducts/ChannelMarquee";
import AgenticPlatfrom from "@/components/AgenticAi/AgenticPlatfrom";
import AgenticFeature from "@/components/AgenticAi/AgenticFeature";
import AgenticWorks from "@/components/AgenticAi/AgenticWorks";
import BusinessBenefits from "@/components/Common/BusinessBenefits";
import ThePlatfrom from "@/components/Common/ThePlatfrom";
import ProductsFaqs from "@/components/Common/ProductsFaqs";
import { intelligentConversationsFaqData } from "@/data/faqData";
import { dialerPagesData } from "@/data/dialerPagesData";
import React from "react";
import ContactCenter from "@/components/Common/ContactCenter";

const conversationsData = dialerPagesData["intelligent-conversations"];

export const metadata = conversationsData.metadata;

const page = () => {
  return (
    <>
      <AgenticAiBanner
        title={conversationsData.banner.title}
        highlightText={conversationsData.banner.highlightText}
        description={conversationsData.banner.description}
        primaryBtnText={conversationsData.banner.primaryBtnText}
        primaryBtnLink={conversationsData.banner.primaryBtnLink}
        secondaryBtnText={conversationsData.banner.secondaryBtnText}
        secondaryBtnLink={conversationsData.banner.secondaryBtnLink}
        videoSrc={conversationsData.banner.videoSrc}
      />
      <ChannelMarquee />
      <AgenticPlatfrom
        eyebrow={conversationsData.platformContent.eyebrow}
        title={conversationsData.platformContent.title}
        paragraphs={conversationsData.platformContent.paragraphs}
        mode="conversations"
      />
      <AgenticFeature
        eyebrow={conversationsData.features.eyebrow}
        title={conversationsData.features.title}
        mode="conversations"
      />
      <AgenticWorks mode="conversations" />
      <BusinessBenefits {...conversationsData.benefits} />
      <ThePlatfrom {...conversationsData.platform} />
      <ProductsFaqs data={intelligentConversationsFaqData} />
      <ContactCenter/>
    </>
  );
};

export default page;
