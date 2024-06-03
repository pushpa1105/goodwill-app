import { db } from "@/lib/db";
import { WebinarCard } from "./webinar-card";
import { Speaker, Webinar } from "@prisma/client";

type WebinarWithSpeaker = Webinar & {
  speaker: Speaker;
};

export const LiveWebinarLists = async () => {
  const webinars = await db.webinar.findMany({
    where: {
      isPublished: true,
      NOT: {
        status: "completed",
      },
      AND: [
        {
          startAt: {
            lte: new Date(),
          },
        },
        {
          endAt: {
            gte: new Date(),
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
          Ongoing Webinars
        </h1>
      </div>
      {webinars.map((webinar) => (
        <WebinarCard
          key={webinar.id}
          webinar={webinar as WebinarWithSpeaker}
          isLive={true}
        />
      ))}
      {webinars.length === 0 && (
        <div className="flex justify-center text-white">
          No any ongoing webinars right now.
        </div>
      )}
    </div>
  );
};
