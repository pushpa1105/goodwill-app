import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import { authMiddleware } from "@/app/(app)/api/_utils/middleware";


export async function DELETE(
  req: Request,
  { params }: { params: { speakerId: string } }
) {
  try {
    const response = await authMiddleware("admin");
    if (response.status !== 200) return response;

    const { speakerId } = params;

    const speaker = await db.speaker.findUnique({
      where: {
        id: speakerId,
      },
    });

    if (!speaker) {
      return new NextResponse("Speaker not found", { status: 404 });
    }

    const deletedSpeaker = await db.speaker.delete({
      where: {
        id: speakerId,
      },
    });

    return NextResponse.json(deletedSpeaker);
  } catch (error) {
    console.log("[SPEAKER_ID_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { speakerId: string } }
) {
  try {
    const response = await authMiddleware("admin");
    if (response.status !== 200) return response;

    const { speakerId } = params;
    const values = await req.json();

    const speaker = await db.speaker.update({
      where: {
        id: speakerId,
      },
      data: {
        ...values,
      },
    });

    return NextResponse.json(speaker);
  } catch (error) {
    console.log("[COURSE_ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
