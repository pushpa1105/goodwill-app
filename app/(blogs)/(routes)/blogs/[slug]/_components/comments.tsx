import { PostCommentForm } from "./post-comment";
import { CommentCard } from "./CommentCard";
import { Blog, Comment, User } from "@prisma/client";
import { MessageSquare } from "lucide-react";
import { signIn, useSession } from "next-auth/react";

interface BlogCommentsProps {
  blog: Blog;
  comments: Comment &
    {
      user: User;
    }[];
}

export const BlogComments = ({ blog, comments }: BlogCommentsProps) => {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div className="p-2 border rounded">
      <h1 className="text-2xl md:text-3xl font-bold text-theme ml-8 flex items-center">
        <MessageSquare className="text-theme mr-2" />
        Comments
      </h1>
      {user ? (
        <PostCommentForm blogId={blog.id} />
      ) : (
        <div className="text-center text-muted-foreground text-md">
          <div>Login to post comment</div>
          <div
            onClick={() => signIn()}
            className="transition-all ease-in-out duration-150 text-theme cursor-pointer hover:underline"
          >
            Login now
          </div>
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
