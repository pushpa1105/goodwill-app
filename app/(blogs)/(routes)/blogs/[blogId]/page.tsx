import { Separator } from "@/components/ui/separator";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import { BlogComments } from "./_components/comments";
import { getBlogTOC } from "@/actions/get-blog-toc";
import { BlogPageComponent } from "./_components/blog-page";
import { Blog, BlogCategory, Comment } from "@prisma/client";
import { getComments } from "@/actions/get-comments";
import siteMetadata from "@/lib/site-meta-data";

export async function generateMetadata({
  params,
}: {
  params: { blogId: string };
}) {
  const blog = await db.blog.findUnique({
    where: {
      id: params.blogId,
    },
  });
  if (!blog) return;

  let imageList = [{ url: siteMetadata.socialBanner }];

  if (blog.imageUrl) {
    imageList.push({ url: blog.imageUrl });
  }

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: `${siteMetadata.siteUrl}blogs/${blog.id}`,
      siteName: siteMetadata.title,
      locale: "en_US",
      type: "article",
      publishedTime: new Date(blog.createdAt).toISOString(),
      modifiedTime: new Date(blog.updatedAt || blog.createdAt).toISOString(),
      // images: [
      //   {
      //     url: "https://nextjs.org/og.png",
      //     width: 800,
      //     height: 600,
      //   },
      //   {
      //     url: "https://nextjs.org/og-alt.png",
      //     width: 1800,
      //     height: 1600,
      //     alt: "My custom alt",
      //   },
      // ],
      images: imageList,
      author: [siteMetadata.author],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: imageList,
    },
  };
}

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
    <article>
      <BlogPageComponent
        blog={blog!}
        toc={toc}
        author={author!}
        comments={comments}
      />
    </article>
  );
};

export default BlogPage;
