"use client";

import { SignIn } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";

export default function Page() {
  // const searchParams = useSearchParams();

  // const url = searchParams.get("redirectUrl");

  return <SignIn />;
}
