"use client";

import Link from "next/link";
// import { Course } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal, Pencil } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Webinar {
  id: Number;
  level: String;
  language: String;
  title: String;
  startAt: String;
  speaker: {
    name: String;
    imageUrl: String;
  };
  slug: String;
}

export const columns: ColumnDef<Webinar>[] = [
  {
    accessorKey: "level",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-theme text-lg font-bold"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Level
          <ArrowUpDown className="ml-2 h-4 w-4 text-theme" />
        </Button>
      );
    },
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-theme text-lg font-bold"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Webinars
          <ArrowUpDown className="ml-2 h-4 w-4 text-theme" />
        </Button>
      );
    },
  },
  {
    accessorKey: "language",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="text-theme text-lg font-bold"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Language
          <ArrowUpDown className="ml-2 h-4 w-4 text-theme" />
        </Button>
      );
    },
  },
  {
    id: "Actions",
    cell: ({ row }) => {
      const { slug } = row.original;
      return (
        <Link href={`/webinars/${slug}`} className="text-theme text-md font-bold">
          Learn More
        </Link>
      );
    },
  },
];
