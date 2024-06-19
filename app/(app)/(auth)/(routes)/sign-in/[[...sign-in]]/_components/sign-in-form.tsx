"use client";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Loader2 } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import * as z from "zod";
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
import { signIn } from "next-auth/react";
import Link from "next/link";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const formSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z.string().min(1, "Password is required"),
});

export function SignInForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [verificationError, setVerificationError] = useState<boolean>(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlToRedirect = searchParams.get("callbackUrl") || '/'

  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider."
      : "";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setVerificationError(false);
    await signIn("credentials", {
      ...values,
      redirect: false,
    })
      .then((res) => {
        if (res?.error === "AccessDenied") {
          toast.error("Email not verified");
          setVerificationError(true);
        } else if (res?.error) {
          toast.error("Invalid credentials");
        } else {
          toast.success("User signed in.");
          router.push(urlToRedirect);
        }
      })
      .catch((error: any) => {
        console.log(error);
        toast.error(error?.response?.data || "Something went wrong");
      });
  };

  const onGoogleAuth = async () => {
    setIsLoading(true);
    setVerificationError(false);
    await signIn("google", {
      callbackUrl: urlToRedirect,
    });
    setIsLoading(false);
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
                        disabled={isSubmitting}
                        placeholder="name@example.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div>
                        <Input
                          disabled={isSubmitting}
                          placeholder="Test@123"
                          type="password"
                          {...field}
                        />
                        <Link
                          href={"/auth/reset-password"}
                          className="hover:text-blue-600 text-gray-600 hover:underline text-xs w-auto mr-auto"
                        >
                          Forgot password?
                        </Link>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {urlError && (
              <div className="text-red-600 flex text-sm p-2 bg-red-100 rounded">
                <AlertTriangle />
                <div className="ml-2">{urlError}</div>
              </div>
            )}
            {verificationError && (
              <div className="text-xs font-medium py-2">
                Did not get email?
                <Link
                  href={"/auth/resend-verification-email"}
                  className="ml-2 text-blue-800 hover:underline"
                >
                  Resend email
                </Link>
              </div>
            )}
            <Button disabled={isLoading || isSubmitting} className="bg-theme">
              {(isLoading || isSubmitting) && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin text-secondary" />
              )}
              Sign in with Email
            </Button>
          </div>
        </form>
      </Form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button
        variant="outline"
        type="button"
        disabled={isLoading || isSubmitting}
        className="font-[300]"
        onClick={() => onGoogleAuth()}
      >
        {(isLoading || isSubmitting) ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin text-secondary" />
        ) : (
          <FcGoogle className="mr-2 h-4 w-4" />
        )}{" "}
        Continue with Google
      </Button>
    </div>
  );
}
