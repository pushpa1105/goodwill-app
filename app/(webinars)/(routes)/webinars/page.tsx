import { NavBar } from "../../_components/navbar";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import { WebinarLists, webinars } from "./_components/webinar-lists";

interface BlogPageProps {
  searchParams: {
    title: string;
    categoryId: string;
  };
}

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

const WebinarPage = async ({ searchParams }: BlogPageProps) => {
  const history = webinars;
  // const blogs = (await getBlogs({
  //   ...searchParams,
  // })) as Array<
  //   Blog & {
  //     category: BlogCategory;
  //   }
  // >;

  // const latestBlogs = (await getBlogs({})) as Array<
  //   Blog & {
  //     category: BlogCategory;
  //   }
  // >;
  // const categories = await db.blogCategory.findMany({});

  return (
    <>
      {/* <div className="h-[80px] fixed inset-y-0 w-full z-50 ">
        <NavBar />
      </div>
      <main className="pt-[80px] h-full"> */}
        <div className="bg-[#083996]">
          <div className="flex flex-col justify-center max-w-auto md:max-w-[85%] m-auto">
            <div>
              <WebinarLists />
              <div className="md:w-50 max-w-[1200px] m-4 md:m-auto">
              <DataTable columns={columns} data={history} />
              </div>
            </div>
          </div>
        </div>
      {/* </main> */}
    </>
  );
};

export default WebinarPage;
