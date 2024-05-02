import { Preview } from "@/components/preview";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { Speaker, Webinar } from "@prisma/client";
import Image from "next/image";
import { SubscriptionModal } from "./_components/subscription-modal";
import { BackButton } from "@/components/back-button";

type WebinarWithSpeaker = Webinar & {
  speaker: Speaker;
};

const WebinarPage = async ({ params }: { params: { slug: string } }) => {
  const webinar = (await db.webinar.findUnique({
    where: {
      slug: params.slug,
      isPublished: true,
    },
    include: {
      speaker: true,
    },
  })) as WebinarWithSpeaker;
  return (
    <div className="bg-theme min-h-[98.4vh]">
      {webinar && (
        <div className="max-w-auto md:max-w-[75%] m-auto p-4 h-full">
          <BackButton path="/webinars"/>
          <div className="flex flex-wrap gap-x-4 gap-y-2 py-4">
            <div className="bg-theme border border-indigo-400 text-white text-sm font-medium rounded-full px-4 py-2">
              {webinar.level}
            </div>
            <div className="bg-theme border border-indigo-400 text-white text-sm  font-medium rounded-full px-4 py-2">
              {webinar.language}
            </div>
            <div className="bg-theme border border-indigo-400 text-white text-sm rounded-full px-2 font-medium px-4 py-2">
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
          <div>
            <h1 className="text-2xl md:text-5xl font-bold text-white">
              {webinar.title}
            </h1>
          </div>
          <div className="flex flex-wrap md:mt-8 h-full">
            <div className="relative w-full xl:w-1/2 aspect-video rounded-2xl overflow-hidden mr-8">
              <Image
                fill
                className="object-cover group-hover:scale-110 transition duration-250 rounded"
                alt="blog"
                src={webinar.imageUrl as string}
              />
            </div>
            <div>
              <div className="mt-4 xl:mt-0">
                <h1 className="text-xl md:text-2xl font-bold text-white">
                  What you will learn
                </h1>
              </div>
              <div className="!text-white">
                <Preview value={webinar.learnings!} />
              </div>
              <div className="mt-4">
                {new Date(webinar.startAt!!) > new Date() && (
                  <SubscriptionModal webinar={webinar}>
                    <Button className="rounded-full bg-theme border border-violet-800 before:ease relative h-full w-full xl:h-35 xl:w-40 font-semibold shadow-lg text-md shadow-xl  overflow-hidden text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40">
                      <span className="relative z-10">Subscribe</span>
                    </Button>
                  </SubscriptionModal>
                )}
              </div>
            </div>
            <div className="shadow-xl landing-box-shadow md:py-8 m p-2 md:mx-0 mt-8 rounded-lg bg-white w-full">
              <div className="flex flex-wrap w-full">
                <div className=" w-full md:w-[80%] mt-4 md:px-4">
                  <div className="mb-4">
                    <h1 className="text-xl md:text-3xl text-theme font-extrabold">
                      Speaker
                    </h1>
                  </div>
                  <div className="my-4">
                    <Preview value={webinar.speaker.about!} />
                  </div>
                </div>
                <div className="w-full md:w-[20%] flex md:justify-around ml-4 md:ml-0">
                  <div className="md:text-center gap-y-2 flex flex-row md:flex-col justify-center items-center">
                    <div className="rounded">
                      <Image
                        width={124}
                        height={124}
                        alt="webinar"
                        src={webinar.speaker.imageUrl as string}
                        className="w-[76px] md:w-[124px] h-[76px] md:h-[124px] rounded-full"
                      />
                    </div>
                    <div className="ml-4 md:ml-0">
                      <div className="text-theme mt-2 font-semibold text-lg">
                        {webinar.speaker.name}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebinarPage;
