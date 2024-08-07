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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { Course } from "@prisma/client";

type commentAction = "create" | "edit";

interface CommentFormProps {
  blogId: string;
  commentId?: string | null;
  action?: commentAction;
  message?: string;
}

const formSchema = z.object({
  message: z.string().min(5, {
    message: "Comment is required",
  }),
});

export const PostCommentForm = ({
  blogId,
  commentId = null,
  action = "create",
  message = "",
}: CommentFormProps) => {
  const [isEditing, setIsEditing] = useState(false);

  //   const toggleEdit = () => setIsEditing((current) => !current);

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: message,
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      if (action === "create") {
        await axios.post(`/api/blogs/${blogId}/comment`, values);
        toast.success("Comment added succesfully.");
        //   toggleEdit();
        console.log(values);
        router.refresh();
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 md:space-x-4 mt-4 flex flex-wrap"
        >
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="w-full md:w-[85%]">
                <FormControl>
                  <Textarea
                    disabled={isSubmitting}
                    placeholder="Write your comment..."
                    {...field}
                    className="w-[100%]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-end gap-x-2">
            <Button disabled={!isValid || isSubmitting} type="submit">
              Send
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
