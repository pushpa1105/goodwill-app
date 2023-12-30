"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import Link from "next/link";
import { ProductCarouselCard } from "./product-carousel-card";
import { MoveLeft, MoveRight } from "lucide-react";
import { useRef } from "react";
import { ProductData } from "@prisma/client";

export const ProductsCarousel = ({ products }: { products: ProductData[] }) => {
  const swiperRef = useRef<SwiperType>();
  return (
    <div className="landing-box-shadow p-8">
      <div className="md:w-[95%] m-auto">
        <Swiper
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 5 },
            480: { slidesPerView: 2, spaceBetween: 5 },
            768: { slidesPerView: 2, spaceBetween: 5 },
            1440: { slidesPerView: 4, spaceBetween: 5 },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {products &&
            products.map((product) => (
              <SwiperSlide key={product.id}>
                <Link href={product.redirectLink || '/'}>
                  <ProductCarouselCard
                    label={product.title}
                    imageUrl={product.imageUrl}
                  />
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="flex justify-center">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="rounded-full mt-4 bg-gradient-to-r from-custompurlple to-custompurlplelight shadow-lg text-xl font-bold mr-4 w-[50px] h-[50px] flex justify-center items-center"
          >
            <MoveLeft />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="rounded-full mt-4 bg-gradient-to-r from-custompurlple to-custompurlplelight shadow-lg text-xl font-bold w-[50px] h-[50px] flex justify-center items-center"
          >
            <MoveRight />
          </button>
        </div>
      </div>
    </div>
  );
};
