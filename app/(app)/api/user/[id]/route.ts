import { db } from "@/lib/db";
import { authMiddleware } from "@/app/(app)/api/_utils/middleware";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const response = await authMiddleware("superAdmin");
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
        isAdmin: !userData?.isAdmin,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log("[USERS]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
