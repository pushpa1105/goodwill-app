"use client";

import { Category, Chapter, Course } from "@prisma/client";
import { ChaptersList } from "./chapters-list";
import { CourseDetails } from "./course-details";
import { CourseMenuBar } from "./course-menu-bar";
import { CourseSummary } from "./course-summary";
import { useState } from "react";

interface CourseContentProps {
  course: Course & {
    chapters: Chapter[];
  };
}

export const CourseContent = ({ course }: CourseContentProps) => {
  const [activeLink, setActiveLink] = useState<string>("overview");

  const updateActiveTab = (tab: string) => {
    setActiveLink(tab);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 relative">
      <div className="relative">
        <CourseMenuBar
          activeTab={activeLink}
          updateActiveTab={updateActiveTab}
        />
        <CourseSummary initialData={course} />
        <ChaptersList items={course.chapters} />
      </div>
      <div className="space-y-6 sticky top-0">
        <CourseDetails id={course.chapters[0].id} courseId={course.id!} />
      </div>
    </div>
  );
};
