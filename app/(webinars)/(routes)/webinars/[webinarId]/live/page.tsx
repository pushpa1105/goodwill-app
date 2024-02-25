import { Chat } from "./_components/chat";

const WebinarLivePage = () => {
  return (
    <div className="bg-theme">
      <div className=" m-auto py lg:p-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {/* <div className="h-[65vh] lg:h-[85vh] w-full lg:w-[75%]"> */}
          <div className="col-span-3 h-[35vh] lg:h-[88vh] lg:rounded-2xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/P_Ke3ktMeGg?si=du6qR1kmFZlQomrc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="lg:rounded-2xl"
            ></iframe>
          </div>
          <div className="col-span-2 lg:col-span-1 h-[55vh] lg:h-[88vh]">
            <Chat/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarLivePage;
