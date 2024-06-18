import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import { authMiddleware } from "@/app/(app)/api/_utils/middleware";

export async function PATCH(
  req: Request,
  { params }: { params: { blogId: string } }
) {
  try {
    const response = await authMiddleware("blog");
    if (response.status !== 200) return response;

    const { blogId } = params;

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
