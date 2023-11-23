import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";

export async function PATCH(
  req: Request,
  { params }: { params: { blogId: string } }
) {
  try {
    const { userId } = auth();
    const { blogId } = params;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const blogCreator = await db.blog.findUnique({
      where: {
        id: blogId,
        userId,
      },
    });

    if (!blogCreator) {
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
