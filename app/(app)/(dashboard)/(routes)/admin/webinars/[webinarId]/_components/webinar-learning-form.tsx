"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Webinar } from "@prisma/client";
import { Editor } from "@/components/editor";
import { Preview } from "@/components/preview";

interface WebinarLearningFormProps {
  initialData: Webinar;
  webinarId: string;
}

const formSchema = z.object({
  learnings: z.string().min(1, {
    message: "Learnings is required",
  }),
});

export const WebinarLearningForm = ({
  initialData,
  webinarId,
}: WebinarLearningFormProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      learnings: initialData?.learnings || "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(`/api/webinars/${webinarId}`, values);
      toast.success("Learnings updated succesfully.");
      toggleEdit();
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Webianr Learnings
        <Button variant="ghost" onClick={toggleEdit}>
          {isEditing ? (
            <>Cancel</>
          ) : (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Edit learnings
            </>
          )}
        </Button>
      </div>
      {!isEditing ? (
        <>
          <div className="border rounded shadow-sm bg-violet-100 p-2 mb-2">
            <p
              className={cn(
                "text-sm mt-2",
                !initialData.learnings && "text-slate-500 italic"
              )}
            >
              {!initialData.learnings && "No summary"}
              {initialData.learnings && <Preview value={initialData.learnings} />}
            </p>
          </div>
        </>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            <FormField
              control={form.control}
              name="learnings"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Editor disabled={isSubmitting} {...field} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormDescription>
                      Use list style for better UI.
                    </FormDescription>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Button disabled={!isValid || isSubmitting} type="submit">
                Save
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
};
