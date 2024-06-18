import { db } from "@/lib/db";
import { getBlogTOC } from "@/actions/get-blog-toc";
import { BlogPageComponent } from "./_components/blog-page";
import { Blog, BlogCategory } from "@prisma/client";
import { getComments } from "@/actions/get-comments";
import siteMetadata from "@/lib/site-meta-data";
import { getUser } from "@/app/(app)/api/_utils/get-user";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await db.blog.findUnique({
    where: {
      slug: params.slug,
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

const BlogPage = async ({ params }: { params: { slug: string } }) => {
  const { userId } = await getUser();

  let user = null;
  if (userId) {
    user = await db.user.findUnique({
      where: { id: userId },
    });
  }

  const blog = (await db.blog.findUnique({
    where: {
      slug: params.slug,
    },
    include: {
      category: true,
    },
  })) as Blog & { category: BlogCategory };

  if (!blog) return;

  const author = await db.user.findFirst({
    where: {
      id: blog?.userId as string,
    },
  });

  const toc = getBlogTOC(blog?.content);
  const comments = await getComments({ blogId: blog.id });

  return (
    <article>
      <BlogPageComponent
        blog={blog!}
        toc={toc}
        author={author!}
        comments={comments}
        user={user}
      />
    </article>
  );
};

export default BlogPage;
