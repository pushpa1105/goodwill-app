"use client";

import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

interface CourseVideoProps {
  playbackId: string;
  courseId: string;
  title: string;
  autoPlay?: boolean;
}

export const CourseVideoComponent = ({
  playbackId,
  courseId,
  title,
  autoPlay = false,
}: CourseVideoProps) => {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  const [isReady, setIsReady] = useState(false);

  return (
    <div className="relative aspect-video">
      {!isReady && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
          <Loader2 className="h-8 w-8 animate-spin text-secondary" />
        </div>
      )}

      {hasWindow && (
        <div>
          <ReactPlayer
            url={playbackId}
            controls
            autoPlay={autoPlay}
            width="100%"
            height="100%"
            onReady={() => {
              setIsReady(true);
            }}
          />
        </div>
      )}
    </div>
  );
};
