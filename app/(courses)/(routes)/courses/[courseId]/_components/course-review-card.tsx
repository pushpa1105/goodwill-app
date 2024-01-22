import { Rating } from "@/components/rating";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDate } from "@/lib/format";

export const CourseReviewCard = ({ review }: { review: any }) => {
  return (
    <div className="shadow-sm border rounded mb-4 p-4 mt-8">
      <div className="flex justify-between items-center pr-4 flex-wrap">
        <div className="flex items-center">
          <div>
            <Avatar>
              <AvatarImage src={review.user.imageUrl} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="ml-4">
            <div>
              {!["null null", null, undefined].includes(review.user.name)
                ? review.user.name
                : review.user.email || "Anonymous"}
            </div>
            <div>{formatDate(review.updatedAt)}</div>
          </div>
        </div>
        <div className="ml-14 lg:ml-auto">
          <Rating rate={review.stars} />
        </div>
      </div>
      <div className="ml-14 mt-6">{review.reviewText}</div>
    </div>
  );
};