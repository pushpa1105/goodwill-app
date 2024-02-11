"use client";

import { PolicyTab } from "../../_components/policy-tab";

const PrivacyPolicyPage = () => {
  return (
    <div>
      <div className="max-w-[1550px] m-auto pb-8 text-justify">
        <PolicyTab />
        <div className="pt-4 lg:px-24 md:px-12 px-5">
          <div className="">
            <div>
              <h2 className="text-theme font-extrabold text-xl lg:text-4xl md:text-3xl">
                Privacy Policy
              </h2>
            </div>
            <div className="pt-6">
              <p className="text-[#8E8E8E]  md:text-base text-sm">
                Your privacy is important to Goodwill Wealth Management pvt
                ltd.The term Goodwill is refer to Goodwill Wealth Managment
                Private Limited. We represent in website as Goodwill. This
                privacy statement provides information about the personal
                information that Goodwill collects, and the ways in which
                Goodwill uses that personal information.
              </p>
            </div>
          </div>

          <div className="">
            <div className="">
              <div>
                <p className="text-theme font-bold md:text-lg text-base mt-6">
                  PERSONAL INFORMATION COLLECTION
                </p>
                <div className="pt-2.5">
                  <p className="text-[#8E8E8E] md:text-base text-sm">
                    Goodwill may collect and use the following kinds of personal
                    information:
                  </p>
                  <ul className="text-[#8E8E8E] list-disc ml-4 mt-2">
                    <li> Information about your use of this website</li>
                    <li>
                      Information that you provide using for the purpose of
                      registering with www.gwcindia.in (“the Website”).
                    </li>
                    <li>
                      Information about transactions carried out over this
                      Website.
                    </li>
                    <li>
                      Information that you provide for the purpose of
                      subscribing to the Website services
                    </li>
                    <li>any other Information that you send to Goodwill.</li>
                  </ul>
                </div>
              </div>

              <div>
                <p className="text-theme font-bold md:text-lg text-base mt-6">
                  USING PERSONAL INFORMATION COLLECTION
                </p>
                <div className="pt-2.5">
                  <p className="text-[#8E8E8E]  md:text-base text-sm">
                    Goodwill may use your personal information to:
                  </p>
                  <ul className=" list-disc ml-4 my-2 text-[#8E8E8E] md:text-base text-sm">
                    <li> Administer this Website</li>
                    <li>personalize the Website for you;</li>
                    <li>
                      enable your access to and use of the Website services
                    </li>
                    <li>publish information about you on the Website;</li>
                    <li>supply to you services that you purchase;</li>
                    <li>send you statements and invoices;</li>
                    <li>collect payments from you; and</li>
                    <li>send you marketing communications</li>
                  </ul>
                  <p className="text-[#8E8E8E] md:text-base text-sm">
                    Where Goodwill discloses your personal information to its
                    agents or sub-contractors for these purposes, the agent or
                    sub-contractor in question will be obligated to use that
                    personal information in accordance with the terms of this
                    privacy statement. Goodwill shall or its agents and/or
                    sub-contractors may use your personal information to make
                    contact you for promotion of products/schemes etc of
                    Goodwill or of its partners from time to time. You hereby
                    agree and understand that such promotional calls shall be
                    made to you unless you specifically convey to Goodwill to
                    not call you further for such promotions, schemes etc. In
                    addition to the disclosures reasonably necessary for the
                    purposes identified elsewhere above, Goodwill may disclose
                    your personal information to the extent that it is required
                    to do so by law, in connection with any legal proceedings or
                    prospective legal proceedings, and in order to establish,
                    exercise or defend its legal rights.
                  </p>
                </div>
              </div>

              <div>
                <p className="text-theme font-bold md:text-lg text-base mt-6">
                  SECURING YOUR DATA
                </p>
                <div className="pt-2.5">
                  <p className="text-[#8E8E8E]  md:text-base text-sm">
                    Goodwill will take reasonable technical and organizational
                    precautions to prevent the loss, misuse or alteration of
                    your personal information. Goodwill will store all the
                    personal information you provide on its secure servers.
                    Information relating to electronic transactions entered into
                    via this Website will be protected by encryption technology.
                  </p>
                </div>
              </div>

              <div>
                <p className="text-theme font-bold md:text-lg text-base mt-6">
                  CROSS-BORDER DATA TRANSFER
                </p>
                <div className="pt-2.5">
                  <p className="text-[#8E8E8E]  md:text-base text-sm">
                    Information that Goodwill collects may be stored and
                    processed in and transferred between any of the countries in
                    which Goodwill operates (if at all) to enable the use of the
                    information in accordance with this privacy policy.
                  </p>
                  <p className="text-[#8E8E8E]  md:text-base text-sm">
                    In addition, personal information that you submit for
                    publication on the website will be published on the internet
                    and may be available around the world. You agree to such
                    cross-border transfers of personal information.
                  </p>
                </div>
              </div>

              <div>
                <p className="text-theme font-bold md:text-lg text-base mt-6">
                  UPDATING THIS STATEMENT
                </p>
                <div className="pt-2.5">
                  <p className="text-[#8E8E8E]  md:text-base text-sm">
                    Goodwill may update this privacy policy by posting a new
                    version on this Website. You should check this page
                    occasionally to ensure you are familiar with any changes.
                  </p>
                </div>
              </div>

              <div>
                <p className="text-theme font-bold md:text-lg text-base mt-6">
                  OTHER WEBSITES
                </p>
                <div className="pt-2.5">
                  <p className="text-[#8E8E8E]  md:text-base text-sm">
                    This website contains links to other websites. Goodwill is
                    not responsible for the privacy policies or practices of any
                    third party.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
