import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { getCourses } from "@/actions/get-courses";
import { SearchInput } from "@/components/search-input";
import { Categories } from "./_components/categories";
import { CoursesList } from "@/components/courses-list";
import { LanguagePreference } from "./_components/language-preference";
import { SwitchLanguage } from "./_components/switch-language";
import { NavBar } from "@/components/nav-items/navbar";
import { getBlogs } from "@/actions/get-blogs";
import { Blog, BlogCategory } from "@prisma/client";
import { Footer } from "@/components/footer";
// import { BackButton } from "@/components/back-button";

interface CoursesPageProps {
  searchParams: {
    title: string;
    categoryId: string;
  };
}

const Courses = async ({ searchParams }: CoursesPageProps) => {
  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  const courses = await getCourses({...searchParams});

  const latestBlogs = (await getBlogs({})) as Array<
    Blog & {
      category: BlogCategory;
    }
  >;

  return (
    <div className="h-full">
      <div className="h-[80px] fixed inset-y-0 w-full z-50 ">
        <NavBar />
      </div>
      <main className="pt-[80px] h-full">
        <>
          {/* {!language ? (
            <LanguagePreference />
          ) : ( */}
            <div className="p-6 w-full lg:w-[75%] m-auto">
              {/* <BackButton path="/" /> */}

              <div className="flex flex-wrap items-center justify-between p-2">
                <div className="w-full md:w-auto text-2xl font-extrabold mb-2 text-theme">
                  Browse Courses
                </div>
                <div className="flex flex-wrap w-full md:w-auto">
                  {/* <SwitchLanguage lang={language} /> */}
                  <SearchInput />
                </div>
              </div>
              <Categories items={categories} />
              <CoursesList
                items={courses}
                latestBlogs={latestBlogs.slice(0, 4)}
              />
            </div>
          {/* )} */}
          <Footer />
        </>
      </main>
    </div>
  );
};

export default Courses;
