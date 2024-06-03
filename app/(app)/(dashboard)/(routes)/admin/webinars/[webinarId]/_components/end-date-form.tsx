"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { useState } from "react";
import { Form } from "@/components/ui/form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Webinar } from "@prisma/client";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface TitleFormProps {
  initialData: Webinar;
  endDate: Date;
  webinarId: string;
}

const formSchema = z.object({
  endDate: z.date(),
});

export const EndDateForm = ({
  initialData,
  webinarId,
  endDate,
}: TitleFormProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [webinarDate, setwebinarDate] = useState<Date>(endDate || new Date());

  const toggleEdit = () => setIsEditing((current) => !current);

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      endDate: endDate || new Date(),
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async () => {
    try {
      await axios.patch(`/api/webinars/${webinarId}`, {
        endAt: new Date(webinarDate).toISOString(),
      });
      toast.success("Start Date updated succesfully.");
      toggleEdit();
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Webinar End Date
        <Button variant="ghost" onClick={toggleEdit}>
          {isEditing ? (
            <>Cancel</>
          ) : (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Edit Start Date
            </>
          )}
        </Button>
      </div>
      {!isEditing ? (
        <>
          <div className="border rounded shadow-sm bg-violet-100 p-2 mb-2">
            <p className="text-sm mt-2">
              {new Date(webinarDate.getTime() + 1000).toLocaleString("en-US", {
                // timeZone: "Asia/Kolkata",
                timeZone:"Asia/Kathmandu"
              })}
            </p>
          </div>
        </>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            {/* <input
              onChange={(event) => {
                setwebinarDate(new Date(event.target.value));
              }}
              value={webinarDate.toISOString().slice(0, 16)}
              type="datetime-local"
              name="endDate"
            /> */}
            <DatePicker
              selected={webinarDate}
              onChange={(date: Date) => setwebinarDate(date)}
              timeInputLabel="Time:"
              dateFormat="MM/dd/yyyy h:mm aa"
              showTimeInput
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
