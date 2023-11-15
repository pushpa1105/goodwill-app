import { Preview } from "@/components/preview";
import { Course } from "@prisma/client";

export const CourseSummary = ({ initialData }: { initialData: Course }) => {
  return (
    <div className="shadow-sm border rounded mb-4 pt-4" id="overview">
      <Preview value={initialData.summary || ""} />
    </div>
  );
};
