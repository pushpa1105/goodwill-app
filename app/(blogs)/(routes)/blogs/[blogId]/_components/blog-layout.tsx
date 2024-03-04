"use client";

import React, { PropsWithChildren, useState } from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import { cn } from "@/lib/utils";

interface BlogLayoutComponentProps {
  toc: {
    id: string;
    text: string;
    level: string;
  }[];
  children: React.ReactNode;
}
const BlogLayoutComponent = ({ toc, children }: BlogLayoutComponentProps) => {
  const [collapsed, setSidebarCollapsed] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
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
