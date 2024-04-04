import { Blog, BlogCategory } from "@prisma/client";
import Link from "next/link";

type BlogWithCategory = Blog & {
  category: BlogCategory | null;
};

export const Card = ({ blog }: { blog: BlogWithCategory }) => {
  return (
    <div className="flex justify-center">
      <Link
        href={`/blogs/${blog.slug}`}
        className="popular_courses_item"
        target="_blank"
      >
        <div className="courses_box_wrapper">
          <div className="p-[18px] relative overflow-hidden">
            <div className="row">
              <div className="col-lg-12">
                <div className="course-image">
                  <img
                    loading="lazy"
                    src={blog?.imageUrl || "/blog.png"}
                    alt="Blog"
                    width="350px"
                    height="210px"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-12 mt-4">
                <div className="course_details_middle">
                  <p className="text-[#404040] text-[12px] lg:text-[14px]">
                    {blog.category?.name}
                  </p>
                  <h4 className="courses-name">{blog.title}</h4>
                  <div className="flex justify-between mt-4">
                    <div className="flex">
                      <p className="flex text-muted-foreground text-sm font-light">
                        {blog.readTime} mins read
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="flex">
                        View Details
                        <div className="h-[80%] m-auto">
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
