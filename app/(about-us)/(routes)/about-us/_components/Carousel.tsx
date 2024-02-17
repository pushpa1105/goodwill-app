/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";

import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";

export const AboutCarousel = () => {
  return (
    <div className="container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          //   scale: 1,
          //   slideShadows: true,
        }}
        // coverflowEffect={{
        //     rotate: 5,
        //     stretch: 5,
        //     depth: 150,
        //     modifier: 2,
        //     slideShadows: true
        //   }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        // navigation={{
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src="/open-account.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/open-account.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/open-account.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/open-account.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/open-account.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/open-account.jpg" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/open-account.jpg" alt="slide_image" />
        </SwiperSlide>

        {/* <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ArrowBigLeft />
          </div>
          <div className="swiper-button-next slider-arrow">
            <ArrowBigRight />
          </div>
          <div className="swiper-pagination"></div>
        </div> */}
      </Swiper>
    </div>
  );
};
