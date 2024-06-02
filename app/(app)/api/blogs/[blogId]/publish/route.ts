import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import { isBlogAdmin } from "@/lib/admin";

export async function PATCH(
  req: Request,
  { params }: { params: { blogId: string } }
) {
  try {
    const { blogId } = params;
    const isAuthorized = await isBlogAdmin();

    if (!isAuthorized) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const blog = await db.blog.findUnique({
      where: {
        id: blogId,
      },
    });

    if (!blog) {
      return new NextResponse("Blog not found", { status: 404 });
    }

    const publishedBlog = await db.blog.update({
      where: {
        id: blogId,
      },
      data: {
        isPublished: true,
      },
    });

    return NextResponse.json(publishedBlog);
  } catch (error) {
    console.log("[BLOG_ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
