import { NextResponse } from "next/server";

import { db } from "@/lib/db";

export async function PATCH(
  req: Request,
  { params }: { params: { blogId: string } }
) {
  try {
    const { blogId } = params;

    const blog = await db.blog.findUnique({
      where: {
        id: blogId,
      },
    });

    if (!blog) {
      return new NextResponse("BLog not found", { status: 404 });
    }

    const publishedBlog = await db.blog.update({
      where: {
        id: blogId,
      },
      data: {
        viewCount: { increment: 1 },
      },
    });

    return NextResponse.json(publishedBlog);
  } catch (error) {
    console.log("[BLOG_ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
