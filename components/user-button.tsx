"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup
} from "@/components/ui/dropdown-menu"
// Import useUser() and useClerk()
import { useUser, useClerk } from "@clerk/nextjs";
// Import Next's router
import { useRouter } from "next/navigation";
// Import the Image element
import Image from "next/image";
// Import Link to add more buttons to the menu
import Link from "next/link";
import { Button } from "./ui/button";
import { User } from "@prisma/client";
import { PhoneModal } from "./phone-modal";

export const UserButton = ({ user: currentUser }: { user: User | null }) => {
  // Grab the `isLoaded` and `user` from useUser()
  const { isLoaded, user } = useUser();
  // Grab the signOut and openUserProfile methods
  const { signOut, openUserProfile } = useClerk();
  // Get access to Next's router
  const router = useRouter();

  // Make sure that the useUser() hook has loaded
  if (!isLoaded) return null;
  // Make sure there is valid user data
  if (!user?.id) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* Render a button using the image and email from `user` */}
        <button className="clerk-userbtn flex flex-row rounded-xl  bg-white px-4 py-3 text-black">
          <Image
            alt={user?.primaryEmailAddress?.emailAddress!}
            src={user?.imageUrl}
            width={30}
            height={30}
            className="mr-2 rounded-full border border-gray-200 drop-shadow-sm"
          />
          {/* {user?.username
            ? user.username
            : user?.primaryEmailAddress?.emailAddress!} */}
        </button>
      </DropdownMenuTrigger>
        <DropdownMenuContent className="w-50 rounded-xl border border-gray-200 bg-white px-6 py-4 text-black drop-shadow-2xl !z-50">
          <DropdownMenuLabel />
          <DropdownMenuItem asChild>
            <div className="flex flex-wrap justify-center">
              <Image
                alt={user?.primaryEmailAddress?.emailAddress!}
                src={user?.imageUrl}
                width={20}
                height={20}
                className="mr-2 rounded-full border border-gray-200 drop-shadow-sm mb-2"
              />
              <div className="text-xs m-auto font-light">
                {user?.username
                  ? user.username
                  : user?.primaryEmailAddress?.emailAddress!}
              </div>
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="my-1 h-px bg-gray-500" />
          <DropdownMenuGroup className="py-3">
            <DropdownMenuItem asChild className="w-[100%] text-start">
              <Button
                onClick={() => openUserProfile()}
                className="pb-3 w-full text-black justify-start pl-0 bg-white hover:bg-slate-100"
              >
                Profile
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="w-[100%] text-start">
              <PhoneModal user={currentUser}>
                <Button className="pb-3 w-full text-black justify-start pl-0 text-start bg-white hover:bg-slate-100">
                  Change Number
                </Button>
              </PhoneModal>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator className="my-1 h-px bg-gray-500" />
          <DropdownMenuItem asChild>
            <button
              onClick={() => signOut(() => router.push("/"))}
              className="py-3 w-full"
            >
              Sign Out{" "}
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  );
};
