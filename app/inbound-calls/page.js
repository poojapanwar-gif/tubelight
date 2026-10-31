import React from "react";
import DialerTemplate from "@/components/Common/DialerTemplate";
import { dialerPagesData } from "@/data/dialerPagesData";

export const metadata = dialerPagesData["inbound-calls"].metadata;

const page = () => {
  return <DialerTemplate data={dialerPagesData["inbound-calls"]} />;
};

export default page;
