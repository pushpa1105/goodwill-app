import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import { generateSlug } from "@/lib/slug";
import { authMiddleware } from "@/app/(app)/api/_utils/middleware";

export async function DELETE(
  req: Request,
  { params }: { params: { courseId: string; chapterId: string } }
) {
  try {
    const response = await authMiddleware("course");
    if (response.status !== 200) return response;

    const { courseId, chapterId } = params;

    const course = await db.course.findUnique({
      where: {
        id: courseId,
      },
    });

    if (!course) {
      return new NextResponse("Course not found", { status: 404 });
    }

    const chapter = await db.chapter.findUnique({
      where: {
        id: chapterId,
        courseId,
      },
    });

    if (!chapter) {
      return new NextResponse("Chapter not found", { status: 404 });
    }

    if (chapter.videoUrl) {
      const existingMuxData = await db.muxData.findFirst({
        where: {
          chapterId,
        },
      });

      if (existingMuxData) {
        await db.muxData.delete({
          where: {
            id: existingMuxData.id,
          },
        });
      }
    }

    const deletedChapter = await db.chapter.delete({
      where: {
        id: chapterId,
      },
    });

    const publishedChapterInCourse = await db.chapter.findMany({
      where: {
        courseId,
        isPublished: true,
      },
    });

    if (!publishedChapterInCourse.length) {
      await db.course.update({
        where: {
          id: courseId,
        },
        data: {
          isPublished: false,
        },
      });
    }

    return NextResponse.json(deletedChapter);
  } catch (error) {
    console.log("[CHAPTER_ID_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string; chapterId: string } }
) {
  try {
    const response = await authMiddleware("course");
    if (response.status !== 200) return response;

    const { courseId, chapterId } = params;
    const { isPublished, ...values } = await req.json();

    const course = await db.course.findUnique({
      where: {
        id: courseId
      },
    });

    if (!course) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (values.title) {
      values["chapterSlug"] = `${generateSlug(
        values.title
      )}-${new Date().getTime()}`;
    }

    const chapter = await db.chapter.update({
      where: {
        id: chapterId,
        courseId,
      },
      data: {
        ...values,
      },
    });

    if (values.videoUrl) {
      const existingMuxData = await db.muxData.findFirst({
        where: {
          chapterId,
        },
      });

      if (existingMuxData) {
        await db.muxData.delete({
          where: {
            id: existingMuxData.id,
          },
        });
      }

      await db.muxData.create({
        data: {
          chapterId,
          assetId: values.videoUrl,
          playbackId: values.videoUrl,
        },
      });
    }

    return NextResponse.json(chapter);
  } catch (error) {
    console.log("[COURSE_ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
