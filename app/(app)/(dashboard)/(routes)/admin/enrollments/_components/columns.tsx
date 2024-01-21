"use client";

import { Course, CourseEnrollment, User } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Pencil, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";

type enrollmentWithCourseAndUser = CourseEnrollment & {
  user: User;
  course: Course;
};

export const columns: ColumnDef<enrollmentWithCourseAndUser>[] = [
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
      const { user } = row.original;
      return (
        <div className="flex justify-center">
          {user?.name && user.name != "null null" ? user.name : "-"}
        </div>
      );
    },
  },
  {
    accessorKey: "user.email",
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
    accessorKey: "course.title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Course
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
          Enrolled Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  // {
  //   id: "actions",
  //   cell: ({ row }) => {
  //     const { id, name } = row.original;

  //     const data = { collection: "Category" };

  //     const onDelete = async () => {
  //       try {
  //         await axios.delete(`/api/categories/${id}`, {
  //           data,
  //         });
  //         toast.success("Category deleted");
  //         location.reload();
  //       } catch (error) {
  //         if (error?.response?.data) toast.error(error?.response?.data);
  //         else toast.error("Something went wrong");
  //       }
  //     };

  //     return (
  //       <>
  //         <div className="flex flex-wrap">
  //           <div>
  //             <CategoryModal collection="Category" name={name} id={id}>
  //               <Pencil className="h-4 w-4 mr-2 hover:text-indigo-600 cursor-pointer" />
  //             </CategoryModal>
  //           </div>
  //           <div>
  //             <ConfirmModal onConfirm={onDelete}>
  //               <Trash className="h-4 w-4 mr-2 hover:text-indigo-600 cursor-pointer" />
  //             </ConfirmModal>
  //           </div>
  //         </div>
  //       </>
  //     );
  //   },
  //   header: "Actions",
  // },
];
