import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";
import { BoxLayout } from "./box-layout";

export const Terms = () => {
  return (
    <BoxLayout title="TERMS">
      <div className="pt-2 text-start">
        <ul className="list-disc ml-4 my-2 text-[#8E8E8E] md:text-base text-sm font-light">
          <li className="">
            {/* <ArrowRightCircle className="w-[20px] mr-2 " /> */}
            Choose Brokerage Plans: Traditional Plan | Discount Plus Plan [
            Charges and terms would be applied as per plan selection]
          </li>
          <li className="">
            {/* <ArrowRightCircle className="w-[20px] mr-2 " /> */}
            No charges for opening Trading and Demat accounts. First-year Demat
            AMC is free and it would be charged ₹ 75/ Quarter from 2nd year
            onwards.{" "}
            <Link
              href="https://www.discountplusonline.com/pricing-best-discount-broker-in-india-zero-low-brokerage/"
              target="_blank"
              className="text-theme hover:font-bold mr-2"
            >
              Click here{" "}
            </Link>
            for more info
          </li>
          <li className="">
            {/* <ArrowRightCircle className="w-[30px] mr-2 " /> */}
            Free Gift coupons worth up to Rs 10000. After successful Account
            opening, the same would be sent to the client&apos;s registered
            E-mail ID. (T&C: Goodwill reserves the rights to change the terms
            and conditions governing the use of the Gift coupon from time to
            time at its sole discretion.)
          </li>
          <li className="">
            {/* <ArrowRightCircle className="w-[20px] mr-2 " /> */}
            The Schedule of Brokerage and other charges applied by Goodwill on
            the Clients are provided under the heading &quot;Tariff Sheet&quot;
            <Link
              href="https://www.gwcindia.in/Downloads.aspx?id=6#a6"
              target="_blank"
              className="text-theme hover:font-bold mr-2"
            >
              Click Here
            </Link>{" "}
            in the Client account Opening Form
          </li>
          <li className="">
            {/* <ArrowRightCircle className="w-[20px] mr-2 " /> */}
            Call and Trade facility available.
          </li>
          <li className="">
            {/* <ArrowRightCircle className="w-[20px] mr-2 " /> */}
            STT, CTT, GST, and all other applicable
            exchange/regulatory/statutory charges/taxes will be levied as per
            applicable rates.
          </li>
          <li className="">
            {/* <ArrowRightCircle className="w-[20px] mr-2 " /> */}
            Brokerage will not exceed the SEBI prescribed limit.
          </li>
        </ul>
      </div>
    </BoxLayout>
  );
};
