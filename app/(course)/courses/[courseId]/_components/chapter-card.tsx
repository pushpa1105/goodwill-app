"use client "

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
}

export const CourseCard = ({ id, title, summary }: ChapterCardProps) => {
  return (
    <Link href={`/courses/${id}`}>
      <Card>
        <CardHeader>
          <CardTitle>Chapter 1</CardTitle>
          <CardDescription>
            {title}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* <div className="flex space-x-2">
          <Input value="http://example.com/link/to/document" readOnly />
          <Button variant="secondary" className="shrink-0">
            Copy Link
          </Button>
        </div> */}
          <Separator className="my-4" />
          <div className="space-y-4">
            <h4 className="text-sm font-medium">About this chapter</h4>
            <div className="grid gap-6">
              <div className="flex items-center justify-between space-x-4">
                {summary}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
