import { GetUserData } from "@/actions/get-user-data";
import { isAdmin } from "@/lib/admin";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  if (!await isAdmin()) return redirect("/");
  return <>{children}</>;
};

export default AdminLayout;
