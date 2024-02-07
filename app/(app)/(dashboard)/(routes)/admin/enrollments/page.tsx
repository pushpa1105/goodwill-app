import { Button } from "@/components/ui/button";
import Link from "next/link";
import { columns } from "./_components/columns";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { CourseEnrollmentDataTable } from "./_components/data-table";
import { WebinarEnrollmentDataTable } from "./_components/webinar-enrollment-data-table";
import { webinarEnrollmentsColumns } from "./_components/webinar-enrollment-columns";

const CoursePage = async () => {
  const { userId } = auth();

  if (!userId) return redirect("/");

  const enrollments = await db.courseEnrollment.findMany({
    include: {
      user: true,
      course: true,
    },
  });

  const webinarEnrollments = await db.webinarEnrollment.findMany({
    include: {
      user: true,
      webinar: true,
    },
  });

  return (
    <>
      <div className="p-6">
        <div className="border p-4 rounded mb-4">
          <h1 className="font-bold text-2xl">Course Enrollments</h1>
          <CourseEnrollmentDataTable columns={columns} data={enrollments} />
        </div>
        <div className="border p-4 rounded">
          <h1 className="font-bold text-2xl">Webinar Enrollments</h1>
          <WebinarEnrollmentDataTable
            columns={webinarEnrollmentsColumns}
            data={webinarEnrollments}
          />
        </div>
      </div>
    </>
  );
};

export default CoursePage;
