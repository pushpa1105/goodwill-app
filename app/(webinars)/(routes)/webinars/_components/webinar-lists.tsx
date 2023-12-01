import { WebinarCard } from "./webinar-card";

const webinars = [
  {
    id: 1,
    level: "Advanced",
    langugae: "English",
    startAt: "21 December, 10:45 pm GMT+5:45",
    speaker: {
      name: "Tunmise Olaoluwa",
      imageUrl:
        "https://media.octastatics.com/ms-webinars/speaker/avatar/tunmise/bb9532ac274d36138aac04e1aed51619.png",
    },
  },
  {
    id: 2,
    level: "Advanced",
    langugae: "English",
    startAt: "21 December, 10:45 pm GMT+5:45",
    speaker: {
      name: "Tunmise Olaoluwa",
      imageUrl:
        "https://media.octastatics.com/ms-webinars/speaker/avatar/tunmise/bb9532ac274d36138aac04e1aed51619.png",
    },
  },
  {
    id: 3,
    level: "Advanced",
    langugae: "English",
    startAt: "21 December, 10:45 pm GMT+5:45",
    speaker: {
      name: "Tunmise Olaoluwa",
      imageUrl:
        "https://media.octastatics.com/ms-webinars/speaker/avatar/tunmise/bb9532ac274d36138aac04e1aed51619.png",
    },
  },
  {
    id: 4,
    level: "Advanced",
    langugae: "English",
    startAt: "21 December, 10:45 pm GMT+5:45",
    speaker: {
      name: "Tunmise Olaoluwa",
      imageUrl:
        "https://media.octastatics.com/ms-webinars/speaker/avatar/tunmise/bb9532ac274d36138aac04e1aed51619.png",
    },
  },
  {
    id: 5,
    level: "Advanced",
    langugae: "English",
    startAt: "21 December, 10:45 pm GMT+5:45",
    speaker: {
      name: "Tunmise Olaoluwa",
      imageUrl:
        "https://media.octastatics.com/ms-webinars/speaker/avatar/tunmise/bb9532ac274d36138aac04e1aed51619.png",
    },
  },
  {
    id: 6,
    level: "Advanced",
    langugae: "English",
    startAt: "21 December, 10:45 pm GMT+5:45",
    speaker: {
      name: "Tunmise Olaoluwa",
      imageUrl:
        "https://media.octastatics.com/ms-webinars/speaker/avatar/tunmise/bb9532ac274d36138aac04e1aed51619.png",
    },
  },
  {
    id: 7,
    level: "Advanced",
    langugae: "English",
    startAt: "21 December, 10:45 pm GMT+5:45",
    speaker: {
      name: "Tunmise Olaoluwa",
      imageUrl:
        "https://media.octastatics.com/ms-webinars/speaker/avatar/tunmise/bb9532ac274d36138aac04e1aed51619.png",
    },
  },
  {
    id: 8,
    level: "Advanced",
    langugae: "English",
    startAt: "21 December, 10:45 pm GMT+5:45",
    speaker: {
      name: "Tunmise Olaoluwa",
      imageUrl:
        "https://media.octastatics.com/ms-webinars/speaker/avatar/tunmise/bb9532ac274d36138aac04e1aed51619.png",
    },
  },
];

export const WebinarLists = () => {
  return (
    <div>
      {webinars.map((webinar) => (
        <WebinarCard key={webinar.id} webinar={webinar}/>
      ))}
    </div>
  );
};
