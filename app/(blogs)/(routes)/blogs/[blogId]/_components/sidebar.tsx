"use client";

import React, { useRef } from "react";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Cross, X } from "lucide-react";
import { NavItem, defaultNavItems } from "./default-nav-items";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

// add NavItem prop to component prop
type Props = {
  collapsed: boolean;
  navItems?: NavItem[];
  setCollapsed(collapsed: boolean): void;
  shown: boolean;
  toc: {
    id: string;
    text: string;
    level: string;
  }[];
  closeMenu(): void;
};
const Sidebar = ({
  collapsed,
  navItems = defaultNavItems,
  shown,
  setCollapsed,
  toc,
  closeMenu,
}: Props) => {
  const Icon = collapsed ? ChevronRight : ChevronLeft;
  const goToSection = (id: string) => {
    const ele = document.querySelector(`[data-id="${id}"]`);
    if (ele) ele.scrollIntoView();
  };
  return (
    <div
      className={classNames({
        "bg-theme text-zinc-50 fixed md:translate-x-0 z-20": true,
        "transition-all duration-300 ease-in-out": true,
        "w-[300px] lg:w-[350px]": !collapsed,
        "w-16": collapsed,
        "-translate-x-full": !shown,
      })}
    >
      <div
        className={classNames({
          "flex flex-col justify-between h-screen sticky inset-0": true,
          "overflow-y-scroll": !collapsed,
        })}
      >
        {/* logo and collapse button */}
        <div
          className={classNames({
            "flex items-center border-b border-b-indigo-800 transition-none":
              true,
            "p-4 justify-between": !collapsed,
            "py-4 justify-center": collapsed,
          })}
        >
          {!collapsed && <span className="whitespace-nowrap">My Logo</span>}
          <button
            className="hidden md:grid place-content-center hover:bg-indigo-800 w-10 h-10 rounded-full"
            onClick={() => setCollapsed(!collapsed)}
          >
            <Icon className="w-5 h-5" />
          </button>
          <button
            className="gird md:hidden place-content-center w-10 h-10"
            onClick={closeMenu}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="flex-grow">
          {toc && toc.length > 0 && (
            <>
              {!collapsed && (
                <>
                  <div className="px-4 mt-2 font-bold text-lg">
                    Blog Contents
                  </div>
                  <ul
                    className={classNames({
                      "my-2 pb-4 flex flex-col items-stretch border-b border-b-indigo-800":
                        true,
                    })}
                  >
                    {toc.map((item, index) => {
                      return (
                        <li
                          onClick={() => goToSection(item.id)}
                          key={index}
                          className={classNames({
                            "text-indigo-100 hover:bg-indigo-900 flex": true, //colors
                            "transition-colors duration-300": true, //animation
                            "rounded-md p-[6px] mx-3 gap-4 ": !collapsed,
                            "rounded-full p-[6px] mx-3 w-10 h-10": collapsed,
                          })}
                        >
                          <div className="flex gap-2 cursor-pointer">
                            <span
                              className={cn(
                                "line-clamp-1",
                                item.level == "1" && "text-[15px] font-bold",
                                item.level == "2" &&
                                  "text-[14px] font-semibold ml-[10px]",
                                item.level == "3" &&
                                  "text-[13.5px]  font-normal ml-[15px]"
                              )}
                            >
                              {/* {!collapsed && item.level} */}
                              {!collapsed && item.text}
                            </span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </>
              )}
            </>
          )}

          {!collapsed && (
            <div className="px-4 font-bold text-lg my-4">Pages</div>
          )}
          <ul
            className={classNames({
              "flex flex-col gap-2 items-stretch": true,
            })}
          >
            {navItems.map((item, index) => {
              return (
                <li
                  key={index}
                  className={classNames({
                    "text-indigo-100 hover:bg-indigo-900 flex": true, //colors
                    "transition-colors duration-300": true, //animation
                    "rounded-md p-2 mx-3 gap-4 ": !collapsed,
                    "rounded-full p-2 mx-3 w-10 h-10": collapsed,
                  })}
                >
                  <Link href={item.href} className="flex gap-2">
                    {item.icon} <span>{!collapsed && item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div
          className={classNames({
            "grid place-content-stretch p-4 ": true,
          })}
        >
          <div className="flex gap-4 items-center h-11 overflow-hidden">
            <Image
              src={"/logo.jpeg"}
              height={36}
              width={36}
              alt="profile image"
              className="rounded-full"
            />
            {!collapsed && (
              <div className="flex flex-col ">
                <span className="text-indigo-50 my-0">Tom Cook</span>
                <Link href="/" className="text-indigo-200 text-sm">
                  View Profile
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
