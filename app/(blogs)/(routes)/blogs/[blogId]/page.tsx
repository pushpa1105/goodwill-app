import { Separator } from "@/components/ui/separator";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import { BlogComments } from "./_components/comments";
import { getBlogTOC } from "@/actions/get-blog-toc";
import { BlogPageComponent } from "./_components/blog-page";
import { Blog } from "@prisma/client";

const BlogPage = async ({ params }: { params: { blogId: string } }) => {
  const blog = await db.blog.findUnique({
    where: {
      id: params.blogId,
    },
  });

  const author = await db.user.findFirst({
    where: {
      externalId: blog?.userId as string,
    },
  });

  console.log(author);

  console.log(blog);

  const toc = getBlogTOC(blog?.content);

  return <BlogPageComponent blog={blog!} toc={toc} author={author} />;
};

export default BlogPage;
