import { db } from "@/lib/db";
import { generateSlug } from "@/lib/slug";
import { authMiddleware } from "@/app/(app)/api/_utils/middleware";
import { getUser } from "@/app/(app)/api/_utils/get-user";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const response = await authMiddleware("admin");
    if (response.status !== 200) return response;

    const { userId } = await getUser()
    const { title, description } = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", {
        status: 401,
      });
    }

    const checkTitle = await db.webinar.findFirst({
      where: {
        title,
      },
    });
    if (checkTitle) {
      return new NextResponse("Webinar with this title already exists", {
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
