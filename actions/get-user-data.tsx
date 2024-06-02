import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { User } from "@prisma/client";

export const GetUserData = async (): Promise<User | null> => {
  try {
    const authData = auth();
    if (!authData || !authData?.userId) return null;
    const userId = authData?.userId;
    const user = await db.user.findFirst({
      where: {
        externalId: userId as string,
      },
    });
    return user;
  } catch (error) {
    console.log("[GET_USER_DATA]", error);
    return null;
  }
};
