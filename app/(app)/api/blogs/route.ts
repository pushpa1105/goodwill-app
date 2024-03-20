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
    const checkTitle = await db.blog.findFirst({
      where: {
        title,
      },
    });
    if (checkTitle) {
      return new NextResponse("Blog with this title already exists", {
        status: 402,
      });
    }
    const slug = generateSlug(title);
    const blog = await db.blog.create({
      data: {
        userId,
        title,
        description,
        slug,
      },
    });

    return NextResponse.json(blog);
  } catch (error) {
    console.log("[COURSES]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
