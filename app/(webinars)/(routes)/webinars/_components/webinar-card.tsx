"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface WebinarCardProps {
  webinar: {
    id: number;
    level: string;
    title: string;
    langugae: string;
    startAt: string;
    speaker: {
      name: string;
      imageUrl: string;
    };
  };
}

export const WebinarCard = ({ webinar }: WebinarCardProps) => {
  console.log(webinar.level);
  return (
    <div className="shadow-xl p-4 m-4 md:my-4 rounded-lg bg-[#2101a9] bg-theme">
      <div className="flex flex-wrap">
        <div className=" w-full md:w-[80%] mt-4 md:px-4">
          <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4">
            <div className="bg-theme border border-indigo-400 text-white text-sm font-medium rounded-full px-2">
              {webinar.level}
            </div>
            <div className="bg-theme border border-indigo-400 text-white text-sm  font-medium rounded-full px-2">
              {webinar.langugae}
            </div>
            <div className="bg-theme border border-indigo-400 text-white text-sm rounded-full px-2 font-medium">
              {webinar.startAt}
            </div>
          </div>
          <div className="my-4">
            <h1 className="text-xl md:text-3xl font-medium webinar-text-theme">
              {webinar.title}
            </h1>
          </div>
          <div className="my-4">
            <h1 className="text-sm">
              {webinar.title} {webinar.title} {webinar.title}
              {webinar.title} {webinar.title} {webinar.title}
            </h1>
          </div>
          <div className="mt-4 hidden md:flex">
            <Link href="/webinars/123">
              <Button className="rounded-full bg-theme border border-violet-800 before:ease relative h-10 w-36 font-semibold shadow-lg text-md shadow-xl  overflow-hidden text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40">
                <span className="relative z-10">Learn More</span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-[20%] flex md:justify-around">
          <div className="md:text-center gap-y-2 flex flex-row md:flex-col">
            <div className="rounded">
              <Image
                width={124}
                height={124}
                alt="webinar"
                src={webinar.speaker.imageUrl}
                className="w-[76px] md:w-[124px] h-[76px] md:h-[124px]"
              />
            </div>
            <div className="ml-4 md:ml-0">
              <div className="text-white mt-2 font-semibold text-lg">
                {webinar.speaker.name}
              </div>
              <div className="text-slate-300 font-md text-sm">Speaker</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex md:hidden w-full">
        <Link href="/webinars/123">
          <Button className="rounded-full bg-theme border border-violet-800 before:ease relative w-full font-semibold shadow-lg text-md shadow-xl  overflow-hidden text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40">
            <span className="relative z-10">Learn More</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};
