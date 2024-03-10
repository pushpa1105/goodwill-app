import Image from "next/image";
import Link from "next/link";
import { IconBadge } from "@/components/icon-badge";
import { BookOpen } from "lucide-react";
import { formatPrice } from "@/lib/format";
import { CourseProgress } from "./course-progress";
import { Badge } from "./ui/badge";

interface CourseCardProps {
  slug: string;
  title: string | null;
  imageUrl: string;
  chaptersLength: number;
  price: number;
  progress: number | null;
  category: string;
  isFree?: boolean;
  description: string;
}

export const CourseCard = ({
  slug,
  title,
  imageUrl,
  chaptersLength,
  price,
  progress,
  category,
  isFree,
  description,
}: CourseCardProps) => {
  return (
    <Link href={`/courses/${slug}`}>
      <div className="group hover:shadow-2xl transition overflow-hidden border rounded-lg p-3 h-full">
        <div className="relative w-full aspect-video rounded-md overflow-hidden">
          <Image
            fill
            className="object-cover group-hover:scale-110 transition duration-250"
            alt={title}
            src={imageUrl}
          />
        </div>
        <div className="flex flex-col pt-2">
          <div className="text-lg md:text-base font-extrabold  group-hover:text-sky-700 transition line-clamp-2 text-theme">
            {title}
          </div>
          <p className="text-xs text-muted-foreground">{category}</p>
          <p className="text-xs py-2">{description}</p>
          <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
            <div className="flex items-center gap-x-1 text-theme font-semibold">
              <IconBadge size="sm" icon={BookOpen} />
              <span>
                {chaptersLength} {chaptersLength === 1 ? "Chapter" : "Chapters"}
              </span>
            </div>
          </div>
          {progress !== null && progress && (
            <CourseProgress
              size="sm"
              variant={progress === 100 ? "success" : "default"}
              value={progress}
            />
          )}
          {isFree ? (
            <Badge className="bg-theme font-medium w-[55px]">Free</Badge>
          ) : (
            <p className="text-md md:text-sm font-medium text-slate-700">
              {formatPrice(price)}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};
