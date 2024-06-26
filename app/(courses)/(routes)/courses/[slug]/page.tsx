import { getProgress } from "@/actions/get-progress";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { IconBadge } from "@/components/icon-badge";
import { BookOpen, UsersIcon } from "lucide-react";
import { getReviews } from "@/actions/get-review-data";
import { StarIcon } from "@/components/icons/star-icon";
import { getStudents } from "@/actions/get-students";
import { CourseContent } from "./_components/course-content";
import { CourseReviews } from "./_components/course-reviews";

import { hasEnrolled } from "@/actions/has-enrolled";
import { Footer } from "@/components/footer";
import { BackButton } from "@/components/back-button";
import { UpcomingWebinarBar } from "./_components/upcoming-webinars-list";
import { getUser } from "@/app/(app)/api/_utils/get-user";
import { NavBar } from "@/components/nav-items/navbar";

const CoursePage = async ({ params }: { params: { slug: string } }) => {
  const { userId } = await getUser();
  let user = null;
  const course = await db.course.findUnique({
    where: {
      slug: params.slug,
    },
    include: {
      chapters: {
        where: {
          isPublished: true,
        },
        orderBy: {
          position: "asc",
        },
      },
      courseVideo: true,
    },
  });

  if (userId) {
    user = await db.user.findUnique({
      where: {
        id: userId,
      },
    });
  }

  if (!course) redirect("/");

  const reviewData = await getReviews({ courseId: course.id });

  const progressCount = userId ? await getProgress(userId, course.id) : null;
  const enrollerCount = await getStudents(course.id);
  const enrolled = await hasEnrolled(course.id);

  const webinars = await db.webinar.findMany({
    where: {
      status: "upcoming",
      isPublished: true,
      OR: [
        {
          startAt: null,
        },
        {
          startAt: {
            gt: new Date(),
          },
        },
      ],
    },
    take: 3,
  });



  return (
    <div className="h-full">
      <div className="h-[80px] fixed inset-y-0 w-full z-50 ">
        <NavBar />
      </div>
      <main className="pt-[80px] h-full">
        <div className="p-6 w-full lg:w-[85%] m-auto">
          <BackButton path="/courses" />
          {webinars && webinars.length > 0 && (
            <UpcomingWebinarBar webinars={webinars} />
          )}
          <div className="flex flex-wrap items-center justify-between p-2 bg-linear-landing rounded mb-4">
            <div className="h-full flex-1 flex-col space-y-8 p-2 md:p-8 md:flex">
              <div className="flex items-center justify-between space-y-2 flex-wrap">
                <div className="max-w-[85%]">
                  <div className="flex items-center">
                    <div className="text-xl lg:text-2xl font-bold tracking-tight text-white mb-4 mr-2 mt-3">
                      {course.title}
                    </div>
                    <div className="flex items-center bg-orange-400 w-fit px-2 rounded">
                      <StarIcon />
                      <p className="ml-2 text-xl font-semibold text-[#8808e3]">
                        {reviewData.average}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm lg:text-md text-muted-foreground text-white">
                    {course.description}
                  </p>
                </div>
                <div className="flex lg:block items-center justify-around pt-4">
                  <div className="lg:mb-4  mr-4 lg:mr-0 flex items-center gap-x-2 text-sm md:text-md font-bold">
                    <div className="flex items-center gap-x-1 text-white">
                      <IconBadge size="sm" icon={BookOpen} />
                      <span>
                        {course.chapters.length}{" "}
                        {course.chapters.length === 1 ? "Chapter" : "Chapters"}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-2 text-sm md:text-md font-bold">
                    <div className="flex items-center gap-x-1 text-white">
                      <IconBadge size="sm" icon={UsersIcon} />
                      <span>{enrollerCount} Enrolled</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CourseContent
            course={course}
            enrollerCount={enrollerCount}
            enrolled={enrolled}
            user={user || null}
          />
          <CourseReviews reviewData={reviewData} />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default CoursePage;
