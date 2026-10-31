import CampaignsBanner from "@/components/Campaigns/CampaignsBanner";
import CampaignsCall from "@/components/Campaigns/CampaignsCall";
import CampaignsCase from "@/components/Campaigns/CampaignsCase";
import CampaignsCustomer from "@/components/Campaigns/CampaignsCustomer";
import CampaignsDeveloper from "@/components/Campaigns/CampaignsDeveloper";
import ContactCenter from "@/components/Common/ContactCenter";
import React from "react";

export const metadata = {
  title: "Smart Campaigns — Tubelight Communications",
  description:
    "Plan, launch, and track targeted messages across SMS, WhatsApp, RCS, and Voice from a single dashboard.",
};

const page = () => {
  return (
    <>
    <CampaignsBanner/>
    <CampaignsCall/>
    <CampaignsCustomer/>
    <CampaignsCase/>
    <CampaignsDeveloper/>
    <ContactCenter/>
    </>
  );
};

export default page;
