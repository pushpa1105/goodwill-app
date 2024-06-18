import { db } from "@/lib/db";
import { authMiddleware } from "@/app/(app)/api/_utils/middleware";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const response = await authMiddleware("admin");
    if (response.status !== 200) return response;

    const values = await req.json();

    const speaker = await db.speaker.create({
      data: values,
    });

    return NextResponse.json(speaker);
  } catch (error) {
    console.log("[WEBINARS]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
