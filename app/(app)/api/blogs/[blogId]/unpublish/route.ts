import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import { isBlogAdmin } from "@/lib/admin";

export async function PATCH(
  req: Request,
  { params }: { params: { blogId: string } }
) {
  try {
    const { userId } = auth();
    const { blogId } = params;

    const isAuthorized = await isBlogAdmin();

    if (!userId || !isAuthorized) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

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
