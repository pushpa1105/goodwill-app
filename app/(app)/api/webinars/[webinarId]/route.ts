import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { isAdmin } from "@/lib/admin";

export async function DELETE(
  req: Request,
  { params }: { params: { webinarId: string } }
) {
  try {
    const { userId } = auth();
    const { webinarId } = params;

    const isAuthorized = isAdmin(userId);

    if (!userId || !isAuthorized) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

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
    const { userId } = auth();
    const { webinarId } = params;
    const values = await req.json();

    const isAuthorized = isAdmin(userId);

    if (!userId || !isAuthorized) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

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
