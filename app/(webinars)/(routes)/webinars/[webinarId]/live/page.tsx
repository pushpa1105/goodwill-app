import dynamic from "next/dynamic";

const ZoomComponent = dynamic(() => import("./_components/zoom-component"), {
  ssr: false,
});

// const webinar = {
//   id: 1,
//   level: "Advanced",
//   langugae: "English",
//   title: "Smart Money Concepts trading",
//   startAt: "21 December, 10:45 pm GMT+5:45",
//   banner:
//     "https://kivys.stripocdn.email/content/guids/CABINET_e379a0108ca05ebfe1e52fede2455137/images/tunmise_4075_rQ4.png",
//   speaker: {
//     name: "Tunmise Olaoluwa",
//     imageUrl:
//       "https://media.octastatics.com/ms-webinars/speaker/avatar/tunmise/bb9532ac274d36138aac04e1aed51619.png",
//   },
//   // learnings: ``,
// };

const WebinarLivePage = () => {
  return (
    <div className="bg-theme h-full">
      <div className="max-w-auto md:max-w-[75%] m-auto p-4">
        <div>
          <ZoomComponent />
        </div>
      </div>
    </div>
  );
};

export default WebinarLivePage;
