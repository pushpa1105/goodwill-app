import { ArrowRight, MoveRight } from "lucide-react";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export const SectionOne = () => {
  return (
    <div className="w-full bg-theme">
      <div className="w-[95%] m-auto">
        <section className="block max-w-[1550px] m-auto px-5 md:px-10 xl:px-24 pt-24 lg:z-10 lg:relative">
          <div className="grid lg:grid-cols-5 md:grid-cols-5 grid-cols-1 pt-3">
            <div className="lg:col-span-3 md:col-span-3 col-span-1 lg:gap-24 gap-0 flex align-middle">
              <div className="sm:w-full">
                <div className="">
                  <div className="pt-5 lg:pb-10 pb-3">
                    <div>
                      <p className="lg:text-5xl text-3xl text-[#dadada] text-center md:text-left lg:leading-[56px] leading-[35px] font-CircularMedium">
                        Invest Smart, Invest Fast
                      </p>
                      <h1 className="text-[#13B078] lg:text-5xl text-3xl font-CircularMedium text-center md:text-left">
                        Your Demat Journey Starts Now.
                      </h1>
                    </div>
                  </div>
                  <br />
                  <p className="lg:text-lg text-sm text-center md:text-left text-white font-CircularRegular">
                    Zero Demat account opening fees & ₹11 per trade
                  </p>
                  <br />
                  <div className="flex justify-center lg:justify-start md:justify-start lg:pb-10 pb-1 items-center">
                    <div className="hidden lg:flex">
                      <button className="lg:px-10 px-7 btn btn-anim butnshadow lg:py-3 py-2 bg-[#EF9309] text-[#0A2745] flex lg:text-base text-sm rounded-[6px] btn1 items-center gap-2 font-CircularMedium">
                        Start Now
                        <MoveRight />
                      </button>
                    </div>
                    <div className="lg:hidden">
                      <Link href="/" target="_blank">
                        <button className="lg:px-10 px-7 btn btn-anim butnshadow lg:py-3 py-2 bg-[#EF9309] text-[#0A2745] flex lg:text-base text-sm rounded-[6px] btn1 items-center gap-2 font-CircularMedium">
                          Start Now
                          <MoveRight />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 flex justify-center lg:hidden md:hidden pt-10">
                  <img
                    src="https://stock-logos.dhan.co/static-openweb/dhansecwebpagemob.png"
                    alt="icon"
                    className="w-8/12 md:w-5/12"
                  />
                </div>
                <div className="lg:flex md:flex hidden">
                  <div className="flex items-center pt-5 lg:pb-10 pb-5">
                    <img
                      src="/lighting.png"
                      alt="lightnng"
                      className="lg:w-[16%] md:w-[15%] w-12"
                    />
                    <p className="lg:text-sm md:text-xs text-sm text-[#DEDEDE] pl-2 font-CircularBook">
                      Lightning Fast
                      <br />
                      <span className="text-[#fff] lg:text-xl text-sm font-CircularBold">
                        Investing Experience
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <br />
            </div>
            <div className="lg:col-span-2 md:col-span-2 hidden lg:flex md:flex col-span-1">
              <img
                src="https://stock-logos.dhan.co/static-openweb/dhansecwebpagemob.png"
                alt="icon"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
