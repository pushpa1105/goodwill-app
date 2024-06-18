import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { authMiddleware } from "@/app/(app)/api/_utils/middleware";
import { getUser } from "@/app/(app)/api/_utils/get-user";

export async function PUT(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const response = await authMiddleware("user");
    if (response.status !== 200) return response;

    const { userId } = await getUser();

    if (!userId) {
      return new NextResponse("Unauthorized", {
        status: 401,
      });
    }

    const values = await req.json();

    if (values?.phone) {
      const user = await db.user.update({
        where: {
          id: userId,
        },
        data: {
          phone: values.phone,
        },
      });
    }

    const user = await db.user.findUnique({ where: { id: userId } });

    if (!user?.phone) {
      return new NextResponse("User need to have phone number", {
        status: 400,
      });
    }

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
