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
          <div className="grid lg:grid-cols-9 md:grid-cols-5 grid-cols-3 gap-4 lg:pt-5">
            <div className="flex items-end">
              <Link href="/stocks/" className="w-full">
                <div className="rounded-[16px] w-full pt-4 pb-4 justify-center flex flex-col bg-white items-center border-[0.5px] cursor-pointer border-[#EBEBEB] hover:border-[#7f66e9] hover:drop-shadow-[0px_2px_10px_rgba(127, 102, 233, 0.20)] p-2">
                  <img
                    src="https://stock-logos.dhan.co/static-openweb/equi.svg"
                    className="lg:w-5/12 w-4/12 h-auto"
                    alt="icon1"
                  />
                  <p className="text-[#666] pt-2 lg:text-sm md:text-sm text-xs font-CircularMedium">
                    Stocks
                  </p>
                </div>
              </Link>
            </div>
            <div className="flex items-end">
              <Link href="/options/" className="w-full">
                <div className="rounded-[16px] w-full justify-center pt-4 pb-4 flex flex-col bg-white items-center border-[0.5px] cursor-pointer border-[#EBEBEB] hover:border-[#7f66e9] hover:drop-shadow-[0px_2px_10px_rgba(239,147,9,0.20)] p-2">
                  <img
                    src="https://stock-logos.dhan.co/static-openweb/cepe.svg"
                    className="lg:w-5/12 w-4/12 h-auto"
                    alt="icon1"
                  />
                  <p className="text-[#666] pt-2 lg:text-sm md:text-sm text-xs font-CircularMedium">
                    Options
                  </p>
                </div>
              </Link>
            </div>
            <div className="flex items-end">
              <Link href="/futures/" className="w-full">
                <div className="rounded-[16px] w-full justify-center pt-4 pb-4 flex flex-col bg-white items-center border-[0.5px] cursor-pointer border-[#EBEBEB] hover:border-[#7f66e9] hover:drop-shadow-[0px_2px_10px_rgba(239,147,9,0.20)] p-2">
                  <img
                    src="https://stock-logos.dhan.co/static-openweb/FUTURES.svg"
                    className="lg:w-5/12 w-4/12 h-auto"
                    alt="icon1"
                  />
                  <p className="text-[#666] pt-2 lg:text-sm md:text-sm text-xs font-CircularMedium">
                    Futures
                  </p>
                </div>
              </Link>
            </div>
            <div className="flex items-end">
              <Link href="/commodity/" className="w-full">
                <div className="rounded-[16px] w-full justify-center pt-4 pb-4 flex flex-col bg-white items-center border-[0.5px] cursor-pointer border-[#EBEBEB] hover:border-[#7f66e9] hover:drop-shadow-lg p-2">
                  <img
                    src="https://stock-logos.dhan.co/static-openweb/COMMODITIES.svg"
                    className="lg:w-5/12 w-4/12 h-auto"
                    alt="icon1"
                  />
                  <p className="text-[#666] pt-2 lg:text-sm md:text-sm text-xs font-CircularMedium">
                    Commodity
                  </p>
                </div>
              </Link>
            </div>
            <div className="flex items-end">
              <Link href="/currency/" className="w-full">
                <div className="rounded-[16px] w-full justify-center pt-4 pb-4 flex flex-col bg-white items-center border-[0.5px] cursor-pointer border-[#EBEBEB] hover:border-[#7f66e9] hover:drop-shadow-[0px_2px_10px_rgba(239,147,9,0.20)] p-2">
                  <img
                    src="https://stock-logos.dhan.co/static-openweb/CURRENCY.svg"
                    className="lg:w-5/12 w-4/12 h-auto"
                    alt="icon1"
                  />
                  <p className="text-[#666] pt-2 lg:text-sm md:text-sm text-xs font-CircularMedium">
                    Currency
                  </p>
                </div>
              </Link>
            </div>
            <div className="flex items-end md:relative md:bottom-[20px] lg:relative lg:bottom-[0px]">
              <Link href="/etf/" className="w-full">
                <div className="rounded-[16px] w-full justify-center pt-4 pb-4 flex flex-col bg-white items-center border-[0.5px] cursor-pointer border-[#EBEBEB] hover:border-[#7f66e9] hover:drop-shadow-[0px_2px_10px_rgba(239,147,9,0.20)] p-2">
                  <img
                    src="https://stock-logos.dhan.co/static-openweb/ETF.svg"
                    className="lg:w-5/12 w-4/12 h-auto"
                    alt="icon1"
                  />
                  <p className="text-[#666] pt-2 lg:text-sm md:text-sm text-xs font-CircularMedium">
                    ETFs
                  </p>
                </div>
                <p className="text-[#083996] lg:hidden sm:hidden hidden w-full pt-1 !text-center font-CircularMedium text-xs">
                  Coming Soon!
                </p>
              </Link>
            </div>
            <div className="flex items-end justify-end flex-col">

              <Link
                href="/mutual-funds/"
                className="rounded-[16px] w-full justify-center pt-4 pb-4 flex flex-col bg-white items-center border-[0.5px] cursor-pointer border-[#EBEBEB] hover:border-[#7f66e9] hover:drop-shadow-[0px_2px_10px_rgba(239,147,9,0.20)] p-2"
              >
                <img
                  src="https://stock-logos.dhan.co/static-openweb/mf.svg"
                  className="lg:w-5/12 w-4/12 h-auto"
                  alt="icon1"
                />
                <p className="text-[#666] pt-2 lg:text-sm md:text-sm text-xs font-CircularMedium">
                  Mutual Funds
                </p>
              </Link>
              <div className="lg:hidden flex justify-center w-full">
                <p className="text-[#083996] lg:hidden block !text-center font-CircularMedium text-xs bg-[#d0e0ff] px-2.5 py-0.5 rounded-md">
                  New
                </p>
              </div>
            </div>
            <div className="flex items-end justify-end flex-col">
              <Link
                href="/ipo/"
                className="rounded-[16px] w-full justify-center pt-4 pb-4 flex flex-col bg-white items-center border-[0.5px] cursor-pointer border-[#EBEBEB] hover:border-[#7f66e9] hover:drop-shadow-[0px_2px_10px_rgba(239,147,9,0.20)] p-2"
              >
                <img
                  src="https://stock-logos.dhan.co/static-openweb/iippoo.svg"
                  className="lg:w-5/12 w-4/12 h-auto"
                  alt="icon1"
                />
                <p className="text-[#666] pt-2 lg:text-sm md:text-sm text-xs font-CircularMedium">
                  IPOs
                </p>
              </Link>
              <p className="text-[#083996] lg:hidden invisible w-full pt-1 !text-center font-CircularMedium text-xs">
                Coming Soon!
              </p>
            </div>
            <div className="flex items-end justify-end flex-col">
              <div className="flex justify-center w-full">
                <p className="text-[#083996] hidden lg:flex pb-2.5 !text-center font-CircularMedium text-xs">
                  Coming Soon!
                </p>
              </div>
              <div className="rounded-[16px] w-full justify-center pt-4 pb-4 flex flex-col bg-white items-center border-[0.5px] cursor-pointer border-[#EBEBEB] hover:border-[#7f66e9] hover:drop-shadow-[0px_2px_10px_rgba(239,147,9,0.20)] p-2">
                <img
                  src="https://stock-logos.dhan.co/static-openweb/bond.svg"
                  className="lg:w-5/12 w-4/12 h-auto"
                  alt="icon1"
                />
                <p className="text-[#666] pt-2 lg:text-sm md:text-sm text-xs font-CircularMedium">
                  Bonds
                </p>
              </div>
              <p className="text-[#083996] lg:hidden w-full pt-1 !text-center font-CircularMedium text-xs">
                Coming Soon!
              </p>
            </div>
          </div>
          <div className="hidden lg:flex justify-center lg:pt-15 pt-10">
            <button className="hover:shadow-2xl hover:shadow-cyan-500/50 lg:px-10 px-7 btn btn-anim butnshadow lg:py-3 py-2 bg-theme text-[#fff] lg:text-base text-sm rounded-[8px] btn1 flex items-center gap-2 font-CircularMedium">
              Start Now
              <MoveRight />
            </button>
          </div>
          <div className="flex lg:hidden justify-center pt-10">
            <Link
              href="/"
              target="_blank"
              rel="noreferer"
            >
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
