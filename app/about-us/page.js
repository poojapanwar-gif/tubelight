import AboutCta from "@/components/AboutUs/AboutCta";
import AboutHero from "@/components/AboutUs/AboutHero";
import AboutLeadership from "@/components/AboutUs/AboutLeadership";
import AboutMission from "@/components/AboutUs/AboutMission";
import React from "react";

export const metadata = {
  title: "About Us — Tubelight Communications",
  description:
    "Tubelight Communications transforms customer communication into meaningful connections with conversational AI and omnichannel messaging. Meet our leadership and learn about our mission and vision.",
};

const page = () => {
  return (
    <>
      <AboutHero />
      <AboutMission />
      <AboutLeadership />
      <AboutCta />
    </>
  );
};

export default page;
