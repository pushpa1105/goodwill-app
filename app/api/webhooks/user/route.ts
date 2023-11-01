import { db } from "@/lib/db";
import { IncomingHttpHeaders } from "http";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { Webhook, WebhookRequiredHeaders } from "svix";

type EventType = "user.created" | "user.updated" | "user.deleted";
type Event = {
  data: any;
  object: "event";
  type: EventType;
};

const webhookSecret = process.env.CLERK_WEBHOOK_SECRET || "";

async function handler(req: Request) {
  const payload = await req.json();
  const headersList = headers();
  const heads = {
    "svix-id": headersList.get("svix-id"),
    "svix-timestamp": headersList.get("svix-timestamp"),
    "svix-signature": headersList.get("svix-signature"),
  };

  const wh = new Webhook(webhookSecret);
  let evt: Event | null = null;

  try {
    evt = wh.verify(
      JSON.stringify(payload),
      heads as IncomingHttpHeaders & WebhookRequiredHeaders
    ) as Event;

    const eventType: EventType = evt.type;

    if (eventType === "user.created") {
      const { id, ...attributes } = evt.data;

      const externalId = id as string;
      const user = await db.user.findFirst({
        where: {
          externalId,
        },
      });

      if (user) {
        await db.user.updateMany({
          where: {
            externalId,
          },
          data: {
            attributes,
          },
        });
      } else {
        await db.user.create({
          data: {
            externalId,
            attributes,
          },
        });
      }
    }

    if (eventType === "user.updated") {
      const { id, ...attributes } = evt.data;

      const externalId = id as string;
      await db.user.updateMany({
        where: {
          externalId,
        },
        data: {
          attributes,
        },
      });
    }
    // return NextResponse.json()
  } catch (error) {
    console.log("[CLERK_WEBHOOK_ID]", error);
    return new NextResponse("Internal Error", { status: 401 });
  }
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
