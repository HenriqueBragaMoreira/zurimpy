import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Bell, BellOff } from 'lucide-react';

export function NotificationsDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Bell size={20} className="cursor-pointer text-gray-600" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80">
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="flex justify-center items-center h-20 my-6">
          <div className="flex flex-col justify-center items-center gap-4">
            <BellOff color="gray" size={40} />
            <p className="font-semibold">Empty notification box</p>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
