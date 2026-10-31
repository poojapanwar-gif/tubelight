import React from "react";
import DialerTemplate from "@/components/Common/DialerTemplate";
import { dialerPagesData } from "@/data/dialerPagesData";

export const metadata = dialerPagesData["ai-chatbot"].metadata;

const page = () => {
  return <DialerTemplate data={dialerPagesData["ai-chatbot"]} />;
};

export default page;

