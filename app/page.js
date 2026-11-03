import React from "react";
import HeroBanner from "@/components/Home/HeroBanner";
import Hubs from "@/components/Home/Hubs";
import Products from "@/components/Home/Products";
import GooglePlay from "@/components/Home/GooglePlay";
import ProductShowcase from "@/components/Home/ProductShowcase";
import Industries from "@/components/Home/Industries";
import Testimonials from "@/components/Home/Testimonials";
import Developers from "@/components/Home/Developers";
import Blogs from "@/components/Home/Blogs";
import FinalCta from "@/components/Home/FinalCta";

const page = () => {
  return (
    <>
      <HeroBanner />
      <Hubs />
      <Products />
      <GooglePlay />
      <ProductShowcase />
      <Industries />
      <Testimonials />
      <Developers />
      <Blogs />
      <FinalCta />
    </>
  );
};

export default page;
