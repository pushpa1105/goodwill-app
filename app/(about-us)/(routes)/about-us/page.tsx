/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { AboutCarousel } from "./_components/Carousel";

const AboutPage = () => {
  return (
    <div className="glass">
      <section className="h-min relative bg-no-repeat bg-cover w-full bg-[#000] pb-[15em]">
        <section className="block max-w-[1550px] m-auto px-4 md:px-10 xl:px-24 sm:px-4 pb-20 lg:z-10 lg:relative">
          <div className="grid lg:grid-cols-1 pt-10 grid-cols-1">
            <h1 className="text-theme text-3xl text-center font-semibold">
              We are Raising The Bar for Financial Services in India.
            </h1>
            <div className="mt-2">
              <main className="flex justify-center">
                <AboutCarousel />
              </main>
            </div>
          </div>
        </section>
      </section>
      <section className="block slab2">
        <div className="px-4 md:px-10 max-w-[1550px] mx-auto xl:px-24 sm:px-4 lg:z-10">
          <div className="border-[0.5px] lg:px-40 p-10 z-50 lg:border-[#DADADA] !bg-[#ffffff] drop-shadow-[0_0px_20px_0px_rgba(187, 221, 255, 0.40)] rounded-[12px] relative top-[-13em]">
            <h2 className="text-theme lg:text-3xl text-2xl font-bold text-center">
              We&apos;re here - to help you invest in India, <br />
              to help you build wealth.
            </h2>
            <br />
            <p className="text-[#8E8E8E] lg:text-lg text-base font-medium text-center">
              Started in 2008, Goodwill now has a presence in over 100+
              locations with over 2000APs, and 650+ employees serving over 2
              Lakhs+ customers nationwide. Goodwill earned the trust of these
              valued investors by providing them with top-notch services in
              various trading and investment activities
            </p>
            <br />
            <p className="text-[#8E8E8E] lg:text-lg text-base font-medium text-center">
              Goodwill is the market leader in the Indian stock market providing
              investors with personalized and prompt services. Goodwill with
              over a decade of expertise has been awarded time and time again by
              NSE, BSE and MCX.
            </p>
            <br />
            <p className="text-[#8E8E8E] lg:text-lg text-base font-medium text-center">
              As financial services are becoming more accessible, there is now a
              Goodwill revels in its attention to detail services which enables
              the investors to reach their smart goals in no time. Lovingly
              called as the Financial supermarket, providing all services under
              one roof, Goodwill&apos;s specialities are not few. Personalized
              services, lowest recorded brokerage charges, latest tech tool
              support and tested apps to simplify trading procedures, free
              training, and live updates are just the surface services in
              Goodwill&apos;s highly transparent service list. Strictly adhering
              to SEBI guidelines. With multiple branches spread across the
              nation, Goodwill provides multi-language support and at-home
              training to keep you at ease to help you trade at maximum
              efficiency.
            </p>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 gap-6 relative top-[-10em]">
            <div className="rounded-[16px] border-[0.5px] border-[#EBEBEB] p-3">
              <img
                src="https://stock-logos.dhan.co/static-openweb/Frame-1.svg"
                alt="icon1"
                className="w-auto h-auto"
              />
              <h3 className="text-[#363636] pt-3 lg:text-xl text-lg font-bold">
                Established in 2008
              </h3>
            </div>
            <div className="rounded-[16px] border-[0.5px] border-[#EBEBEB] p-3">
              <img
                src="https://stock-logos.dhan.co/static-openweb/Frame-2.svg"
                alt="icon1"
                className="w-auto h-auto"
              />
              <h3 className="text-[#363636] pt-3 lg:text-xl text-lg font-bold">
                Goodwill now has offices in over 100+ locations
              </h3>
            </div>
            <div className="rounded-[16px] border-[0.5px] border-[#EBEBEB] p-3">
              <img
                src="https://stock-logos.dhan.co/static-openweb/Frame-3.svg"
                alt="icon1"
                className="w-auto h-auto"
              />
              <h3 className="text-[#363636] pt-3 lg:text-xl text-lg font-bold">
                serving about 2,00,000 + customers nationwide.
              </h3>
            </div>
            <div className="rounded-[16px] border-[0.5px] border-[#EBEBEB] p-3">
              <img
                src="https://stock-logos.dhan.co/static-openweb/Frame-4.svg"
                alt="icon1"
                className="w-auto h-auto"
              />
              <h3 className="text-[#363636] pt-3 lg:text-xl text-lg font-bold">
                Over 650 employees across India
              </h3>
            </div>
          </div>
        </div>
        <img
          src="https://stock-logos.dhan.co/static-openweb/dhanBorderL.png"
          alt="line"
        />
      </section>
      <section className="block max-w-[1550px] m-auto px-4 md:px-10 xl:px-24 sm:px-4 lg:pt-20 lg:pb-24 pt-14 pb-14 lg:z-10 lg:relative">
        <h2 className="text-[#363636] lg:text-3xl text-2xl font-bold text-center">
          VISION, <span className="text-theme">MISSION AND TEAM</span>
        </h2>
        <br />
        <p className="text-[#8E8E8E] lg:text-lg text-base font-medium text-center">
          The company has all it takes the ensures efficiency and reliability in
          its services and,more important,it is driven by a convergent set of
          vision,mission and values enabling it to work single-mindedly towards
          fulfilling the interests and aspirations of its customers.
        </p>
        <br />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 pt-5">
          <div className="rounded-[16px] border-[0.5px] border-[#EBEBEB] p-3">
            <h3 className="text-theme pt-3 lg:text-xl text-lg font-bold">
              Our Vision
            </h3>
            <p className="text-[#8E8E8E] pt-2 text-sm font-medium">
              To be seen by the trader and investor communities as a reliable,
              efficient, trustworthy partner in their endeavour to prepare for
              and enjoy a secure, comfortable and prosperous future at various
              stages in their lives.
            </p>
          </div>
          <div className="rounded-[16px] border-[0.5px] border-[#EBEBEB] p-3">
            <h3 className="text-theme pt-3 lg:text-xl text-lg font-bold">
              Our Misson
            </h3>
            <p className="text-[#8E8E8E] pt-2 text-sm font-medium">
              To deploy all the resources, human and technological, at the
              disposal of our customers and help them create and preserve wealth
              through consistently intelligent investment decisions.
            </p>
          </div>
          <div className="rounded-[16px] border-[0.5px] border-[#EBEBEB] p-3">
            <h3 className="text-theme pt-3 lg:text-xl text-lg font-bold">
              Our Team
            </h3>
            <p className="text-[#8E8E8E] pt-2 text-sm font-medium">
              Goodwill will at all times have a full-fledged team of experts and
              support personnel, dedicated to meeting customers’ goals and
              available 24x7 for advice and direction
            </p>
          </div>
        </div>
      </section>
      <img
        src="https://stock-logos.dhan.co/static-openweb/dhanBorder.png"
        alt="line"
      />
      <section className="block">
        <div className="max-w-[1550px] m-auto px-4 md:px-10 xl:px-24 sm:px-4 lg:pt-20 lg:pb-24 pt-14 pb-14 lg:z-10 lg:relative">
          <div>
            <h2 className="text-[#DADADA] lg:text-3xl text-2xl font-bold text-center">
              Our{" "}
              <span className="text-theme">PARTNERSHIP FOR PROSPERITY</span>
            </h2>
            <br />
            <p className="lg:text-lg text-base font-medium text-center">
              True to its name, as a goodwill gesture, the company offers free
              training at all its branches every Saturday. In association with
              MCX and others representing the industry, we have conducted more
              than 300 seminars and training programs aimed at benefiting our
              customers and the investing public.
            </p>
            <img
              src="/about-partnership.jpg"
              alt="partnership"
              className="w-75 h-auto m-auto"
            />
            <p className="lg:text-lg text-base font-medium text-center w-[75%] m-auto">
              We constantly explore ways and means to empower you with knowledge
              and insights. An example of this effort can be seen in our
              personalised services in the form of:
            </p>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-6 mt-8">
            <div className="rounded-[16px] border-[0.5px] border-[#EBEBEB] p-3">
              <img
                src="https://stock-logos.dhan.co/static-openweb/Frame-1.svg"
                alt="icon1"
                className="w-auto h-auto"
              />
              <h3 className="text-[#363636] pt-3 lg:text-xl text-lg font-bold">
                Multi-lingual Support
              </h3>
            </div>
            <div className="rounded-[16px] border-[0.5px] border-[#EBEBEB] p-3">
              <img
                src="https://stock-logos.dhan.co/static-openweb/Frame-2.svg"
                alt="icon1"
                className="w-auto h-auto"
              />
              <h3 className="text-[#363636] pt-3 lg:text-xl text-lg font-bold">
                Advanced Trading Software
              </h3>
            </div>
            <div className="rounded-[16px] border-[0.5px] border-[#EBEBEB] p-3">
              <img
                src="https://stock-logos.dhan.co/static-openweb/Frame-3.svg"
                alt="icon1"
                className="w-auto h-auto"
              />
              <h3 className="text-[#363636] pt-3 lg:text-xl text-lg font-bold">
                Engagement through Real-time and live chats
              </h3>
            </div>
            <div className="rounded-[16px] border-[0.5px] border-[#EBEBEB] p-3">
              <img
                src="https://stock-logos.dhan.co/static-openweb/Frame-4.svg"
                alt="icon1"
                className="w-auto h-auto"
              />
              <h3 className="text-[#363636] pt-3 lg:text-xl text-lg font-bold">
                Technical videos and consultancy
              </h3>
            </div>
          </div>
          <p className="text-end mt-2 font-extralight">
            *All the above services are offered free of cost to all our
            customers.
          </p>
        </div>
        <img
          src="https://stock-logos.dhan.co/static-openweb/dhanBorder.png"
          alt="line"
        />
      </section>
      <section className="block max-w-[1550px] m-auto px-4 md:px-10 xl:px-24 sm:px-4 lg:pt-20 lg:pb-24 pt-14 pb-14 lg:z-10 lg:relative">
        <h2 className="text-theme lg:text-3xl text-2xl font-bold text-center">
          OUR SERVICES
        </h2>
        <br />
        <p className="text-[#8E8E8E] lg:text-lg text-base font-medium text-center">
          Goodwill offers you a comprehensive range of trading and investment
          opportunities: Commodity, Equity, Currency, Derivatives, Mutual funds
          and exchange-traded funds.
        </p>
        <br />
        <p className="text-[#8E8E8E] lg:text-lg text-base font-medium text-center">
          We make trading absolutely a matter of ease and convenience. Depending
          on your profile that spells out your goals, we offer different kinds
          of value-added services and brokerage plans for both online as well as
          offline equity trading.
        </p>
        <br />
        <p className="text-[#8E8E8E] lg:text-lg text-base font-medium text-center">
          Investors with Little or no experience need not feel anxious or
          apperehensive. We will straight away help you get into a zone of
          confort and confidence by equipping you with all the knowledge that
          you need,along with the mechanics of the system.
        </p>
        <div className="max-w-[900px] grid grid-cols-3 gap-12 pt-5 px-4 m-auto">
          <div className="rounded-[16px] border-[0.5px] border-[#7f66e9] p-3">
            <h3 className="text-theme pt-3 lg:text-xl text-lg font-bold">
              Commodity
            </h3>
            <img src="/oil.png" alt="oil" />
          </div>
          <div className="rounded-[16px] border-[0.5px] border-[#7f66e9] p-3">
            <h3 className="text-theme pt-3 lg:text-xl text-lg font-bold">
              Equity
            </h3>
            <img src="/equity.png" alt="oil" />
          </div>
          <div className="rounded-[16px] border-[0.5px] border-[#7f66e9] p-3">
            <h3 className="text-theme pt-3 lg:text-xl text-lg font-bold">
              Currency
            </h3>
            <img src="/money.png" alt="oil" />
          </div>
        </div>
      </section>
      <img
        src="https://stock-logos.dhan.co/static-openweb/dhanBorderL.png"
        alt="line"
      />
      <section className="block max-w-[1550px] m-auto px-4 md:px-10 xl:px-24 sm:px-4 lg:pt-20 lg:pb-24 pt-14 pb-14 lg:z-10 lg:relative">
        <h2 className="text-theme lg:text-3xl text-2xl font-bold text-center">
          WHY GOODWILL
        </h2>
        <br />
        <p className="lg:text-lg text-base font-medium text-center">
          It’s quite natural that you would like to know why going with Goodwill
          is a good idea. Here’s why:
        </p>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 pt-5">
          <div className="rounded-[16px] border-[0.5px] border-[#EBEBEB] p-3">
            <h3 className="text-theme pt-3 lg:text-xl text-lg font-bold">
              Market leader at your service
            </h3>
            <p className="text-[#8E8E8E] pt-2 text-sm font-medium">
              In just about 8 years, we have transformed the face of trading. In
              a pioneering spirit, we created the concept of high-exposure
              trading and are ceaselessly striving to help you connect with the
              markets in fresh and innovative ways.
            </p>
          </div>
          <div className="rounded-[16px] border-[0.5px] border-[#EBEBEB] p-3">
            <h3 className="text-theme pt-3 lg:text-xl text-lg font-bold">
              The latest technology at your disposal
            </h3>
            <p className="text-[#8E8E8E] pt-2 text-sm font-medium">
              Be it Security, Reliability, Speed or Performance, the technology
              we offer satisfies all the criteria critical to smooth and safe
              trading activities. Furthermore, our platform is integrated with a
              range of advanced tools for charting, trading and technical
              analysis.
            </p>
          </div>
          <div className="rounded-[16px] border-[0.5px] border-[#EBEBEB] p-3">
            <h3 className="text-theme pt-3 lg:text-xl text-lg font-bold">
              Access to opportunities across segments
            </h3>
            <p className="text-[#8E8E8E] pt-2 text-sm font-medium">
              We enable you to take advantage of opportunities in Equity,
              Commodity and Currency the NSE, BSE and MCX.
            </p>
          </div>
          <div className="rounded-[16px] border-[0.5px] border-[#EBEBEB] p-3">
            <h3 className="text-theme pt-3 lg:text-xl text-lg font-bold">
              Dedicated service and support
            </h3>
            <p className="text-[#8E8E8E] pt-2 text-sm font-medium">
              Our helpdesk can be reached Monday to Friday, and between 9am and
              11.30pm on all trading days.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
