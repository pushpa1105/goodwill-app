import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BlogDataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";

const CoursePage = async () => {
  const { userId } = auth();

  if (!userId) return redirect("/");

  const blogs = await db.blog.findMany({
    where: {},
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <>
      <div className="p-6">
        {/* <Link href="/admin/create">
          <Button>Create Course</Button>
        </Link> */}
        <BlogDataTable columns={columns} data={blogs} />
      </div>
    </>
  );
};

export default CoursePage;
