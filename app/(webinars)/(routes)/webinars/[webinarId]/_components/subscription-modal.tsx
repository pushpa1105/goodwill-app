"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
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
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

interface SubscribeModalProps {
  children: React.ReactNode;
  webinarId: string;
  //   title: string;
}

const formSchema = z.object({
  name: z.string().min(10),
  email: z.string(),
  phone: z.string(),
});

export const SubscriptionModal = ({
  children,
  webinarId,
}: //   title,
SubscribeModalProps) => {
  const router = useRouter();

  const [isEditing, setIsEditing] = useState(false);
  const [open, setOpen] = useState(false);

  const [star, setStar] = useState(0);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });
  const { isSubmitting, isValid } = form.formState;
  const updateRateValue = (val: number) => {
    setStar(val);
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(`/api/webinars/${webinarId}/subscribe`, values);
      toast.success("Subscribed to a webinar succesfully.");
      // router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-theme">
        <DialogHeader>
          <DialogTitle>Subscribe to a webinar</DialogTitle>
          {/* <DialogDescription>
            Your review helps other learners like you discover great courses.
            Only review the course if you have taken or started taking this
            course.
          </DialogDescription> */}
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl className="bg-theme">
                    <Input
                      disabled={isSubmitting}
                    //   placeholder="Your Full Name"
                      //   className="bg-theme text-white"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl className="bg-theme">
                    <Input
                      disabled={isSubmitting}
                    //   placeholder="Your Email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl className="bg-theme">
                    <Input
                      disabled={isSubmitting}
                    //   placeholder="Your Phone Number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Button
                disabled={!isValid || isSubmitting}
                type="submit"
                onClick={() => setOpen(false)}
              >
                Subscribe
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
