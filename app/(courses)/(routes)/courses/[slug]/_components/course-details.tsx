import { EnrollConfirmModal } from "@/components/modals/enroll-confirm-modal";
import { Button } from "@/components/ui/button";
import { User } from "@prisma/client";
import axios from "axios";
import {
  PlayIcon,
  KeyIcon,
  FileStack,
  PlayCircle,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { EnrollModal } from "./enroll-modal";
import { signIn } from "next-auth/react";

interface CourseDetailsProps {
  id: string;
  course: any;
  courseId: string;
  enrollerCount: number;
  enrolled: boolean;
  user: User | null;
}

export const CourseDetails = ({
  id,
  course,
  courseId,
  enrollerCount,
  enrolled,
  user,
}: CourseDetailsProps) => {
  const router = useRouter();

  const enrollAction = async () => {
    try {
      await axios.put(`/api/courses/${course.id}/enroll`, {});

      router.refresh();

      if (enrolled) {
        toast.success("Enrolled successfully");
        router.push(
          `/courses/${course.slug}/chapters/${course.chapters[0].chapterSlug}`
        );
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

      {enrolled && (
        <Link
          href={`/courses/${course.slug}/chapters/${course.chapters[0].chapterSlug}`}
        >
          <Button className="w-full">
            Watch Now
            <PlayCircle className="ml-2" />
          </Button>
        </Link>
      )}

      {!user && (
        <div className="text-muted-foreground font-light flex">
          You need to sign in first to enroll course.
            <div className="ml-[5px] font-medium px-2 bg-theme rounded-full text-white">
            <div className="cursor-pointer" onClick={() => signIn()}>Sign in</div>
            </div>
        </div>
      )}
      {user && !user?.phone && !enrolled && (
        <EnrollModal
          courseId={courseId}
          user={user}
          enrolled={enrolled}
          id={id}
        >
          <Button className="w-full">Enroll Now</Button>
        </EnrollModal>
      )}
      {user && !enrolled && user?.phone && (
        <EnrollConfirmModal onConfirm={enrollAction}>
          <Button className="w-full">Enroll Now</Button>
        </EnrollConfirmModal>
      )}
    </>
  );
};
