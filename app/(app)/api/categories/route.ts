import { isAdmin } from "@/lib/admin";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const { values, collection } = await req.json();

    const isAuthorized = await isAdmin();
    console.log('---------------------------', isAuthorized);

    if (!userId || !isAuthorized) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

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
