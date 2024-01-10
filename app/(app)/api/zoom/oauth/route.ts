import { db } from "@/lib/db";
import { getData } from "@/lib/zoom";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
) {
  try {
    const { userId } = auth();
    const { code } = await req.json();

    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    const zoomToken = await getData(code || null);
  
    return NextResponse.json(zoomToken);
  } catch (error) {
    console.log("[ZOOM]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
