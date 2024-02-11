import { BoxLayout } from "./box-layout";

export const Pms = () => {
  return (
    <BoxLayout title="PMS">
      <div className="pt-2.5 font-light">
        <p className="text-[#8E8E8E]  md:text-base text-sm">
          Goodwill or any of its Employee or Registered Authorised person or
          Business Associates or their respective employees and clients mapped
          under them are not Involved in any Portfolio Management Services,
        </p>
        <p className="font-semibold md:text-md text-base mt-4">
          Account opening:
        </p>
        <p className="text-[#8E8E8E]  md:text-base text-sm">
          Paperless Trading & Demat Account opened in just 10 Minutes.Account
          would be open after all procedure relating to IPV and client due
          diligence is completed.
        </p>
        <p className="font-semibold md:text-md text-base mt-4">Documents:</p>
        <ul className=" list-disc ml-4 my-2 text-[#8E8E8E] md:text-base text-sm">
          <li>
            {/* <ArrowRightCircle className="w-[20px] mr-2 " /> */}
            Pancard copy,
          </li>
          <li>
            {/* <ArrowRightCircle className="w-[20px] mr-2 " /> */}
            Aadhar card Number
          </li>
          <li>
            {/* <ArrowRightCircle className="w-[20px] mr-2 " /> */}
            Bank Proof
          </li>
        </ul>
        <p className="text-[#8E8E8E]  md:text-base text-sm">
          # Fast Broadband to complete ekyc Online # &quot;Start Trading in 1
          hour&quot; is subject to Regulatory compliance and fulfillment of all{" "}
          <span className="font-semibold text-black">account opening </span>
          formalities and documentation.
        </p>
      </div>
    </BoxLayout>
  );
};
