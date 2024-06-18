import { db } from "@/lib/db";
import { Category, Course } from "@prisma/client";
import { getProgress } from "./get-progress";
import { getUser } from "@/app/(app)/api/_utils/get-user";

type CourseWithProgressWithCategory = Course & {
  category: Category | null;
  chapters: { id: string }[];
  progress?: number | null;
};

type GetCourses = {
  title?: string;
  categoryId?: string;
};

export const getCourses = async ({
  title,
  categoryId,
}: GetCourses): Promise<CourseWithProgressWithCategory[]> => {
  try {
    const { userId } = await getUser();
    

    const query: any = {
      where: {
        isPublished: true,
        title: {
          contains: title,
        },
        categoryId,
      },
      include: {
        category: true,
        chapters: {
          where: {
            isPublished: true,
          },
          select: {
            id: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    };
    
    if (userId) {
      query.include['purchases'] = {
        where: {
          userId,
        },
      };
    }
    
    const courses = await db.course.findMany(query);
    

    const CourseWithProgress: CourseWithProgressWithCategory[] = userId ?
      await Promise.all(
        courses.map(async (course) => {
          if (course.purchases.length === 0) {
            return {
              ...course,
              progress: null,
            };
          }

          const progressPercentage = await getProgress(userId, course.id);

          return {
            ...course,
            progress: progressPercentage,
          };
        })
      ) : courses;
    return CourseWithProgress;
  } catch (error) {
    console.log("[GET_COURSES]", error);
    return [];
  }
};
