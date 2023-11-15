import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const { userId } = auth();
    const { courseId } = params;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const courseCreator = await db.course.findUnique({
      where: {
        id: courseId,
        userId,
      },
    });

    if (!courseCreator) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const unpublishedCourse = await db.course.update({
      where: {
        id: courseId,
      },
      data: {
        isPublished: false,
      },
    });

    return NextResponse.json(unpublishedCourse);
  } catch (error) {
    console.log("[COURSE_ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
