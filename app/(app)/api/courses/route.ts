import { isCourseAdmin } from "@/lib/admin";
import { db } from "@/lib/db";
import { generateSlug } from "@/lib/slug";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const { title } = await req.json();

    const isAuthorized = await isCourseAdmin();

    if (!userId || !isAuthorized) {
      return new NextResponse("Unauthorized", { status: 401 });
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
