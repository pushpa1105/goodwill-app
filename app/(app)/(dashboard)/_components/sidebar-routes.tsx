"use client";

import {
  BarChart,
  BookOpen,
  Compass,
  Layout,
  List,
  Newspaper,
  PackageSearch,
  Presentation,
} from "lucide-react";
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
    icon: BookOpen,
    label: "Courses",
    href: "/admin/courses",
  },
  {
    icon: BookOpen,
    label: "Enrollments",
    href: "/admin/enrollments",
  },
  {
    icon: Newspaper,
    label: "Blogs",
    href: "/admin/blogs",
  },
  {
    icon: Presentation,
    label: "Webinars",
    href: "/admin/webinars",
  },
  {
    icon: PackageSearch,
    label: "Products",
    href: "/admin/products",
  },
  {
    icon: List,
    label: "Category",
    href: "/admin/categories",
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/admin/analytics",
  },
];

export const SidebarRoutes = () => {
  const pathname = usePathname();

  const isAdminPage = pathname?.includes("/admin");

  const routes = isAdminPage ? adminRoutes : guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.label}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};
