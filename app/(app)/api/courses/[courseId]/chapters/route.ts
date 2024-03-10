import { db } from "@/lib/db";
import { generateSlug } from "@/lib/slug";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const { userId } = auth();
    const { courseId } = params;
    const { title } = await req.json();

    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    const courseCreator = await db.course.findUnique({
      where: {
        id: courseId,
        userId,
      },
    });

    if (!courseCreator)
      return new NextResponse("Unauthorized", { status: 401 });

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
