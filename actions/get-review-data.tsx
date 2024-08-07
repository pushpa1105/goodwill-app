import { db } from "@/lib/db";
import { Review } from "@prisma/client";

type GetReviewsData = {
  courseId?: string;
};
type ReviewsData = {
  average: number;
  reviews: Review[];
};

export const getReviews = async ({
  courseId,
}: GetReviewsData): Promise<ReviewsData> => {
  try {
    const reviews = await db.review.findMany({
      where: {
        courseId,
      },
      include: {
        user: {
          select: {
            name: true,
            email: true,
            image: true,
          },
        },
      },
    });
    const totalStars = reviews.reduce(
      (accumulator, review) => accumulator + (review.stars || 0),
      0
    );

    const average = totalStars / reviews.length || 0;

    return {
      average,
      reviews,
    };
  } catch (error) {
    console.log("[GET_COURSES]", error);
    return {
      average: 0,
      reviews: [],
    };
  }
};
