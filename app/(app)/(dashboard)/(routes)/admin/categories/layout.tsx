import { redirect } from "next/navigation";
import { getUserForServer, checkAccess } from "@/data/get-user";

const CategoryPageLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const user = await getUserForServer();
  if (!user) return redirect("/sign-in");

  const hasAccess = checkAccess(user, "admin");

  return (
    <div className="p-6">
      {hasAccess ? (
        <>{children}</>
      ) : (
        <div>You do not have permission for this.</div>
      )}
    </div>
  );
};

export default CategoryPageLayout;
