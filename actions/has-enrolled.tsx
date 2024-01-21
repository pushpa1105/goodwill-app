import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";

export const hasEnrolled = async (courseId: string): Promise<boolean> => {
  try {
    const { userId } = auth();
    if (!userId) return false;

    const enroll = await db.courseEnrollment.findUnique({
      where: {
        userId_courseId: {
          userId,
          courseId,
        },
      },
    });

    if (enroll) return true;
    else return false;
  } catch (error) {
    console.log("[GET_USER_DATA]", error);
    return false;
  }
};
