import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";

export const GetUserData = async (): Promise<{ lang: string | null }> => {
  try {
    const { userId } = auth();
    const user = await db.user.findFirst({
      where: {
        externalId: userId as string,
      },
    });
    return {
      lang: user?.lang || null,
    };
  } catch (error) {
    console.log("[GET_USER_DATA]", error);
    return {
      lang: null,
    };
  }
};
