import { db } from "@/lib/db";
import { authMiddleware } from "@/app/(app)/api/_utils/middleware";
import { NextResponse } from "next/server";
import { getUser } from "@/app/(app)/api/_utils/get-user";

export async function PUT(
  req: Request,
  { params }: { params: { courseId: string; chapterId: string } }
) {
  try {
    const response = await authMiddleware("user");
    if (response.status !== 200) return response;
    const { isCompleted } = await req.json();

    const { userId } = await getUser();

    if (!userId) {
      return new NextResponse("Unauthorized", {
        status: 401,
      });
    }

    const userProgress = await db.userProgress.upsert({
      where: {
        userId_chapterId: {
          userId,
          chapterId: params.chapterId,
        },
      },
      update: {
        isCompleted,
      },
      create: {
        userId,
        chapterId: params.chapterId,
        courseId: params.courseId,
        isCompleted,
      },
    });

    return NextResponse.json(userProgress);
  } catch (error) {
    console.log("[CHAPTER_ID_PROGRESS]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
