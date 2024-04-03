import Link from "next/link";
import { Card } from "./card";
import { Button } from "@/components/ui/button";
import { Blog, BlogCategory } from "@prisma/client";

type BlogWithCategory = Blog & {
  category: BlogCategory | null;
};

interface BlogSectionProps {
  blogs: BlogWithCategory[];
}

export const BlogSection = ({ blogs }: BlogSectionProps) => {
  return (
    <section className="bg-white py-[45px] lg:py-[80px]">
      <div className="container ">
        <div className="text-center mb-[34px] lg:mb-[50px]">
          <div>
            <h2 className="elm-top-header">
              <span
                className="text-3xl lg:text-4xl font-extrabold"
                style={{ textTransform: "none" }}
              >
                Blogs
              </span>
            </h2>
          </div>
        </div>
        <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {blogs.length > 0 &&
            blogs.map((blog) => <Card key={blog.id} blog={blog} />)}
        </div>
        <div className="flex justify-center">
          <Link href="/blogs" className="" target="_blank">
            <Button
              size="lg"
              className="bg-btn-main text-[14px] lg:text-[16px] font-semibold hover:shadow-lg"
            >
              View All Blogs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
