import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";
import { BoxLayout } from "./box-layout";

export const AuthorisedPerson = () => {
  return (
    <BoxLayout title="AUTHORISED PERSON">
      <>
        <div className="pt-2">
          <p className="font-semibold md:text-md text-base mt-4">
            Who is an Authorised Person?
          </p>
          <p className="text-[#8E8E8E]  md:text-base text-sm">
            Any person who is appointed as such by a trading member and who
            provides access to trading platform of a stock exchange as an agent
            of the stock broker is an Authorised person.
          </p>
          <p className="font-semibold md:text-md text-base mt-4">
            Who can be an authorized person?
          </p>
          <p className="text-[#8E8E8E]  md:text-base text-sm">
            The following persons meeting the requisite eligibility criteria as
            prescribed by SEBI / Stock Exchange shall be appointed as an
            Authorized Person:
          </p>
          <ul className=" list-disc ml-4 my-2 text-[#8E8E8E] md:text-base text-sm font-light">
            <li>An individual who is a resident of India</li>
            <li>
              A Partnership Firm registered under Indian Partnership Act, 1932
            </li>
            <li>
              A Limited Liability Partnership (LLP) registered under the Indian
              Limited Liability
            </li>
            <li>
              Partnership Act, 2008 A Body Corporate registered under the Indian
              Companies Act, 1956.
            </li>
          </ul>

          <p className="font-semibold md:text-md text-base mt-4">
            How to become an Authorised Person
          </p>
          <p className="text-[#8E8E8E]  md:text-base text-sm">
            To become an authorized person with goodwill,Should complete minimum
            criteria prescribed by Exchanges Time to Time.
          </p>
          <p className="font-semibold md:text-md text-base mt-4">Criteria:</p>

          <ul className=" list-disc ml-4 my-2 text-[#8E8E8E] md:text-base text-sm font-light">
            <li> Minimum 10th standard to be Passed</li>
            <li>Applicable Registration Fees.</li>
            <li>Security deposits on request for Terminal.</li>
            <li>Valid NISM Certificate to Operate Terminal.</li>
          </ul>

          <p className="font-semibold md:text-lg text-md mt-4">
            Support
          </p>

          <p className="font-semibold md:text-md text-base mt-4">
            Promotional Link :
          </p>
          <p className="text-[#8E8E8E]  md:text-base text-sm">
            AP can create Link on their Own and start the Online campaign to
            grow the Business.
          </p>

          <p className="font-semibold md:text-md text-base mt-4">
            Backoffice :
          </p>
          <p className="text-[#8E8E8E]  md:text-base text-sm">
            Dedicated Dashboard available wherein the AP can view the status of
            all their Clients Account opening , Revenue status,Etc .
          </p>

          <p className="font-semibold md:text-md text-base mt-4">Marketing:</p>
          <p className="text-[#8E8E8E]  md:text-base text-sm">
            Goodwill Branch will be assigned for one to one support for all the
            account opening, Software Installation, query handling for Smooth
            operations
          </p>

          <p className="font-semibold md:text-md text-base mt-4">Training:</p>
          <p className="text-[#8E8E8E]  md:text-base text-sm">
            Training support:Goodwill Provides Educational, Product training on
            weekly basis via Zoom Webinar to Ap and his Clients.
          </p>
          <p className="text-[#8E8E8E]  md:text-base text-sm">
            Goodwill also assists the Authorised person with training on how to
            operate the trading platforms and how to efficiently use their smart
            analytical tools.
          </p>
        </div>
      </>
    </BoxLayout>
  );
};
