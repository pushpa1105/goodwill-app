import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
  Form,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Editor } from "@/components/editor";
import { FileUpload } from "@/components/file-upload";

interface SpeakerAddModalProps {
  children: React.ReactNode;
}

const formSchema = z.object({
  speaker: z.object({
    name: z.string().min(1, {
      message: "Name is required",
    }),
    about: z.string().min(1, {
      message: "About is required",
    }),
    education: z.string(),
    experience: z.string(),
    achievement: z.string(),
  }),
});

export const SpeakerAddModal = ({ children }: SpeakerAddModalProps) => {
  const router = useRouter();

  const [imageUrl, setimageUrl] = useState("");
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      speaker: {
        name: "",
        about: "",
        education: "",
        experience: "",
        achievement: "",
      },
    },
  });
  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.post(`/api/webinars/speakers`, {
        ...values.speaker,
        imageUrl,
      });
      toast.success("Speaker added succesfully.");
      setOpen(false);
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogOverlay className="DialogOverlay">
        <DialogContent className="sm:max-w-[425px] min-w-[75%] DialogContent">
          <DialogHeader>
            <DialogTitle>Add a speaker</DialogTitle>
            <DialogDescription className="hidden md:block">
              You can edit it later if necessary. For about, experience,
              achievement, input in points format is preferable.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[75vh] overflow-y-scroll no-scrollbar">
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="speaker.name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            disabled={isSubmitting}
                            placeholder="Write Something..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="speaker.about"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>About Speaker</FormLabel>
                        <FormControl>
                          <Editor disabled={isSubmitting} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div>
                    <FormLabel>Image</FormLabel>
                    {imageUrl ? (
                      <>
                        <div className="relative aspect-video mt-2">
                          <img
                            alt="upload"
                            // fill
                            className="object-cover rounded-md"
                            src={imageUrl}
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <FileUpload
                          endpoint="courseImage"
                          onChange={(url) => {
                            if (url) {
                              setimageUrl(url);
                            }
                          }}
                        />
                      </>
                    )}
                  </div>
                </div>
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="speaker.education"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>About education</FormLabel>
                        <FormControl>
                          <Editor disabled={isSubmitting} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="speaker.experience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Experience</FormLabel>
                        <FormControl>
                          <Editor disabled={isSubmitting} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="speaker.achievement"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Achievement</FormLabel>
                        <FormControl>
                          <Editor disabled={isSubmitting} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="flex items-center gap-x-2">
                <Button disabled={!isValid || isSubmitting} type="submit">
                  Add
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
};
