"use client";

import { Preview } from "@/components/preview";
import { Button } from "@/components/ui/button";
import { Speaker, Webinar } from "@prisma/client";
import { Tv } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SubscriptionModal } from "../[slug]/_components/subscription-modal";

type WebinarWithSpeaker = Webinar & {
  speaker: Speaker;
};
export interface WebinarCardProps {
  webinar: WebinarWithSpeaker;
  isLive?: Boolean;
}

export const WebinarCard = ({ webinar, isLive = false }: WebinarCardProps) => {
  const defaultImageUrl =
    "https://media.octastatics.com/ms-webinars/speaker/avatar/tunmise/bb9532ac274d36138aac04e1aed51619.png";
  return (
    <div className="p-4 m-4 md:my-8 rounded-lg bg-white landing-box-shadow">
      <div className="flex flex-wrap">
        <div className=" w-full md:w-[80%] mt-4 md:px-4">
          <div>
            <div className="bg-theme  border border-indigo-400 text-white text-md rounded-lg px-2 font-medium mb-2 w-fit	">
              {webinar.startAt?.toLocaleString("en-US", {
                year: "numeric",
                day: "numeric",
                month: "short",
                hour: "numeric",
                minute: "numeric",
                hour12: true,
                timeZoneName: "short",
                timeZone: "Asia/Kolkata", // India's time zone
              })}
            </div>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4">
            <div className="bg-theme border border-indigo-400 text-white text-sm font-medium rounded-full px-2">
              {webinar.level}
            </div>
            <div className="bg-theme border border-indigo-400 text-white text-sm  font-medium rounded-full px-2">
              {webinar.language}
            </div>
          </div>
          <div className="my-4">
            <h1 className="text-xl md:text-3xl font-bold text-theme">
              {webinar.title}
            </h1>
          </div>
          <div className="my-4">
            <h1 className="text-sm">
              <Preview value={webinar.description!} />
            </h1>
          </div>
          <div className="mt-4 hidden md:flex">
            <Link href={`/webinars/${webinar.slug}`} className="mr-2">
              <Button className="rounded-full bg-theme border border-violet-800 before:ease relative h-10 w-36 font-semibold shadow-lg text-md shadow-xl  overflow-hidden text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40">
                <span className="relative z-10">Learn More</span>
              </Button>
            </Link>
            {isLive ? (
              <Link href={`/webinars/${webinar.slug}/live`}>
                <Button className="rounded-full bg-theme border border-violet-800 before:ease relative h-10 w-40 font-semibold shadow-lg text-md shadow-xl  overflow-hidden text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40">
                  <Tv />
                  <span className="relative z-10 ml-2">Watch Live</span>
                </Button>
              </Link>
            ) : (
              <div >
                {new Date(webinar.startAt!!) > new Date() && (
                  <SubscriptionModal webinar={webinar}>
                    <Button className="rounded-full bg-theme border border-violet-800 before:ease relative h-full w-full xl:h-35 xl:w-40 font-semibold shadow-lg text-md shadow-xl  overflow-hidden text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40">
                      <span className="relative z-10">Subscribe</span>
                    </Button>
                  </SubscriptionModal>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="w-full md:w-[20%] flex md:justify-around">
          <div className="md:text-center gap-y-2 flex flex-row md:flex-col">
            <div>
              <Image
                width={124}
                height={124}
                alt="webinar"
                src={webinar?.speaker?.imageUrl || defaultImageUrl}
                className="w-[76px] md:w-[124px] h-[76px] md:h-[124px] rounded-full"
              />
            </div>
            <div className="ml-4 md:ml-0">
              <div className="text-theme mt-2 font-semibold text-lg">
                {webinar.speaker.name}
              </div>
              <div className="webinar-text-theme font-md text-sm">Speaker</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex md:hidden w-full">
        <Link href={`/webinars/${webinar.slug}`} className="w-full">
          <Button className="rounded-full bg-theme border border-violet-800 before:ease relative w-full font-semibold shadow-lg text-md shadow-xl  overflow-hidden text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40">
            <span className="relative z-10">Learn More</span>
          </Button>
        </Link>
      </div>
      <div className="mt-4 flex md:hidden w-full">
      {isLive ? (
              <Link href={`/webinars/${webinar.slug}/live`}>
                <Button className="rounded-full bg-theme border border-violet-800 before:ease relative h-10 w-40 font-semibold shadow-lg text-md shadow-xl  overflow-hidden text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40">
                  <Tv />
                  <span className="relative z-10 ml-2">Watch Live</span>
                </Button>
              </Link>
            ) : (
              <div >
                {new Date(webinar.startAt!!) > new Date() && (
                  <SubscriptionModal webinar={webinar}>
                    <Button className="rounded-full bg-theme border border-violet-800 before:ease relative h-full w-full xl:h-35 xl:w-40 font-semibold shadow-lg text-md shadow-xl  overflow-hidden text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40">
                      <span className="relative z-10">Subscribe</span>
                    </Button>
                  </SubscriptionModal>
                )}
              </div>
            )}
      </div>
    </div>
  );
};
