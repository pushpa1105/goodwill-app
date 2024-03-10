import { BlogCard } from "@/components/blog-card";
import { MiniBlogCard } from "./blog-mini-card";
import { Blog, BlogCategory } from "@prisma/client";
import Link from "next/link";
interface BlogsListProps {
  blogs: Array<
    Blog & {
      category: BlogCategory;
    }
  >;
  popularBlogs: Array<
    Blog & {
      category: BlogCategory;
    }
  >;
}

export const BlogsList = ({ blogs, popularBlogs }: BlogsListProps) => {
  return (
    <div className="flex flex-col lg:flex-row flex-col-reverse">
      <div className="w-full lg:w-[70%]">
        <div className="mt-4 p-2">
          <h1 className="text-2xl font-bold mb-8">Blogs</h1>
          {/* <div className="flex flex-wrap items-center gap-x-2 overflow-x-auto pb-2"> */}
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {blogs &&
              blogs.map((blog, index) => (
                <BlogCard
                  key={index}
                  title={blog.title}
                  id={blog.id}
                  slug={blog.slug}
                  imageUrl={blog.imageUrl!}
                  readTime={blog.readTime!}
                  category={blog.category.name}
                  description={blog.description!}
                  createdAt={blog.createdAt}
                  updatedAt={blog.updatedAt}
                />
              ))}
          </div>
        </div>
      </div>
      {/* Popular blogs section */}
      <div className="px-8 mt-6 w-full lg:w-[29%]">
        <div className="text-xs text-muted-foreground">Whats hot</div>
        <div className="text-2xl font-bold ">Most Popular</div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1 gap-4">
          {popularBlogs.map((blog) => (
            <Link key={blog.id} href={`/blogs/${blog.slug}`}>
              <MiniBlogCard
                key={blog.id}
                imageUrl={blog.imageUrl!}
                title={blog.title}
                description={blog.description!}
                readTime={blog.readTime!}
                createdAt={blog.createdAt}
                category={blog.category.name}
              />
            </Link>
          ))}
        </div>
      </div>
      {/* Popular blogs section */}
    </div>
  );
};
