"use client";

import { Logo } from "@/components/logo";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="m-auto">
      <div className="flex justify-center mb-4">
        <Logo height={175} width={175} />
      </div>
      <SignIn />
    </div>
  );
}
