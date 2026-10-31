import React from "react";
import FlashBanner from "@/components/FlashCall/FlashBanner";
import FlashMissedCall from "@/components/FlashCall/FlashMissedCall";
import PHPCode from "@/components/Common/PHPCode";
import IntegrateMuch from "@/components/Common/IntegrateMuch";
import SmsHowItWorks from "@/components/SmsVerification/SmsHowItWorks";

export const metadata = {
  title: "SMS Verification — Tubelight Communications",
  description:
    "Simple, secure and reliable SMS verification. Send one-time passwords worldwide to prevent fraud, boost conversions and stay compliant.",
};

const smsCards = [
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
          d="M12 2L4 5.5V11.5C4 16.5 7.4 21.1 12 22.3C16.6 21.1 20 16.5 20 11.5V5.5L12 2Z"
          fill="white"
        />
        <path
          d="M9 11.8L11 13.8L15 9.8"
          stroke="#5E6FF9"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Prevent Fraud",
    detail:
      "Stop fake sign-ups and malicious activities before they happen.",
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
          d="M2 9H4.5M1 12.5H3.5M2 16H4.5"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Boost Conversions",
    detail:
      "Frictionless verification flows lead to higher signups and engagement.",
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
        <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2" />
        <path
          d="M3 12H21"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12 3C14.5 5.5 16 8.5 16 12C16 15.5 14.5 18.5 12 21C9.5 18.5 8 15.5 8 12C8 8.5 9.5 5.5 12 3Z"
          stroke="white"
          strokeWidth="2"
        />
      </svg>
    ),
    title: "Global Reach",
    detail:
      "Verify users across the world with local presence and intelligent routing.",
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
          d="M7 10V7.5C7 4.74 9.24 2.5 12 2.5C14.76 2.5 17 4.74 17 7.5V10"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <rect x="4" y="10" width="16" height="11.5" rx="3" fill="white" />
        <circle cx="12" cy="15" r="1.5" fill="#5E6FF9" />
        <path
          d="M12 15.5V18"
          stroke="#5E6FF9"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Compliant & Secure",
    detail:
      "GDPR-ready infrastructure with enterprise-grade privacy and security.",
  },
];

const page = () => (
  <>
    <FlashBanner
      title="SMS Verification"
      highlight="Simple. Secure . Reliable"
      desc="SMS verification can help businesses comply with legal and regulatory requirements related to user authentication and data protection."
      videoSrc="/images/smsbanner.mp4"
      btn1Text="Try for free"
      btn1Link="/contact-us"
      btn2Text="Talk to Expert"
      btn2Link="/contact-us"
    />

    <FlashMissedCall
      title="Built For Security, Designed For Scale"
      desc="Simple text is accessible on all handset globally- use our API to send around the world."
      cards={smsCards}
    />
    <SmsHowItWorks/>
    <PHPCode
      title="Construct with confidence - send your first SMS Verification in minutes."
      desc="Integrate in minutes with our email API and rust your emails reach the inbox"
      buttonText="Documentation"
    />

    <IntegrateMuch
      title="Integrate SMS with"
      highlight="MuCh for 2FA"
      desc="Priorities can be set-up to initiate OTP among the most effective or useful channels based on the use-cases of an enterprise / client."
      btnText="Talk to Expert"
      btnLink="/contact-us"
    />
  </>
);

export default page;
