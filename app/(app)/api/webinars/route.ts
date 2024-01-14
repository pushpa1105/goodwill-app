import { isAdmin } from "@/lib/admin";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const { title, description } = await req.json();

    const isAuthorized = isAdmin(userId);

    if (!userId || !isAuthorized) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const webinar = await db.webinar.create({
      data: {
        userId,
        title,
        description,
      },
    });

    return NextResponse.json(webinar);
  } catch (error) {
    console.log("[WEBINARS]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
