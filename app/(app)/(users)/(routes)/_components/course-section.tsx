import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Category, Course } from "@prisma/client";
import { CourseCard } from "./CourseCard";

type CourseWithCategory = Course & {
  category: Category | null;
};

interface CourseSectionProps {
  courses: CourseWithCategory[];
}

export const CourseSection = ({ courses }: CourseSectionProps) => {
  return (
    <section className="bg-white py-[45px] lg:py-[80px]">
      <div className="container ">
        <div className="text-center mb-[34px] lg:mb-[50px]">
          <div>
            <h2 className="text-3xl lg:text-4xl font-extrabold">
              Bestselling Courses on Stock Market
            </h2>
          </div>
        </div>
        <div className="flex justify-center flex-wrap gap-2 lg:gap-4">
          {courses.length > 0 &&
            courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
        </div>
        <div className="flex justify-center mt-6">
          <Link href="/courses" target="_blank">
            <Button
              size="lg"
              className="bg-btn-main text-[14px] lg:text-[16px] font-semibold hover:shadow-lg"
            >
              View All Courses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
