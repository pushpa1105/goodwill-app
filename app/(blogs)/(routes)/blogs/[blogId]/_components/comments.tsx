import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PostCommentForm } from "./post-comment";
import { CommentCard } from "./CommentCard";

export const BlogComments = () => {
  return (
    <div className="p-2 border rounded">
      <h1 className="text-3xl font-bold text-theme">Comments</h1>
      <PostCommentForm />
      <CommentCard />
      <CommentCard />
      <CommentCard />
      <CommentCard />
      <CommentCard />
    </div>
  );
};
