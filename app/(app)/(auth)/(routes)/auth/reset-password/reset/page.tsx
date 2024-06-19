import Link from "next/link";

import { Logo } from "@/components/logo";
import { NewPasswordResetForm } from "./_components/password-reset-form";

export default function ResetPasswordEmailPage() {
  return (
    <>
      <div className="h-full flex items-center justify-center">
        <div className="">
          <div className="flex justify-center mb-4">
            <Logo height={175} width={175} />
          </div>
          <div className="mx-auto flex w-full flex-col justify-center sign-up">
            <div className="flex flex-col space-y">
              <h1 className="text-2xl font-bold tracking-tight">Reset your password?</h1>
              <h4 className="text-sm font-normal text-muted-foreground">
                to continue to Goodwill App
              </h4>
            </div>
            <NewPasswordResetForm />

            <div className=" pr-6 text-sm text-muted-foreground flex">
            <span className="ml-[5px] text-blue-600 hover:underline">
                <Link href={"/sign-up"}>Sign up</Link>
              </span>
              <div className="ml-2">
                |
              </div>
              <span className="ml-[5px] text-blue-600 hover:underline">
                <Link href={"/sign-in"}>Sign in</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
