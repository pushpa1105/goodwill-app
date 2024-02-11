"use clent";

import Link from "next/link";
import { Button } from "./ui/button";
import { ChevronLeft } from "lucide-react";

export const BackButton = ({ path = "/" }: { path?: string }) => {
  return (
    <Link href={path} className="flex mb-2 hover:font-semibold w-fit">
      <ChevronLeft />
      Back
    </Link>
  );
};
