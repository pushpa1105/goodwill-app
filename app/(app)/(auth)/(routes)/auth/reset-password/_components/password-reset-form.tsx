"use client";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Loader2 } from "lucide-react";
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

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const formSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
});

export function PasswordResetForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    axios
      .post("/api/user/send-reset-email", values)
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((err) => {
        const errMessage = err?.response?.data || "Something went wrong";
        toast.error(errMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        disabled={!isLoading}
                        placeholder="name@example.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* {urlError && (
              <div className="text-red-600 flex text-sm p-2 bg-red-100 rounded">
                <AlertTriangle />
                <div className="ml-2">{urlError}</div>
              </div>
            )} */}
            <Button disabled={isLoading} className="bg-theme">
              {isLoading && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin text-secondary" />
              )}
              Send reset email
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
