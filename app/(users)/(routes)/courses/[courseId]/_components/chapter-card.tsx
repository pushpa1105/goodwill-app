"use client ";

import Link from "next/link";
import { IconBadge } from "@/components/icon-badge";
import { BookOpen } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface ChapterCardProps {
  id: string;
  title: string;
  summary?: string;
  courseId: string;
  chapterNumber: number | string;
}

export const ChapterCard = ({
  id,
  title,
  summary,
  courseId,
  chapterNumber,
}: ChapterCardProps) => {
  return (
    <Link href={`/courses/${courseId}/chapters/${id}`}>
      <Card className="group hover:shadow-lg transition overflow-hidden border rounded-lg">
        <CardHeader>
          <CardTitle>Chapter {chapterNumber}</CardTitle>
          <CardDescription>{title}</CardDescription>
        </CardHeader>
        <CardContent>
          {/* <div className="flex space-x-2">
          <Input value="http://example.com/link/to/document" readOnly />
          <Button variant="secondary" className="shrink-0">
            Copy Link
          </Button>
        </div> */}
          <Separator className="my-4" />
          <div className="space-y-4 h-[250px] max-h-[250px] min-h-[250px]">
            <h4 className="text-sm font-medium">About this chapter</h4>
            <div className="grid gap-6">
              <div className="flex items-center justify-between space-x-4 mb-2">
                <p className="line-clamp-7">{summary}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
