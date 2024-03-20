import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { isAdmin } from "@/lib/admin";

export async function DELETE(
  req: Request,
  { params }: { params: { speakerId: string } }
) {
  try {
    const { userId } = auth();
    const { speakerId } = params;

    const isAuthorized = await isAdmin();

    if (!userId || !isAuthorized) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

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
    const { userId } = auth();
    const { speakerId } = params;
    const values = await req.json();

    const isAuthorized = await isAdmin();

    if (!userId || !isAuthorized) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

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
