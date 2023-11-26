"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface ItemCarouselProps {}

const categories = [
  "Entertainment",
  "Travel",
  "Technology",
  "Trading",
  "IT",
  "Health",
  "Economy",
];

const bgColors = [
  "bg-violet-100",
  "bg-rose-100",
  "bg-indigo-100",
  "bg-pink-100",
  "bg-purple-100",
  "bg-stone-100",
  "bg-yellow-100",
  "bg-fuchsia-100",
  "bg-blue-100",
  "bg-amber-100",
  "bg-lime-100",
  "bg-neutral-100",
  "bg-sky-100",
  "bg-cyan-100",
  "bg-teal-100",
  "bg-green-100",
  "bg-emerald-100",
  "bg-orange-100",
  "bg-zinc-100",
];

export const CategoriesCarousel = ({}) => {
  const swiperRef = useRef<SwiperType>();
  return (
    <div className="landing-box-shadow">
      <div className="m-auto flex">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="rounded border my-4 mr-2"
        >
          <ChevronLeft />
        </button>

        <Swiper
          loop={true}
          breakpoints={{
            320: { slidesPerView: 2 },
            480: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
            1440: { slidesPerView: 10 },
          }}
          modules={[Navigation, Scrollbar]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          scrollbar={true}
        >
          {categories.map((category, index) => (
            <SwiperSlide key={category}>
              {/* <Link href={`/blogs?category=${category}`} key={category}> */}
                <button
                  className={cn(
                    "py-4 px-5 text-xs font-medium border border-slate-200 rounded-2xl flex flex-wrap justify-center min-w-[10em] text-center flex items-center gap-x-1 hover:shadow-lg hover:bg-[#083996] hover:text-white transition mt-2",
                    bgColors[index <= 19 ? index : Math.floor(index / 2)]
                  )}
                  type="button"
                >
                  <div className="truncate text-center">{category}</div>
                </button>
              {/* </Link> */}
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="rounded border my-4"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
