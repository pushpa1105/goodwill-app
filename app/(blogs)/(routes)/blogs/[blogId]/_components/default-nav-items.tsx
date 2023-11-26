import { Book, BookOpen, Calendar, CalendarDays, Folder, HomeIcon, ShoppingBasket, User2, UserSquare } from "lucide-react";
import React from "react";
// define a NavItem prop
export type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};
export const defaultNavItems: NavItem[] = [
  {
    label: "Courses",
    href: "/courses",
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    label: "Blogs",
    href: "/blogs",
    icon: <Book className="w-6 h-6" />,
  },
  {
    label: "Products",
    href: "/products",
    icon: <ShoppingBasket className="w-6 h-6" />,
  },
  {
    label: "Account Opening",
    href: "/account-opening",
    icon: <UserSquare className="w-6 h-6" />,
  },
  {
    label: "Webinars",
    href: "/webinars",
    icon: <CalendarDays className="w-6 h-6" />,
  },
];
