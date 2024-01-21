import { Button } from "@/components/ui/button";
import Link from "next/link";
import { columns } from "./_components/columns";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { CourseEnrollmentDataTable } from "./_components/data-table";

const CoursePage = async () => {
  const { userId } = auth();

  if (!userId) return redirect("/");

  const enrollments = await db.courseEnrollment.findMany({
    include: {
      user: true,
      course: true,
    },
  });

  return (
    <>
      <div className="p-6">
        <CourseEnrollmentDataTable columns={columns} data={enrollments} />
      </div>
    </>
  );
};

export default CoursePage;
