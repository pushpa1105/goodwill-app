import { Category, Course } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

type CourseWithCategory = Course & {
  category: Category | null;
};

interface CourseCardProps {
  course: CourseWithCategory;
}

export const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <div className="flex justify-center max-w-[350px] min-h-[360px] max-h-[360px]">
      <Link
        href={`/courses/${course.slug}`}
        className="popular_courses_item"
        target="_blank"
      >
        <div className="courses_box_wrapper">
          <div className="p-[18px] relative overflow-hidden">
            <div className="row">
              <div className="col-lg-12">
                <div className="course-image">
                  <Image
                    loading="lazy"
                    src={course.imageUrl!}
                    alt={course.title}
                    height={210}
                    width={350}
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-12 mt-6">
                <div className="course_details_middle">
                  <p className="text-[#404040] text-[12px] lg:text-[14px]">
                    {course.category?.name}
                  </p>
                  <h4 className="courses-name line-clamp-1">{course.title}</h4>
                  <div className="flex justify-between mt-4">
                    <div className="flex">
                      <div className="flex ">
                        <div className="h-[80%] m-auto mr-[5px]">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.9583 6.13748C15.8536 5.81349 15.5662 5.58339 15.2262 5.55275L10.6082 5.13342L8.78208 0.859266C8.64744 0.546026 8.34079 0.343262 8.00008 0.343262C7.65938 0.343262 7.35273 0.546026 7.21808 0.859999L5.39198 5.13342L0.773211 5.55275C0.433847 5.58412 0.147219 5.81349 0.0418692 6.13748C-0.0634802 6.46146 0.0338123 6.81682 0.290533 7.04082L3.78122 10.1022L2.7519 14.6364C2.67658 14.9697 2.80598 15.3143 3.0826 15.5143C3.23128 15.6217 3.40524 15.6764 3.58066 15.6764C3.73191 15.6764 3.88193 15.6356 4.01658 15.5551L8.00008 13.1743L11.9821 15.5551C12.2735 15.7304 12.6408 15.7144 12.9168 15.5143C13.1936 15.3137 13.3229 14.969 13.2475 14.6364L12.2182 10.1022L15.7089 7.04143C15.9656 6.81682 16.0636 6.46207 15.9583 6.13748Z"
                              fill="#EE9949"
                            ></path>
                          </svg>
                        </div>
                        {course?.rating || 0}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="flex">
                        View Details
                        <div className="h-[80%] m-auto ml-[5px]">
                          <svg
                            width="13"
                            height="11"
                            viewBox="0 0 13 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.3943 5.73713C12.3943 5.92577 12.3223 6.11439 12.1785 6.25822L7.6526 10.7841C7.3647 11.072 6.89791 11.072 6.61013 10.7841C6.32234 10.4963 6.32234 10.0296 6.61013 9.74167L10.6149 5.73713L6.61027 1.73257C6.32248 1.44467 6.32248 0.978024 6.61027 0.69026C6.89805 0.402217 7.36484 0.402217 7.65274 0.69026L12.1786 5.21604C12.3224 5.35994 12.3943 5.54856 12.3943 5.73713Z"
                              fill="#EE9949"
                            ></path>
                            <path
                              d="M6.39429 5.73713C6.39429 5.92577 6.32226 6.11439 6.17851 6.25822L1.6526 10.7841C1.3647 11.072 0.897914 11.072 0.610127 10.7841C0.32234 10.4963 0.32234 10.0296 0.610127 9.74167L4.6149 5.73713L0.610267 1.73257C0.32248 1.44467 0.32248 0.978024 0.610267 0.69026C0.898054 0.402217 1.36484 0.402217 1.65274 0.69026L6.17864 5.21604C6.32242 5.35994 6.39429 5.54856 6.39429 5.73713Z"
                              fill="#EE9949"
                            ></path>
                          </svg>
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
