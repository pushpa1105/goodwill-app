"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

interface CourseMenuBarProps {
  activeTab: string;
  updateActiveTab: Function;
}

export const CourseMenuBar = ({
  activeTab,
  updateActiveTab,
}: CourseMenuBarProps) => {
  // const [activeLink, setActiveLink] = useState<string | null>(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 320);
    });
  }, []);
  return (
    <div
      className={cn(
        "shadow-sm border rounded mb-4 pt-4",
        scrollActive && "fixed top-[65px] z-[999] bg-white w-[89.5%] md:w-[40.6%]"
      )}
    >
      <ul className="flex items-center justify-center">
        <Link href="#" className="w-[30%]">
          <li
            onClick={() => updateActiveTab("overview")}
            className={cn(
              "cursor-pointer font-semibold hover:text-blue-700 border-b-4 border-white hover:border-blue-700 pb-4 w-[100%] flex justify-center",
              activeTab === "overview" && "border-blue-700 text-blue-700"
            )}
          >
            Overview
          </li>
        </Link>
        <Link href="#curriculum" className="w-[30%]">
          <li
            onClick={() => updateActiveTab("curriculum")}
            className={cn(
              "cursor-pointer font-semibold hover:text-blue-700 border-b-4 border-white hover:border-blue-700 pb-4 w-[100%] flex justify-center",
              activeTab === "curriculum" && "border-blue-700 text-blue-700"
            )}
          >
            {" "}
            Curriculum
          </li>
        </Link>

        <Link href="#reviews" className="w-[30%]">
          <li
            onClick={() => updateActiveTab("reviews")}
            className={cn(
              "cursor-pointer font-semibold hover:text-blue-700 border-b-4 border-white hover:border-blue-700 pb-4 w-[100%] flex justify-center",
              activeTab === "reviews" && "border-blue-700 text-blue-700"
            )}
          >
            {" "}
            Reviews
          </li>
        </Link>
      </ul>
    </div>
  );
};