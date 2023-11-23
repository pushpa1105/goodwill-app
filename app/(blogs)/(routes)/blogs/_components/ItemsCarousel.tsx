"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MiniBlogCard } from "./blog-mini-card";

interface ItemCarouselProps {}

export const ItemCarousel = ({}) => {
  const swiperRef = useRef<SwiperType>();
  const test = [1, 2, 3, 4, 5];
  return (
    <div className="landing-box-shadow mt-4">
      <h1 className="text-2xl font-bold mb-2">Latest Blogs</h1>
      <div className="m-auto flex">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="rounded border my-4 mr-2 bg-theme text-white"
        >
          <ChevronLeft />
        </button>

        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 5 },
            768: { slidesPerView: 2, spaceBetween: 5 },
            1024: { slidesPerView: 3, spaceBetween: 5 },
          }}
          modules={[Navigation, Scrollbar, Autoplay]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          scrollbar={true}
        >
          {test.map((t) => (
            <SwiperSlide key={t} className="p-4">
              <MiniBlogCard />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="rounded border my-4 bg-theme text-white"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
