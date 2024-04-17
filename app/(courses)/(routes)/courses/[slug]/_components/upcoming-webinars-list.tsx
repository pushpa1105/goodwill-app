"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import { useRef } from "react";
import { Webinar } from "@prisma/client";
import Link from "next/link";
import { WebinarCard } from "./webinar-card";

interface ItemCarouselProps {
  webinars: Webinar[];
}

export const UpcomingWebinarBar = ({ webinars }: ItemCarouselProps) => {
  const swiperRef = useRef<SwiperType>();
  const computedLists =
    webinars.length === 1
      ? [...webinars, webinars[0], webinars[0]]
      : webinars.length === 2
      ? [...webinars, webinars[1]]
      : webinars;
  return (
    <div className="border rounded mb-[10px] webinar_box_wrapper">
      <h2 className="text-lg text-theme font-bold text-center mt-[5px]">
        Upcoming Webinars
      </h2>
      <div className="m-auto flex">
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
          {computedLists.map((webinar) => (
            <SwiperSlide key={webinar.id} className="p-2">
              <Link href={`/webinars/${webinar.slug}`} target="blank">
                <WebinarCard imageUrl={webinar.imageUrl!} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
