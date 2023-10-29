import { getProgress } from "@/actions/get-progress";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { CourseSidebar } from "./_components/course-sidebar";
import { ChaptersList } from "./_components/chapters-list";

const CoursePage = async ({ params }: { params: { courseId: string } }) => {
  const { userId } = auth();
  if (!userId) redirect("/");

  const course = await db.course.findUnique({
    where: {
      id: params.courseId,
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
    },
  });

  if (!course) redirect("/");

  const progressCount = await getProgress(userId, course.id);

  return (
    <div className="p-6 w-full lg:w-[85%] m-auto">
      <div className="flex flex-wrap items-center justify-between p-2">
        <div className="w-full md:w-auto text-xl font-bold mb-2">
          Chapters
        </div>
      </div>
      <ChaptersList items={course.chapters} />
    </div>
  );
};

export default CoursePage;
