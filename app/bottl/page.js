import BottlBanner from "@/components/Bottl/BottlBanner";
import BottlCall from "@/components/Bottl/BottlCall";
import BottlCase from "@/components/Bottl/BottlCase";
import BottlCustomer from "@/components/Bottl/BottlCustomer";
import BottlDeveloper from "@/components/Bottl/BottlDeveloper";
import ContactCenter from "@/components/Common/ContactCenter";
import React from "react";

export const metadata = {
  title: "Conversational AI Chatbot — Tubelight Communications",
  description:
    "Tubelight’s AI chatbot lets businesses answer customer queries, qualify leads and resolve issues instantly, 24/7, across WhatsApp, your website, apps and more.",
};

const page = () => {
  return (
    <>
    <BottlBanner/>
    <BottlCall/>
    <BottlCustomer/>
    <BottlCase/>
    <BottlDeveloper/>
    <ContactCenter/>
    </>
  );
};

export default page;
