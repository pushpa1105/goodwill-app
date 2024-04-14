import React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { LandingCarousel } from "../_components/landing-carousel";
import { db } from "@/lib/db";
import { CourseCarousel } from "../_components/course-carousel";
import Link from "next/link";
import { CourseSection } from "./_components/course-section";
import { WebinarSection } from "./_components/webinar-section";
import { BlogSection } from "./_components/blog-section";

const LandingPage = async () => {
  const courses = await db.course.findMany({
    where: {
      isPublished: true,
    },
    orderBy: {
      rating: "desc",
    },
    include: {
      category: true,
    },
    take: 3,
  });

  const webinars = await db.webinar.findMany({
    where: {
      isPublished: true,
    },
    include: {
      speaker: true,
    },
    take: 4,
  });

  const blogs = await db.blog.findMany({
    where: {
      isPublished: true,
    },
    include: {
      category: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 8,
  });

  return (
    <>
      <div
        className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto bg-landing pb-16"
        id="about"
      >
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
                src="/main-wall.png"
                alt="VPN Illustrasi"
                quality={100}
                width={612}
                height={383}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>

      <CourseSection courses={courses || []} />
      <WebinarSection webinars={webinars || []} />
      <BlogSection blogs={blogs || []} />
    </>
  );
};

export default LandingPage;
