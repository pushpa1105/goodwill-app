import { auth } from "@clerk/nextjs";
import { Chapter, Course, UserProgress } from "@prisma/client";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { CourseSidebarItem } from "./course-sidebar-item";
import { CourseProgress } from "@/components/course-progress";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { SidebarPageItem } from "./sidebar-page-item";

interface CourseSidebarProps {
  course: Course & {
    chapters: (Chapter & {
      userProgress: UserProgress[] | null;
    })[];
  };
  progressCount: number;
}

export const CourseSidebar = async ({
  course,
  progressCount,
}: CourseSidebarProps) => {
  const { userId } = auth();

  if (!userId) return redirect("/");

  const purchase = await db.purchase.findUnique({
    where: {
      userId_courseId: {
        userId,
        courseId: course.id,
      },
    },
  });

  const showProgressBar = course.isFree || purchase;
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto shadow-sm">
      <div className="p-8 flex flex-col border-b">
        <Link
          href={`/courses/${course.id}`}
          className="hover:text-blue-500 flex items-center mb-2"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back
        </Link>
        <h1 className="font-semibold">{course.title}</h1>
        {showProgressBar && (
          <div className="mt-10">
            <CourseProgress variant="success" value={progressCount} />
          </div>
        )}
      </div>
      <div className="flex flex-col w-full">
        {course.chapters.map((chapter) => (
          <CourseSidebarItem
            key={chapter.id}
            id={chapter.id}
            label={chapter.title}
            isCompleted={!!chapter.userProgress?.[0]?.isCompleted}
            courseId={course.id}
            isLocked={!course.isFree && !chapter.isFree && !purchase}
          />
        ))}
      </div>
      <Separator className="my-4" />
      <div className="flex flex-col w-full">
        <h1 className="w-full flex items-center pl-6 font-semibold text-xl">
          Pages
        </h1>
        <SidebarPageItem label="Account Opening" routeName="account-opening" />
        <SidebarPageItem label="Webinars" routeName="webinars" />
        <SidebarPageItem label="Blogs" routeName="blogs" />
      </div>
    </div>
  );
};
