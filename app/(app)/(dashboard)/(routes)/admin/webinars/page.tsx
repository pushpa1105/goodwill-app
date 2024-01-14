import { Button } from "@/components/ui/button";
import Link from "next/link";
import { WebinarDataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { SpeakerDataTable } from "./_components/speaker-data-table";
import { speakerColumns } from "./_components/speaker-columns";

const CoursePage = async () => {
  const { userId } = auth();

  if (!userId) return redirect("/");

  const webinars = await db.webinar.findMany({
    where: {},
    orderBy: {
      createdAt: "desc",
    },
  });

  const speakers = await db.speaker.findMany({
    where: {},
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <>
      <div className="p-6">
        {/* <Link href="/admin/create">
          <Button>Create Webinar</Button>
        </Link> */}
        <WebinarDataTable columns={columns} data={webinars} />
        <SpeakerDataTable columns={speakerColumns} data={speakers} />
      </div>
    </>
  );
};

export default CoursePage;
