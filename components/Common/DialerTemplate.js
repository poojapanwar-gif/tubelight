import React from "react";
import DialerBanner from "./DialerBanner";
import DialerFeatures from "./DialerFeatures";
import BusinessBenefits from "./BusinessBenefits";
import ThePlatfrom from "./ThePlatfrom";
import PredectiveDeveloper from "../PredectiveDialer/PredectiveDeveloper";
import ContactCenter from "./ContactCenter";

const DialerTemplate = ({ data }) => {
  if (!data) return null;

  return (
    <>
      <DialerBanner {...data.banner} />
      <DialerFeatures {...data.features} />
      <BusinessBenefits {...data.benefits} />
      <ThePlatfrom {...data.platform} />
      <PredectiveDeveloper />
      <ContactCenter />
    </>
  );
};

export default DialerTemplate;

