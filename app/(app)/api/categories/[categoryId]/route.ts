import { isAdmin } from "@/lib/admin";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { categoryId: string } }
) {
  try {
    const { userId } = auth();
    const { categoryId } = params;
    const { values, collection } = await req.json();

    const isAuthorized = isAdmin(userId);

    if (!userId || !isAuthorized) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    let category;
    if (collection === "Category") {
      category = await db.category.update({
        where: {
          id: categoryId,
        },
        data: values,
      });
    } else {
      category = await db.blogCategory.update({
        where: {
          id: categoryId,
        },
        data: values,
      });
    }

    return NextResponse.json(category);
  } catch (error) {
    console.log("[CATEGORY]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { categoryId: string } }
) {
  try {
    const { userId } = auth();
    const { categoryId } = params;
    const { collection } = await req.json();

    const isAuthorized = isAdmin(userId);

    if (!userId || !isAuthorized) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    let category;
    if (collection === "Category") {
      const hasCourse = await db.course.findMany({
        where: {
          categoryId,
        },
      });
      if (hasCourse && hasCourse.length > 0) {
        return new NextResponse("Category has course attached to it", {
          status: 404,
        });
      }
      category = await db.category.delete({
        where: {
          id: categoryId,
        },
      });
    } else {
      const hasBlog = await db.blog.findMany({
        where: {
          categoryId,
        },
      });
      if (hasBlog && hasBlog.length > 0) {
        return new NextResponse("Category has blog attached to it", {
          status: 404,
        });
      }
      category = await db.blogCategory.delete({
        where: {
          id: categoryId,
        },
      });
    }

    return NextResponse.json(category);
  } catch (error) {
    console.log("[CATEGORY]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
