import { isAdmin } from "@/lib/admin";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const values = await req.json();

    const isAuthorized = await isAdmin();

    if (!userId || !isAuthorized) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const speaker = await db.speaker.create({
      data: values,
    });

    return NextResponse.json(speaker);
  } catch (error) {
    console.log("[WEBINARS]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
