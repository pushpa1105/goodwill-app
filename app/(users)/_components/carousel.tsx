"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import Link from "next/link";

export const Carousel = () => {
  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={4}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Link href="/courses">
        <div className="border rounded h-[150px]">
          <h1>Courses</h1>
        </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <div className="border rounded h-[150px]">
          <h1>Courses</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="border rounded h-[150px]">
          <h1>Courses</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div className="border rounded h-[150px]">
          <h1>Courses</h1>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
