"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

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
    <div className="shadow-xl p-4 m-4 md:my-4 rounded-lg bg-[#2101a9] bg-theme border border-indigo-400">
      <div className="flex flex-wrap">
        <div className=" w-full md:w-[80%] mt-4 px-4">
          <div className="flex gap-x-4 mb-4">
            <div className="bg-theme border border-indigo-400 text-white text-sm rounded-full px-2">
              {webinar.level}
            </div>
            <div className="bg-theme border border-indigo-400 text-white text-sm rounded-full px-2">
              {webinar.langugae}
            </div>
            <div className="bg-theme border border-indigo-400 text-white text-sm rounded-full px-2">
              {webinar.startAt}
            </div>
          </div>
          <div className="my-4">
            <h1 className="text-xl md:text-3xl font-medium">{webinar.title}</h1>
          </div>
          <div className="my-4">
            <h1 className="text-sm">
              {webinar.title} {webinar.title} {webinar.title}
              {webinar.title} {webinar.title} {webinar.title}
            </h1>
          </div>
          <div className="mt-4 hidden md:flex">
            <Button className="rounded-full bg-theme border border-indigo-400 font-bold text-md">
              Learn More
            </Button>
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
              <div className="text-white mt-2">{webinar.speaker.name}</div>
              <div className="text-muted-foreground">Speaker</div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="grid grid-rows-3 grid-flow-row md:grid-flow-col gap-4">
        <div className="row-span-3 col-span-2 mt-4">
          <div className="flex gap-x-4 mb-4">
            <div className="bg-theme border border-indigo-400 text-white text-sm rounded-full px-2">
              {webinar.level}
            </div>
            <div className="bg-theme border border-indigo-400 text-white text-sm rounded-full px-2">
              {webinar.langugae}
            </div>
            <div className="bg-theme border border-indigo-400 text-white text-sm rounded-full px-2">
              {webinar.startAt}
            </div>
          </div>
          <div className="my-4">
            <h1 className="text-xl md:text-3xl font-medium">{webinar.title}</h1>
          </div>
          <div className="my-4">
            <h1 className="text-sm">
              {webinar.title} {webinar.title} {webinar.title}
              {webinar.title} {webinar.title} {webinar.title}
            </h1>
          </div>
          <div className="mt-4 hidden md:flex">
            <Button className="rounded-full bg-theme border border-indigo-400 font-bold text-md">
              Learn More
            </Button>
          </div>
        </div>
        <div className="row-span-3 flex justify-around">
          <div className="text-center gap-y-2 flex flex-row md:flex-col">
            <div className="rounded">
              <Image
                width={124}
                height={124}
                alt="webinar"
                src={webinar.speaker.imageUrl}
              />
            </div>
            <div>
              <div className="text-white mt-2">{webinar.speaker.name}</div>
              <div className="text-muted-foreground">Speaker</div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="mt-4 flex md:hidden w-full">
        <Button className="rounded-full bg-theme border border-indigo-400 font-bold text-md w-full">
          Learn More
        </Button>
      </div>
    </div>
  );
};
