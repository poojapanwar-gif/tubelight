import React from "react";
import DialerTemplate from "@/components/Common/DialerTemplate";
import { dialerPagesData } from "@/data/dialerPagesData";

export const metadata = dialerPagesData["ai-flow-builder"].metadata;

const page = () => {
  return <DialerTemplate data={dialerPagesData["ai-flow-builder"]} />;
};

export default page;
