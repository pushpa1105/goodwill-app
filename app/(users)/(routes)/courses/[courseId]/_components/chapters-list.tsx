import { Chapter } from "@prisma/client";
import { ChapterCard } from "./chapter-card";

interface ChaptersListProps {
  items: Chapter[];
}

export const ChaptersList = ({ items }: ChaptersListProps) => {
  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <ChapterCard
            key={item.id}
            id={item.id}
            title={item.title}
            summary={item.summary!}
            courseId={item.courseId!}
            chapterNumber={index + 1}
          />
        ))}
      </div>
      {items.length === 0 && (
        <div className="text-center text-sm text-muted-foreground mt-10">
          No chapters found
        </div>
      )}
    </div>
  );
};
