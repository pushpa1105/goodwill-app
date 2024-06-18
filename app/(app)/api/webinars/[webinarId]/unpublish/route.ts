import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import { authMiddleware } from "@/app/(app)/api/_utils/middleware";

export async function PATCH(
  req: Request,
  { params }: { params: { webinarId: string } }
) {
  try {
    const response = await authMiddleware("admin");
    if (response.status !== 200) return response;
    const { webinarId } = params;

    const webinar = await db.webinar.findUnique({
      where: {
        id: webinarId,
      },
    });

    if (!webinar) {
      return new NextResponse("Webinar not found", { status: 404 });
    }

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
