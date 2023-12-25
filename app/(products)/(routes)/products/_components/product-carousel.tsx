"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import Link from "next/link";
import { ProductCarouselCard } from "./product-carousel-card";

export const ProductsCarousel = () => {
  return (
    <div className="landing-box-shadow p-8">
      <div className="md:w-[95%] m-auto">
        <Swiper
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 5 },
            480: { slidesPerView: 2, spaceBetween: 5 },
            768: { slidesPerView: 2, spaceBetween: 5 },
            1440: { slidesPerView: 4, spaceBetween: 5 },
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide>
            <Link href="/courses">
              <ProductCarouselCard
                label="Free Webinars"
                imageUrl="/webinar.jpg"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <ProductCarouselCard
              label="Account Opening"
              imageUrl="/open-account.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/products">
              <ProductCarouselCard
                label="Latest Products"
                imageUrl="/latest-products.jpg"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/blogs">
              <ProductCarouselCard label="Blogs" imageUrl="/blogs.jpg" />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
