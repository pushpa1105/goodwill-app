import { Preview } from "@/components/preview";
import { Course } from "@prisma/client";

export const CourseSummary = ({ initialData }: { initialData: Course }) => {
  return (
    <div className="shadow-sm border rounded mb-4 p-4" id="overview">
      {initialData?.summary && (
        <div className="p-4 border rounded-lg">
          <div className="mt-4 xl:mt-0">
            <h1 className="text-xl md:text-2xl font-extrabold text-theme">
              Description
            </h1>
          </div>
          <Preview value={initialData.summary || ""} />
        </div>
      )}
      {initialData?.learnings && (
        <div className="mt-4 p-4 border rounded-lg">
          <div>
            <h1 className="text-xl md:text-2xl font-extrabold text-theme">
              What you will learn
            </h1>
          </div>
          <Preview value={initialData.learnings || ""} />
        </div>
      )}
      {initialData?.requirements && (
        <div className="mt-4 p-4 border rounded-lg">
          <div>
            <h1 className="text-xl md:text-2xl font-extrabold text-theme">
              Requirements
            </h1>
          </div>
          <Preview value={initialData.requirements || ""} />
        </div>
      )}

      {initialData?.coverage && (
        <div className="mt-4 p-4 border rounded-lg">
          <div>
            <h1 className="text-xl md:text-2xl font-extrabold text-theme">
              What this course covers
            </h1>
          </div>
          <Preview value={initialData.coverage || ""} />
        </div>
      )}
    </div>
  );
};
