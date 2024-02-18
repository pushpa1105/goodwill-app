import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/format";
import { Blog } from "@prisma/client";
import Image from "next/image";

interface MiniBlogCardProps {
  title: string;
  description: string;
  imageUrl: string;
  readTime: number;
  category: string;
  createdAt: Date | string;
}

export const MiniBlogCard = ({
  title,
  description,
  imageUrl,
  readTime,
  category,
  createdAt,
}: MiniBlogCardProps) => {
  return (
    <div className="group flex flex-start my-4">
      <div className="relative w-1/4 aspect-video rounded-md overflow-hidden">
        <Image
          fill
          className="object-cover group-hover:scale-110 transition duration-250 rounded"
          alt="blog"
          src={imageUrl ?? '/blog.png'}
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
          <Badge className="bg-theme font-medium">{category}</Badge>
        </div>
        <div className="text-sm line-clamp-3">{description}</div>
        <div className="flex justify-between mt-2">
          <div className="text-xs text-muted-foreground">
            {readTime} min read
          </div>
          <div className="text-xs text-muted-foreground">
            {formatDate(createdAt)}
          </div>
        </div>
      </div>
    </div>
  );
};
