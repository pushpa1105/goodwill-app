import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { getCourses } from "@/actions/get-courses";
import { SearchInput } from "@/components/search-input";
import { Categories } from "./_components/categories";
import { CoursesList } from "@/components/courses-list";
import { LanguagePreference } from "./_components/language-preference";

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

  const hasLanguage = user?.lang || null;
  // const hasLanguage = 'eng'

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

  return (
    <>
      {!hasLanguage ? (
        <LanguagePreference />
      ) : (
        <div className="p-6 w-full lg:w-[75%] m-auto">
          <div className="flex flex-wrap items-center justify-between p-2">
            <div className="w-full md:w-auto text-xl font-bold mb-2">
              Browse Courses
            </div>
            <div className="w-full md:w-auto">
              <SearchInput />
            </div>
          </div>
          <Categories items={categories} />
          <CoursesList items={courses} lang={user?.lang} />
        </div>
      )}
    </>
  );
};

export default Courses;
