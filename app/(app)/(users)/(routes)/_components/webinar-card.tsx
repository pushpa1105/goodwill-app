import { Speaker, Webinar } from "@prisma/client";
import { ChevronsRight } from "lucide-react";
import Link from "next/link";

type WebinarWithSpeaker = Webinar & {
  speaker: Speaker;
};

export const WebinarCard = ({ webinar }: { webinar: WebinarWithSpeaker }) => {
  return (
    <Link
      href={`/webinars/${webinar.slug}`}
      className="popular_courses_item hover:shadow-lg"
      target="_blank"
    >
      <div className="bg-white rounded-[20px] p-4">
        <div className="grid grid-col lg:grid-cols-2 gap-4">
          <div className="">
            <div className="">
              <img
                loading="lazy"
                src={webinar.imageUrl}
                alt={webinar.title}
                width="100%"
                height="100%"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="">
            <div className="text-[#404040] text-[12px] lg:text-[14px] font-normal min-h-[10%]">
              By {webinar.speaker.name}
            </div>
            <div className=" font-extrabold min-h-[70%] text-xl">
              {webinar.title}
            </div>

            <div className="justify-between hidden lg:flex min-h-[15%]">
              <div className="flex text-blue-700 bg-[#eaf6ff] px md:px-2 text-[10px] lg:text-[13px] text-center items-center">
                <div className="h-[80%] m-auto">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6693 3.3335H12.0026V2.00016C12.0026 1.82335 11.9324 1.65378 11.8073 1.52876C11.6823 1.40373 11.5127 1.3335 11.3359 1.3335C11.1591 1.3335 10.9896 1.40373 10.8645 1.52876C10.7395 1.65378 10.6693 1.82335 10.6693 2.00016V3.3335H5.33594V2.00016C5.33594 1.82335 5.2657 1.65378 5.14068 1.52876C5.01565 1.40373 4.84608 1.3335 4.66927 1.3335C4.49246 1.3335 4.32289 1.40373 4.19787 1.52876C4.07284 1.65378 4.0026 1.82335 4.0026 2.00016V3.3335H3.33594C2.8055 3.3335 2.2968 3.54421 1.92172 3.91928C1.54665 4.29436 1.33594 4.80306 1.33594 5.3335V6.00016H14.6693V5.3335C14.6693 4.80306 14.4586 4.29436 14.0835 3.91928C13.7084 3.54421 13.1997 3.3335 12.6693 3.3335Z"
                      fill="#EE9949"
                    ></path>
                    <path
                      d="M1.33594 12.6668C1.33594 13.1973 1.54665 13.706 1.92172 14.081C2.2968 14.4561 2.8055 14.6668 3.33594 14.6668H12.6693C13.1997 14.6668 13.7084 14.4561 14.0835 14.081C14.4586 13.706 14.6693 13.1973 14.6693 12.6668V7.3335H1.33594V12.6668Z"
                      fill="#EE9949"
                    ></path>
                  </svg>
                </div>
                {webinar.startAt?.toLocaleString("en-US", {
                  year: "numeric",
                  day: "numeric",
                  month: "short",
                })}
              </div>
              <div className="flex text-blue-700 hover:underline cursor-pointer text-[10px] lg:text-[13px]">
                View Details
                <ChevronsRight className="text-[15px] lg:text-[20px]" />
              </div>
            </div>
          </div>
        </div>

        <div className="justify-between flex lg:hidden mt-4">
          <div className="flex text-blue-700 bg-[#eaf6ff] p px-2 text-[13px] text-center items-center">
            <div className="h-[80%] m-auto">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6693 3.3335H12.0026V2.00016C12.0026 1.82335 11.9324 1.65378 11.8073 1.52876C11.6823 1.40373 11.5127 1.3335 11.3359 1.3335C11.1591 1.3335 10.9896 1.40373 10.8645 1.52876C10.7395 1.65378 10.6693 1.82335 10.6693 2.00016V3.3335H5.33594V2.00016C5.33594 1.82335 5.2657 1.65378 5.14068 1.52876C5.01565 1.40373 4.84608 1.3335 4.66927 1.3335C4.49246 1.3335 4.32289 1.40373 4.19787 1.52876C4.07284 1.65378 4.0026 1.82335 4.0026 2.00016V3.3335H3.33594C2.8055 3.3335 2.2968 3.54421 1.92172 3.91928C1.54665 4.29436 1.33594 4.80306 1.33594 5.3335V6.00016H14.6693V5.3335C14.6693 4.80306 14.4586 4.29436 14.0835 3.91928C13.7084 3.54421 13.1997 3.3335 12.6693 3.3335Z"
                  fill="#EE9949"
                ></path>
                <path
                  d="M1.33594 12.6668C1.33594 13.1973 1.54665 13.706 1.92172 14.081C2.2968 14.4561 2.8055 14.6668 3.33594 14.6668H12.6693C13.1997 14.6668 13.7084 14.4561 14.0835 14.081C14.4586 13.706 14.6693 13.1973 14.6693 12.6668V7.3335H1.33594V12.6668Z"
                  fill="#EE9949"
                ></path>
              </svg>
            </div>
            April 27,2024
          </div>
          <div className="flex text-blue-700 hover:underline cursor-pointer text-[15px]">
            View Details
            <ChevronsRight className="w-[20px]" />
          </div>
        </div>
      </div>
    </Link>
  );
};
