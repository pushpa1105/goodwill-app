import {
  CircleDollarSign,
  Eye,
  File,
  LayoutDashboard,
  ListChecks,
} from "lucide-react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

import { db } from "@/lib/db";
import { IconBadge } from "@/components/icon-badge";

import { TitleForm } from "./_components/title-form";
import { DescriptionForm } from "./_components/description-form";
import { CategoryForm } from "./_components/category-form";
import { Banner } from "@/components/banner";
import { Actions } from "./_components/actions";
import { BlogContentForm } from "./_components/blog-content-form";

const CourseIdPage = async ({ params }: { params: { blogId: string } }) => {
  const blog = await db.blog.findUnique({
    where: {
      id: params.blogId,
    },
  });

  const categories = await db.blogCategory.findMany({
    orderBy: { name: "asc" },
  });

  if (!blog) {
    // toast.error("Course not found.");
    return redirect("/");
  }

  const requiredFields = [blog.title, blog.description, blog.categoryId];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;
  const completionText = `(${completedFields}/${totalFields})`;

  const isComplete = requiredFields.every(Boolean);

  return (
    <>
      {!blog.isPublished && (
        <Banner
          variant="warning"
          label="This blog is not published yet. User won't be able to acccess it."
        />
      )}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-2xl font-medium">Blog Setup</h1>
            <span className="text-sm text-slate-700">
              Complete all fields {completionText}
            </span>
          </div>
          <Actions
            disabled={!isComplete}
            blogId={params.blogId}
            isPublished={blog.isPublished}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={LayoutDashboard} />
              <h2 className="text-xl">Customize your blog</h2>
            </div>
            <TitleForm initialData={blog} blogId={params.blogId} />
            <CategoryForm
              initialData={blog}
              blogId={params.blogId}
              options={categories.map((category) => ({
                label: category.name,
                value: category.id,
              }))}
            />
          </div>
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge icon={ListChecks} />
                <h2 className="text-xl">Blog Description</h2>
              </div>
              <DescriptionForm initialData={blog} blogId={params.blogId} />
            </div>
          </div>
        </div>
        <BlogContentForm initialData={blog} blogId={params.blogId} />
      </div>
    </>
    // <>
    //   <div>
    //     <h1>Blog page here</h1>
    //   </div>
    // </>
  );
};

export default CourseIdPage;
