/* eslint-disable @next/next/no-img-element */
import { SectionFour } from "./_components/section-four";
import { SectionOne } from "./_components/section-one";
import { SectionThree } from "./_components/section-three";
import { SectionTwo } from "./_components/section-two";

const AccountOpeningPage = async () => {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <img
        src="https://stock-logos.dhan.co/static-openweb/dhanBorderL.png"
        alt="line"
      ></img>
      <SectionThree />
      <img src="https://stock-logos.dhan.co/static-openweb/dhanBorderL.png" alt="line" className="w-full"></img>
      <SectionFour/>
    </div>
  );
};

export default AccountOpeningPage;
