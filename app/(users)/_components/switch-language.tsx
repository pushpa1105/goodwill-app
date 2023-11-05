import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";

export const SwitchLanguage = () => {
  const lang = undefined;
  const onLanguageChange = () => {};
  return (
    <Select onValueChange={onLanguageChange} defaultValue={lang}>
      <SelectTrigger className="">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="eng">English</SelectItem>
        <SelectItem value="hindi">Hindi</SelectItem>
      </SelectContent>
    </Select>
  );
};
