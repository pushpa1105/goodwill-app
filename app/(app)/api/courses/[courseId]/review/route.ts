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
    const { stars, reviewText } = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const course = await db.course.findUnique({
      where: {
        id: courseId,
      },
    });

    if (!course) {
      return new NextResponse("Course Not found", { status: 404 });
    }

    const review = await db.review.upsert({
      where: {
        userId_courseId: {
          userId,
          courseId,
        },
      },
      update: {
        stars,
        reviewText,
      },
      create: {
        userId,
        stars,
        courseId,
        reviewText,
      },
    });

    return NextResponse.json(review);
  } catch (error) {
    console.log("[COURSE_ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
