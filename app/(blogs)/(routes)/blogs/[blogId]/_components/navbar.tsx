import React from "react";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
type Props = {
  /**
   * Allows the parent component to modify the state when the
   * menu button is clicked.
   */
  onMenuButtonClick(): void;
};
const Navbar = (props: Props) => {
  return (
    <nav
      className={cn({
        "bg-white text-zinc-500": true, // colors
        "flex lg:hidden items-center": true, // layout
        "w-full md:w-full sticky z-10 px-4 shadow-sm h-[73px] top-0 ": true, //positioning & styling
      })}
    >
      {/* <div className="font-bold text-lg">Admin Panel</div> */}
      <div className="flex-grow"></div>
      <button className="md:hidden" onClick={props.onMenuButtonClick}>
        <Menu className="h-6 w-6" />
      </button>
    </nav>
  );
};

export default Navbar;
