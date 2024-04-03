import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import { getReviews } from "@/actions/get-review-data";

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

    const reviewData = await getReviews({ courseId });

    await db.course.update({
      where: {
        id: courseId,
      },
      data: {
        rating: reviewData.average || 0,
      },
    });

    return NextResponse.json(review);
  } catch (error) {
    console.log("[COURSE_ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
