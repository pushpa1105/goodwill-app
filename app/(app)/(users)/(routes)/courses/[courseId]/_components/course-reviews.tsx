import { Rating } from "@/components/rating";
import { RatingIndex } from "@/components/rating-index";
import { CourseReviewCard } from "./course-review-card";
import { Review, User } from "@prisma/client";
import { Key } from "lucide-react";

export const CourseReviews = ({ reviewData }: { reviewData: any }) => {
  return (
    <div className="shadow-sm border rounded my-4 p-4 md:w-[49%]" id="reviews">
      <div>
        <h1 className="font-bold text-2xl mb-4">
          Reviews ({reviewData.reviews.length})
        </h1>
        <div className="flex">
          <div className="border rounded bg-sky-100 p-4 w-full lg:w-auto">
            <div className="flex justify-center items-center text-4xl font-black">
              {reviewData.average}
            </div>
            <div className="flex justify-center items-center">
              <Rating rate={Math.ceil(reviewData.average)} />
            </div>
            <div className="flex text-muted-foreground text-md mt-2 justify-center items-center">
              Course Rating
            </div>
          </div>
          <div className="w-[80%] hidden lg:block">
            <RatingIndex />
          </div>
        </div>
        <div>
          {reviewData.reviews.length > 0 &&
            reviewData.reviews.map((review: any, index: number) => (
              <div key={index}>
                <CourseReviewCard review={review} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
