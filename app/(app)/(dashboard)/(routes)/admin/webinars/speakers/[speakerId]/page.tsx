import { LayoutDashboard, ListChecks } from "lucide-react";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { IconBadge } from "@/components/icon-badge";

import { NameForm } from "./_components/name-form";
import { Banner } from "@/components/banner";
import { Actions } from "./_components/actions";
import { AboutForm } from "./_components/about-form";
import { EducationForm } from "./_components/education-form";
import { ExperienceForm } from "./_components/experience-form";
import { AchievementForm } from "./_components/achievement-form";
import { ImageForm } from "./_components/image-form";

const CourseIdPage = async ({ params }: { params: { speakerId: string } }) => {
  const speaker = await db.speaker.findUnique({
    where: {
      id: params.speakerId,
    },
  });

  if (!speaker) {
    return redirect("/");
  }

  return (
    <>
      <Banner
        variant="warning"
        label="Provide all details so that user can know about speaker more."
      />
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-2xl font-medium">Speaker Setup</h1>
          </div>
          <Actions speakerId={params.speakerId} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={LayoutDashboard} />
              <h2 className="text-xl">Customize your Speaker</h2>
            </div>
            <NameForm initialData={speaker} speakerId={params.speakerId} />

            <AboutForm initialData={speaker} speakerId={params.speakerId} />
            <ImageForm initialData={speaker} speakerId={params.speakerId} />
          </div>
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge icon={ListChecks} />
                <h2 className="text-xl">Speaker Description</h2>
              </div>
              <EducationForm
                initialData={speaker}
                speakerId={params.speakerId}
              />
              <ExperienceForm
                initialData={speaker}
                speakerId={params.speakerId}
              />
              <AchievementForm
                initialData={speaker}
                speakerId={params.speakerId}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseIdPage;
