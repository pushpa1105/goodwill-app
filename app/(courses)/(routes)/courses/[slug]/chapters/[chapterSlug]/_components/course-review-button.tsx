"use client";

import { Button } from "@/components/ui/button";
import { useConfettiStore } from "@/hooks/use-confetti-store";
import axios from "axios";
import { CheckCircle, XCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { ReviewModal } from "./course-review-modal";

interface CourseReviewButtonProps {
  courseId: string;
}

export const CourseReviewButton = ({ courseId }: CourseReviewButtonProps) => {
  const router = useRouter();
  const confetti = useConfettiStore();

  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);

      // await axios.put(
      //   `/api/courses/${courseId}/chapters/${chapterId}/progress`,
      //   {
      //     isCompleted: !isCompleted,
      //   }
      // );

      router.refresh();

      // if (!isCompleted && !nextChapterId) {
      //   confetti.onOpen();
      // }

      // if (!isCompleted && nextChapterId) {
      //   router.push(`/courses/${courseId}/chapters/${nextChapterId}`);
      // }

      toast.success("Review added successfully.");
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  // const Icon = isCompleted ? XCircle : CheckCircle;
  return (
    <ReviewModal courseId={courseId} title="Trading with ease">
      <Button
        type="button"
        variant="success"
        className="w-full md:w-auto mr-2 mb-2"
        // onClick={onClick}
        disabled={isLoading}
      >
        Give a review
      </Button>
    </ReviewModal>
  );
};
