import { EnrollConfirmModal } from "@/components/modals/enroll-confirm-modal";
import { Button } from "@/components/ui/button";
import { Course } from "@prisma/client";
import axios from "axios";
import { PlayIcon, KeyIcon, FileStack, MedalIcon, Play, PlayCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface CourseDetailsProps {
  id: string;
  courseId: string;
  enrollerCount: number;
  enrolled: boolean;
}

export const CourseDetails = ({
  id,
  courseId,
  enrollerCount,
  enrolled,
}: CourseDetailsProps) => {
  const router = useRouter();
  const enrollAction = async () => {
    try {
      await axios.put(`/api/courses/${courseId}/enroll`);

      router.refresh();

      if (enrolled) {
        toast.success("Enrolled");
        router.push(`/courses/${courseId}/chapters/${id}`);
      }
    } catch (error) {}
  };
  return (
    <>
      <div className="shadow-sm border rounded mb-4 pt-4">
        <ul>
          <li className="flex p-4 justify-around border-b border-gray text-theme">
            <div className="text-center">
              <div className="font-bold text-2xl">3.5</div>
              <div className="font-bold text-xl text-muted-foreground">
                Hours
              </div>
            </div>
            <div className="text-center">
              <div className="font-bold text-2xl">{enrollerCount}</div>
              <div className="font-bold text-xl text-muted-foreground">
                Students
              </div>
            </div>
          </li>
          <li className="flex p-4 border-b border-gray text-sm text-center">
            <PlayIcon size={20} className="mr-2" />
            On-demand video
          </li>
          <li className="flex p-4 border-b border-gray text-sm text-center">
            <KeyIcon size={20} className="mr-2" />
            Full lifetime access
          </li>
          <li className="flex p-4 border-b border-gray text-sm text-center">
            <FileStack size={20} className="mr-2" />
            Downloadable resources
          </li>
          {/* <li className="flex p-4 border-b border-gray text-sm text-center">
            <MedalIcon size={20} className="mr-2" />
            Certificate of completion
          </li> */}
        </ul>
      </div>
      {enrolled ? (
        <Link href={`/courses/${courseId}/chapters/${id}`}>
          <Button className="w-full">Watch Now 
          <PlayCircle className="ml-2"/>
          </Button>
        </Link>
      ) : (
        <EnrollConfirmModal onConfirm={enrollAction}>
          <Button className="w-full">Enroll Now</Button>
        </EnrollConfirmModal>
      )}
    </>
  );
};
