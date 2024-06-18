import { columns } from "./_components/columns";
import { db } from "@/lib/db";
import { BlogCategoryDataTable } from "./_components/blog-category-data-table";
import { blogCategoryColumns } from "./_components/blog-category-columns";
import { CourseCategoryDataTable } from "./_components/data-table";

const AdminCategoryPage = async () => {
  const courseCategories = await db.category.findMany({});
  const blogCategories = await db.blogCategory.findMany({});

  return (
    <>
      <div className="p-6">
        <CourseCategoryDataTable columns={columns} data={courseCategories} />
        <BlogCategoryDataTable
          columns={blogCategoryColumns}
          data={blogCategories}
        />
      </div>
    </>
  );
};

export default AdminCategoryPage;
