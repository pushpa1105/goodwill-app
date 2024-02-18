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
import { Button } from "@/components/ui/button";

import { User } from "@prisma/client";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import "react-phone-number-input/style.css";

interface CategoryModalProps {
  children: React.ReactNode;
  user: User | null;
}

const formSchema = z.object({
  phone: z.string().min(10, {
    message: "Phone Number is required",
  }),
});

export const PhoneModal = ({ children, user }: CategoryModalProps) => {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: user?.phone || "",
    },
  });
  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.post(`/api/user`, values);

      setOpen(false);
      toast.success("Phone Number updated successfully");

      router.refresh();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className="justify-start">
        {children}
      </DialogTrigger>
      <DialogOverlay className="DialogOverlay">
        <DialogContent className="w-auto DialogContent">
          <DialogHeader className="">
            <DialogTitle className="font-extrabold text-2xl">
              Edit Phone Number
            </DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-4 p-2">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="  text-md">Phone Number</FormLabel>
                      <FormControl className="phone-input">
                        <PhoneInputWithCountry
                          placeholder="Enter phone number"
                          disabled={isSubmitting}
                          country="IN"
                          className="h-[50px] text-xl rounded-lg shadow-xl"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex items-center gap-x-2 rounded-lg w-full">
                <Button
                  disabled={!isValid || isSubmitting}
                  type="submit"
                  className="w-full m-auto text-md font-semibold bg-black hover:bg-black"
                >
                  Save
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
};
