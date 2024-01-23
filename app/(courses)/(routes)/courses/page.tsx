import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { getCourses } from "@/actions/get-courses";
import { SearchInput } from "@/components/search-input";
import { Categories } from "./_components/categories";
import { CoursesList } from "@/components/courses-list";
import { LanguagePreference } from "./_components/language-preference";
import { SwitchLanguage } from "./_components/switch-language";
import { NavBar } from "../../_components/navbar";
import { getBlogs } from "@/actions/get-blogs";
import { Blog, BlogCategory } from "@prisma/client";

interface CoursesPageProps {
  searchParams: {
    title: string;
    categoryId: string;
  };
}

const Courses = async ({ searchParams }: CoursesPageProps) => {
  const { userId } = auth();

  const user = await db.user.findFirst({
    where: {
      externalId: userId as string,
    },
  });

  const language = user?.lang || null;

  if (!userId) return redirect("/");

  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  const courses = await getCourses({
    userId,
    ...searchParams,
  });

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
          {!language ? (
            <LanguagePreference />
          ) : (
            <div className="p-6 w-full lg:w-[75%] m-auto">
              <div className="flex flex-wrap items-center justify-between p-2">
                <div className="w-full md:w-auto text-2xl font-extrabold mb-2 text-theme">
                  Browse Courses
                </div>
                <div className="flex flex-wrap w-full md:w-auto">
                  <SwitchLanguage lang={language} />
                  <SearchInput />
                </div>
              </div>
              <Categories items={categories} />
              <CoursesList
                items={courses}
                lang={user?.lang}
                latestBlogs={latestBlogs.slice(0, 4)}
              />
            </div>
          )}
        </>
      </main>
    </div>
  );
};

export default Courses;