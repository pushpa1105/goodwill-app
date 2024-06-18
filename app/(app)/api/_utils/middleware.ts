import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { isAdmin, isBlogAdmin, isUser } from "@/lib/admin";

type AccessType = "blog" | "admin" | "course" | "superAdmin" | "user";

const accessCheck = {
  blog: isBlogAdmin,
  admin: isAdmin,
  course: isBlogAdmin,
  superAdmin: isBlogAdmin,
  user: isUser,
};

export async function authMiddleware(
  adminAcess: AccessType,
  requireAuth = true
) {
  if (!requireAuth) return NextResponse.next();

  const session = await getServerSession(authOptions);
  const userId = session?.user.id;

  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const isAuthorized = accessCheck[adminAcess](session?.user);

  if (!isAuthorized) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  // If the user is authorized, proceed with the request
  return NextResponse.next();
}
