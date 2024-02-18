import Link from "next/link";
import { Logo } from "./logo";

export const Footer = () => {
  return (
    <div className="mt-16">
      <hr />
      <div className="px-4 mt-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-[85%] md:px-24 lg:px-24">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="sm:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <Logo />
              <span className="ml-2 text-xl font-bold tracking-wide text-theme uppercase text-bottom">
                Goodwill Co.
              </span>
            </a>
            <div className="mt-4 lg:max-w-sm font-light text-theme">
              <div className="pb-2">
                <p className="text-sm text-gray-800">
                  Goodwill Wealth Management Pvt Ltd.
                </p>
                <p className="text-sm text-gray-800">
                  New No #9(Old No 4/1) 2nd Floor,
                </p>
                <p className="text-sm text-gray-800">Masha Allah Building,</p>
                <p className="text-sm text-gray-800">
                  Bheema Sena Garden Street,
                </p>
                <p className="text-sm text-gray-800">
                  Chennai,TamilNadu - 600 004
                </p>
              </div>
              <hr />
              <div className="pt-2 text-xs">
                <div className="text-gray-800">
                  SEBI Stock Broker Registration No: INH200005179 | Research
                </div>
                <div className="text-gray-800">
                  Analyst SEBI Regn. No. INH200005179
                </div>

                <div className="text-gray-800">
                  MCX : 11095 | ICEX : 2035 | MSEI : 11240 | NSE : 90097 | BSE :
                  6648
                </div>

                <div className="text-gray-800">
                  DP ID : 12084200 | SEBI Regn. No : IN - DP - CDSL - 309 - 2017
                </div>

                <div className="text-gray-800">
                  Clearing Code : NSE : M52003|BSE : 6648
                </div>

                <div className="text-gray-800">Mutual Funds |ARN : 182218</div>
              </div>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="mt-2">
              <span className="text-base font-bold text-theme">Social</span>
              <div className="flex items-center mt-1 space-x-3 mb-12">
                <Link
                  href="https://twitter.com/goodwillgwc?lang=en"
                  target="_blank"
                  className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.instagram.com/gwcroyal/"
                  target="_blank"
                  className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                    <circle cx="15" cy="15" r="4" />
                    <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                  </svg>
                </Link>
                <Link
                href="https://www.facebook.com/gwcindia/"
                target="_blank"
                  className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                    <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                  </svg>
                </Link>
              </div>
              {/* <p className="mt-4 text-sm text-gray-500">
                Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken
                spare ribs salami.
              </p> */}
            </div>
            <p className="text-base font-bold text-theme">
              Contacts
            </p>
            <div className="text-sm font-light">
              <div className="mr-1 text-gray-800">
                For any Grievance, please write to us :
                <Link
                  href="mailto:Grievance@gwcindia.in"
                  aria-label="Our email"
                  title="Our email"
                  className="text-theme"
                >
                  [Grievance@gwcindia.in]
                </Link>
              </div>
            </div>
            <div className="text-sm font-light">
              <div className="mr-1 text-gray-800">
                Administration E-mail ID :
                <a
                  href="mailto:goodwill@gwcindia.in"
                  aria-label="Our email"
                  title="Our email"
                  className="text-theme"
                >
                  [goodwill@gwcindia.in]
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row mt-8">
          <p className="text-sm text-gray-600">
            © Copyright 2020 Goodwill Inc. All rights reserved.
          </p>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <Link
                prefetch
                href="/privacy-policy"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                prefetch
                href="/terms"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
