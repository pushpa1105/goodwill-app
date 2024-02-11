import Link from "next/link";
import { BoxLayout } from "./box-layout";

export const BidReferral = () => {
  return (
    <BoxLayout title="BDE REFERRAL SCHEME">
      <>
        <div className="pt-2">
          <p className="font-semibold md:text-md text-base mt-4">
            Who is a BDE (Remote) Referral?
          </p>
          <p className="text-[#8E8E8E]  md:text-base text-sm">
            BDE (Remote) is a person who is willing to support the branches of
            Goodwill Wealth Management by adding new client a/c with the minimum
            specified Investments, within a particular period of time for
            performance based referral incentives.
          </p>
          <p className="font-semibold md:text-md text-base mt-4">Eligibility</p>

          <ul className=" list-disc ml-4 my-2 text-[#8E8E8E] md:text-base text-sm font-light">
            <li>
              {" "}
              BDE (Remote) referral will be attached to any one of the Goodwill
              branches.
            </li>
            <li>
              {" "}
              Prefer to work remotely, either part time or full time. It is not
              mandatory to be present at the office regularly.
            </li>
            <li>
              {" "}
              Self-employed or working professionals, employees of other
              organizations, students, House wives, retired professionals etc.
              are all eligible to be a BDE referral (Remote)
            </li>
            <li> No Investment is required.</li>
            <li> No Infrastructure is required.</li>
            <li> No experience is required.</li>
            <li> No academic qualifications are required.</li>
            <li>
              {" "}
              No gender or upper Age restrictions, other than the mandatory
              eligibility to be of 18 years or more.
            </li>
            <li> BDE (Remote) should be of Indian Nationality.</li>
            <li> Should possess a valid ID / Address proof.</li>
            <li> Should possess a valid bank a/c</li>
            <li>
              {" "}
              Existing Goodwill employee or their family members are not
              eligible to become BDE (Remote)
            </li>
            <li>
              {" "}
              Minors (below 18 years) are not eligible to become a BDE (Remote)
            </li>
          </ul>

          <p className="font-semibold md:text-md text-base mt-4">
            Terms & Conditions :
          </p>

          <ul className=" list-disc ml-4 my-2 text-[#8E8E8E] md:text-base text-sm font-light">
            <li> This structure is applicable only for retail account.</li>
            <li>
              {" "}
              Login of 5 accounts in a month; BDE(Remote) is eligible for
              special incentive* of Rs.1000/- over and above the performance
              incentive (Subject to BM Approval)
            </li>
            <li>
              {" "}
              Login of 10 accounts in a month; BDE(Remote) is eligible for
              special incentive* of RS.2500/- over and above the performance
              incentive (Subject to BM Approval)
            </li>
            <li>
              {" "}
              Login of 15 accounts in a month; BDE(Remote) is eligible for
              special incentive* of RS.5000/- over and above the performance
              incentive (Subject to BM Approval)
            </li>
            <li> 20% Incentive will be paid for access charges collected.</li>
            <li>
              {" "}
              20% Incentive will be paid for insurance premium collected – Life
              and HDFC Sanjay plus Policies (Subject to policy issuance).
            </li>
            <li>
              {" "}
              Working day cycle will be calculated 26th to 25th of every month.
            </li>
            <li> Incentive will be released on 5th of every month.</li>
            <li>
              {" "}
              Margin amount will be calculated cumulatively during the cycle and
              eligible account will be consider for incentive to release.
            </li>
            <li>
              {" "}
              Minimum one trade per Account is mandatory for getting the
              incentive.
            </li>
            <li>
              {" "}
              If an account goes to a full pay-out within the monthly cycle,
              then the account will not be considered for the incentive.
            </li>
          </ul>
        </div>
      </>
    </BoxLayout>
  );
};
