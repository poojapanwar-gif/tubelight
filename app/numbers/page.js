import React from "react";
import FlashBanner from "@/components/FlashCall/FlashBanner";
import NumbersUseCases from "@/components/Numbers/NumbersUseCases";
import NumbersFeatures from "@/components/Numbers/NumbersFeatures";
import NumbersWorld from "@/components/Numbers/NumbersWorld";
import PHPCode from "@/components/Common/PHPCode";
import IntegrateMuch from "@/components/Common/IntegrateMuch";
import GetInTouch from "@/components/Common/GetInTouch";

export const metadata = {
  title: "Numbers — Tubelight Communications",
  description:
    "Global business, local number. Toll-free numbers, short codes, VMN and DID in over 100 countries — set up in minutes via API or web.",
};

const page = () => (
  <>
    <FlashBanner
      title="Global Business, Local"
      highlight="number"
      desc="Be accessible to your customers in over 100 countries with local long numbers or short codes. Set up in minutes via API or web."
      videoSrc="/images/numbersbanner.mp4"
      btn1Text="Try for free"
      btn1Link="/contact-us"
      btn2Text="Talk to Expert"
      btn2Link="/contact-us"
    />
    <NumbersUseCases/>
    <NumbersFeatures/>
    <NumbersWorld/>
    <PHPCode
      title="For Developers, By Developers"
      desc="Tubelight programmable API infrastructure enables developers to easily integrate communication API's and create solutions of their choice. Create a free developer account today to access API and SDK's."
      buttonText="Documentation"
    />

    <IntegrateMuch
      title="Integrate Virtual Numbers with"
      highlight="MuCh for 2FA."
      desc="Priorities can be set-up to initiate OTP among the most effective or useful channels based on the use-cases of an enterprise / client."
      btnText="Talk to Expert"
      btnLink="/contact-us"
    />
    <GetInTouch/>
  </>
);

export default page;
