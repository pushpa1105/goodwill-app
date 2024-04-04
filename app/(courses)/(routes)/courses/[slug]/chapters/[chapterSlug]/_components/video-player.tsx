"use client";

import { useConfettiStore } from "@/hooks/use-confetti-store";
import axios from "axios";
import { Loader2, Lock } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import React from "react";
import ReactPlayer from "react-player";

interface VideoPlayerProps {
  playbackId: string;
  courseId: string;
  slug: string;
  chapterId: string;
  nextChapterSlug?: string;
  isLocked: boolean;
  completeOnEnd: boolean;
  title: string;
}

export const VideoPlayer = ({
  playbackId,
  courseId,
  chapterId,
  nextChapterSlug,
  isLocked,
  completeOnEnd,
  title,
  slug,
}: VideoPlayerProps) => {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  const [isReady, setIsReady] = useState(false);

  const router = useRouter();
  const confetti = useConfettiStore();

  const onEnd = async () => {
    try {
      if (completeOnEnd) {
        await axios.put(
          `/api/courses/${courseId}/chapters/${chapterId}/progress`,
          {
            isCompleted: true,
          }
        );

        if (!nextChapterSlug) {
          confetti.onOpen();
        }

        toast.success("Progress updated");
        router.refresh();

        if (nextChapterSlug) {
          router.push(`/courses/${slug}/chapters/${nextChapterSlug}`);
        }
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="relative aspect-video">
      {!isReady && !isLocked && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
          <Loader2 className="h-8 w-8 animate-spin text-secondary" />
        </div>
      )}
      {isLocked && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-800 text-secondary gap-y-2">
          <Lock className="h-8 w-8" />
          <p className="text-sm">This chapter is locked.</p>
        </div>
      )}
      {!isLocked && hasWindow && (
        <ReactPlayer
          url={playbackId}
          controls
          width="100%"
          height="100%"
          onReady={() => setIsReady(true)}
          onEnded={() => {
            onEnd();
          }}
        />
      )}
    </div>
  );
};
