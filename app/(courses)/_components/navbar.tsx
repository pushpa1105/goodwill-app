import { MobileSideBar } from "./mobile-sidebar";
import { NavbarRoutes } from "./navbar-routes";

export const NavBar = () => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
      <MobileSideBar />
      <NavbarRoutes />
    </div>
  );
};
