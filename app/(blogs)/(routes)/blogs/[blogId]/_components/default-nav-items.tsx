import { Calendar, Folder, HomeIcon, User2 } from "lucide-react";
import React from "react";
// define a NavItem prop
export type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};
export const defaultNavItems: NavItem[] = [
  {
    label: "Dashboard",
    href: "/",
    icon: <HomeIcon className="w-6 h-6" />,
  },
  {
    label: "Team",
    href: "/team",
    icon: <User2 className="w-6 h-6" />,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: <Folder className="w-6 h-6" />,
  },
  {
    label: "Calendar",
    href: "/calendar",
    icon: <Calendar className="w-6 h-6" />,
  },
];
