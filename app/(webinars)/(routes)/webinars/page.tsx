import { NavBar } from "../../_components/navbar";
import { WebinarLists } from "./_components/webinar-lists";

interface BlogPageProps {
  searchParams: {
    title: string;
    categoryId: string;
  };
}

const WebinarPage = async ({ searchParams }: BlogPageProps) => {
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
      <div className="h-[80px] fixed inset-y-0 w-full z-50 ">
        <NavBar />
      </div>
      <main className="pt-[80px] h-full bg-theme">
        <div>
          <div className="flex flex-col justify-center max-w-auto md:max-w-[85%] m-auto">
            <div>
              <WebinarLists />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default WebinarPage;
