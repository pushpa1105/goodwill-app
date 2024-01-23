import { db } from "@/lib/db";
import { generateSignature, getData } from "@/lib/zoom";
import { auth } from "@clerk/nextjs";
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const { meetingNumber, role } = await req.json();

    if (!userId) return new NextResponse("Unauthorized", { status: 401 });

    const signature = generateSignature(meetingNumber, role || 0);
    return NextResponse.json(signature);
  } catch (error) {
    console.log("[ZOOM]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
