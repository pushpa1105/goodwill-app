import Mux from "@mux/mux-node";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { isAdmin } from "@/lib/admin";
import { generateSlug } from "@/lib/slug";

const { Video } = new Mux(
  process.env.MUX_TOKEN_ID!,
  process.env.MUX_TOKEN_SECRET!
);

export async function DELETE(
  req: Request,
  { params }: { params: { blogId: string } }
) {
  try {
    const { userId } = auth();
    const { blogId } = params;

    const isAuthorized = await isAdmin();

    if (!userId || !isAuthorized) {
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
    const { userId } = auth();
    const { blogId } = params;
    const values = await req.json();

    const isAuthorized = await isAdmin();

    if (!userId || !isAuthorized) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

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
        userId,
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
