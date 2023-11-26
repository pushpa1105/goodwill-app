import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PostCommentForm } from "./post-comment";
import { CommentCard } from "./CommentCard";
import { Blog, Comment, User } from "@prisma/client";

interface BlogCommentsProps {
  blog: Blog;
  comments: Comment &
    {
      user: User;
    }[];
}

export const BlogComments = ({ blog, comments }: BlogCommentsProps) => {
  console.log(comments);
  return (
    <div className="p-2 border rounded">
      <h1 className="text-3xl font-bold text-theme">Comments</h1>
      <PostCommentForm blogId={blog.id} />
      {comments.length > 0 ? (
        comments.map((comment, index) => (
          <CommentCard key={index} comment={comment as any} />
        ))
      ) : (
        <div className="flex text-center justify-center text-muted-foreground p-8">
          No any Comments
        </div>
      )}
    </div>
  );
};
