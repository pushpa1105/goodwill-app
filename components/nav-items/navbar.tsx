import { auth } from "@clerk/nextjs";
import { MobileSideBar } from "./mobile-sidebar";
import { NavbarRoutes } from "./navbar-routes";
import { db } from "@/lib/db";

export const NavBar = async () => {
  const { userId } = auth();
  let user = null;
  if (userId) {
    user = await db.user.findUnique({
      where: { externalId: userId },
    });
  }
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
      <NavbarRoutes user={user} />
      <MobileSideBar />
    </div>
  );
};
