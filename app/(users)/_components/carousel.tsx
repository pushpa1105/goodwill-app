"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import Link from "next/link";

import { CarouselCard } from "./carousel-card";

export const Carousel = () => {
  return (
    <div className="landing-box-shadow p-8">
      <Swiper
        // spaceBetween={5}
        // slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 5 },
          480: { slidesPerView: 2, spaceBetween: 5 },
          768: { slidesPerView: 3, spaceBetween: 5 },
          1024: { slidesPerView: 4, spaceBetween: 5 },
        }}
      >
        <SwiperSlide>
          <Link href="/courses">
            <CarouselCard label="Courses" imageUrl="/courses.jpg" />
            {/* <div className="rounded h-[200px] relative">
              <div className="snip1584">
                <Image
                  src="/courses.jpg"
                  alt="courses"
                  width={250}
                  height={200}
                  className="w-[100%] h-[100%]"
                />
                <div className="caption">
                  <h3>Courses</h3>
                  <h5>Learn about trading.</h5>
                </div>
              </div>
            </div> */}
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard label="Courses" imageUrl="/courses.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard label="Courses" imageUrl="/courses.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard label="Courses" imageUrl="/courses.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard label="Courses" imageUrl="/courses.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
