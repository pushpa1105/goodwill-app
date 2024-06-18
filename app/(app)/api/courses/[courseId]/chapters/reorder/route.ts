import { db } from "@/lib/db";
import { authMiddleware } from "@/app/(app)/api/_utils/middleware";
import { NextResponse } from "next/server";

export async function PUT(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const response = await authMiddleware("course");
    if (response.status !== 200) return response;

    const { courseId } = params;
    const { list } = await req.json();

    const course = await db.course.findUnique({
      where: {
        id: courseId,
      },
    });

    if (!course)
      return new NextResponse("Course not found", { status: 404 });

    for (let item of list) {
      await db.chapter.update({
        where: { id: item.id },
        data: { position: item.position },
      });
    }

    return NextResponse.json("Success", { status: 200 });
  } catch (error) {
    console.log("[CHAPTERS]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
