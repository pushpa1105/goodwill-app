"use client";

import Link from "next/link";
import { PolicyTab } from "../../_components/policy-tab";
import { ArrowRightCircle } from "lucide-react";
import { Terms } from "./_components/terms";
import { Pms } from "./_components/pms";
import { Insurance } from "./_components/insurance";
import { MutualFunds } from "./_components/mutual-funds";
import { Research } from "./_components/research";
import { Voluntary } from "./_components/voluntary";
import { Ipo } from "./_components/ipo";
import { AuthorisedPerson } from "./_components/authorized-person";
import { ResearchReport } from "./_components/research-report";
import { Referral } from "./_components/referral";
import { BidReferral } from "./_components/bid-referral";
import { Dashboard } from "./_components/dashboard";
import { ThirdParty } from "./_components/third-party";
import { Api } from "./_components/api";
import { GlobalInvest } from "./_components/global-invest";
import { Nri } from "./_components/nri";

const PrivacyPolicyPage = () => {
  return (
    <div>
      <div className="max-w-[1550px] m-auto pb-8 text-justify">
        <PolicyTab />
        <div className="pt-4 lg:px-24 md:px-12 px-5">
          <div className="">
            <div>
              <h2 className="text-theme font-extrabold text-xl lg:text-4xl md:text-3xl">
                Terms & Conditions
              </h2>
            </div>
          </div>

          <div className="">
            <div className="">
              <div>
                <p className="text-theme font-bold md:text-lg text-base mt-6">
                  STANDARD DISCLAIMER :
                </p>
                <div className="pt-2.5">
                  <p className="text-[#8E8E8E] md:text-base text-sm">
                    Investments in securities market are subject to market
                    risks, read all the related documents carefully before
                    investing.
                  </p>
                </div>
              </div>

              <Voluntary />
              <Research />

              <MutualFunds />

              <Insurance />

              <Pms />

              <Terms />

              <Ipo />
              <AuthorisedPerson />
              <ResearchReport />
              <Referral />
              <BidReferral />
              <Dashboard />
              <ThirdParty />
              <Api />
              <GlobalInvest />
              <Nri/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
