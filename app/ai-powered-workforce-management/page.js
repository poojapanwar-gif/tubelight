import React from "react";
import DialerTemplate from "@/components/Common/DialerTemplate";
import { dialerPagesData } from "@/data/dialerPagesData";

export const metadata =
  dialerPagesData["ai-powered-workforce-management"].metadata;

const page = () => {
  return (
    <DialerTemplate
      data={dialerPagesData["ai-powered-workforce-management"]}
    />
  );
};

export default page;

