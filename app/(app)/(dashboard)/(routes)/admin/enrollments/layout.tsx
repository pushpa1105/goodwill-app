import { redirect } from "next/navigation";
import { checkAccess, getUserForServer } from "@/data/get-user";

const EnrollmentPageLayout = async  ({ children }: { children: React.ReactNode }) => {
  const user = await getUserForServer();
  if (!user) return redirect("/sign-in");

  const hasAccess = checkAccess(user, "admin");

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

export default EnrollmentPageLayout;
