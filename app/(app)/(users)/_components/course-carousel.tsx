"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import Link from "next/link";
import { LandingCarouselCard } from "./landing-carousel-card";
import { Category, Course } from "@prisma/client";
import { CourseCard } from "@/components/course-card";

type CourseWithCategory = Course & {
  category: Category | null;
  chapters: { id: string }[];
};

interface CourseCarouselProps {
  items: CourseWithCategory[];
}

export const CourseCarousel = ({ items }: CourseCarouselProps) => {
  return (
    <div className="landing-box-shadow p-8">
      <Swiper
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 5 },
          480: { slidesPerView: 2, spaceBetween: 5 },
          768: { slidesPerView: 3, spaceBetween: 5 },
          1024: { slidesPerView: 4, spaceBetween: 5 },
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <CourseCard
              slug={item.slug}
              title={item.title}
              imageUrl={item.imageUrl!}
              chaptersLength={item.chapters.length}
              price={item.price!}
              progress={null}
              category={item.category?.name!}
              isFree={item.isFree}
              description={item.description!}
            />
          </SwiperSlide>
        ))}
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <CourseCard
              slug={item.slug}
              title={item.title}
              imageUrl={item.imageUrl!}
              chaptersLength={item.chapters.length}
              price={item.price!}
              progress={null}
              category={item.category?.name!}
              isFree={item.isFree}
              description={item.description!}
            />
          </SwiperSlide>
        ))}
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <CourseCard
              slug={item.slug}
              title={item.title}
              imageUrl={item.imageUrl!}
              chaptersLength={item.chapters.length}
              price={item.price!}
              progress={null}
              category={item.category?.name!}
              isFree={item.isFree}
              description={item.description!}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
