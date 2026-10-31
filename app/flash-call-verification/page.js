import FlashMissedCall from "@/components/FlashCall/FlashMissedCall";
import FlashStreamline from "@/components/FlashCall/FlashStreamline";
import FlashMuch from "@/components/FlashCall/FlashMuch";

import FlashBanner from "@/components/FlashCall/FlashBanner";
import PHPCode from "@/components/Common/PHPCode";
import IntegrateMuch from "@/components/Common/IntegrateMuch";

export const metadata = {
  title: "Flash Call Verification — Tubelight Communications",
  description:
    "Verify customers in a flash with a missed call. Flash Call Verification is a quick, low-cost and secure way to validate users in seconds.",
};

const page = () => (
  <>
    <FlashBanner
      videoSrc="/images/flashcallbanner.mp4"
      desc="Verify customers in a flash with a missed call. Flash Call Verification is a quick, low-cost and secure way to validate users in seconds."
    />
    <FlashMissedCall />
    <FlashStreamline />
    <FlashMuch />
    <PHPCode />
    <IntegrateMuch />
  </>
);

export default page;
