import { db } from "@/lib/db";
import { WebinarCard, WebinarCardProps } from "./webinar-card";
import { Speaker, Webinar } from "@prisma/client";

type WebinarWithSpeaker = Webinar & {
  speaker: Speaker;
};

export const WebinarLists = async () => {
  const webinars = await db.webinar.findMany({
    where: {
      status: "upcoming",
      isPublished: true,
      OR: [
        {
          startAt: null,
        },
        {
          startAt: {
            gt: new Date(),
          },
        },
      ],
    },
    include: {
      speaker: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div className="w-50 max-w-[1200px] m-auto">
      <div className="my-8">
        <h1 className="text-2xl md:text-4xl font-bold text-white">
          Upcoming Webinars
        </h1>
      </div>
      {webinars.map((webinar) => (
        <WebinarCard key={webinar.id} webinar={webinar as WebinarWithSpeaker} />
      ))}
      {webinars.length === 0 && (
        <div className="flex justify-center text-white">
          No any upcoming webinars right now.
        </div>
      )}
    </div>
  );
};
