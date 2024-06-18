//

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { UserAuthForm } from "./_components/sign-up-form";
import { Logo } from "@/components/logo";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  return (
    <>
      <div className="h-full flex items-center justify-center">
        <div className="">
          <div className="flex justify-center mb-4">
            <Logo height={175} width={175} />
          </div>
          <div className="mx-auto flex w-full flex-col justify-center sign-up">
            <div className="flex flex-col space-y">
              <h1 className="text-2xl font-bold tracking-tight">
                Create an account
              </h1>
              <h4 className="text-sm font-normal text-muted-foreground">
                to continue to Goodwill App
              </h4>
            </div>
            <UserAuthForm />
            <p className="pr-6 text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>

            <p className=" pr-6 text-sm text-muted-foreground">
              Have an account?
              <span className="ml-[5px] text-blue-600 hover:underline">
                <Link href={"/sign-in"}>Sign in</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
