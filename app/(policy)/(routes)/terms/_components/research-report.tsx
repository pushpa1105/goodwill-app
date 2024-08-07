import { BoxLayout } from "./box-layout";

export const ResearchReport = () => {
  return (
    <BoxLayout title="RESEARCH REPORT">
      <>
        <div className="pt-2">
          <p className="text-[#8E8E8E]  md:text-base text-sm">
            As a privileged partner, you can freely access the complete research
            reports published by our team in our website.
          </p>
          <p className="font-semibold md:text-md text-base mt-4">Terms:</p>
          <p className="text-[#8E8E8E]  md:text-base text-sm">
            Monthly Billing cycle is 26th to 25th.
          </p>
          <p className="text-[#8E8E8E]  md:text-base text-sm">
            Payout will be made on 1stof every month.
          </p>
          <p className="text-[#8E8E8E]  md:text-base text-sm">
            Sharing ratio as per signed tariff Sheet/Agreement
          </p>

          <p className="font-semibold md:text-md text-base mt-4">
            Minimum Retainable :
          </p>
          <p className="text-[#8E8E8E]  md:text-base text-sm">
            The brokerage generated by the AP will be shared @ 70 % (for the AP)
            and 30 % ( for GWC) or 80% (for the AP) and 30 % ( for GWC) or based
            on the sharing ratio mentioned in the agreement subject to minimum
            of Rs 1000 p.m for Goodwill.
          </p>
          <p className="text-[#8E8E8E]  md:text-base text-sm">
            Example A :If in one month the AP generates say Rs.2000 GW&apos;s share @
            30% works out to be Rs 600 only.But minimum clause stipulates Rs
            1000. Hence AP will get Rs 1000 and GW Rs 1000
          </p>
          <p className="text-[#8E8E8E]  md:text-base text-sm">
            Example B :In a month if AP generates Rs 10000 then AP will get Rs
            7000 and GW Rs.3000
          </p>

          <ul className=" list-disc ml-4 my-2 text-[#8E8E8E] md:text-base text-sm font-light">
            <li>
              This pay out will be done on monthly basis, ONLY for active APs
              accounts and not for inactive AP&apos;s & Goodwill Minimum
              Retainable amount will not be carried over for future/next months.
            </li>
            <li> An AMC of rs 1000 will be charged on AP registered in MCX</li>
            <li> Cancellation fees as charged by Exchanges.</li>
            <li>
              {" "}
              AP need to adhere to the Compliance requirement prescribed by SEBI
              and exchanges , On any non Compliance or Violation Found The AP
              registration will get cancelled and agreement will be terminated.
            </li>
          </ul>
        </div>
      </>
    </BoxLayout>
  );
};
