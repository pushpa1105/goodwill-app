import { isSuperAdmin } from "@/lib/admin";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = auth();
    const { id } = params;

    if (!(await isSuperAdmin())) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const userData = await db.user.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    const user = await db.user.update({
      where: {
        id: parseInt(id),
      },
      data: {
        isCourseAdmin: !userData?.isCourseAdmin,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log("[USERS]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
