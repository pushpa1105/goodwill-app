import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PUT(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    const courseEnrollment = await db.courseEnrollment.upsert({
      where: {
        userId_courseId: {
          userId,
          courseId: params.courseId,
        },
      },
      update: {
        isActive: true,
      },
      create: {
        userId,
        courseId: params.courseId,
        isActive: true,
      },
    });

    return NextResponse.json(courseEnrollment);
  } catch (error) {
    console.log("[COURSE_ID_ENROLLMENT]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
