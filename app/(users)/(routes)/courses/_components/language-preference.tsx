"use client";

import axios from "axios";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const LanguagePreference = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async (value: string) => {
    try {
      setIsLoading(true);
      await axios.post(`/api/user`, { lang: value });
      toast.success("Language set succesfully.");
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="bg-linear-landing w-full h-full">
        <div className="flex justify-center items-center h-[75%]">
          <div className="w-full">
            <div className="flex justify-center items-center ">
              <div className="text-4xl font-bold">
                <div className="w-[90%] lg:w-[60%] flex text-center m-auto justify-center text-white">
                  Choose your preffered language
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-around items-center mt-8 lg:w-[60%] m-auto">
              <Button
                disabled={isLoading}
                onClick={() => handleClick("eng")}
                className="w-[75%] lg:w-[40%] h-[80px] text-black text-2xl font-bold bg-[#d2e7f9] shadow-lg mb-4 hover:bg-[#8aa1b9ed]"
              >
                English
              </Button>
              <Button
                disabled={isLoading}
                onClick={() => handleClick("hindi")}
                className="w-[75%] lg:w-[40%] h-[80px] text-black  text-2xl font-bold bg-[#d2e7f9] shadow-lg mb-4 hover:bg-[#8aa1b9ed]"
              >
                Hindi
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
