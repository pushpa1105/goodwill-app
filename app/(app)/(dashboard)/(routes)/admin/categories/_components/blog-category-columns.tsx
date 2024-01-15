"use client";

import { BlogCategory, Category, Course } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Pencil, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CategoryModal } from "./category-modal";
import { ConfirmModal } from "@/components/modals/confirm-modal";
import axios from "axios";
import toast from "react-hot-toast";

export const blogCategoryColumns: ColumnDef<BlogCategory>[] = [
  {
    accessorKey: "name",
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
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const { id, name } = row.original;

      const data = { collection: "BlogCategory" };

      const onDelete = async () => {
        try {
          await axios.delete(`/api/categories/${id}`, {
            data,
          });
          toast.success("Category deleted");
          location.reload();
        } catch (error) {
          if (error?.response?.data) toast.error(error?.response?.data);
          else toast.error("Something went wrong");
        }
      };

      return (
        <>
          <div className="flex flex-wrap">
            <div>
              <CategoryModal collection="BlogCategory" name={name} id={id}>
                <Pencil className="h-4 w-4 mr-2 hover:text-indigo-600 cursor-pointer" />
              </CategoryModal>
            </div>
            <div>
              <ConfirmModal onConfirm={onDelete}>
                <Trash className="h-4 w-4 mr-2 hover:text-indigo-600 cursor-pointer" />
              </ConfirmModal>
            </div>
          </div>
        </>
      );
    },
    header: "Actions",
  },
];
