"use client";

import { useAuth } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { isAdmin } from "@/lib/admin";
import { User } from "@prisma/client";
import { UserButton } from "./user-button";

export const NavbarRoutes = ({ user }: { user: User | null }) => {
  const pathname = usePathname();
  const router = useRouter();

  const { userId } = useAuth();

  const isAdminPage = pathname?.startsWith("/admin");
  const isUserPage = pathname?.includes("/courses");
  return (
    <div className="flex gap-x-2 ml-auto">
      {isAdminPage || isUserPage ? (
        <Link href="/courses">
          <Button>
            <LogOut className="h-4 w-4 mr-2" />
            Exit
          </Button>
        </Link>
      ) : (
        isAdmin(userId) && (
          <Link href="/admin/courses">
            <Button size="sm" variant="ghost">
              Admin Mode
            </Button>
          </Link>
        )
      )}
      <UserButton user={user} />
    </div>
  );
};
