"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export const SwitchLanguage = ({ lang }: { lang: string }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const onLanguageChange = async (value: string) => {
    try {
      setIsLoading(true);
      await axios.post("/api/user", { lang: value });
      toast.success("Language updated succesfully");
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="mr-2 mb-2 w-full md:w-auto">
      <Select
        onValueChange={onLanguageChange}
        defaultValue={lang}
        disabled={isLoading}
      >
        <SelectTrigger className="">
          <SelectValue placeholder="Language" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="eng">English</SelectItem>
          <SelectItem value="hindi">Hindi</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
