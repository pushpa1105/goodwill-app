import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import { authMiddleware } from "@/app/(app)/api/_utils/middleware";

export async function DELETE(
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

    const deletedWebinar = await db.webinar.delete({
      where: {
        id: webinarId,
      },
    });

    return NextResponse.json(deletedWebinar);
  } catch (error) {
    console.log("[WEBINAR_ID_DELETE]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { webinarId: string } }
) {
  try {
    const response = await authMiddleware("admin");
    if (response.status !== 200) return response;

    const { webinarId } = params;
    const values = await req.json();

    const webinar = await db.webinar.update({
      where: {
        id: webinarId,
      },
      data: {
        ...values,
      },
    });

    return NextResponse.json(webinar);
  } catch (error) {
    console.log("[COURSE_ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
