import React from "react";
import DialerTemplate from "@/components/Common/DialerTemplate";
import { dialerPagesData } from "@/data/dialerPagesData";

export const metadata = dialerPagesData["spam-text-detection"].metadata;

const page = () => {
  return <DialerTemplate data={dialerPagesData["spam-text-detection"]} />;
};

export default page;

