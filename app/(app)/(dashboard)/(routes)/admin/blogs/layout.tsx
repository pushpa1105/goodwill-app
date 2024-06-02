import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { isBlogAdmin } from "@/lib/admin";

const BlogsPageLayout = async  ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();
  if (!userId) redirect("/");

  const hasAccess = await isBlogAdmin();

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

export default BlogsPageLayout;
