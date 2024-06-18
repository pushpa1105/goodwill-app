import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import { authMiddleware } from "@/app/(app)/api/_utils/middleware";

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const response = await authMiddleware("course");
    if (response.status !== 200) return response;

    const { courseId } = params;

    const course = await db.course.findUnique({
      where: {
        id: courseId,
      },
      include: {
        chapters: {
          include: {
            muxData: true,
          },
        },
      },
    });

    if (!course) {
      return new NextResponse("Course not found", { status: 404 });
    }

    const hasPublishedChapter = course?.chapters.some(
      (chapter) => chapter.isPublished
    );

    if (
      !course?.title ||
      !course.description ||
      !course.imageUrl ||
      !course.categoryId ||
      !hasPublishedChapter
    ) {
      return new NextResponse("Some required fields are missing.", {
        status: 400,
      });
    }

    const setCourseAsFree = !course.price;

    const publishedCourse = await db.course.update({
      where: {
        id: courseId,
      },
      data: {
        isPublished: true,
        isFree: setCourseAsFree,
      },
    });

    return NextResponse.json(publishedCourse);
  } catch (error) {
    console.log("[COURSE_ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
