import FlashBanner from "@/components/FlashCall/FlashBanner";
import FlashMissedCall from "@/components/FlashCall/FlashMissedCall";
import PHPCode from "@/components/Common/PHPCode";
import IntegrateMuch from "@/components/Common/IntegrateMuch";
import PhoneCustomizable from "@/components/PhoneVerification/PhoneCustomizable";
import PhoneSteps from "@/components/PhoneVerification/PhoneSteps";
import PhoneOrbit from "@/components/PhoneVerification/PhoneOrbit";

export const metadata = {
  title: "Phone Call Verification — Tubelight Communications",
  description:
    "Get your customers verified with a call. Phone call verification is a fast, cost-efficient way to verify users in seconds, on any device.",
};

const phoneCards = [
  {
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2" />
        <path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path
          d="M12 3C14.5 5.5 16 8.5 16 12C16 15.5 14.5 18.5 12 21C9.5 18.5 8 15.5 8 12C8 8.5 9.5 5.5 12 3Z"
          stroke="white"
          strokeWidth="2"
        />
      </svg>
    ),
    title: "Global reach on any device",
    detail:
      "Make sure you can reach users on any device. If SMS and Flash Call don’t cut it, call verification can step in to save the day and deliver a one-time password.",
  },
  {
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 12L11 14L15 10M12 3L4 6V11C4 16.5 7.5 21 12 22C16.5 21 20 16.5 20 11V6L12 3Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
    title: "Effortless Compliance",
    detail:
      "Verify any mobile or landline number with an inclusive method that aligns with the Americans with Disability Act (ADA).",
  },
  {
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="9" y="3" width="6" height="11" rx="3" fill="white" />
        <path
          d="M5 10V11C5 14.87 8.13 18 12 18C15.87 18 19 14.87 19 11V10"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12 18V21M8 21H16"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Powerful Customization",
    detail:
      "Adjust your voice prompts to the user’s location, customs and language.",
  },
];

const page = () => (
  <>
    <FlashBanner
      title="Get your customers"
      highlight="verified with a call"
      desc="Phone call verification is a fast, cost-efficient solution to verify users in seconds, on any device. Ensure reliable voice-based authentication everywhere."
      videoSrc="/images/phoneverificationbanner.mp4"
    />
    <FlashMissedCall
      title="Verify customers on phone call"
      desc="A call is made to the user's mobile or landline number to authenticate that user. The verification can happen automatically via SDK or deliver a one-time password through an automated voice call."
      cards={phoneCards}
    />
    <PhoneCustomizable/>
    <PhoneSteps/>
    <PhoneOrbit/>
    <PHPCode
      title="Construct with confidence - send your first Phone Verification in minutes."
      desc="Keep control of phone verification requests, status updates, and notifications with our REST API and reduce development and maintenance time with our SDK for Android, iOS, or JavaScript."
    />
    <IntegrateMuch
      title="Integrate Phone Call with"
      highlight="MuCh for 2FA."
    />
  </>
);

export default page;
