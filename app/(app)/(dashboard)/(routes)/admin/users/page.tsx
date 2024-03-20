import { Button } from "@/components/ui/button";
import Link from "next/link";
import { columns } from "./_components/columns";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { UsersDataTable } from "./_components/data-table";

const CoursePage = async () => {
  const { userId } = auth();

  if (!userId) return redirect("/");

  const users = await db.user.findMany({
    where: {
      externalId: {
        not: userId,
      },
    },
  });

  return (
    <>
      <div className="p-6">
        <div className="border p-4 rounded mb-4">
          <h1 className="font-bold text-2xl">Users</h1>
          <UsersDataTable columns={columns} data={users} />
        </div>
      </div>
    </>
  );
};

export default CoursePage;
