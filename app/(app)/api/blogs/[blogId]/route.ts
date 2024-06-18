import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import { isBlogAdmin } from "@/lib/admin";
import { generateSlug } from "@/lib/slug";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { authMiddleware } from "../../_utils/middleware";
import { getUser } from "../../_utils/get-user";

export async function DELETE(
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

    const deletedBlog = await db.blog.delete({
      where: {
        id: blogId,
      },
    });

    return NextResponse.json(deletedBlog);
  } catch (error) {
    console.log("[BLOG_ID_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { blogId: string } }
) {
  try {
    const response = await authMiddleware("blog");
    if (response.status !== 200) return response;

    const { blogId } = params;
    const values = await req.json();

    if (values?.title) {
      const checkTitle = await db.blog.findFirst({
        where: {
          title: values.title,
        },
      });

      if (checkTitle) {
        return new NextResponse("Blog with this title already exists", {
          status: 402,
        });
      }
      values["slug"] = generateSlug(values.title);
    }

    const blog = await db.blog.update({
      where: {
        id: blogId,
      },
      data: {
        ...values,
      },
    });

    return NextResponse.json(blog);
  } catch (error) {
    console.log("[COURSE_ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
