import Link from "next/link";
import { BoxLayout } from "./box-layout";

export const Dashboard = () => {
  return (
    <BoxLayout title="DASHBOARD:">
      <>
        <div className="pt-2">
          <p className="text-[#8E8E8E]  md:text-base text-sm">
            The referral dashboard is a page wherein the referrer can view the
            status of all their referrals. Referrer has to login to the same
            link and login with name, email id & contact details, once he logs
            in to the referral dashboard, he will be able to view all the
            referrals he has made using that particular email id only.
          </p>
          <p className="font-semibold md:text-md text-base mt-4">
            Depository Services:
          </p>

          <ul className=" list-disc ml-4 my-2 text-[#8E8E8E] md:text-base text-sm font-light">
            <li>
              {" "}
              Stock Brokers can accept securities as margin from clients only by
              way of pledge in the depository system w.e.f. September 1, 2020
            </li>
            <li>
              {" "}
              AMC free for 1st Year & Applicable Charges of 300 Rs levied from
              Next Year annually.
            </li>
            <li>
              {" "}
              The Depository Participant shall reserve the right to revise the
              charges by giving not less than 30 days notice in writing to the
              client.
            </li>
            <li>
              {" "}
              Value of Transaction will be in accordance with the Depository
              formulae.
            </li>
            <li> Modification in client detail, Rs. 40/- per instance.</li>
            <li>
              {" "}
              Maintenance charges taken for account, opened under any LIFE TIME
              Maintenance scheme is non-refundable.
            </li>
            <li>
              {" "}
              Rejection charges Rs. 20/- per rejection plus courier charges.
            </li>
            <li>
              {" "}
              Off-Market Instruction not received prior to 24 hours of execution
              will be received at client&apos;s risk.
            </li>
            <li>
              {" "}
              Instruction for Pay-In of securities to transfer from client
              account to CM Pool account, inter-settlement instruction, CM Pool
              to CM Pool transfer and delivery instruction will be accepted up
              till 4:00 PM on the working day prior to the Pay-in date.
            </li>
            <li>
              {" "}
              Non-periodic statement shall be charged @ Rs. 5/- per page and
              postage/courier charge @ Rs. 40/- per mail.
            </li>
            <li>
              {" "}
              In case of non-payment of bill/dues within 30 days of due date,
              interest shall be charged @ 2.0% per month on the outstanding
              dues.
            </li>
            <li>
              {" "}
              Rs. 100/- will be charged to client in case of New Delivery
              Instruction Booklet is requested without requisition slip.
            </li>
            <li>
              {" "}
              All charges are exclusive of GST. Taxes and other Government
              levies will be charged extra as applicable from time to time.
            </li>
          </ul>
          <p className="text-[#8E8E8E]  md:text-base text-sm">
            As per SEBI Circular No CIR/MRD/DP/22/2012 dated 27 August 2012, all
            clients who are willing to hold only one demat account as first
            holder and whose DP holding valuation will be maintained below Rs. 2
            Lac. is eligible to opt for BSDA (Basic Services Demat Account)
            subject to terms and conditions mentioned by SEBI.
          </p>
        </div>
      </>
    </BoxLayout>
  );
};
