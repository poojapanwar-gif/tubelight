"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import styles from "../../styles/NumberUseCases.module.scss";

const NumbersUseCases = () => {
  const swiperRef = useRef(null);

  const cases = [
    {
      title: "Toll Free Number",
      detail:
        "A toll-free number is a telephone number used by businesses. Customers can call businesses on this number without any call charges. Toll free numbers are also great to setup IVR and assigning incoming calls to team of agents.",
    },
    {
      title: "Short Codes",
      detail:
        "Number represents your brand, so why not make it recognizable? Short, sweet, and simple! Shortcodes are also used for feedback, surveys, voting and more.",
    },
    {
      title: "VMN",
      detail:
        "Virtual Mobile Number (VMN can be used for IVR as an alternative contact number. Virtual numbers are very effective in terms of high uptime easy to replace and manage.",
    },
    {
      title: "DID",
      detail:
        "DID (Direct Inward Dialing) is a virtual phone number that allows businesses to assign a unique number to each employee or department without the need for physical phone lines.",
    },
  ];

  // Repeat cases for seamless, infinite looping
  const repeatedCases = [...cases, ...cases, ...cases];

  return (
    <div className={styles["number-feature-section"]}>
      <div className={styles["number-feature-header"]}>
        <h2>Numbers to suit all use cases and locations</h2>
        <p>
          By being local, you can build stronger relationships with your customers
          or clients, as you share a community or region with them. This can help
          build trust, loyalty, and advocacy for your brand or service.
        </p>
      </div>

      <div className={styles["number-feature-all-cards"]}>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={24}
          slidesPerView={1.2}
          loop={true}
          speed={600}
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3.2,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 3.3,
              spaceBetween: 24,
            },
          }}
          modules={[Autoplay]}
          className={styles["usecases-swiper"]}
        >
          {repeatedCases.map((item, index) => (
            <SwiperSlide key={index} className={styles["usecase-slide"]}>
              <div
                className={styles["feature-card"]}
                onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
                onMouseLeave={() => swiperRef.current?.autoplay?.start()}
              >
                <h5>{item.title}</h5>
                <h6>{item.detail}</h6>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NumbersUseCases;
