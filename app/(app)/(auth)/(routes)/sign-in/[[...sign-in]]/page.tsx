import { Metadata } from "next";
import Link from "next/link";

import { SignInForm } from "./_components/sign-in-form";
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
              <h1 className="text-2xl font-bold tracking-tight">Sign in</h1>
              <h4 className="text-sm font-normal text-muted-foreground">
                to continue to Goodwill App
              </h4>
            </div>
            <SignInForm />

            <p className=" pr-6 text-sm text-muted-foreground">
              No account?
              <span className="ml-[5px] text-blue-600 hover:underline">
                <Link href={"/sign-up"}>Sign up</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
