import { authOptions } from "@/app/(app)/api/auth/[...nextauth]/route";
import { User } from "@prisma/client";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);
  const user = session?.user as Partial<User | null>;
  const denyAccess =
    !user?.isSuperAdmin &&
    !user?.isAdmin &&
    !user?.isBlogAdmin &&
    !user?.isCourseAdmin;
  if (denyAccess) return redirect("/sign-in");
  return <>{children}</>;
};

export default AdminLayout;
