import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDate } from "@/lib/format";
import { Comment, User } from "@prisma/client";

interface CommentCardProps {
  comment: Comment & {
    user: User;
  };
}

export const CommentCard = ({ comment }: CommentCardProps) => {
  console.log(comment);
  return (
    <div className="shadow-sm border rounded mb-4 p-4 mt-8">
      <div className="flex justify-between items-center pr-4 flex-wrap">
        <div className="flex items-center">
          <div>
            <Avatar>
              <AvatarImage src={comment.user.imageUrl!} />
              <AvatarFallback className="bg-theme text-white">
                CN
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="ml-4">
            <div>
              {!["null null", null, undefined].includes(comment?.user?.name)
                ? comment?.user?.name
                : comment?.user?.email || "Anonymous"}
            </div>
            <div className="text-xs text-muted-foreground">
              {formatDate(comment.createdAt)}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">{comment.message}</div>
    </div>
  );
};
