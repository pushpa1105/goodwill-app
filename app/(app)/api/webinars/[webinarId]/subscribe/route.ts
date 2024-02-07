import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import { isAdmin } from "@/lib/admin";
import { WebinarEnrollment } from "@prisma/client";

export async function PATCH(
  req: Request,
  { params }: { params: { webinarId: string } }
) {
  try {
    const { userId } = auth();
    const { webinarId } = params;
    const { name, email, phone } = await req.json();

    const webinar = await db.webinar.findUnique({
      where: {
        id: webinarId,
      },
    });

    if (!webinar) {
      return new NextResponse("Webinar not found", { status: 404 });
    }

    if (!name || !email || !phone) {
      return new NextResponse("Some required fields are missing.", {
        status: 400,
      });
    }

    let data = {
      name,
      phone,
      email,
      webinarId,
    } as WebinarEnrollment;

    let subscription;

    if (userId) {
      data["userId"] = userId;
      subscription = await db.webinarEnrollment.upsert({
        where: {
          userId_webinarId: {
            userId,
            webinarId,
          },
        },
        update: data,
        create: data,
      });
    } else {
      subscription = await db.webinarEnrollment.create({
        data,
      });
    }

    return NextResponse.json(subscription);
  } catch (error) {
    console.log("[WEBINAR_ID]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
