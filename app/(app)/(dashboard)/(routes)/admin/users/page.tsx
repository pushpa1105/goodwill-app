import { columns } from "./_components/columns";
import { db } from "@/lib/db";
import { UsersDataTable } from "./_components/data-table";
import { getUserForServer } from "@/data/get-user";

const CoursePage = async () => {

  const user = await getUserForServer();

  const users = await db.user.findMany({
    where: {
      id: {
        not: user?.id,
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
