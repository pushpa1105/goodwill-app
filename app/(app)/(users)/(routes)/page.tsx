import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { LandingCarousel } from "../_components/landing-carousel";
import { db } from "@/lib/db";
import { CourseCarousel } from "../_components/course-carousel";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Link from "next/link";
import { LandingPageComponent } from "./_components/landing-page";

const LandingPage = async () => {
  // const { userId } = auth();
  // if (!userId) redirect("/");
  // await db.blog.deleteMany({});
  const courses = await db.course.findMany({
    where: {
      isPublished: true,
    },
    include: {
      category: true,
      chapters: {
        where: {
          isPublished: true,
        },
        select: {
          id: true,
        },
      },
    },
    take: 8,
  });
  return (
    <>
      <div
        className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto bg-landing pb-16"
        id="about"
      >
        <LandingPageComponent />
        <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 pb-6 sm:pb-16">
          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-white leading-normal">
              Unlock your
            </h1>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-white leading-normal lg:mt-4">
              trading potential
            </h1>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-normal lg:mt-4">
              with free courses
            </h1>
            <Link href="/courses">
              <Button
                size="lg"
                className="rounded-full mt-4 bg-gradient-to-r from-custompurlple to-custompurlplelight shadow-lg text-xl font-bold"
              >
                Watch Now
              </Button>
            </Link>
          </div>
          <div className="flex w-full">
            <div className="h-full w-full">
              <Image
                src="https://next-landing-vpn.vercel.app/_next/image?url=%2Fassets%2FIllustration1.png&w=1920&q=100"
                alt="VPN Illustrasi"
                quality={100}
                width={612}
                height={383}
                layout="responsive"
              />
            </div>
          </div>
        </div>
        <div className="relative w-full pb-8">
          {/* <div className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10"> */}
          {/* <h1>TODO: CAROUSEL HERE!!!</h1> */}
          <div className="w-full m-auto flex items-center justify-center mb-4 text-white text-2xl font-bold">
            Explore More
          </div>
          <LandingCarousel />
          {/* </div> */}
          <div
            className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
            style={{ filter: "blur(114px)" }}
          ></div>
        </div>
      </div>
      <div className="bg-white mt-6 px-2 md:p-16">
        <div className="w-full m-auto flex items-center justify-center mb-16 text-black text-2xl font-bold">
          Top Free Courses
        </div>
        <CourseCarousel items={courses || []} />
      </div>
      <div className="p-16 bg-linear-landing">
        <div className="w-full m-auto flex items-center justify-center mb-16 text-black text-2xl font-bold">
          Upcoming Webinars
        </div>
        TODO: webinars
        {/* <LandingCarousel /> */}
      </div>
    </>
  );
};

export default LandingPage;
