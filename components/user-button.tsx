"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
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
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
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
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="mt-4 w-52 rounded-xl border border-gray-200 bg-white px-6 py-4 text-black drop-shadow-2xl !z-50">
          <DropdownMenu.Label />
          <DropdownMenu.Item asChild>
            <div className="text-sm font-light">
              {user?.username
                ? user.username
                : user?.primaryEmailAddress?.emailAddress!}
            </div>
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="my-1 h-px bg-gray-500" />
          <DropdownMenu.Group className="py-3">
            <DropdownMenu.Item asChild className="w-[100%] text-start">
              {/* Create a button with an onClick to open the User Profile modal */}
              <Button
                onClick={() => openUserProfile()}
                className="pb-3 text-black justify-start pl-0"
              >
                Profile
              </Button>
            </DropdownMenu.Item>
            <DropdownMenu.Item asChild className="w-[100%] text-start">
              <PhoneModal user={currentUser}>
                <Button
                  className="pb-3 text-black justify-start pl-0 text-start"
                >
                  Change Phone Number
                </Button>
              </PhoneModal>
            </DropdownMenu.Item>
          </DropdownMenu.Group>
          <DropdownMenu.Separator className="my-1 h-px bg-gray-500" />
          <DropdownMenu.Item asChild>
            {/* Create a Sign Out button -- signOut() takes a call back where the user is redirected */}
            <button
              onClick={() => signOut(() => router.push("/"))}
              className="py-3"
            >
              Sign Out{" "}
            </button>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
