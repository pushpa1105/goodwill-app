"use client";
// import Sidebar from "./_components/Sidebar";

import { usePathname } from "next/navigation";
import NavBar from "./_components/navbar";
import { cn } from "@/lib/utils";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";
  return (
    <div className={cn("h-full", isLandingPage && "bg-linear-landing")}>
      <div className="h-[50px] fixed inset-y-0 w-full z-50">
        <NavBar />
      </div>
      <main className={cn("pt-[80px]", isLandingPage && "bg-linear-landing")}>
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
