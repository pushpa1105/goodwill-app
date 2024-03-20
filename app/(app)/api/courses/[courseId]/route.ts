import Mux from "@mux/mux-node";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { isAdmin } from "@/lib/admin";
import { generateSlug } from "@/lib/slug";

const { Video } = new Mux(
  process.env.MUX_TOKEN_ID!,
  process.env.MUX_TOKEN_SECRET!
);

export async function DELETE(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const { userId } = auth();
    const { courseId } = params;

    const isAuthorized = await isAdmin();

    if (!userId || !isAuthorized) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const course = await db.course.findUnique({
      where: {
        id: courseId,
        userId,
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

    for (const chapter of course.chapters) {
      if (chapter.muxData?.assetId) {
        await Video.Assets.del(chapter.muxData.assetId);
      }
    }

    if (course.courseVideo?.assetId) {
      await Video.Assets.del(course.courseVideo.assetId);
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
    const { userId } = auth();
    const { courseId } = params;
    const values = await req.json();

    const isAuthorized = await isAdmin();

    if (!userId || !isAuthorized) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

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
        await Video.Assets.del(existingMuxData.assetId);
        await db.courseVideo.delete({
          where: {
            id: existingMuxData.id,
          },
        });
      }

      const asset = await Video.Assets.create({
        input: values.videoUrl,
        playback_policy: "public",
        test: false,
      });

      await db.courseVideo.create({
        data: {
          courseId,
          assetId: asset.id,
          playbackId: asset.playback_ids?.[0]?.id,
        },
      });
    }

    const course = await db.course.update({
      where: {
        id: courseId,
        userId,
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
