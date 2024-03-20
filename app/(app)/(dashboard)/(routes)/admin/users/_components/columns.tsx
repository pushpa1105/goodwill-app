"use client";

import { Course, CourseEnrollment, User } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Pencil, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import axios from "axios";
import toast from "react-hot-toast";

export const columns: ColumnDef<User>[] = [
  {
    id: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const { name } = row.original;
      return (
        <div className="flex justify-center">
          {name && name != "null null" ? name : "-"}
        </div>
      );
    },
  },
  {
    id: "email",
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Joined Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const { id, isAdmin: isUserAdmin = false } = row.original;

      const data = { collection: "Category" };

      const onUpdate = async () => {
        try {
          await axios.patch(`/api/user/${id}`);
          toast.success("User updated");
          location.reload();
        } catch (error) {
          if (error?.response?.data) toast.error(error?.response?.data);
          else toast.error("Something went wrong");
        }
      };

      return (
        <>
          <div className="flex flex-wrap">
            <Switch checked={isUserAdmin as boolean} onCheckedChange={onUpdate} />
          </div>
        </>
      );
    },
    header: "Actions",
  },
];
