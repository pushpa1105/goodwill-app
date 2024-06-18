import { WebinarDataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { db } from "@/lib/db";
import { SpeakerDataTable } from "./_components/speaker-data-table";
import { speakerColumns } from "./_components/speaker-columns";

const CoursePage = async () => {
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
      <div className="p-6">
        <WebinarDataTable columns={columns} data={webinars} />
        <SpeakerDataTable columns={speakerColumns} data={speakers} />
      </div>
  );
};

export default CoursePage;
