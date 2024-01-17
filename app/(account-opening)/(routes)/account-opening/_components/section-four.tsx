import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export const SectionFour = () => {
  return (
    <div className="w-full">
      <div className="w-[95%] m-auto">
        <section className="block max-w-[1550px] m-auto px-5 md:px-10 xl:px-24 sm:px-5 lg:pt-20 lg:pb-24 pt-10 pb-10 lg:z-10 lg:relative">
          <div className="hidden lg:flex md:flex justify-center pb-5">
            <h2 className="text-[#363636] lg:text-3xl text-2xl font-CircularMedium text-center">
              Experience More at
              <span className="text-[#7f66e9] ml-2 font-bold">Industry Standard Prices</span>
            </h2>
            <br />
          </div>
          <div className="lg:hidden md:hidden">
            <h2 className="text-[#363636] lg:text-3xl text-2xl font-CircularMedium text-center">
              Experience More at <br />
              <span className="text-[#EF9309]">Industry Standard Prices</span>
            </h2>
            <br />
          </div>
          <div className="">
            <div className="pt-5">
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
                <div className="bg-[#083996] rounded-xl p-6 relative overflow-hidden pricing-card !h-80">
                  <p className="text-[#DADADA] font-CircularMedium text-lg">
                    For Account Opening,
                  </p>
                  <p className="text-[#DADADA] font-CircularMedium text-lg">
                    AMC &amp; Platform Fees
                  </p>
                  <div className="pt-3.5">
                    <p className="text-[#919BC6] font-CircularRegular text-sm">
                      Open free account with zero AMC or platform fees.
                    </p>
                  </div>
                  <div></div>
                  <div
                    className="absolute left-20 -bottom-4 -right-1"
                    title="slab"
                  >
                    pushpa
                  </div>
                  <div className="">
                    <img
                      className="absolute w-24 right-6 bottom-4"
                      src="https://stock-logos.dhan.co/static-new-images/zeronew.svg"
                      alt="moneyimg.png"
                    />
                  </div>
                </div>
                <div className="bg-[#083996] rounded-xl p-6 relative overflow-hidden pricing-card !h-80">
                  <p className="text-[#DADADA] font-CircularMedium text-lg">
                    For Equity Delivery,
                  </p>
                  <p className="text-[#DADADA] font-CircularMedium text-lg">
                    ETFs, IPO &amp; Mutual Funds
                  </p>
                  <div className="pt-3.5">
                    <p className="text-[#919BC6] font-CircularRegular text-sm">
                      Absolutely FREE! <br />
                      No hidden charges ever.
                    </p>
                  </div>
                  <div
                    className="absolute left-20 -bottom-4 -right-1"
                    title="slab"
                  >
                    psuhpa
                  </div>
                  <div className="">
                    <img
                      className="absolute w-24 right-6 bottom-4"
                      src="https://stock-logos.dhan.co/static-new-images/zeronew.svg"
                      alt="moneyimg.png"
                    />
                  </div>
                </div>
                <div className="bg-[#083996] rounded-xl p-6 relative overflow-hidden pricing-card !h-80">
                  <p className="text-[#DADADA] font-CircularMedium text-lg">
                    For Equity Intraday &amp;
                  </p>
                  <p className="text-[#DADADA] font-CircularMedium text-lg">
                    All Segment Futures
                  </p>
                  <div className="pt-3.5">
                    <p className="text-[#919BC6] font-CircularRegular text-sm">
                      ₹20 or 0.03% of trade value per executed order, whichever
                      is lower.
                    </p>
                  </div>
                  <div
                    className="absolute left-20 -bottom-4 -right-1"
                    title="slab"
                  >
                    psuhap
                  </div>
                  <div className="">
                    <img
                      className="absolute w-32 right-6 bottom-4"
                      src="https://stock-logos.dhan.co/static-new-images/twentynew.svg"
                      alt="moneyimg.png"
                    />
                  </div>
                </div>
                <div className="bg-[#083996] rounded-xl p-6 relative overflow-hidden pricing-card !h-80">
                  <p className="text-[#DADADA] font-CircularMedium text-lg">
                    For All Segment
                  </p>
                  <p className="text-[#DADADA] font-CircularMedium text-lg">
                    Options
                  </p>
                  <div className="pt-3.5">
                    <p className="text-[#919BC6] font-CircularRegular text-sm">
                      ₹20 of trade value per executed order for equity,
                      commodity &amp; currency options.
                    </p>
                  </div>
                  <div
                    className="absolute left-20 -bottom-4 -right-1"
                    title="slab"
                  >
                    pushpa
                  </div>
                  <div className="">
                    <img
                      className="absolute w-32 right-6 bottom-4"
                      src="https://stock-logos.dhan.co/static-new-images/twentynew.svg"
                      alt="moneyimg.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between pt-3.5">
              <p className="text-[#777777] font-CircularMedium text-sm">
                No hidden charges, ever!
              </p>
              <Link
                href="/"
                className="text-theme font-CircularMedium text-sm"
              >
                View Pricing In Detail
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};