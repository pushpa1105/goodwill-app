import { getProgress } from "@/actions/get-progress";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { CourseSidebar } from "../../_components/course-sidebar";
import React from "react";
import { CourseNavbar } from "../../_components/course-navbar";
import { Footer } from "@/components/footer";
import { getUser } from "@/app/(app)/api/_utils/get-user";

const CourseLayout = async ({
  params,
  children,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) => {
  const { userId } = await getUser();
  if (!userId) redirect("/");

  const course = await db.course.findUnique({
    where: {
      slug: params.slug,
    },
    include: {
      chapters: {
        where: {
          isPublished: true,
        },
        include: {
          userProgress: { where: { userId } },
        },
        orderBy: {
          position: "asc",
        },
      },
    },
  });

  if (!course) redirect("/");

  const progressCount = await getProgress(userId, course.id);

  return (
    <div className="h-full">
      <div className="h-[80px] md:pl-80 fixed inset-y-0 w-full z-50">
        <CourseNavbar course={course} progressCount={progressCount} />
      </div>
      <div className="hidden md:flex h-full w-80 flex-col fixed inset-y-0 z-50">
        <CourseSidebar course={course} progressCount={progressCount} />
      </div>
      <main className="md:pl-80 pt-[80px] h-full">
        <>
          {children}
          <Footer />
        </>
      </main>
    </div>
  );
};

export default CourseLayout;
