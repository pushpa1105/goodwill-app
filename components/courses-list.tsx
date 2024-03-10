import { Blog, BlogCategory, Category, Course } from "@prisma/client";
import { CourseCard } from "./course-card";
import Link from "next/link";
import { MiniBlogCard } from "@/app/(blogs)/(routes)/blogs/_components/blog-mini-card";
import { MoveRight } from "lucide-react";

type CourseWithProgressWithCategory = Course & {
  category: Category | null;
  chapters: { id: string }[];
  progress: number | null;
};

interface CoursesListProps {
  items: CourseWithProgressWithCategory[];
  latestBlogs: Array<
    Blog & {
      category: BlogCategory;
    }
  >;
}

export const CoursesList = ({ items, latestBlogs }: CoursesListProps) => {
  return (
    <div className="flex flex-col lg:flex-row flex-col-reverse">
      <div className="w-full lg:w-[70%]">
        <div className="mt-4 p-2">
          {/* <div className="flex flex-wrap items-center gap-x-2 overflow-x-auto pb-2"> */}
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {items.map((item) => (
              <CourseCard
                key={item.id}
                slug={item.slug}
                title={item.title}
                imageUrl={item.imageUrl!}
                chaptersLength={item.chapters.length}
                price={item.price!}
                progress={item.progress}
                category={item.category?.name!}
                isFree={item.isFree}
                description={item.description!}
              />
            ))}
          </div>
          {items.length === 0 && (
            <div className="text-center text-sm text-muted-foreground mt-10">
              No courses found
            </div>
          )}
        </div>
      </div>
      {/* Popular blogs section */}
      <div className="px-8 mt-6 w-full lg:w-[29%] hidden lg:block">
        <div className="text-sm text-muted-foreground">Explore</div>
        <div className="text-2xl font-bold ">Lastest Blogs</div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1 gap-4">
          {latestBlogs.map((blog) => (
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

          <Link
            href="/blogs"
            className="transition-all duration-150 ease-in-out flex gap-x-2 ml-auto hover:text-theme  hover:underline "
          >
            Explore More <MoveRight />
          </Link>
        </div>
      </div>
      {/* Popular blogs section */}
    </div>
  );
};
