import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";
import { BoxLayout } from "./box-layout";

export const Api = () => {
  return (
    <BoxLayout title="API">
      <>
        <div className="pt-2">
          <p className="font-semibold md:text-md text-base mt-4">
            General Info (API)
          </p>
          <p className="text-[#8E8E8E]  md:text-base text-sm">
            You should be fully aware of and understand the risks associated
            with availing services of an Application Programming Interface
            (API). The API may be used for placing orders, modifying orders,
            retrieving account information and so on. Your use of an API is
            bound by various norms and regulations stipulated by exchanges and
            regulatory authorities.
          </p>
          <p className="font-semibold md:text-md text-base mt-4">Warranties</p>
          <p className="text-[#8E8E8E]  md:text-base text-sm">
            You should be aware that using API service with Goodwill API Bridge
            involves many uncertain factors and complex hardware, software,
            systems, communication lines, peripherals etc. The Member Broker
            and/or Exchange does not make any commitment, warranty or promises
            that this API service will be available to you at all times without
            any interruption/fail.
          </p>
          <p className="font-semibold md:text-md text-base mt-4">Limitation</p>
          <p className="text-[#8E8E8E]  md:text-base text-sm">
            You should carefully consider whether this API based trading is
            suitable for you in light of your financial condition or otherwise.
            Member Goodwill shall not be responsible for lost profits, revenues,
            or data; financial losses; or indirect, special, consequential,
            exemplary, or punitive damages. You are hereby informed, and by
            proceeding to trade duly acknowledge and accept that there can be no
            guarantee of profits or no exception from losses while executing
            orders by using the API Facility. All trades are subject to market
            risk and are to your trading account.
          </p>
          <p className="font-semibold md:text-md text-base mt-4">
            Confidentiality
          </p>
          <p className="text-[#8E8E8E]  md:text-base text-sm">
            Confidential information including credentials (such as passwords,
            API keys and secrets, and Client IDs) and order history (details of
            orders submitted, modified, cancelled) are intended to be used only
            by you. This confidential information is stored on your local
            computer only, and not accessible to your Software Vendor. Goodwill
            and 3rd party algo software may have access to diagnostic
            information related to application crash or performance issues which
            is used for betterment of API Bridge.
          </p>
          <p className="font-semibold md:text-md text-base mt-4">
            Trade Authorization
          </p>
          <p className="text-[#8E8E8E]  md:text-base text-sm">
            All trades placed via API shall be manually authorized by you. You
            acknowledge manually login and supervising all trades via API.
          </p>
          <p className="text-[#8E8E8E]  md:text-base text-sm mt-2">
            Bracket Orders (BO)- are designed to help limit your loss and lock
            in a profit by “Breaking” an order with two opposite side orders. A
            Buy order is bracketed by a high-side sell limit order and low side
            sell stop order. A sell order is bracketed by a high side buy stop
            order and a low side buy limit order.
          </p>
          <p className="text-[#8E8E8E]  md:text-base text-sm mt-2">
            BO are very useful for intraday traders who are trading with
            discipline. Since BO product are mean for intraday, client Allowed
            to square up there position by 3:15 pm otherwise RMS will square up
            same at 3:15 pm.
          </p>
          <p className="text-[#8E8E8E]  md:text-base text-sm mt-2">
            Cover Order (CO)- is basically two leg order. Buy order is followed
            by sell order stop loss and vise versa. It is highly useful to an
            intraday trader who wants high leverage and also trades with
            discipline. Since cover order is meant for intraday trades, the
            trader has to square up their position before 3.15 otherwise RMS
            will square up the position at 3.15.
          </p>

          <p className="font-semibold md:text-md text-base mt-4">Terms:</p>

          <ul className=" list-disc ml-4 my-2 text-[#8E8E8E] md:text-base text-sm font-light">
            <li>
              {" "}
              All Cover Orders are Intraday orders by default, these orders will
              be squared off automatically at
            </li>
            <li>
              {" "}
              3:15 pm for NSE Equity & NSE F&O , 4:45 pm for NSE Currency
              ,11:30pm for MCX Commodity segment
            </li>
            <li>
              {" "}
              Cover Orders can be placed only during regular market hours and
              can be placed during the pre-market trades (9:00 am - 9:15 am)
              only for Equity Cash and post-market trades (3:40 pm - 4:00 pm)
              Equity Cash and F&O.
            </li>
            <li>
              {" "}
              Cover Orders are currently valid only for derivative-based scripts
              in Equity Cash.
            </li>
          </ul>
          <p className="font-semibold md:text-md text-base mt-4">Disclaimer:</p>
          <p className="text-[#8E8E8E]  md:text-base text-sm">
            Bracket orders / Cover Orders which are placedas stop loss or profit
            booking, may not be reached to the Exchange due to a possibility
            delayed or incomplete tick by tick price or any other such
            system/network requirement which is beyond our control. This may
            result in delay in processing or not processing your orders. In such
            cases Goodwill shall not be held responsible to compensate the
            client against the profit/losses in any manner.
          </p>
        </div>
      </>
    </BoxLayout>
  );
};
