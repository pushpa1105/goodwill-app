import { Button } from "@/components/ui/button";
import Image from "next/image";

const webinar = {
  id: 1,
  level: "Advanced",
  langugae: "English",
  title: "Smart Money Concepts trading",
  startAt: "21 December, 10:45 pm GMT+5:45",
  banner:
    "https://kivys.stripocdn.email/content/guids/CABINET_e379a0108ca05ebfe1e52fede2455137/images/tunmise_4075_rQ4.png",
  speaker: {
    name: "Tunmise Olaoluwa",
    imageUrl:
      "https://media.octastatics.com/ms-webinars/speaker/avatar/tunmise/bb9532ac274d36138aac04e1aed51619.png",
  },
  // learnings: ``,
};

const WebinarPage = () => {
  return (
    <div className="bg-theme h-full">
      <div className="max-w-auto md:max-w-[75%] m-auto p-4">
        <div className="flex flex-wrap gap-x-4 gap-y-2 py-4">
          <div className="bg-theme border border-indigo-400 text-white text-sm font-medium rounded-full px-4 py-2">
            {webinar.level}
          </div>
          <div className="bg-theme border border-indigo-400 text-white text-sm  font-medium rounded-full px-4 py-2">
            {webinar.langugae}
          </div>
          <div className="bg-theme border border-indigo-400 text-white text-sm rounded-full px-2 font-medium px-4 py-2">
            {webinar.startAt}
          </div>
        </div>
        <div>
          <h1 className="text-2xl md:text-4xl font-bold webinar-text-theme">
            {webinar.title}
          </h1>
        </div>
        <div className="flex flex-wrap mt-8">
          <div className="relative w-full lg:w-1/2 aspect-video rounded-2xl overflow-hidden mr-8">
            <Image
              fill
              className="object-cover group-hover:scale-110 transition duration-250 rounded"
              alt="blog"
              src={webinar.banner}
            />
          </div>
          <div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold webinar-text-theme">
                What you will learn
              </h1>
            </div>
            <div>
              <ul>
                <li>
                  ways to analyse the market and news before opening an order{" "}
                </li>
                <li>methods of opening and closing orders in real time </li>
                <li>steps of trading the market </li>
                <li>answers to your questions. </li>
              </ul>
            </div>
            <div className="mt-4">
              <Button size="lg" className="shrink-0">
                Subscribe
              </Button>
            </div>
          </div>
          <div className="shadow-xl md:py-8 m-4 md:mx-0 mt-8 rounded-lg bg-[#2101a9] bg-theme">
            <div className="flex flex-wrap">
              <div className=" w-full md:w-[80%] mt-4 md:px-4">
                <div className="my-4">
                  <h1 className="text-xl md:text-3xl font-medium webinar-text-theme">
                    {webinar.title}
                  </h1>
                </div>
                <div className="my-4">
                  <h1 className="text-sm">
                    {webinar.title} {webinar.title} {webinar.title}
                    {webinar.title} {webinar.title} {webinar.title}
                  </h1>
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
                    <div className="text-white mt-2 font-semibold text-lg">
                      {webinar.speaker.name}
                    </div>
                    <div className="text-slate-300 font-md text-sm">
                      Speaker
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarPage;
