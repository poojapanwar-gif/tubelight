import React from "react";
import DialerTemplate from "@/components/Common/DialerTemplate";
import { dialerPagesData } from "@/data/dialerPagesData";

export const metadata = dialerPagesData["outbound-dialer"].metadata;

const page = () => {
  return <DialerTemplate data={dialerPagesData["outbound-dialer"]} />;
};

export default page;
