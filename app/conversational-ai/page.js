import React from "react";
import DialerTemplate from "@/components/Common/DialerTemplate";
import { dialerPagesData } from "@/data/dialerPagesData";

export const metadata = dialerPagesData["conversational-ai"].metadata;

const page = () => {
  return <DialerTemplate data={dialerPagesData["conversational-ai"]} />;
};

export default page;

