"use client";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

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

export function NewPasswordResetForm({
  className,
  ...props
}: UserAuthFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [passwordMismatchError, setpasswordMismatchError] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    const { password, confirmPassword } = values;

    if (password !== confirmPassword) {
      return setpasswordMismatchError(true);
    }

    if (!token) return toast.error("No token found.");

    axios
      .post("/api/user/reset-password", { password, token })
      .then((res) => {
        toast.success(res.data.message || "Password changed successfully");
        router.push('/sign-in')
      })
      .catch((err) => {
        const errMessage = err?.response?.data || "Something went wrong";
        toast.error(errMessage);
      })
      .finally(() => setIsLoading(false));
  };

  const { isSubmitting, isValid } = form.formState;

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="  text-md">New Password</FormLabel>
                    <FormControl className="phone-input">
                      <Input
                        placeholder="Enter new password"
                        disabled={isLoading}
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
                        disabled={isLoading}
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
            <div className="text-xs font-medium py-2 text-right">
                <Link
                  href={"/auth/reset-password"}
                  className="ml-2 text-blue-800 hover:underline"
                >
                  Re-send reset email?
                </Link>
              </div>
            <Button disabled={!isValid || isSubmitting} className="bg-theme">
              {isLoading && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin text-secondary" />
              )}
              Reset password
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
