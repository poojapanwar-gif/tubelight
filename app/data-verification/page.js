import React from "react";
import FlashBanner from "@/components/FlashCall/FlashBanner";
import FlashMissedCall from "@/components/FlashCall/FlashMissedCall";
import PHPCode from "@/components/Common/PHPCode";
import IntegrateMuch from "@/components/Common/IntegrateMuch";
import DataAmpUp from "@/components/DataVerification/DataAmpUp";
import GetInTouch from "@/components/Common/GetInTouch";
import DataIntegrate from "@/components/DataVerification/DataIntegrate";

export const metadata = {
  title: "Data Verification — Tubelight Communications",
  description:
    "No-PIN, zero-click data verification. Match a user's phone number with mobile carrier data to verify identity in under 5 seconds.",
};

const dataCards = [
  {
    icon: (
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 10V7.5a4 4 0 0 1 8 0V10"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <rect x="5" y="10" width="14" height="11.5" rx="2.5" fill="white" />
        <circle cx="12" cy="15" r="1.5" fill="#5E6FF9" />
        <path
          d="M12 15.5V18"
          stroke="#5E6FF9"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Prevent social engineering risk",
    detail:
      "End-users never need to share or show a pin code in the verification process, so there's no room for social engineering.",
  },
  {
    icon: (
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.5 2.5L5.5 13H12L10.5 21.5L19.5 10.5H13L14.5 2.5H13.5Z"
          fill="white"
        />
        <path
          d="M2 9.5H5.5M1 13H4M2 16.5H5.5"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Boost conversion rates",
    detail:
      "Make it easy for new customers to register and reduce failed signups with seamless verification running in the background at all times.",
  },
  {
    icon: (
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="6" y="2.5" width="12" height="19" rx="2.5" fill="white" />
        <circle cx="12" cy="5.2" r="0.8" fill="#5E6FF9" />
        <rect x="10" y="17.5" width="4" height="1.5" rx="0.75" fill="#5E6FF9" />
      </svg>
    ),
    title: "Deliver a seamless UX",
    detail:
      "The fastest verification method on the market today. Once your end user provides a phone number, it's a friction-free zero-click process.",
  },
];

const page = () => (
  <>
    <FlashBanner
      title="Customers appreciate"
      highlight="the no-PIN, zero-click verification."
      desc="Improve your platform's security and user experience with fast verification."
      videoSrc="/images/dataverificationbanner.mp4"
      btn1Text="Try for free"
      btn1Link="/contact-us"
      btn2Text="Talk to Expert"
      btn2Link="/contact-us"
    />

    <FlashMissedCall
      title="Simple, Secure, Speedy Verification"
      desc="Using information held by the operator, we match a user's phone number with the mobile network carrier's data to verify identity. This takes less than 5 seconds. The user only needs to consent; no further action is needed."
      cards={dataCards}
    />
    <DataAmpUp/>
    <DataIntegrate/>
    <PHPCode
      title="Easy, flexible integration with our REST API and SDK"
      desc="Keep control of data verification requests, status updates, and notifications with our REST API and reduce development and maintenance time with our SDK for Android, iOS, or JavaScript."
      buttonText="Documentation"
    />
    <IntegrateMuch
      title="Integrate Data Verification with"
      highlight="MuCh for 2FA."
      desc="Priorities can be set-up to initiate OTP among the most effective or useful channels based on the use-cases of an enterprise / client. Multi-channel failover guarantees reliable 2FA authentication worldwide."
      btnText="Talk to Expert"
      btnLink="/contact-us"
    />
    <GetInTouch/>
  </>
);

export default page;
