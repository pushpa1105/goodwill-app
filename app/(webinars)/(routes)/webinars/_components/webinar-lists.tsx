import { db } from "@/lib/db";
import { WebinarCard, WebinarCardProps } from "./webinar-card";
import { Speaker, Webinar } from "@prisma/client";

// export const webinars = [
//   {
//     id: 1,
//     level: "Advanced",
//     language: "English",
//     title: "Smart Money Concepts trading",
//     startAt: "21 December, 10:45 pm GMT+5:45",
//     speaker: {
//       name: "Tunmise Olaoluwa",
//       imageUrl:
//         "https://media.octastatics.com/ms-webinars/speaker/avatar/tunmise/bb9532ac274d36138aac04e1aed51619.png",
//     },
//   },
//   {
//     id: 2,
//     level: "Advanced",
//     language: "English",
//     title: "Smart Money Concepts trading",
//     startAt: "21 December, 10:45 pm GMT+5:45",
//     speaker: {
//       name: "Tunmise Olaoluwa",
//       imageUrl:
//         "https://media.octastatics.com/ms-webinars/speaker/avatar/tunmise/bb9532ac274d36138aac04e1aed51619.png",
//     },
//   },
//   {
//     id: 3,
//     level: "Advanced",
//     language: "English",
//     title: "Smart Money Concepts trading",
//     startAt: "21 December, 10:45 pm GMT+5:45",
//     speaker: {
//       name: "Tunmise Olaoluwa",
//       imageUrl:
//         "https://media.octastatics.com/ms-webinars/speaker/avatar/tunmise/bb9532ac274d36138aac04e1aed51619.png",
//     },
//   },
//   {
//     id: 4,
//     level: "Advanced",
//     language: "English",
//     title: "Smart Money Concepts trading",
//     startAt: "21 December, 10:45 pm GMT+5:45",
//     speaker: {
//       name: "Tunmise Olaoluwa",
//       imageUrl:
//         "https://media.octastatics.com/ms-webinars/speaker/avatar/tunmise/bb9532ac274d36138aac04e1aed51619.png",
//     },
//   },
//   {
//     id: 5,
//     level: "Advanced",
//     language: "English",
//     title: "Smart Money Concepts trading",
//     startAt: "21 December, 10:45 pm GMT+5:45",
//     speaker: {
//       name: "Tunmise Olaoluwa",
//       imageUrl:
//         "https://media.octastatics.com/ms-webinars/speaker/avatar/tunmise/bb9532ac274d36138aac04e1aed51619.png",
//     },
//   },
//   {
//     id: 6,
//     level: "Advanced",
//     language: "English",
//     title: "Smart Money Concepts trading",
//     startAt: "21 December, 10:45 pm GMT+5:45",
//     speaker: {
//       name: "Tunmise Olaoluwa",
//       imageUrl:
//         "https://media.octastatics.com/ms-webinars/speaker/avatar/tunmise/bb9532ac274d36138aac04e1aed51619.png",
//     },
//   },
//   {
//     id: 7,
//     level: "Advanced",
//     language: "English",
//     title: "Smart Money Concepts trading",
//     startAt: "21 December, 10:45 pm GMT+5:45",
//     speaker: {
//       name: "Tunmise Olaoluwa",
//       imageUrl:
//         "https://media.octastatics.com/ms-webinars/speaker/avatar/tunmise/bb9532ac274d36138aac04e1aed51619.png",
//     },
//   },
//   {
//     id: 8,
//     level: "Advanced",
//     language: "English",
//     title: "Smart Money Concepts trading",
//     startAt: "21 December, 10:45 pm GMT+5:45",
//     speaker: {
//       name: "Tunmise Olaoluwa",
//       imageUrl:
//         "https://media.octastatics.com/ms-webinars/speaker/avatar/tunmise/bb9532ac274d36138aac04e1aed51619.png",
//     },
//   },
//   {
//     id: 1,
//     level: "Advanced",
//     language: "English",
//     title: "Smart Money Concepts trading",
//     startAt: "21 December, 10:45 pm GMT+5:45",
//     speaker: {
//       name: "Tunmise Olaoluwa",
//       imageUrl:
//         "https://media.octastatics.com/ms-webinars/speaker/avatar/tunmise/bb9532ac274d36138aac04e1aed51619.png",
//     },
//   },
//   {
//     id: 2,
//     level: "Advanced",
//     language: "English",
//     title: "Smart Money Concepts trading",
//     startAt: "21 December, 10:45 pm GMT+5:45",
//     speaker: {
//       name: "Tunmise Olaoluwa",
//       imageUrl:
//         "https://media.octastatics.com/ms-webinars/speaker/avatar/tunmise/bb9532ac274d36138aac04e1aed51619.png",
//     },
//   },
//   {
//     id: 3,
//     level: "Advanced",
//     language: "English",
//     title: "Smart Money Concepts trading",
//     startAt: "21 December, 10:45 pm GMT+5:45",
//     speaker: {
//       name: "Tunmise Olaoluwa",
//       imageUrl:
//         "https://media.octastatics.com/ms-webinars/speaker/avatar/tunmise/bb9532ac274d36138aac04e1aed51619.png",
//     },
//   },
//   {
//     id: 4,
//     level: "Advanced",
//     language: "English",
//     title: "Smart Money Concepts trading",
//     startAt: "21 December, 10:45 pm GMT+5:45",
//     speaker: {
//       name: "Tunmise Olaoluwa",
//       imageUrl:
//         "https://media.octastatics.com/ms-webinars/speaker/avatar/tunmise/bb9532ac274d36138aac04e1aed51619.png",
//     },
//   },
//   {
//     id: 5,
//     level: "Advanced",
//     language: "English",
//     title: "Smart Money Concepts trading",
//     startAt: "21 December, 10:45 pm GMT+5:45",
//     speaker: {
//       name: "Tunmise Olaoluwa",
//       imageUrl:
//         "https://media.octastatics.com/ms-webinars/speaker/avatar/tunmise/bb9532ac274d36138aac04e1aed51619.png",
//     },
//   },
//   {
//     id: 6,
//     level: "Advanced",
//     language: "English",
//     title: "Smart Money Concepts trading",
//     startAt: "21 December, 10:45 pm GMT+5:45",
//     speaker: {
//       name: "Tunmise Olaoluwa",
//       imageUrl:
//         "https://media.octastatics.com/ms-webinars/speaker/avatar/tunmise/bb9532ac274d36138aac04e1aed51619.png",
//     },
//   },
//   {
//     id: 7,
//     level: "Advanced",
//     language: "English",
//     title: "Smart Money Concepts trading",
//     startAt: "21 December, 10:45 pm GMT+5:45",
//     speaker: {
//       name: "Tunmise Olaoluwa",
//       imageUrl:
//         "https://media.octastatics.com/ms-webinars/speaker/avatar/tunmise/bb9532ac274d36138aac04e1aed51619.png",
//     },
//   },
//   {
//     id: 8,
//     level: "Advanced",
//     language: "English",
//     title: "Smart Money Concepts trading",
//     startAt: "21 December, 10:45 pm GMT+5:45",
//     speaker: {
//       name: "Tunmise Olaoluwa",
//       imageUrl:
//         "https://media.octastatics.com/ms-webinars/speaker/avatar/tunmise/bb9532ac274d36138aac04e1aed51619.png",
//     },
//   },
// ];

type WebinarWithSpeaker = Webinar & {
  speaker: Speaker;
};

export const WebinarLists = async () => {
  const webinars = await db.webinar.findMany({
    where: {
      status: "upcoming",
      isPublished: true,
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
        <h1 className="text-2xl md:text-4xl font-bold text-white">Upcoming Webinars</h1>
      </div>
      {webinars.map((webinar) => (
        <WebinarCard key={webinar.id} webinar={webinar as WebinarWithSpeaker} />
      ))}
    </div>
  );
};
