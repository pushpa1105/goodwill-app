"use client";

import { SignInButton, SignUpButton, useAuth } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/logo";
import { User } from "@prisma/client";
import { UserButton } from "@/components/user-button";

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

export const NavbarRoutes = ({ user }: { user: User | null }) => {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const pathname = usePathname();
  const router = useRouter();

  const redirectUrl = `${process.env.NEXT_PUBLIC_APP_URL}${pathname}`;

  const { userId } = useAuth();
  const isAdmin = user?.isAdmin || user?.isSuperAdmin;

  const isAdminPage = pathname?.startsWith("/admin");
  return (
    <div className="flex justify-between w-[88%] mx-auto">
      <div className="lg:flex items-center">
        <Logo />
      </div>
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
      <div className="flex gap-x-2 ml-auto md:ml-0 items-center">
        {isAdminPage ? (
          <Link href="/blogs">
            <Button>
              <LogOut className="h-4 w-4 mr-2" />
              Exit
            </Button>
          </Link>
        ) : (
          isAdmin && (
            <Link href="/admin/blogs">
              <Button size="sm" variant="ghost">
                Admin Mode
              </Button>
            </Link>
          )
        )}
        {userId && <UserButton user={user} />}
        {!userId && (
          <>
            <SignInButton
              redirectUrl={redirectUrl}
              afterSignInUrl={redirectUrl}
            />
            <div className=" bg-black text-white rounded p-2 mx-2 sm:mx-4 capitalize tracking-wide transition-all">
              <SignUpButton
                redirectUrl={redirectUrl}
                afterSignUpUrl={redirectUrl}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
