import { authOptions } from "@/app/(app)/api/auth/[...nextauth]/route";
import { isBlogAdmin, isAdmin, isUser } from "@/lib/admin";
import { User } from "@prisma/client";
import { getServerSession } from "next-auth";

type AccessType = "blog" | "admin" | "course" | "superAdmin" | "user";
const accessCheck = {
  blog: isBlogAdmin,
  admin: isAdmin,
  course: isBlogAdmin,
  superAdmin: isBlogAdmin,
  user: isUser,
};

export const getUserForServer = async () => {
  const session = await getServerSession(authOptions);

  return session?.user;
};

export const checkAccess = (
  user: Partial<User | null>,
  acccessType: AccessType
) => {
  return accessCheck[acccessType](user);
};
