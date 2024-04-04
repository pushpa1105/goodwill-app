"use client";

import { useEffect, useState } from "react";
import * as z from "zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Pencil, PlusCircle, Video } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Course, CourseVideo } from "@prisma/client";
import { FileUpload } from "@/components/file-upload";
import ReactPlayer from "react-player";

interface CourseVideoFormProps {
  initialData: Course & { courseVideo?: CourseVideo | null };
  courseId: string;
}

const formSchema = z.object({
  videoUrl: z.string().min(1),
});

export const CourseVideoForm = ({
  initialData,
  courseId,
}: CourseVideoFormProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  const toggleEdit = () => setIsEditing((current) => !current);

  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(`/api/courses/${courseId}`, values);
      toast.success("Course Video updated succesfully.");
      toggleEdit();
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Course Video
        <Button variant="ghost" onClick={toggleEdit}>
          {isEditing && <>Cancel</>}
          {!isEditing && !initialData.videoUrl && (
            <>
              <PlusCircle className="h-4 w-4 mr-2" />
              Add an video
            </>
          )}
          {!isEditing && initialData.videoUrl && (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Edit video
            </>
          )}
        </Button>
      </div>
      {!isEditing &&
        (!initialData.videoUrl ? (
          <div className="flex items-center justify-center h-60 bg-slate-200 rounded-md">
            <Video className="h-10 w-10 text-slate-500" />
          </div>
        ) : (
          <div className="relative aspect-video mt-2">
            {hasWindow && (
              <ReactPlayer
                url={initialData.videoUrl}
                controls
                width="100%"
                height="100%"
              />
            )}
          </div>
        ))}
      {isEditing && (
        <div>
          <FileUpload
            fileType="video"
            onChange={(url) => {
              if (url) {
                onSubmit({ videoUrl: url });
              }
            }}
          />
          <div className="text-xs text-muted-foreground mt-4">
            Upload this course&apos;s video
          </div>
        </div>
      )}
      {initialData.videoUrl && !isEditing && (
        <div className="text-xs text-muted-foreground mt-2">
          Video can take a few minutes to process. Refresh the page if video
          does not appear.
        </div>
      )}
    </div>
  );
};
