import Link from "next/link";
import { BoxLayout } from "./box-layout";

export const Insurance = () => {
  return (
    <BoxLayout title="INSURANCE :">
      <div className="pt-2.5">
        <p className="text-[#8E8E8E]  md:text-base text-sm">
          Goodwill adds another feather to its cap by extending Insurance
          services through its subsidiary, M/s GWC India Insurance Broking (P)
          Ltd. Now you can purchase your Health, Motor, Term Life, Accident,
          Travel and other insurance policies by the click of a button. To know
          more, please visit our website
          <Link
            href="https://www.gwcindiainsurance.com/"
            target="_blank"
            className="text-theme ml-1.5 hover:font-bold"
          >
            Click here
          </Link>
          (Terms & conditions apply)
        </p>
        <p className="font-semibold md:text-md text-base mt-6">Disclaimer:</p>
        <p className="text-[#8E8E8E]  md:text-base text-sm">
          Insurance is the Subject Matter of solicitation.
        </p>
        <p className="text-[#8E8E8E]  md:text-base text-sm mt-2">
          The information contained in this Website is only indicative For more
          details on the Risk factors, Policy terms & conditions, Please read
          all Sales brochures & Policy wordings before concluding the sale.
          Investments in Unit Linked Insurance Plans are subject to Market
          volatile Risks. Such Investment Risk has to be borne by the
          Policyholder.
        </p>
        <p className="text-[#8E8E8E]  md:text-base text-sm mt-2">
          Sec.41 of Insurance Act 1938 (as amended from time to time)
          Prohibition of Rebates:
        </p>
        <p className="text-[#8E8E8E]  md:text-base text-sm mt-2">
          No person shall allow or offer to allow, either directly or indirectly
          as an inducement to any person to take out (or) renew (or) continue an
          insurance in respect of any kind of risk relating to lives or property
          in India, any rebate of the whole amount (or) part of the commission
          payable (or) any rebate of the premium shown on the policy, nor shall
          any person taking out (or) renewing (or) continuing a policy accept
          any rebate, except such rebates as may be allowed in accordance with
          the published prospectus (or) tables of the Insurer.
        </p>
        <p className="text-[#8E8E8E]  md:text-base text-sm mt-4">
          GWC India Insurance Broking (P) Ltd is a subsidiary of Good will
          wealth Management (P) Ltd. IRDAI Broking Code No 683 (Life & General)
          Validity period: 19/11/2019 till 18/11/2022.
        </p>

        <p className="text-[#8E8E8E]  md:text-base text-sm mt-4">
          BEWARE OF SPURIOUS PHONE CALLS & FICTITIOUS FRAUDULENT OFFERS Trade
          Logo displayed above belongs to Gwc India Insurance Broking (P) Ltd,
          Corporate Office, No 9, Ground Floor, Masha Allah Building, Bheemasena
          Garden Street, Mylapore Chennai 600004.
        </p>
      </div>
    </BoxLayout>
  );
};
