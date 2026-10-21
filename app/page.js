import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/layout/WhatsAppWidget";
import HeroBanner from "@/components/Home/HeroBanner";
import Hubs from "@/components/Home/Hubs";
import Products from "@/components/Home/Products";
import ProductShowcase from "@/components/Home/ProductShowcase";
import Industries from "@/components/Home/Industries";
import Testimonials from "@/components/Home/Testimonials";
import Developers from "@/components/Home/Developers";
import Blogs from "@/components/Home/Blogs";
import FinalCta from "@/components/Home/FinalCta";

const page = () => {
  return (
    <>
      <Header />
      <HeroBanner />
      <Hubs />
      <Products />
      <ProductShowcase />
      <Industries />
      <Testimonials />
      <Developers />
      <Blogs />
      <FinalCta />
      <Footer />
      <WhatsAppWidget />
    </>
  );
};

export default page;
