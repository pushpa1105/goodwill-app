import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";
import { BoxLayout } from "./box-layout";

export const GlobalInvest = () => {
  return (
    <BoxLayout title="GLOBAL INVEST:">
      <>
        <div className="pt-2">
          <p className="text-[#8E8E8E]  md:text-base text-sm">
            GOODWILL provides opportunities to the clients to invest in US Stock
            market from India.
          </p>
          <p className="text-[#8E8E8E]  md:text-base text-sm mt-2">
            GOODWILL role here is limited to a Referrer. GOODWILL will introduce
            the customer with the platform provider Stockal Inc post which
            clients will be directly sharing their details to third party stock
            broker Drive Wealth. Investment in securities market is subject to
            market risks, read all the related documents carefully before
            investing. Mutual fund investments are subject to market risks, read
            all scheme related documents carefully.
          </p>
          <p className="text-[#8E8E8E]  md:text-base text-sm mt-2">
            All logos and trademarks belong to their respective legal owners.
          </p>
          <p className="text-[#8E8E8E]  md:text-base text-sm mt-2">
            For more information and background of Stockal,{" "}
            <Link
              href="https://www.stockal.com/"
              target="_blank"
              className="text-theme hover:font-semibold"
            >
              Click here
            </Link>
          </p>
          <p className="font-semibold md:text-md text-base mt-4">ALGO:</p>
          <p className="text-[#8E8E8E]  md:text-base text-sm">
            Goodwill, India&apos;s leading brokerage firm trusted by lakhs of
            people nation-wide has collaborated with 1. Tradetron 2. Algoji to
            make Algo trading accessible to the retail traders in India With
            &without coding.
          </p>
          <p className="text-[#8E8E8E]  md:text-base text-sm mt-2">
            Tradetron - This is a unique opportunity for you to get started on
            your algo trading journey without getting stuck up with technical
            complications you may frequently encounter if you are not familiar
            with coding and integrations. Goodwill &TradeTron is a very simple
            plug & play solution. We hope that it adds value to you in more ways
            than one.
            <Link
              href="https://www.gwcindia.in/Tradetron/GwcTradetron.aspx"
              target="_blank"
              className="text-theme hover:font-semibold"
            >
              Click here
            </Link>
          </p>
          <p className="text-[#8E8E8E]  md:text-base text-sm mt-2">
            Algo ji (API Bridge)– Goodwill allows the client to test their
            algorithmicstrategieswith the Third-party vendor ALGO Ji , APIBridge
            enables facility to clients for his trading with intelligence for
            strategy management, order management, risk management and portfolio
            management. APIBridge is the only application which truly protects
            the privacy of your trading strategies
            <Link
              href="https://apibridge.gwcindia.in/"
              target="_blank"
              className="text-theme hover:font-semibold"
            >
              Click here
            </Link>
          </p>
          <p className="font-semibold md:text-md text-base mt-4">Limitation</p>
          <p className="text-[#8E8E8E]  md:text-base text-sm">
            Algo ji (API Bridge)– Goodwill allows the client to test their
            algorithmicstrategieswith the Third-party vendor ALGO Ji , APIBridge
            enables facility to clients for his trading with intelligence for
            strategy management, order management, risk management and portfolio
            management. APIBridge is the only application which truly protects
            the privacy of your trading strategies
          </p>
          <p className="font-semibold md:text-md text-base mt-4">
            Disclaimer :
          </p>
          <p className="text-[#8E8E8E]  md:text-base text-sm">
            Though Algo trading has many benefits as discussed above, it has its
            risks and challenges too. There may be network connectivity issues,
            system failures, or faulty algorithms due to which it may fail to
            deliver the desired results. Algo trading is a powerful tool that
            can efficiently handle bulk transactions, but it needs to be
            explored further by investors to reap its true benefits.
          </p>
          <p className="text-[#8E8E8E]  md:text-base text-sm mt-2">
            The 3rd Party Link is not intended as a promotion of any particular
            products or investments and neither Goodwill nor any of its
            officers, directors, employees or representatives, in any way
            recommends or endorses any company, product, investment or
            opportunity which may be discussed herein.
          </p>
          <p className="text-[#8E8E8E]  md:text-base text-sm mt-2">
            The education, training, videos, audios, software or any information
            presented herein is intended for a general audience and does not
            purport to be, nor should it be construed as, specific advice
            tailored to any individual.
          </p>
          <p className="text-[#8E8E8E]  md:text-base text-sm mt-2">
            Goodwill does not promise or guarantee any income or particular
            result from your use of the information contained herein. Goodwill
            assumes no liability or responsibility for errors or omissions in
            the information contained herein.
          </p>
          <p className="text-[#8E8E8E]  md:text-base text-sm mt-2">
            The Trading or Investing educations or trainings or algorithms or
            software’s or any information provided by Goodwill or Goodwill’s 3rd
            Party products may not be suitable for all traders or investors.
          </p>

          <p className="text-[#8E8E8E]  md:text-base text-sm mt-2">
            Any action you choose to take in the markets for trading or
            investing is totally your own responsibility. Goodwill will not be
            liable for any, direct or indirect, consequential or incidental
            damages or loss arising out of the use of the information given in
            the website, through email or product or service or any other means
            of communication.
          </p>
          <p className="text-[#8E8E8E]  md:text-base text-sm mt-2">
            Under no circumstances will Goodwill be liable for any loss or
            damage caused by your reliance on the information contained herein.
            It is your responsibility to evaluate the accuracy, completeness or
            usefulness of any information, opinion, advice or other content
            contained herein.
          </p>
        </div>
      </>
    </BoxLayout>
  );
};
