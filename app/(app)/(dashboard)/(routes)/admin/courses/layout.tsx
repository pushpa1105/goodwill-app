import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { isCourseAdmin } from "@/lib/admin";

const CoursePageLayout = async  ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();
  if (!userId) redirect("/");

  const hasAccess = await isCourseAdmin();

  return (
    <div className="p-6">
      {hasAccess ? (
        <>
        {children}
        </>
      ) : (
        <div>You do not have permission for this.</div>
      )}
    </div>
  );
};

export default CoursePageLayout;
