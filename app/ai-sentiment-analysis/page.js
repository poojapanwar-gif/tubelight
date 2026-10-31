import React from "react";
import DialerTemplate from "@/components/Common/DialerTemplate";
import { dialerPagesData } from "@/data/dialerPagesData";

export const metadata = dialerPagesData["ai-sentiment-analysis"].metadata;

const page = () => {
  return <DialerTemplate data={dialerPagesData["ai-sentiment-analysis"]} />;
};

export default page;

