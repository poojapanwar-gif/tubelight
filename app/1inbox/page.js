import OneInBoxBanner from "@/components/1InBox/OneInBoxBanner";
import OneInBoxCall from "@/components/1InBox/OneInBoxCall";
import OneInBoxCase from "@/components/1InBox/OneInBoxCase";
import OneInBoxCustomer from "@/components/1InBox/OneInBoxCustomer";
import OneInBoxDeveloper from "@/components/1InBox/OneInBoxDeveloper";
import ContactCenter from "@/components/Common/ContactCenter";
import React from "react";

export const metadata = {
  title: "1inBox — Tubelight Communications",
  description:
    "A unified inbox that brings WhatsApp, SMS, RCS, voice and web chat conversations into one screen.",
};

const page = () => {
  return (
    <>
    <OneInBoxBanner/>
    <OneInBoxCall/>
    <OneInBoxCustomer/>
    <OneInBoxCase/>
    <OneInBoxDeveloper/>
    <ContactCenter/>
    </>
  );
};

export default page;
