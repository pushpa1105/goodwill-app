"use client";

import { cn } from "@/lib/utils";
import { BlogCategory } from "@prisma/client";
import Link from "next/link";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import path from "path";

const bgColors = [
  "bg-violet-100",
  "bg-rose-100",
  "bg-indigo-100",
  "bg-pink-100",
  "bg-purple-100",
  "bg-stone-100",
  "bg-yellow-100",
  "bg-fuchsia-100",
  "bg-blue-100",
  "bg-amber-100",
  "bg-lime-100",
  "bg-neutral-100",
  "bg-sky-100",
  "bg-cyan-100",
  "bg-teal-100",
  "bg-green-100",
  "bg-emerald-100",
  "bg-orange-100",
  "bg-zinc-100",
];

interface BlogCategoriesProps {
  categories: BlogCategory[];
}
export const BlogCategories = ({ categories }: BlogCategoriesProps) => {
  const params = useSearchParams();
  const isActiveCategory = (id: string) => params.get("categoryId") == id;
  return (
    <div className="mt-4 p-2">
      <h1 className="text-2xl font-bold mb-2">Categories</h1>
      <div className="flex flex-wrap items-center md:justify-start gap-x-2 overflow-x-auto pb-2">
        {categories.map((category, index) => (
          <Link
            href={
              isActiveCategory(category.id)
                ? "/blogs"
                : `/blogs?categoryId=${category.id}`
            }
            key={index}
          >
            <button
              className={cn(
                "py-4 px-5 text-[10px] md:text-xs font-medium border border-slate-200 rounded-2xl flex flex-wrap justify-center min-w-[10em] text-center flex items-center gap-x-1 hover:shadow-lg hover:bg-[#083996] hover:text-white transition mt-2",
                bgColors[index <= 19 ? index : Math.floor(index / 2)],
                isActiveCategory(category.id) && "bg-theme text-white"
              )}
              type="button"
            >
              <div className="truncate text-center">{category.name}</div>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};
