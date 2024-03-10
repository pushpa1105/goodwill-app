"use client";

import React, { PropsWithChildren, useState } from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import { cn } from "@/lib/utils";
import { User } from "@prisma/client";

interface BlogLayoutComponentProps {
  toc: {
    id: string;
    text: string;
    level: string;
  }[];
  children: React.ReactNode;
  user: User | null;
}
const BlogLayoutComponent = ({ toc, children, user }: BlogLayoutComponentProps) => {
  const [collapsed, setSidebarCollapsed] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <div
      className={cn({
        "grid bg-zinc-100 min-h-screen": true,
        "grid-cols-sidebar": !collapsed,
        "grid-cols-sidebar-collapsed": collapsed,
        "transition-[grid-template-columns] duration-300 ease-in-out relative":
          true,
      })}
    >
      <Sidebar
        user={user}
        toc={toc}
        collapsed={collapsed}
        setCollapsed={setSidebarCollapsed}
        shown={showSidebar}
        closeMenu={() => setShowSidebar(false)}
      />
      <div
        className={cn(
          "col-span-2 md:col-span-1 lg:pl-[50px] absolute w-full",
          collapsed && "md:pl-16",
          !collapsed && "md:pl-[300px] lg:pl-[350px]"
        )}
      >
        <Navbar onMenuButtonClick={() => setShowSidebar((prev) => !prev)} />
        {children}
      </div>
    </div>
  );
};

export default BlogLayoutComponent;
