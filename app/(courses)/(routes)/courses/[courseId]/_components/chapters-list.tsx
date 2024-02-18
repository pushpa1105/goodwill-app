"use client";

import { Chapter, User } from "@prisma/client";
import { ChapterCard } from "./chapter-card";

interface ChaptersListProps {
  items: Chapter[];
  enrolled: boolean;
  user: User | null;
}

export const ChaptersList = ({ items, enrolled, user }: ChaptersListProps) => {
  return (
    <div id="curriculum">
      <h1 className="text-3xl font-extrabold mb-4 ml-2 text-theme">
        Course Curriculum
      </h1>
      <div className="shadow-sm border rounded mb-4 p-4">
        {items.map((item, index) => (
          <ChapterCard
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description!}
            courseId={item.courseId!}
            chapterNumber={index + 1}
            enrolled={enrolled}
            user={user}
          />
        ))}

        {items.length === 0 && (
          <div className="text-center text-sm text-muted-foreground mt-10">
            No chapters found
          </div>
        )}
      </div>
    </div>
  );
};
