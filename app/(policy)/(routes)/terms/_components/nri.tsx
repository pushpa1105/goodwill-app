import Link from "next/link";
import { BoxLayout } from "./box-layout";

export const Nri = () => {
  return (
    <BoxLayout title="NRI SERVICES">
      <div className="pt-2.5">
        <p className="text-[#8E8E8E]  md:text-base text-sm">
          Goodwill welcomes NRI to the world of hassle free, paperless, seamless
          trading facility in the Indian Stock Market
        </p>
        <p className="text-[#8E8E8E]  md:text-base text-sm mt-2">
          The Two methods NRI trading can be done in India is through the PIS-
          Portfolio Investment Scheme. It is a scheme that was laid out by the
          RBI to facilitate NRI trading in India. Under this scheme , an NRI
          will have to open a PIS account with the branch of any bank that is
          approved by the RBI for PIS,
        </p>
        <p className="text-[#8E8E8E]  md:text-base text-sm mt-2">
          This PIS account can be of two types
        </p>
        <div className="border p-2 rounded">
          <p className="font-semibold md:text-md text-base">
            NRE Account:
          </p>
          <p className="text-[#8E8E8E]  md:text-base text-sm mt-2">
            Non Resident external account. The funds in this account are fully
            Repatriableto the country of residence of the NRI. Further, there
            are no tax deductions on the interest in this type of account.
          </p>
          <p className="font-semibold md:text-md text-base mt-4">
            NRO Account:
          </p>
          <p className="text-[#8E8E8E]  md:text-base text-sm mt-2">
            Non Resident Ordinary account. The funds in this account are held on
            a non-repairable basis.If an NRI wants to shift these funds to an
            foreign bank account,they will need to get the permission of the
            RBI.
          </p>
          <p className="text-[#8E8E8E]  md:text-base text-sm mt-2">
            For more information, you can check this detailed review Under NRI
            Services.
          </p>
        </div>
        <p className="font-semibold md:text-md text-base mt-4">Disclaimer:</p>
        <p className="text-[#8E8E8E]  md:text-base text-sm mt-2">
          An NRI demat account comes with a set of rules and regulations simply
          for the reason that two different economies get involved.Further more,
          there are tax regulations and requirements that one needs to take care
          of.Most of the times, you are supposed to pay tax once and if the
          country your are residing in, has a larger tax slab percentagethan you
          might have been charged in India,you only need to pay the residual to
          the foreign government post paying the taxes in India.
        </p>
        <p className="font-semibold md:text-md text-base mt-4">
          Legal Disclaimer –{" "}
        </p>
        <p className="text-[#8E8E8E]  md:text-base text-sm mt-2">
          Goodwill Wealth Management Pvt Ltd , Employee of Goodwill or
          Registered Authorised person of Goodwill does not provide any promise
          or assurance of favourable view for a particular industry or sector or
          business group in any manner. Or any promise of Assured Returns or
          involving any PMS services .The investor is requested to make an note
          of all the risk factors including their financial condition and If you
          came across of such activity kindly escalate the issue immediately to
          <Link href='mailto:grievance@gwcindia.in' className="text-theme ml-2 hover:font-semibold">
          Click here
          </Link>
        </p>
      </div>
    </BoxLayout>
  );
};
