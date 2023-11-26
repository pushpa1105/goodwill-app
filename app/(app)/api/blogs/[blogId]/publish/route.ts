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

    const blog = await db.blog.findUnique({
      where: {
        id: blogId,
      },
    });

    if (!blog) {
      return new NextResponse("Course not found", { status: 404 });
    }

    // const hasPublishedChapter = course?.chapters.some(
    //   (chapter) => chapter.isPublished
    // );

    // if (
    //   !course?.title ||
    //   !course.description ||
    //   !course.imageUrl ||
    //   !course.categoryId ||
    //   !hasPublishedChapter
    // ) {
    //   return new NextResponse("Some required fields are missing.", {
    //     status: 400,
    //   });
    // }

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
