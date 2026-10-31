import GetInTouch from "@/components/Common/GetInTouch";
import OurOffice from "@/components/ContactUs/OurOffice";
import React from "react";

export const metadata = {
  title: "Contact Us — Tubelight Communications",
  description:
    "Get in touch with Tubelight Communications. Talk to our team about omnichannel messaging, voice and conversational AI, or visit our offices in Mumbai, Bengaluru, Ranchi, and California.",
};

const page = () => {
  return (
    <>
      <GetInTouch />
      <OurOffice />
    </>
  );
};

export default page;
