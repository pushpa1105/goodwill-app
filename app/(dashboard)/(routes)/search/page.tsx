import { auth } from "@clerk/nextjs";

import { db } from "@/lib/db";
import { getCourses } from "@/actions/get-courses";
import { Categories } from "./_components/categories";
import { SearchInput } from "@/components/search-input";
import { redirect } from "next/navigation";
import { CoursesList } from "@/components/courses-list";

interface SearchPageProps {
  searchParams: {
    title: string;
    categoryId: string;
  };
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const { userId } = auth();

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
    <div className="p-6">
      <div className="flex flex-wrap items-center justify-between p-2">
        <div className="w-full md:w-auto text-xl font-bold mb-2">
          Browse Courses
        </div>
        <div className="w-full md:w-auto">
          <SearchInput />
        </div>
      </div>
      <Categories items={categories} />
      <CoursesList
      items={courses}
      />
    </div>
  );
};

export default SearchPage;
