"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useSession } from "next-auth/react";
import { Button } from "../ui/button";

interface UserProfileModalProps {
  children: React.ReactNode;
}

export const UserProfileModal = ({ children }: UserProfileModalProps) => {
  const [open, setOpen] = useState(false);
  const { data } = useSession();
  console.log(data);
  console.log(open);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="min-w-[75%] m-0 p-0">
        <div>
          <h1>Profile</h1>
          <h4>This is your persnal information</h4>
        </div>

        <div></div>
        <Button onClick={() => setOpen(false)}>CLose</Button>
      </DialogContent>
    </Dialog>
  );
};
