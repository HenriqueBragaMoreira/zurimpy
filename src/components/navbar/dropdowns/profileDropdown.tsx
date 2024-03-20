import { LogOut, MessageCircleQuestion, UserRoundPlus } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from '../../ui/dropdown-menu';
import { SessionProps } from '../navbar';

export function ProfileDropdown({ session }: SessionProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="bg-[#EBDDCA] flex justify-center items-center size-10 rounded-full cursor-pointer">
          <span className="font-bold text-gray-500">
            {session?.user?.name?.charAt(0).toUpperCase()}
          </span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="px-2 space-y-1">
        <DropdownMenuItem className="flex gap-3">
          <div className="bg-[#EBDDCA] rounded-full size-7 items-center flex justify-center">
            <span className="font-semibold text-[#5A3F2A]">
              {session?.user?.name?.charAt(0).toUpperCase()}
            </span>
          </div>
          <p className="font-semibold">My Profile</p>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-3 items-center pl-3">
          <MessageCircleQuestion color="gray" />
          <p className="font-semibold">Help and Support</p>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-3 items-center pl-3">
          <UserRoundPlus color="gray" />
          <p className="font-semibold">Invite Friends</p>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-3 items-center pl-3">
          <LogOut color="gray" />
          <p className="font-semibold">Logout</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
