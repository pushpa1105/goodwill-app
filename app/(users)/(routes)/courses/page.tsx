import { auth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { getCourses } from "@/actions/get-courses";
import { SearchInput } from "@/components/search-input";
import { Categories } from "./_components/categories";
import { CoursesList } from "@/components/courses-list";

const LanguagePreference = ({ handleClick }) => {
  return (
    <>
      <div className="flex justify-center items-center h-[75%]">
        <div className="w-full">
          <div className="flex justify-center items-center ">
            <div className="text-4xl font-bold">
              <div className="w-[90%] lg:w-[60%] flex text-center m-auto justify-center text-white">
                Choose your preffered language
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-around items-center mt-8 lg:w-[60%] m-auto">
            <Button
              onClick={() => handleClick("eng")}
              className="w-[75%] lg:w-[40%] h-[80px] text-black text-2xl font-bold bg-[#d2e7f9] shadow-lg mb-4 hover:bg-[#8aa1b9ed]"
            >
              English
            </Button>
            <Button
              onClick={() => handleClick("hindi")}
              className="w-[75%] lg:w-[40%] h-[80px] text-black  text-2xl font-bold bg-[#d2e7f9] shadow-lg mb-4 hover:bg-[#8aa1b9ed]"
            >
              Hindi
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

interface CoursesPageProps {
  searchParams: {
    title: string;
    categoryId: string;
  };
}

const Courses = async ({ searchParams }: CoursesPageProps) => {
  let hasLanguage = "eng";

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
    <>
      {!hasLanguage ? (
        <LanguagePreference
          handleClick={(event) => {
            hasLanguage = event;
          }}
        />
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
          <CoursesList items={courses} />
        </div>
      )}
    </>
  );
};

export default Courses;
