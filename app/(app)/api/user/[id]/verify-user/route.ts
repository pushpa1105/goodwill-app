import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { authMiddleware } from "@/app/(app)/api/_utils/middleware";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const response = await authMiddleware("admin");
    if (response.status !== 200) return response;
    const { id } = params;

    const userData = await db.user.findUnique({
      where: {
        id,
      },
    });

    const user = await db.user.update({
      where: {
        id,
      },
      data: {
        emailVerified: new Date(),
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log("[USERS]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
