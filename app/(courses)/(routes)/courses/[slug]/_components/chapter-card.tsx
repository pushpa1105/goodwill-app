"use client ";

import Link from "next/link";
import { ChevronDown, ChevronUp, PlayCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@radix-ui/react-collapsible";
import { useState } from "react";
import { EnrollConfirmModal } from "@/components/modals/enroll-confirm-modal";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { User } from "@prisma/client";
import { EnrollModal } from "./enroll-modal";
import { SignInButton } from "@clerk/nextjs";

interface ChapterCardProps {
  id: string;
  title: string;
  description?: string;
  courseId: string;
  chapterNumber: number | string;
  enrolled: boolean;
  user: User | null;
  slug: string;
  chapterSlug: string;
}

export const ChapterCard = ({
  id,
  title,
  description,
  courseId,
  chapterNumber,
  enrolled,
  user,
  slug,
  chapterSlug,
}: ChapterCardProps) => {
  const [open, setOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const redirectUrl = `${process.env.NEXT_PUBLIC_APP_URL}${pathname}`;
  const enrollCourse = async () => {
    try {
      const res = await axios.put(`/api/courses/${courseId}/enroll`, {});

      router.refresh();

      if (res) {
        toast.success("Enrolled");
        router.push(`/courses/${slug}/chapters/${chapterSlug}`);
      }
    } catch (error) {}
  };
  return (
    <div className="border-b border-gray pb-4">
      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger className="w-[100%] ">
          <div className="flex justify-between items-center">
            <div className="text-start">
              <div className="text-slate-400 text-md font-semibold pt-2">
                Chapter {chapterNumber}
              </div>
              <div className="text-slate-500 text-xl font-bold text-theme">
                {title}
              </div>
            </div>
            {open ? <ChevronUp /> : <ChevronDown />}
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="CollapsibleContent">
          <div className="mt-4">
            <h1 className="mb-4 text-slate-500 fotn-semibold text-md">
              About this Chapter
            </h1>
            <div>{description}</div>
            <div>
              {!user && (
                <div className="text-muted-foreground font-light flex mt-2">
                  You need to sign in first to watch it.
                  <div className="ml-[5px] font-medium px-2 bg-theme rounded-full text-white">
                    <SignInButton
                      afterSignUpUrl={redirectUrl}
                      afterSignInUrl={redirectUrl}
                    />
                  </div>
                </div>
              )}
              {user && enrolled && (
                <Link href={`/courses/${slug}/chapters/${chapterSlug}`}>
                  <Button className="w-[100%] mt-2">
                    <span className="text-md font-bold">Watch it</span>
                    <PlayCircleIcon className="ml-2" />
                  </Button>
                </Link>
              )}
              {user && !enrolled && user?.phone && (
                <EnrollConfirmModal onConfirm={enrollCourse}>
                  <Button className="w-[100%] mt-2">
                    <span className="text-md font-bold">Watch it</span>
                    <PlayCircleIcon className="ml-2" />
                  </Button>
                </EnrollConfirmModal>
              )}

              {user && !user?.phone && !enrolled && (
                <EnrollModal
                  courseId={courseId}
                  user={user}
                  enrolled={enrolled}
                  id={id}
                >
                  <Button className="w-[100%] mt-2">
                    <span className="text-md font-bold">Watch it</span>
                    <PlayCircleIcon className="ml-2" />
                  </Button>
                </EnrollModal>
              )}
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};
