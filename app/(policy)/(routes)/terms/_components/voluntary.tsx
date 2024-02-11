import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";
import { BoxLayout } from "./box-layout";

export const Voluntary = () => {
  return (
    <BoxLayout title="VOLUNTARY AND NON- VOLUNTARY DOCUMENTS">
      <div className="pt-2.5">
        <p className="text-[#8E8E8E]  md:text-base text-sm">
          Please read the Voluntary and Non Voluntary Documents as per Exchange
          Guidelines at below Link
        </p>
        <ul className=" list-none ml-4 my-2 text-[#8E8E8E] md:text-base text-sm">
          <li className="text-theme">
            <Link
              href="https://www.gwcindia.in/Uploads/RISK_DISCLOSURE_DOCUMENT_new.pdf"
              target="_blank"
              className="flex"
            >
              <ArrowRightCircle className="w-[20px] mr-2 " />
              RDD – Risk Disclosure document - Equity & Commodity
            </Link>
          </li>
          <li className="text-theme">
            <Link
              href="https://www.gwcindia.in/Uploads/DO'S_AND_DON'TS_new.pdf"
              target="_blank"
              className="flex"
            >
              <ArrowRightCircle className="w-[20px] mr-2 " />
              Rights and Obligation ,Guidance Note, Do&apos;s &Don&apos;ts
            </Link>
          </li>
          <li className="text-theme">
            <Link
              href="https://www.gwcindia.in/Uploads/policy_and_procedure_new.pdf"
              target="_blank"
              className="flex"
            >
              <ArrowRightCircle className="w-[20px] mr-2 " />
              Policies and Procedures for Client Dealings
            </Link>
          </li>
        </ul>
      </div>
    </BoxLayout>
  );
};
