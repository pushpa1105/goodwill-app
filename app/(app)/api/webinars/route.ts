import { isAdmin } from "@/lib/admin";
import { db } from "@/lib/db";
import { generateSlug } from "@/lib/slug";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const { title, description } = await req.json();

    const isAuthorized = await isAdmin();

    if (!userId || !isAuthorized) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const checkTitle = await db.webinar.findFirst({
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


    const webinar = await db.webinar.create({
      data: {
        userId,
        title,
        description,
        slug,
      },
    });

    return NextResponse.json(webinar);
  } catch (error) {
    console.log("[WEBINARS]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
