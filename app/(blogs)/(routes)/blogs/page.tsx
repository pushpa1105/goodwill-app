import { BlogCategories } from "@/app/(blogs)/(routes)/blogs/_components/categories";

const BlogsPage = () => {
  return (
    <div className="flex flex-wrap justify-center max-w-auto md:max-w-[70%] m-auto">
      <BlogCategories />
    </div>
  );
};

export default BlogsPage;
