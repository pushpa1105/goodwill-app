"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SubscriptionForm } from "./subscription-form";
import { Webinar } from "@prisma/client";
import { formatDate } from "@/lib/format";

interface SubscribeModalProps {
  children: React.ReactNode;
  webinar: Webinar;
}

export const SubscriptionModal = ({
  children,
  webinar,
}:
SubscribeModalProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="min-w-[75%] m-0 p-0">
        <div className="flex flex-wrap w-full h-full text-center m-auto bg-theme font-georgia">
          <div className="min-w-[50%] w-full lg:w-auto p-4 m-auto">
            <div className="text-white text-center ">
              <h1 className="font-extrabold text-3xl">
                Register before{" "}
              </h1>
              <h1 className="font-bold text-2xl">
                {formatDate(webinar.startAt!!)}
              </h1>
              ---------------------------------------------------------
              <h1 className="font-extrabold text-4xl mt-4">Session on</h1>
              <h1 className="font-bold text-2xl mt-2">“{webinar.title}”</h1>
            </div>
          </div>
          <div className="min-w-[50%] w-full lg:w-auto bg-white h-full p-4">
            <div className="w-[75%] m-auto my-4">
              <div>
                <h1 className="font-bold text-2xl text-start text-theme">
                  Register for the webinar
                </h1>
                <SubscriptionForm
                  webinarId={webinar.id}
                  submitCallback={() => setOpen(false)}
                />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
