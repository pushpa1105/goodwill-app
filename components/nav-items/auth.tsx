"use client";

import { signIn, useSession } from "next-auth/react";
import { UserNav } from "./user-nav";
import { Button } from "../ui/button";

export const AuthBox = () => {
  const { data: session } = useSession();
  if (session) {
    return <UserNav session={session!}/>;
  } else {
    return <Button onClick={()=> signIn()} className="bg-black hover:bg-black">Login</Button>;
  }
};
