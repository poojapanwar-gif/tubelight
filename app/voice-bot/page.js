import React from "react";
import DialerTemplate from "@/components/Common/DialerTemplate";
import { dialerPagesData } from "@/data/dialerPagesData";

export const metadata = dialerPagesData["voice-bot"].metadata;

const page = () => {
  return <DialerTemplate data={dialerPagesData["voice-bot"]} />;
};

export default page;

