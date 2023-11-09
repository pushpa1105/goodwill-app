"use client";

import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { IconType } from "react-icons";

interface SidebarPageItemProps {
  label: string;
  icon?: IconType;
  routeName: string;
}

export const SidebarPageItem = ({
  label,
  icon: Icon,
  routeName,
}: SidebarPageItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = pathname?.includes(routeName);

  const onClick = () => {
    router.push(`/${routeName}`);
  };
  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20",
        isActive &&
          "text-slate-700 bg-slate-200/20 hover:bg-slate-200/20 hover:text-slate-700"
      )}
    >
      <div className="flex item-center gap-x-2 py-4">
        {Icon && (
          <Icon
            size={22}
            className={cn("text-slate-500", isActive && "text-slate-700")}
          />
        )}
        {label}
      </div>
      <div
        className={cn(
          "ml-auto opacity-0 border-2 border-slate-700 h-full transition-all",
          isActive && "opacity-100"
        )}
      ></div>
    </button>
  );
};
