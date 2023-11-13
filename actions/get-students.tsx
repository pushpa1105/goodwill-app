import { db } from "@/lib/db";

export const getStudents = async (courseId: string): Promise<number> => {
  try {
    const enrollers = await db.userProgress.findMany({
      where: {
        courseId,
      },
    });

    const uniqueEnrollers = Array.from(
      new Set(enrollers.map((obj) => obj.userId))
    ).map((id) => enrollers.find((item) => item.userId === id));

    return uniqueEnrollers?.length || 0;
  } catch (error) {
    console.log("[GET_STUDENTS]", error);
    return 0;
  }
};
