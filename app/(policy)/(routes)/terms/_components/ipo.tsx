import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";
import { BoxLayout } from "./box-layout";

export const Ipo = () => {
  return (
    <BoxLayout title="IPO">
      <>
        <p className="lg:text-lg text-base text-[#8E8E8E]">
          Goodwill is an Distributor of IPO uses Exchange Platform to Apply IPO
          and extend the Portal and benefits to the Client.
        </p>
        <div className="pt-2">
          <p className="font-semibold md:text-md text-base mt-4">Terms :</p>
          <ul className=" list-disc ml-4 my-2 text-[#8E8E8E] md:text-base text-sm font-light">
            <li>UPI Id is mandatory for IPO Purchase</li>
            <li>
              Once the IPO applied an amount will be blocked in the
              client&apos;s bank and in case of non allotment of shares the
              amount will be refunded by the RTA on the refund initiation date.
            </li>
          </ul>
          <p className="font-semibold md:text-md text-base mt-4">PRE IPO:</p>
          <ul className=" list-disc ml-4 my-2 text-[#8E8E8E] md:text-base text-sm font-light">
            <li>
              Trading of shares of Pre- Ipo or in unlisted stock is a lengthy
              and analytical process. This must be done only after prior
              consultation with an experience investment advisor.
            </li>
            <li>
              As the activities of PRE-IPO are subject to the inherent risks of
              risk capital investment, no guarantee can be given against losses
              resulting from an investment made through PRE-IPO and there is no
              guarantee that Investors will recover their initial investment.
            </li>
            <li>
              {" "}
              The IPO of a company, even if scheduled, is never guaranteed and
              liquidity could only develop over the long term, with no guarantee
              as to how long this will take.
            </li>
            <li>
              {" "}
              Invest only in companies where you understand the sector, the
              business model, the financial elements and the terms of the
              operation.
            </li>
            <li>
              {" "}
              Before any subscription to financial securities, we recommend that
              you consult all the information relating to the operation and
              company, notably the “Risk Factors” section of the information
              document available on the company overview page, which notes the
              general risk factors and specific risk factors of the company.
            </li>
            <li>
              {" "}
              Before any investment, you should assure yourself that you have
              full understanding of the advantages and potential risks of the
              investment, that your decision has been taken independently and
              that the operation is appropriate for you given your objectives,
              experience, operational and financial resources and other relevant
              circumstances.
            </li>
          </ul>
          <p className="font-semibold md:text-md text-base mt-4">
            PDND / TRAI :
          </p>
          <p className="text-[#8E8E8E]  md:text-base text-sm">
            Please note that by submitting personal details, you are authorizing
            Goodwill Group of Companies to call you and send promotional
            communication even though you may be registered under DND.
          </p>
          <p className="font-semibold md:text-md text-base mt-4">SLBM:</p>
          <p className="text-[#8E8E8E]  md:text-base text-sm">
            As per NSE Circular No NSE/CMPT/32478 dated 31st May 2016, NSE will
            charge 2.5% charges on all transaction executed in Securities
            Lending and Borrowing Scheme
          </p>
          <p className="text-[#8E8E8E]  md:text-base text-sm">
            Commercials :Rs 0.10 Minimum or 15% of lending & Borrowing Fees
            whichever is Higher
          </p>
          <p className="text-[#8E8E8E]  md:text-base text-sm">
            For more details{" "}
            <Link
              href="https://www.gwcindia.in/BorrowingLending.aspx"
              target="_blank"
              className="text-theme hover:font-semibold"
            >
              Click here
            </Link>
          </p>
        </div>
      </>
    </BoxLayout>
  );
};
