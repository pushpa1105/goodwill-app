import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/admin";

const CategoryPageLayout = async  ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();
  if (!userId) redirect("/");

  const hasAccess = await isAdmin();

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

export default CategoryPageLayout;
