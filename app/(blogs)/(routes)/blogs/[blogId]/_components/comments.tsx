import { PostCommentForm } from "./post-comment";
import { CommentCard } from "./CommentCard";
import { Blog, Comment, User } from "@prisma/client";
import { auth, useAuth } from "@clerk/nextjs";
import Link from "next/link";

interface BlogCommentsProps {
  blog: Blog;
  comments: Comment &
    {
      user: User;
    }[];
}

export const BlogComments = ({ blog, comments }: BlogCommentsProps) => {
  const { userId } = auth();
  return (
    <div className="p-2 border rounded">
      <h1 className="text-3xl font-bold text-theme">Comments</h1>
      {userId ? (
        <PostCommentForm blogId={blog.id} />
      ) : (
        <div className="text-center text-muted-foreground text-md">
          <div>Login to post comment</div>
          <Link
            href="/sign-in"
            className="transition-all ease-in-out duration-150 text-theme hover:underline"
          >
            Login now
          </Link>
        </div>
      )}
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
