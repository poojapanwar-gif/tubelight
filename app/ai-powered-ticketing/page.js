import AgenticAiBanner from '@/components/AgenticAi/AgenticAiBanner'
import AgenticFeature from '@/components/AgenticAi/AgenticFeature'
import AgenticPlatfrom from '@/components/AgenticAi/AgenticPlatfrom'
import ChannelMarquee from '@/components/AIProducts/ChannelMarquee'
import BusinessBenefits from '@/components/Common/BusinessBenefits'
import ThePlatfrom from '@/components/Common/ThePlatfrom'
import ProductsFaqs from '@/components/Common/ProductsFaqs'
import { agenticTicketingFaqData } from '@/data/faqData'
import { dialerPagesData } from '@/data/dialerPagesData'
import React from 'react'
import AgenticWorks from '@/components/AgenticAi/AgenticWorks'
import ContactCenter from '@/components/Common/ContactCenter'

const ticketingData = dialerPagesData["ai-powered-ticketing"];

export const metadata = ticketingData.metadata;

const page = () => {
  return (
    <>
      <AgenticAiBanner />
      <ChannelMarquee />
      <AgenticPlatfrom />
      <AgenticFeature />
      <AgenticWorks/>
      <BusinessBenefits {...ticketingData.benefits} />
      <ThePlatfrom {...ticketingData.platform} />
      <ProductsFaqs data={agenticTicketingFaqData} />
      <ContactCenter/>
    </>
  )
}

export default page
