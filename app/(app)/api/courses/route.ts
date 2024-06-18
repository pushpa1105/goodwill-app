import { db } from "@/lib/db";
import { generateSlug } from "@/lib/slug";
import { NextResponse } from "next/server";
import { authMiddleware } from "@/app/(app)/api/_utils/middleware";
import { getUser } from "@/app/(app)/api/_utils/get-user";

export async function POST(req: Request) {
  try {
    const response = await authMiddleware("course");
    if (response.status !== 200) return response;

    const { userId } = await getUser();
    const { title } = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", {
        status: 401,
      });
    }

    const checkTitle = await db.course.findFirst({
      where: {
        title,
      },
    });
    if (checkTitle) {
      return new NextResponse("Course with this title already exists", {
        status: 402,
      });
    }

    const slug = generateSlug(title);

    const course = await db.course.create({
      data: {
        userId,
        title,
        slug,
      },
    });

    return NextResponse.json(course);
  } catch (error) {
    console.log("[COURSES]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
