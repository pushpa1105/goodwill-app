import { BlogCategories } from "@/app/(blogs)/(routes)/blogs/_components/categories";
import { BlogsList } from "./_components/blogs-list";
import { ItemCarousel } from "./_components/ItemsCarousel";
import { NavBar } from "@/components/nav-items/navbar";
import { getBlogs } from "@/actions/get-blogs";
import { Blog, BlogCategory } from "@prisma/client";
import { db } from "@/lib/db";
import { Footer } from "@/components/footer";

interface BlogPageProps {
  searchParams: {
    title: string;
    categoryId: string;
  };
}

const BlogsPage = async ({ searchParams }: BlogPageProps) => {
  const blogs = (await getBlogs({
    ...searchParams,
  })) as Array<
    Blog & {
      category: BlogCategory;
    }
  >;

  const latestBlogs = (await getBlogs({})) as Array<
    Blog & {
      category: BlogCategory;
    }
  >;

  const popularBlogs = (await db.blog.findMany({
    where: {
      isPublished: true,
    },
    include: {
      category: true,
    },
    orderBy: {
      viewCount: "desc", // Order by viewsCount in descending order
    },
    take: 5, // Take only the top 5 blogs
  })) as Array<
    Blog & {
      category: BlogCategory;
    }
  >;

  const categories = await db.blogCategory.findMany({});

  return (
    <>
      <div className="h-[80px] fixed inset-y-0 w-full z-50">
        <NavBar />
      </div>
      <main className="pt-[80px] h-full">
        <div>
          <div className="flex flex-col justify-center max-w-auto md:max-w-[85%] m-auto">
            <ItemCarousel blogs={latestBlogs} />
            <BlogCategories categories={categories} />
            <BlogsList blogs={blogs} popularBlogs={popularBlogs} />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default BlogsPage;
