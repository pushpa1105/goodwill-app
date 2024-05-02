import Link from "next/link";
import { Card } from "./card";
import { Button } from "@/components/ui/button";
import { WebinarCard } from "./webinar-card";
import { Speaker, Webinar } from "@prisma/client";

type WebinarWithSpeaker = Webinar & {
  speaker: Speaker;
};

interface WebinarSectionProps {
  webinars: WebinarWithSpeaker[];
}

export const WebinarSection = ({ webinars }: WebinarSectionProps) => {
  return (
    <section className="bg-linear-landing py-[45px] lg:py-[80px]">
      <div className="container lg:w-[70%] m-auto">
        <div className="text-center mb-[34px] lg:mb-[50px]">
          <div>
            <h2 className="elm-top-header">
              <span
                className="text-3xl lg:text-4xl font-extrabold text-white"
                style={{ textTransform: "none" }}
              >
                Webinars For Stock Market Traders & Investors
              </span>
            </h2>
            <p className="text-[13px] lg:text-[16px] text-white">
              Gain valuable insights and learn from stock market superheroes in
              our most popular webinars.
            </p>
          </div>
        </div>
        {webinars.length < 0 && (
          <div className="text-white text-center">
            No Courses has been published yet.
          </div>
        )}
        <div className="grid gird-cols-1 md:grid-cols-2 gap-2 md:gap-4 ">
          {/* <div className="flex justify-center flex-wrap gap-2 lg:gap-4"> */}
          {webinars.length > 0 &&
            webinars.map((webinar) => (
              <>
                <WebinarCard key={webinar.id} webinar={webinar} />
              </>
            ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/webinars" className="" target="_blank">
            <Button
              size="lg"
              className="bg-btn-main text-[14px] lg:text-[16px] font-semibold hover:shadow-lg"
            >
              View All Webinars
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
