"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Pencil, PlusCircle } from "lucide-react";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Webinar } from "@prisma/client";
import { Combobox } from "@/components/ui/combobox";
import { SpeakerAddModal } from "./speaker-add-modal";

interface WebinarSpeakerFormProps {
  initialData: Webinar;
  webinarId: string;
  options: { label: string; value: string }[];
}

const formSchema = z.object({
  speakerId: z.string().min(1),
});

export const WebinarSpeakerForm = ({
  initialData,
  webinarId,
  options,
}: WebinarSpeakerFormProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const toggleAddSpeaker = () => {
    alert("test");
  };

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      speakerId: initialData?.speakerId || "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(`/api/webinars/${webinarId}`, values);
      toast.success("Speaker updated succesfully.");
      toggleEdit();
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const selectedOption = options.find(
    (option) => option.value === initialData.speakerId
  );
  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        <div className="flex items-center">
          Speaker
          {isEditing && (
            <SpeakerAddModal>
              <Button variant="ghost">
                <>
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Add
                </>
              </Button>
            </SpeakerAddModal>
          )}
        </div>

        <Button variant="ghost" onClick={toggleEdit}>
          {isEditing ? (
            <>Cancel</>
          ) : (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Edit Speaker
            </>
          )}
        </Button>
      </div>
      {!isEditing ? (
        <p
          className={cn(
            "text-sm mt-2",
            !initialData.speakerId && "text-slate-500 italic"
          )}
        >
          {selectedOption?.label || "No Speaker Selected"}
        </p>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            <FormField
              control={form.control}
              name="speakerId"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Combobox options={options} {...field} />
                  </FormControl>
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
