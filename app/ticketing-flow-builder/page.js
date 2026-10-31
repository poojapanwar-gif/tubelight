import React from "react";
import DialerTemplate from "@/components/Common/DialerTemplate";
import { dialerPagesData } from "@/data/dialerPagesData";

export const metadata = dialerPagesData["ticketing-flow-builder"].metadata;

const page = () => {
  return <DialerTemplate data={dialerPagesData["ticketing-flow-builder"]} />;
};

export default page;

