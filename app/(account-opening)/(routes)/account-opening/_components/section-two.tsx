/* eslint-disable @next/next/no-img-element */
export const SectionTwo = () => {
  return (
    <div className="w-full">
      <div className="w-[95%] m-auto">
        <section className="block max-w-[1550px] m-auto px-5 md:px-10 xl:px-24 sm:px-5 lg:pt-20 lg:pb-24 pt-14 pb-14 lg:z-10 lg:relative">
          <h2 className="text-[#363636] lg:text-3xl text-2xl font-CircularMedium text-center">
            Why <span className="text-theme font-bold">Open Demat Account</span>{" "}
            Online with Us?
          </h2>
          <br />
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 lg:pt-5">
            <div className="rounded-[16px] border border-[#dadada] p-3">
              <div className="flex justify-center lg:justify-start">
                <img
                  src="https://stock-logos.dhan.co/static-openweb/dhandematmedpic.svg"
                  alt="icon1"
                  className="w-10 h-auto"
                />
              </div>
              <h3 className="text-[#363636] pt-3 lg:text-xl text-lg text-center lg:text-left font-CircularMedium">
                Dedicated Support 24x7
              </h3>
              <p className="text-[#8E8E8E] pt-2 text-sm text-center lg:text-left font-CircularBook">
                Our support team is always on standby to help you on call &amp;
                text
              </p>
            </div>
            <div className="rounded-[16px] border border-[#dadada] p-3">
              <div className="flex justify-center lg:justify-start">
                <img
                  src="https://stock-logos.dhan.co/static-openweb/clock.svg"
                  alt="icon1"
                  className="w-auto h-auto"
                />
              </div>
              <h3 className="text-[#363636] pt-3 lg:text-xl text-lg text-center lg:text-left font-CircularMedium">
                Online Account Opening
              </h3>
              <p className="text-[#8E8E8E] pt-2 text-sm text-center lg:text-left font-CircularBook">
                Start using Dhan in less than 10 minutes from your phone or
                desktop
              </p>
            </div>
            <div className="rounded-[16px] border border-[#dadada] p-3">
              <div className="flex justify-center lg:justify-start">
                <img
                  src="https://stock-logos.dhan.co/static-openweb/como-2.svg"
                  alt="icon1"
                  className="w-10 h-auto"
                />
              </div>
              <h3 className="text-[#363636] pt-3 lg:text-xl text-lg text-center lg:text-left font-CircularMedium">
                We are #MadeForTrade
              </h3>
              <p className="text-[#8E8E8E] pt-2 text-sm text-center lg:text-left font-CircularBook">
                Building industry first features for Indias traders &amp;
                investors
              </p>
            </div>
            <div className="rounded-[16px] border border-[#dadada] p-3">
              <div className="flex justify-center lg:justify-start">
                <img
                  src="https://stock-logos.dhan.co/static-openweb/shield.svg"
                  alt="icon1"
                  className="w-10 h-auto"
                />
              </div>
              <h3 className="text-[#363636] pt-3 lg:text-xl text-lg text-center lg:text-left font-CircularMedium">
                Reliable &amp; Transparent
              </h3>
              <p className="text-[#8E8E8E] pt-2 text-sm text-center lg:text-left font-CircularBook">
                SEBI registered - Millions of users already trust us
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
