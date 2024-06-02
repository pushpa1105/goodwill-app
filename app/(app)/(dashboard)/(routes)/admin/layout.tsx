import { isAdmin, isBlogAdmin, isCourseAdmin, isWebinarAdmin } from "@/lib/admin";
import { redirect } from "next/navigation";

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  if (!await isAdmin() && !await isBlogAdmin() && !await isCourseAdmin()) return redirect("/");
  return <>{children}</>;
};

export default AdminLayout;
