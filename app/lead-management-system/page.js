import React from "react";
import DialerTemplate from "@/components/Common/DialerTemplate";
import { dialerPagesData } from "@/data/dialerPagesData";

export const metadata = dialerPagesData["lead-management-system"].metadata;

const page = () => {
  return <DialerTemplate data={dialerPagesData["lead-management-system"]} />;
};

export default page;
