import { BlogDataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { db } from "@/lib/db";

const CoursePage = async () => {
  const blogs = await db.blog.findMany({
    where: {},
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <>
      <div className="p-6">
        <BlogDataTable columns={columns} data={blogs} />
      </div>
    </>
  );
};

export default CoursePage;
