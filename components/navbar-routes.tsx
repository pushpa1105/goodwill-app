"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { User } from "@prisma/client";
import { AuthBox } from "./nav-items/auth";

export const NavbarRoutes = ({ user }: { user?: Partial<User | null> }) => {
  const pathname = usePathname();

  const isAdmin = user?.isAdmin || user?.isSuperAdmin;

  const isAdminPage = pathname?.startsWith("/admin");
  const isUserPage = pathname?.includes("/courses");
  return (
    <div className="flex gap-x-2 ml-auto">
      {isAdminPage || isUserPage ? (
        <Link href="/courses" className="flex items-center">
          <Button>
            <LogOut className="h-4 w-4 mr-2" />
            Exit
          </Button>
        </Link>
      ) : (
        isAdmin && (
          <Link href="/admin/courses">
            <Button size="sm" variant="ghost">
              Admin Mode
            </Button>
          </Link>
        )
      )}
      <AuthBox />
    </div>
  );
};
