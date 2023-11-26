import { Separator } from "@/components/ui/separator";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import { BlogComments } from "./_components/comments";
import { getBlogTOC } from "@/actions/get-blog-toc";
import { BlogPageComponent } from "./_components/blog-page";
import { Blog, BlogCategory, Comment } from "@prisma/client";
import { getComments } from "@/actions/get-comments";

const BlogPage = async ({ params }: { params: { blogId: string } }) => {
  const blog = (await db.blog.findUnique({
    where: {
      id: params.blogId,
    },
    include: {
      category: true,
    },
  })) as Blog & { category: BlogCategory };

  const author = await db.user.findFirst({
    where: {
      externalId: blog?.userId as string,
    },
  });

  // console.log(author);

  console.log(blog);

  const toc = getBlogTOC(blog?.content);
  const comments = await getComments({ blogId: params.blogId });

  return (
    <BlogPageComponent
      blog={blog!}
      toc={toc}
      author={author!}
      comments={comments}
    />
  );
};

export default BlogPage;
