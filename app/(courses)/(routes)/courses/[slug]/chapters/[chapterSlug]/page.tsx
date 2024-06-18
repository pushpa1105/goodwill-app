import { getChapter } from "@/actions/get-chapter";
import { Banner } from "@/components/banner";
import { redirect } from "next/navigation";
import { VideoPlayer } from "./_components/video-player";
import { CourseEnrollButton } from "./_components/course-enroll-button";
import { Separator } from "@/components/ui/separator";
import { Preview } from "@/components/preview";
import { File } from "lucide-react";
import { CourseProgressButton } from "./_components/course-progress-button";
import { CourseReviewButton } from "./_components/course-review-button";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/(app)/api/auth/[...nextauth]/route";

const ChapterPage = async ({
  params,
}: {
  params: { slug: string; chapterSlug: string };
}) => {
  const { chapterSlug, slug } = params;
  const session = await getServerSession(authOptions)
  const userId = session?.user.id;

  const currentCourse = await db.course.findUnique({
    where: {
      slug: params.slug,
    },
  });

  if (!currentCourse || !userId) return redirect("/");

  const {
    chapter,
    course,
    muxData,
    attachments,
    nextChapter,
    userProgress,
    purchase,
  } = await getChapter({ userId, courseId: currentCourse.id, chapterSlug });

  if (!chapter || !course) redirect("/");

  const isLocked = !course.isFree && !chapter.isFree && !purchase;
  const completeOnEnd = (!!purchase || course.isFree) && !userProgress?.isCompleted;

  return (
    <div>
      {userProgress?.isCompleted && (
        <Banner
          variant="success"
          label="You have already completed this chapter"
        />
      )}
      {isLocked && (
        <Banner
          variant="warning"
          label="You need to purchase this chapter to watch this chapter."
        />
      )}
      <div className="flex flex-col max-w-4xl mx-auto pb-20">
        <div className="p-4">
          <VideoPlayer
            chapterId={chapter.id}
            title={chapter.title}
            courseId={course.id}
            slug={course.slug}
            nextChapterSlug={nextChapter?.chapterSlug}
            playbackId={muxData?.playbackId!}
            isLocked={isLocked}
            completeOnEnd={completeOnEnd}
          />
        </div>
        <div>
          <div className="p-4 flex flex-col md:flex-row items-center justify-between">
            <h2 className="text-2xl font-semibold mb-2">{chapter.title}</h2>
            <div>
              <CourseReviewButton courseId={course.id} />
              {purchase || course.isFree ? (
                <CourseProgressButton
                  chapterId={chapter.id}
                  courseId={course.id}
                  slug={course.slug}
                  nextChapterSlug={nextChapter?.chapterSlug}
                  isCompleted={!!userProgress?.isCompleted}
                />
              ) : (
                <CourseEnrollButton
                  courseId={course.id}
                  price={course.price!}
                />
              )}
            </div>
          </div>
          <Separator />
          <div className="px-8">
            <Preview value={chapter.summary!} />
          </div>
          {!!attachments.length && (
            <>
              <Separator />
              <div className="p-4">
                {attachments.map((attachment) => (
                  <a
                    href={attachment.url}
                    target="_blank"
                    key={attachment.id}
                    className="flex item-center p-3 w-full bg-sky-200 border text-sky-700 rounded-md hover:underline"
                  >
                    <File />
                    <p className="line-clamp-1">{attachment.name}</p>
                  </a>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChapterPage;
