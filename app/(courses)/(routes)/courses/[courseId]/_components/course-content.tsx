"use client";

import { Chapter, Course, CourseVideo } from "@prisma/client";
import { ChaptersList } from "./chapters-list";
import { CourseDetails } from "./course-details";
import { CourseMenuBar } from "./course-menu-bar";
import { CourseSummary } from "./course-summary";
import { useState } from "react";
import { CourseVideoComponent } from "./course-video-component";

interface CourseContentProps {
  course: Course & {
    chapters: Chapter[];
    courseVideo: CourseVideo;
  };
  enrollerCount: number;
  enrolled: boolean;
}

export const CourseContent = ({
  course,
  enrollerCount,
  enrolled,
}: CourseContentProps) => {
  const [activeLink, setActiveLink] = useState<string>("overview");

  const updateActiveTab = (tab: string) => {
    setActiveLink(tab);
  };
  return (
    <>
      <div className="block md:hidden">
        <CourseVideoComponent
          courseId={course.id!}
          title={course.title}
          playbackId={course.courseVideo.playbackId!}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 relative">
        <div className="relative">
          <CourseMenuBar
            activeTab={activeLink}
            updateActiveTab={updateActiveTab}
          />
          <CourseSummary initialData={course} />
          <ChaptersList items={course.chapters} enrolled={enrolled} />
        </div>
        <div className="space-y-6 sticky top-0">
          <div className="hidden md:block">
            <CourseVideoComponent
              courseId={course.id!}
              title={course.title}
              playbackId={course.courseVideo.playbackId!}
            />
          </div>
          <CourseDetails
            id={course.chapters[0].id}
            courseId={course.id!}
            enrollerCount={enrollerCount}
            enrolled={enrolled}
          />
        </div>
      </div>
    </>
  );
};
