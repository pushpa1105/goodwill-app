import { getServerSession } from "next-auth";
import { MobileSideBar } from "./mobile-sidebar";
import { NavbarRoutes } from "./navbar-routes";
import { authOptions } from "@/app/(app)/api/auth/[...nextauth]/route";
import { User } from "@prisma/client";

export const NavBar = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user as Partial<User | null>;
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
      <NavbarRoutes user={user} />
      <MobileSideBar />
    </div>
  );
};
