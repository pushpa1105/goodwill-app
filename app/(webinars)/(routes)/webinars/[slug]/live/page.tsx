import { BackButton } from "@/components/back-button";
import { Chat } from "./_components/chat";

const WebinarLivePage = () => {
  return (
    <div className="bg-theme h-full w-full">
      <div className=" m-auto py lg:p-4 h-full w-full">
        <BackButton path="/webinars"/>
        <div className="block lg:flex h-full w-full gap-2">
          <div className="lg:rounded-2xl h-[50%] lg:h-[95%] w-full lg:w-[64%]">
            <iframe
              width="100%"
              height="100%"
              src="https://vid.gwcindia.live/embed/video"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="lg:rounded-2xl"
            ></iframe>
          </div>
          <div className="h-[50%] lg:h-[98%] w-full lg:w-[34%]">
            <Chat/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarLivePage;
