"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { formatDate, getInitials } from "@/lib/format";
import { Separator } from "../ui/separator";

interface UserProfileModalProps {
  children: React.ReactNode;
}

export const UserProfileModal = ({ children }: UserProfileModalProps) => {
  const [open, setOpen] = useState(false);
  const { data } = useSession();
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="m-0 p-0">
        <div className="py-4 m-auto text-center">
          <div>
            <div className="flex justify-center items-center flex-wrap p-4 ">
              <div className="flex items-center">
                <div className="items-center m-auto">
                  <div className="flex justify-center">
                    <Avatar className="h-[75px] w-[75px]">
                      <AvatarImage src={data?.user?.image!} />
                      <AvatarFallback className="bg-theme text-white text-3xl font-bold">
                        {getInitials(data?.user.name)}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="text-sm font-medium text-gray-500">
                    {data?.user.name}
                  </div>
                  <div className="text-xs font-medium text-gray-600">
                    {data?.user.email}
                  </div>
                </div>
              </div>
            </div>
            <Separator />
            <div className="py-4">
              <div className="w-[90%] m-auto">
                <div className="text-sm font-light text-slate-600">
                  Phone Number
                </div>
                <div className="">{data?.user?.phone || "-"}</div>

                <div className="pt-4 text-sm font-light text-slate-600">
                  Joined at
                </div>
                <div className="">{formatDate(data?.user.joinedDate!)}</div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
