import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import { generateSlug } from "@/lib/slug";
import { authMiddleware } from "@/app/(app)/api/_utils/middleware";

export async function DELETE(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const { courseId } = params;
    const response = await authMiddleware("course");
    if (response.status !== 200) return response;

    const course = await db.course.findUnique({
      where: {
        id: courseId,
      },
      include: {
        chapters: {
          include: { muxData: true },
        },
        courseVideo: true,
      },
    });

    if (!course) {
      return new NextResponse("Course not found", { status: 404 });
    }

    const deletedCourse = await db.course.delete({
      where: {
        id: courseId,
      },
    });

    return NextResponse.json(deletedCourse);
  } catch (error) {
    console.log("[COURSE_ID_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const response = await authMiddleware("course");
    if (response.status !== 200) return response;

    const { courseId } = params;
    const values = await req.json();

    if (values?.title) {
      const checkTitle = await db.course.findFirst({
        where: {
          title: values.title,
          id: {
            not: courseId,
          },
        },
      });

      if (checkTitle) {
        return new NextResponse("Course with this title already exists", {
          status: 402,
        });
      }
      values["slug"] = generateSlug(values.title);
    }

    if (values.videoUrl) {
      const existingMuxData = await db.courseVideo.findFirst({
        where: {
          courseId,
        },
      });

      if (existingMuxData) {
        await db.courseVideo.delete({
          where: {
            id: existingMuxData.id,
          },
        });
      }

      await db.courseVideo.create({
        data: {
          courseId,
          assetId: values.videoUrl,
          playbackId: values.videoUrl,
        },
      });
    }

    const course = await db.course.update({
      where: {
        id: courseId
      },
      data: {
        ...values,
      },
    });

    return NextResponse.json(course);
  } catch (error) {
    console.log("[COURSE_ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
