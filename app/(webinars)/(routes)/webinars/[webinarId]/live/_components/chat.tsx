"use client";

import { Button } from "@/components/ui/button";
import {
  Hand,
  MessageCircle,
  MessageSquare,
  SendHorizonal,
} from "lucide-react";

export const Chat = () => {
  const test = [1, 2, 3];
  return (
    <div className="flex flex-col flex-grow w-full bg-white shadow-xl lg:rounded-lg overflow-hidden h-full">
      <div className="flex h-[50px] pl-8 items-center border border-b-red">
        <MessageSquare className="text-theme" />
        <div className="text-2xl font-extrabold ml-2 text-theme">Chat</div>
      </div>
      <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
        {test.map((t) => (
          <>
            <div className="flex w-full mt-2 space-x-3">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
              <div className="">
                <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <span className="text-xs text-gray-500 leading-none">
                  2 min ago
                </span>
              </div>
            </div>
            <div className="flex w-full mt-2 space-x-3">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
              <div>
                <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                </div>
                <span className="text-xs text-gray-500 leading-none">
                  2 min ago
                </span>
              </div>
            </div>
            <div className="flex w-full mt-2 space-x-3">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
              <div>
                <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                </div>
                <span className="text-xs text-gray-500 leading-none">
                  2 min ago
                </span>
              </div>
            </div>
          </>
        ))}
      </div>

      <div className="flex bg-gray-300 p-4 items-center w-full">
        <input
          className="flex items-center h-10 w-[82%] rounded px-3 text-sm mr-2"
          type="text"
          placeholder="Type your message…"
        />
        <div className="w-[9%] hover:bg-blue-400 rounded-2xl p-2 cursor-pointer" onClick={() => alert("Message sent")}>
          <SendHorizonal className="text-theme w-full" />
        </div>
        <div className="w-[9%] hover:bg-blue-400 rounded-2xl p-2 cursor-pointer" onClick={() => alert("Message sent")}>
          <Hand className="text-theme w-full" />
        </div>
      </div>
    </div>
  );
};
