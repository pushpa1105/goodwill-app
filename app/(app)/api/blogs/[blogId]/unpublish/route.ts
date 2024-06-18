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

    const unpublishedBlog = await db.blog.update({
      where: {
        id: blogId,
      },
      data: {
        isPublished: false,
      },
    });

    return NextResponse.json(unpublishedBlog);
  } catch (error) {
    console.log("[COURSE_ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
