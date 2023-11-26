import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";

export async function POST(
  req: Request,
  { params }: { params: { blogId: string } }
) {
  try {
    const { userId } = auth();
    const { blogId } = params;
    const { message, parentCommentId } = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const blog = await db.blog.findUnique({
      where: {
        id: blogId,
      },
    });

    if (!blog) {
      return new NextResponse("Blog Not found", { status: 404 });
    }

    const data: any = {
      message,
      userId,
      blogId,
    };

    if (parentCommentId) data["parentId"] = parentCommentId;

    const comment = await db.comment.create({
      data,
    });

    return NextResponse.json(comment);
  } catch (error) {
    console.log("[BLOG_ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { blogId: string } }
) {
  try {
    const { userId } = auth();
    const { blogId } = params;
    const { message, commentId } = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const blog = await db.blog.findUnique({
      where: {
        id: blogId,
      },
    });

    if (!blog) {
      return new NextResponse("Blog Not found", { status: 404 });
    }

    const comment = await db.comment.findUnique({
      where: {
        id: commentId,
        userId,
      },
    });

    if (!comment) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const updatedComment = await db.comment.update({
      where: {
        id: commentId,
        userId,
      },
      data: {
        message,
      },
    });

    return NextResponse.json(updatedComment);
  } catch (error) {
    console.log("[BLOG_ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { blogId: string } }
) {
  try {
    const { userId } = auth();
    const { blogId } = params;
    const { message, commentId } = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const blog = await db.blog.findUnique({
      where: {
        id: blogId,
      },
    });

    if (!blog) {
      return new NextResponse("Blog Not found", { status: 404 });
    }

    const comment = await db.comment.findUnique({
      where: {
        id: commentId,
        userId,
      },
    });

    if (!comment) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const deletedComment = await db.comment.delete({
      where: {
        id: commentId,
        userId,
      },
    });

    return NextResponse.json(deletedComment);
  } catch (error) {
    console.log("[BLOG_ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
