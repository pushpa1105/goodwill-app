"use client";

import { BarChart, Compass, Layout, List } from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import { usePathname } from "next/navigation";

const guestRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/search",
  },
];

const adminRoutes = [
  {
    icon: List,
    label: "Courses",
    href: "/admin/courses",
  }
];

const pageRoutes = [
  {
    label: "Courses",
    href: "/courses",
  },
  {
    label: "Blogs",
    href: "/blogs",
  },
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "Account Opening",
    href: "/account-opening",
  },
  {
    label: "Webinars",
    href: "/webinars",
  },
  {
    label: "About us",
    href: "/about-us",
  },
];

export const SidebarRoutes = () => {
  const pathname = usePathname();

  const isAdminPage = pathname?.includes("/admin");

  const routes = isAdminPage ? adminRoutes : guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {pageRoutes.map((route) => (
        <SidebarItem key={route.label} label={route.label} href={route.href} />
      ))}
    </div>
  );
};
