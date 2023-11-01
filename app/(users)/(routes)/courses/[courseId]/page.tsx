import { getProgress } from "@/actions/get-progress";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { ChaptersList } from "./_components/chapters-list";
import { IconBadge } from "@/components/icon-badge";
import { BookOpen, BookOpenCheck } from "lucide-react";

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
      <div className="flex flex-wrap items-center justify-between p-2 bg-linear-landing rounded mb-4">
        <div className="h-full flex-1 flex-col space-y-8 p-2 md:p-8 md:flex">
          <div className="flex items-center justify-between space-y-2 flex-wrap">
            <div className="max-w-[85%]">
              <h2 className="text-xl lg:text-2xl font-bold tracking-tight text-white mb-4">
                {course.title}
              </h2>
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
                  <IconBadge size="sm" icon={BookOpenCheck} />
                  <span>2 Quizes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="w-full md:w-auto text-xl font-bold mb-2">Chapters</div> */}
      </div>
      <ChaptersList items={course.chapters} />
    </div>
  );
};

export default CoursePage;
