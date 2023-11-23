import { cn } from "@/lib/utils";
import Link from "next/link";

const categories = [
  "Entertainment",
  "Travel",
  "Technology",
  "Trading",
  "IT",
  "Health",
  "Economy",
];

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
export const BlogCategories = () => {
  return (
    <div className="mt-4 p-2">
      <h1 className="text-2xl font-bold mb-2">Categories</h1>
      <div className="flex flex-wrap items-center md:justify-start gap-x-2 overflow-x-auto pb-2">
        {categories.map((category, index) => (
          <Link href={`/blogs?category=${category}`} key={category}>
            <button
              className={cn(
                "py-4 px-5 text-[10px] md:text-xs font-medium border border-slate-200 rounded-2xl flex flex-wrap justify-center min-w-[10em] text-center flex items-center gap-x-1 hover:shadow-lg hover:bg-[#083996] hover:text-white transition mt-2",
                bgColors[index <= 19 ? index : Math.floor(index / 2)]
              )}
              type="button"
            >
              <div className="truncate text-center">{category}</div>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};
