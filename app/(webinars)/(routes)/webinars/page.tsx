import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import { WebinarLists } from "./_components/webinar-lists";
import { db } from "@/lib/db";

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
}

const WebinarPage = async () => {
  const webinars = await db.webinar.findMany({
    where: {
      isPublished: true,
    },
  });

  return (
    <>
      <div className="bg-[#083996] min-h-[100vh]">
        <div className="flex flex-col justify-center max-w-auto md:max-w-[85%] m-auto">
          <div>
            <WebinarLists />
            <div className="md:w-50 max-w-[1200px] m-4 md:m-auto">
              <div className="mt-16">
                <h1 className="text-2xl md:text-4xl font-bold webinar-text-theme">
                  Past Webinars
                </h1>
              </div>
              <DataTable columns={columns} data={webinars} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebinarPage;
