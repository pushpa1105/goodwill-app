import {
  LayoutDashboard,
  ListChecks,
} from "lucide-react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

import { db } from "@/lib/db";
import { IconBadge } from "@/components/icon-badge";

import { TitleForm } from "./_components/title-form";
import { DescriptionForm } from "./_components/description-form";
import { StatusForm } from "./_components/status-form";
import { Banner } from "@/components/banner";
import { Actions } from "./_components/actions";
import { ImageForm } from "./_components/image-form";
import { LevelForm } from "./_components/level-form";
import { LanguageForm } from "./_components/lang-form";
import { WebinarLearningForm } from "./_components/webinar-learning-form";
import { StartDateForm } from "./_components/start-date-form";
import { WebinarSpeakerForm } from "./_components/webianr-speaker-form";
import { MeetingIdForm } from "./_components/meeting-id-form";
import { MeetingPasswordForm } from "./_components/meeting-password-form";
import { MeetingLeaveUrlForm } from "./_components/meeting-leave-url-form";
import { MeetingUrlForm } from "./_components/meeting-url-form";
import { WebinarAccessForm } from "./_components/webinar-access-form";
import { EndDateForm } from "./_components/end-date-form";

const CourseIdPage = async ({ params }: { params: { webinarId: string } }) => {

  const webinar = await db.webinar.findUnique({
    where: {
      id: params.webinarId,
    },
  });

  const speakers = await db.speaker.findMany();

  if (!webinar) {
    toast.error("Webinar not found.");
    return redirect("/");
  }

  const requiredFields = [
    webinar.title,
    webinar.description,
    webinar.speakerId,
    webinar.learnings,
    webinar.level,
    webinar.startAt,
    webinar.endAt,
    webinar.status,
    webinar.imageUrl,
  ];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;
  const completionText = `(${completedFields}/${totalFields})`;

  const isComplete = requiredFields.every(Boolean);

  return (
    <>
      {!webinar.isPublished && (
        <Banner
          variant="warning"
          label="This webinar is not published yet. User won't be able to acccess it."
        />
      )}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-2xl font-medium">Webinar Setup</h1>
            <span className="text-sm text-slate-700">
              Complete all fields {completionText}
            </span>
          </div>
          <Actions
            disabled={!isComplete}
            webinarId={params.webinarId}
            isPublished={webinar.isPublished}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={LayoutDashboard} />
              <h2 className="text-xl">Customize your webinar</h2>
            </div>
            <TitleForm initialData={webinar} webinarId={params.webinarId} />
            <StatusForm
              initialData={webinar}
              webinarId={params.webinarId}
              options={["upcoming", "ongoing", "completed"].map((category) => ({
                label: category.toUpperCase(),
                value: category,
              }))}
            />
            <LevelForm initialData={webinar} webinarId={params.webinarId} />
            <LanguageForm initialData={webinar} webinarId={params.webinarId} />
            <WebinarLearningForm
              initialData={webinar}
              webinarId={params.webinarId}
            />
          </div>
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge icon={ListChecks} />
                <h2 className="text-xl">Webinar Description</h2>
              </div>
              <DescriptionForm
                initialData={webinar}
                webinarId={params.webinarId}
              />
              <ImageForm initialData={webinar} webinarId={params.webinarId} />
              <WebinarSpeakerForm
                initialData={webinar}
                webinarId={params.webinarId}
                options={(speakers || []).map((speaker) => ({
                  label: speaker.name.toUpperCase(),
                  value: speaker.id,
                }))}
              />
              <StartDateForm
                initialData={webinar}
                webinarId={params.webinarId}
                startDate={webinar.startAt || new Date()}
              />
              <EndDateForm
                initialData={webinar}
                webinarId={params.webinarId}
                endDate={webinar.endAt || new Date()}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-2 mt-16">
          <IconBadge icon={LayoutDashboard} />
          <h2 className="text-xl">Customize your webinar meeting</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <MeetingIdForm initialData={webinar} webinarId={params.webinarId} />

            <MeetingLeaveUrlForm
              initialData={webinar}
              webinarId={params.webinarId}
            />
            <WebinarAccessForm
              initialData={webinar}
              webinarId={params.webinarId}
            />
          </div>
          <div>
            <MeetingPasswordForm
              initialData={webinar}
              webinarId={params.webinarId}
            />
            <MeetingUrlForm
              initialData={webinar}
              webinarId={params.webinarId}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseIdPage;
