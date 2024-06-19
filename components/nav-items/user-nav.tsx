import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { signOut } from "next-auth/react";
import { getInitials } from "@/lib/format";
import { UserProfileModal } from "./user-profile";
import { PhoneModal } from "../phone-modal";
import { ChangePasswordModal } from "../password-modal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut } from "lucide-react";

export function UserNav({ session }: { session: any }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex justify-center items-center relative h-20 w-20 rounded-full">
          <Avatar>
            <AvatarImage
              src={session.user.image}
              alt="user-image"
              className="rounded-full cursor-pointer"
            />
            <AvatarFallback className="rounded-full cursor-pointer bg-theme text-white text-xl p-2">
              {getInitials(session.user.name)}
            </AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {session.user.name!}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {session.user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <UserProfileModal>
            <div className="px-2 py-2 rounded-sm  items-center text-xs cursor-pointer hover:bg-slate-100">
              Profile
            </div>
          </UserProfileModal>
          <DropdownMenuSeparator />
          <UserProfileModal>
            <ChangePasswordModal>
              <div className="px-2 py-2 rounded-sm  items-center text-xs cursor-pointer hover:bg-slate-100">
                Change Password
              </div>
            </ChangePasswordModal>
          </UserProfileModal>
          <DropdownMenuSeparator />
          <PhoneModal>
            <div className="px-2 py-2 rounded-sm  items-center text-xs cursor-pointer hover:bg-slate-100">
              Change Phone Number
            </div>
          </PhoneModal>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer" onClick={() => signOut()}>
          <LogOut className="h-4 w-4 mr-2" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
