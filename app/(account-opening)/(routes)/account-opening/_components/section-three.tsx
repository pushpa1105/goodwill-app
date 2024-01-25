import { MoveRight } from "lucide-react";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export const SectionThree = () => {
  return (
    <div className="w-full">
      <div className="w-[95%] m-auto">
        <section className="block max-w-[1550px] m-auto px-5 md:px-10 xl:px-40 sm:px-5 lg:pt-20 lg:pb-2 pt-14 pb-14 lg:z-10 lg:relative">
          <h2 className="text-[#363636] lg:text-3xl text-2xl font-CircularMedium text-center">
            One Demat Account to Invest &amp; Trade in
            <span className="text-theme ml-2 font-bold">All Segments</span>
          </h2>
          <br />
          <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-4 lg:pt-5">
            {/* Stocks */}
            <div className="flex items-end">
              <Link href="/stocks/" className="w-full">
                <div className="rounded-[16px] w-full pt-4 pb-4 justify-center flex flex-col bg-white items-center border-[0.5px] cursor-pointer border-[#EBEBEB] hover:border-[#7f66e9] hover:drop-shadow-[0px_2px_10px_rgba(127, 102, 233, 0.20)] p-2">
                  <img
                    src="/stocks.png"
                    className="lg:w-5/12 w-4/12 h-auto"
                    alt="icon1"
                  />
                  <p className="text-[#666] pt-2 lg:text-sm md:text-sm text-xs font-CircularMedium">
                    Stocks
                  </p>
                </div>
              </Link>
            </div>
            {/* Stocks */}

            {/* options */}
            <div className="flex items-end">
              <Link href="/options/" className="w-full">
                <div className="rounded-[16px] w-full justify-center pt-4 pb-4 flex flex-col bg-white items-center border-[0.5px] cursor-pointer border-[#EBEBEB] hover:border-[#7f66e9] hover:drop-shadow-[0px_2px_10px_rgba(239,147,9,0.20)] p-2">
                  <img
                    src="/options.png"
                    className="lg:w-5/12 w-4/12 h-auto"
                    alt="icon1"
                  />
                  <p className="text-[#666] pt-2 lg:text-sm md:text-sm text-xs font-CircularMedium">
                    Options
                  </p>
                </div>
              </Link>
            </div>
            {/* options */}

            {/* futures */}
            <div className="flex items-end">
              <Link href="/futures/" className="w-full">
                <div className="rounded-[16px] w-full justify-center pt-4 pb-4 flex flex-col bg-white items-center border-[0.5px] cursor-pointer border-[#EBEBEB] hover:border-[#7f66e9] hover:drop-shadow-[0px_2px_10px_rgba(239,147,9,0.20)] p-2">
                  <img
                    src="/futures.png"
                    className="lg:w-5/12 w-4/12 h-auto"
                    alt="icon1"
                  />
                  <p className="text-[#666] pt-2 lg:text-sm md:text-sm text-xs font-CircularMedium">
                    Futures
                  </p>
                </div>
              </Link>
            </div>
            {/* futures */}

            {/* commodity */}

            <div className="flex items-end">
              <Link href="/commodity/" className="w-full">
                <div className="rounded-[16px] w-full justify-center pt-4 pb-4 flex flex-col bg-white items-center border-[0.5px] cursor-pointer border-[#EBEBEB] hover:border-[#7f66e9] hover:drop-shadow-lg p-2">
                  <img
                    src="/commodity.png"
                    className="lg:w-5/12 w-4/12 h-auto"
                    alt="icon1"
                  />
                  <p className="text-[#666] pt-2 lg:text-sm md:text-sm text-xs font-CircularMedium">
                    Commodity
                  </p>
                </div>
              </Link>
            </div>
            {/* commodity */}

            {/* currency */}
            <div className="flex items-end">
              <Link href="/currency/" className="w-full">
                <div className="rounded-[16px] w-full justify-center pt-4 pb-4 flex flex-col bg-white items-center border-[0.5px] cursor-pointer border-[#EBEBEB] hover:border-[#7f66e9] hover:drop-shadow-[0px_2px_10px_rgba(239,147,9,0.20)] p-2">
                  <img
                    src="/currency.png"
                    className="lg:w-5/12 w-4/12 h-auto"
                    alt="icon1"
                  />
                  <p className="text-[#666] pt-2 lg:text-sm md:text-sm text-xs font-CircularMedium">
                    Currency
                  </p>
                </div>
              </Link>
            </div>
            {/* currency */}

            {/* ipo */}
            <div className="flex items-end">
              <Link href="/currency/" className="w-full">
                <div className="rounded-[16px] w-full justify-center pt-4 pb-4 flex flex-col bg-white items-center border-[0.5px] cursor-pointer border-[#EBEBEB] hover:border-[#7f66e9] hover:drop-shadow-[0px_2px_10px_rgba(239,147,9,0.20)] p-2">
                  <img
                    src="/ipo.png"
                    className="lg:w-5/12 w-4/12 h-auto"
                    alt="icon1"
                  />
                  <p className="text-[#666] pt-2 lg:text-sm md:text-sm text-xs font-CircularMedium">
                    IPOs
                  </p>
                </div>
              </Link>
            </div>
            {/* ipo */}
          </div>
          <div className="hidden lg:flex justify-center lg:pt-15 pt-10">
            <button className="hover:shadow-2xl hover:shadow-cyan-500/50 lg:px-10 px-7 btn btn-anim butnshadow lg:py-3 py-2 bg-theme text-[#fff] lg:text-base text-sm rounded-[8px] btn1 flex items-center gap-2 font-CircularMedium">
              Start Now
              <MoveRight />
            </button>
          </div>
          <div className="flex lg:hidden justify-center pt-10">
            <Link href="/" target="_blank" rel="noreferer">
              <button className="hover:shadow-2xl hover:shadow-blue-300 lg:px-10 px-7 btn btn-anim butnshadow lg:py-3 py-2 bg-theme text-[#fff] lg:text-base text-sm rounded-[8px] btn1 flex items-center gap-2 font-CircularMedium">
                Start Now
                <MoveRight />
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
