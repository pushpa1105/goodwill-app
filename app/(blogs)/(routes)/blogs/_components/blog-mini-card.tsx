import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const MiniBlogCard = () => {
  return (
    <div className="group flex flex-start my-4">
      <div className="relative w-1/4 aspect-video rounded-md overflow-hidden">
        <Image
          fill
          className="object-cover group-hover:scale-110 transition duration-250 rounded"
          alt="blog"
          src="/open-account.jpg"
        />
      </div>
      {/* <div className="">
        <Image
          src="/open-account.jpg"
          width={25}
          height={25}
          alt="blog"
          className="w-[80px] h-[80px]"
        />
      </div> */}
      <div className="ml-4 w-60">
        <div className="text-[10px] text-muted-foreground">
          <Badge className="bg-theme font-medium">Entertainment</Badge>
        </div>
        <div className="text-sm line-clamp-3">
          I apologize for any confusion. It seems like TypeScript is inferring
          the types and enforcing stricter type checking. To address this, you
          can explicitly cast the values to the expected types. an updated
          version of the JavaScript code with TypeScript annotations:
        </div>
        <div className="flex justify-between mt-2">
          <div className="text-xs text-muted-foreground">4 min read</div>
          <div className="text-xs text-muted-foreground">12/22/2020</div>
        </div>
      </div>
    </div>
  );
};
