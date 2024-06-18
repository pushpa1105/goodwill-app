import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { authMiddleware } from "../_utils/middleware";

export async function POST(req: Request) {
  try {
    const response = await authMiddleware("admin");
    if (response.status !== 200) return response;

    const { values, collection } = await req.json();

    let category;
    if (collection === "Category") {
      category = await db.category.create({
        data: values,
      });
    } else {
      category = await db.blogCategory.create({
        data: values,
      });
    }

    return NextResponse.json(category);
  } catch (error) {
    console.log("[CATEGORY]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
