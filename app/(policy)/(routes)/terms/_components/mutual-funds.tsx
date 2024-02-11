import { BoxLayout } from "./box-layout"

export const MutualFunds = () => {
  return (
    <BoxLayout title="MUTUAL FUNDS">
      <div className="pt-2.5">
        <p className="text-[#8E8E8E]  md:text-base text-sm">
          Member is registered with Exchange as Mutual Fund distributor only&The
          Rates are Decided by the regulators. Based on the availability of
          exchange system the Orders been placed by the client or on behalf of
          clients order been placed by Member.
        </p>
        <ul className=" list-disc ml-4 my-2 text-[#8E8E8E] md:text-base text-sm">
          <li className="">
            Mutual Fund Units are Purchased based on the credits available in
            the Ledger
          </li>
          <li className="">
            Redemption of Units the credits will be on T+3 settlement
          </li>
        </ul>
        <p className="text-[#8E8E8E]  md:text-base text-sm">
          Client can Analyse & select Mutual Funds by their OWN and Apply Online
          at our Dedicated Mutual fund Site Click here or you can Place Order
          offline via Through Branch
        </p>
        <p className="text-[#8E8E8E]  md:text-base text-sm">
          Mutual Fund investments are subject to market risks, read all scheme
          related documents carefully. The past performance of the schemes is
          not necessarily indicative of future performance of the schemes.
        </p>
      </div>
      </BoxLayout>
  );
};
