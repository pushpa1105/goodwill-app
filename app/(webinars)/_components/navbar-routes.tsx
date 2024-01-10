"use client";

import { UserButton, useAuth } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { isAdmin } from "@/lib/admin";
import { useState } from "react";

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
];

export const NavbarRoutes = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const pathname = usePathname();
  const router = useRouter();

  const { userId } = useAuth();
  const isAdminPage = pathname?.startsWith("/admin");
  return (
    <div className="flex justify-between w-full">
      <div className="hidden md:flex">Logo here</div>
      <div className="hidden md:flex">
        <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
          {pageRoutes.map((r) => (
            <Link
              key={r.label}
              href={r.href}
              onClick={() => {
                setActiveLink(r.label);
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === r.label || pathname?.includes(r.href)
                  ? " text-[#083996] border-b-2  border-[#083996] animation-active "
                  : " text-black-500 hover:text-[#083996] a")
              }
            >
              {r.label}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex gap-x-2 ml-auto md:ml-0">
        {isAdminPage ? (
          <Link href="/blogs">
            <Button>
              <LogOut className="h-4 w-4 mr-2" />
              Exit
            </Button>
          </Link>
        ) : (
          isAdmin(userId) && (
            <Link href="/admin/blogs">
              <Button size="sm" variant="ghost">
                Admin Mode
              </Button>
            </Link>
          )
        )}
        {userId && <UserButton afterSignOutUrl="/" />}
        {!userId && (
          <>
            <Link
              href="/sign-in"
              className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-slate-500 transition-all"
            >
                Sign In
            </Link>
            <Link href="/sign-up">
              <Button>Sign Up</Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
