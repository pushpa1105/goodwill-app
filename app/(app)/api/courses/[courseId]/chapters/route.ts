import { db } from "@/lib/db";
import { generateSlug } from "@/lib/slug";
import { authMiddleware } from "@/app/(app)/api/_utils/middleware";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const response = await authMiddleware("course");
    if (response.status !== 200) return response;
    const { courseId } = params;
    const { title } = await req.json();

    const course = await db.course.findUnique({
      where: {
        id: courseId,
      },
    });

    if (!course)
      return new NextResponse("Course not found", { status: 404 });

    const lastChapter = await db.chapter.findFirst({
      where: {
        courseId,
      },
      orderBy: {
        position: "desc",
      },
    });

    const newPosition = lastChapter ? lastChapter.position + 1 : 1;

    const chapterSlug = `${generateSlug(title)}-${new Date().getTime()}`;

    const chapter = await db.chapter.create({
      data: {
        title,
        courseId,
        position: newPosition,
        chapterSlug,
      },
    });

    return NextResponse.json(chapter);
  } catch (error) {
    console.log("[CHAPTERS]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
