"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const PolicyTab = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="bg-theme">
        <div className="md:block pt-10 lg:px-24 md:px-12 px-5 pb-14 bg-theme text-white">
          <div className="flex justify-between items-center">
            {pathname.includes("/terms") ? (
              <div>
                <h1 className="font-bold lg:text-5xl text-3xl">
                  Terms &amp; Conditions
                </h1>
                <div className="pt-4">
                  <p className="lg:text-lg text-base">
                    This page contains important information regarding the terms
                    and conditions which apply to your trading and demat
                    account.
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <h1 className="font-bold lg:text-5xl text-3xl">
                  Privacy Policy
                </h1>
                <div className="pt-4">
                  <p className="lg:text-lg text-base">
                    This page contains important information regarding privacy policy which apply to your trading and demat
                    account.
                  </p>
                </div>
              </div>
            )}
            <div className="md:block hidden">
              <img
                src="https://stock-logos.dhan.co/static-openweb/privacypolicyimg2.svg"
                alt="Terms &amp; Conditions"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="md:pt-10 pt-5 lg:px-24 md:px-10 px-5">
        <div className="flex gap-4 overflow-auto noscrollbar-x">
          <Link
            href="/privacy-policy"
            className={cn(
              "md:py-3 md:px-3.5 py-2 px-2.5 border border-[#EBEBEB] rounded-xl text-theme hover:shadow-xl hover:border-blue-800",
              pathname.includes("/privacy-policy") && "bg-theme text-white"
            )}
          >
            <p className=" md:text-lg text-sm whitespace-nowrap ">
              Privacy Policy
            </p>
          </Link>
          <Link
            href="/terms"
            className={cn(
              "md:py-3 md:px-3.5 py-2 px-2.5 border border-[#EBEBEB] rounded-xl text-theme hover:shadow-xl hover:border-blue-800",
              pathname.includes("/terms") && "bg-theme text-white"
            )}
          >
            <p className="md:text-lg text-sm whitespace-nowrap">
              Terms &amp; Conditions
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};
