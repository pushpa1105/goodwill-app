import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import { isAdmin } from "@/lib/admin";

export async function PATCH(
  req: Request,
  { params }: { params: { webinarId: string } }
) {
  try {
    const { userId } = auth();
    const { webinarId } = params;

    const isAuthorized = await isAdmin();


    if (!userId || !isAuthorized) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const webinar = await db.webinar.findUnique({
      where: {
        id: webinarId,
      },
    });

    const unpublishedWebinar = await db.webinar.update({
      where: {
        id: webinarId,
      },
      data: {
        isPublished: false,
      },
    });

    return NextResponse.json(unpublishedWebinar);
  } catch (error) {
    console.log("[WEBINAR_ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
