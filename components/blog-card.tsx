import Image from "next/image";
import Link from "next/link";
import { IconBadge } from "@/components/icon-badge";
import { BookOpen, MoveRight } from "lucide-react";
import { Badge } from "./ui/badge";
import { formatDate } from "@/lib/format";

interface BlogCardProps {
  id: string;
  title: string | null;
  imageUrl: string;
  readTime: number;
  category: string;
  description: string;
  createdAt: Date | string;
  updatedAt: Date | string;
}

export const BlogCard = ({
  id,
  title,
  imageUrl,
  readTime,
  category,
  description,
  createdAt,
  updatedAt,
}: BlogCardProps) => {
  return (
    <Link href={`/blogs/${id}`}>
      <div className="group hover:shadow-2xl transition overflow-hidden border rounded-lg p-3 h-full">
        <div className="mb-6 mt-4 text-center">
          <div className="flex flex-wrap justify-center">
            <p className="text-xs text-muted-foreground text-center border-b p-2 w-fit">
              {category}
            </p>
          </div>
          <div className="text-2xl font-family-seriff font-semibold  group-hover:text-sky-700 transition line-clamp-4">
            {title}
          </div>
        </div>
        <div className="relative w-full aspect-video rounded-md overflow-hidden">
          <Image
            fill
            className="object-cover group-hover:scale-110 transition duration-250"
            alt={title!}
            src={imageUrl ?? '/blog.png'}
          />
        </div>
        <div className="flex flex-col pt-2">
          <div className="text-[11px] text-muted-foreground flex flex-wrap justify-between">
            <div>{formatDate(createdAt)}</div>
            <div className="mr-2">
              {readTime} {readTime === 1 ? "minute" : "minutes"} read
            </div>
          </div>
          <p className="text-xs py-2">{description}</p>
          <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
            <div className="flex items-center gap-x-1 text-slate-500 hover:text-sky-700">
              Read Full Blog
              <MoveRight/>
            </div>
          </div>
          {/* {isFree ? (
            <Badge className="bg-sky-700 w-[55px]">Free</Badge>
          ) : (
            <p className="text-md md:text-sm font-medium text-slate-700">
              {formatPrice(price)}
            </p>
          )} */}
        </div>
      </div>
    </Link>
  );
};
