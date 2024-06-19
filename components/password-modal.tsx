import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import {
  Dialog,
  DialogContent,
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

import "react-phone-number-input/style.css";
import { Input } from "./ui/input";

interface CategoryModalProps {
  children: React.ReactNode;
}

const formSchema = z
  .object({
    password: z.string().min(1, {
      message: "Password is required",
    }),
    confirmPassword: z.string().min(1, {
      message: "Confirm Password is required",
    }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["confirmPassword"],
      });
    }
  });
export const ChangePasswordModal = ({ children }: CategoryModalProps) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [passwordMismatchError, setpasswordMismatchError] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });
  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const { password, confirmPassword } = values;

      if (password !== confirmPassword) {
        return setpasswordMismatchError(true);
      }

      await axios.put(`/api/user`, { password });

      setOpen(false);
      toast.success("Password changed successfully");

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
              Change Password
            </DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-4 p-2">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="  text-md">New Password</FormLabel>
                      <FormControl className="phone-input">
                        <Input
                          placeholder="Enter new password"
                          disabled={isSubmitting}
                          className=""
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="  text-md">
                        Confirm Password
                      </FormLabel>
                      <FormControl className="phone-input">
                        <Input
                          placeholder="Re-enter new password"
                          disabled={isSubmitting}
                          className=""
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {passwordMismatchError && (
                <div className="text-xs p-2 bg-red-100 text-red-600 rounded">
                  Password did not match.
                </div>
              )}
              <div className="text-xs p-2 bg-gray-200">
                Password must match with each other.
              </div>
              <div className="flex items-center gap-x-2 rounded-lg w-full">
                <Button
                  disabled={!isValid || isSubmitting}
                  type="submit"
                  className="w-full m-auto text-md font-semibold bg-theme"
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
