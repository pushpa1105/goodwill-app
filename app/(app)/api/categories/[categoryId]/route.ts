import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { authMiddleware } from "../../_utils/middleware";

export async function PATCH(
  req: Request,
  { params }: { params: { categoryId: string } }
) {
  try {
    const response = await authMiddleware("admin");
    if (response.status !== 200) return response;
    
    const { categoryId } = params;
    const { values, collection } = await req.json();

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
    const response = await authMiddleware("admin");

    if (response.status !== 200) return response;

    const { categoryId } = params;
    const { collection } = await req.json();

    let category;
    if (collection === "Category") {
      const cat = await db.category.findUnique({
        where: {
          id: categoryId,
        },
      });
      if (!cat) {
        return new NextResponse("Category not found", {
          status: 404,
        });
      }
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
      const cat = await db.blogCategory.findUnique({
        where: {
          id: categoryId,
        },
      });
      if (!cat) {
        return new NextResponse("Category not found", {
          status: 404,
        });
      }
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
