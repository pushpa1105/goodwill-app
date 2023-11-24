import { BlogCategories } from "@/app/(blogs)/(routes)/blogs/_components/categories";
import { BlogsList } from "./_components/blogs-list";
import { ItemCarousel } from "./_components/ItemsCarousel";
import { NavBar } from "../../_components/navbar";
import { getBlogs } from "@/actions/get-blogs";

const BlogsPage = async () => {
  const blogs = await getBlogs({
    // userId,
    // ...searchParams,
  });
  console.log(blogs);
  return (
    <>
      <div className="h-[80px] fixed inset-y-0 w-full z-50">
        <NavBar />
      </div>
      <main className="pt-[80px] h-full">
        <div>
          <div className="flex flex-col justify-center max-w-auto md:max-w-[85%] m-auto">
            <ItemCarousel blogs={blogs}/>
            <BlogCategories />
            <BlogsList blogs={blogs}/>
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogsPage;
