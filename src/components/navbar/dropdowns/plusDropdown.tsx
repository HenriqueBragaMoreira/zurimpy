import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { CalendarRange, PanelsLeftBottom, Plus, SquareCheck, Users } from 'lucide-react';

export function PlusDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="bg-gray-200 rounded-full p-2 cursor-pointer">
          <Plus size={20} className="text-gray-600" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 px-2 space-y-1">
        <DropdownMenuItem className="flex gap-3">
          <div className="bg-[#EEE9FD] rounded-full size-8 items-center flex justify-center">
            <SquareCheck color="#6837E7" size={18} />
          </div>
          <div className="flex flex-col items-start gap-1">
            <p className="font-semibold">Create Task</p>
            <span className="text-xs text-gray-700">Create your tasks now</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-3">
          <div className="bg-[#EEE9FD] rounded-full size-8 items-center flex justify-center">
            <Users color="#6837E7" size={18} />
          </div>
          <div className="flex flex-col items-start gap-1">
            <p className="font-semibold">Create Team</p>
            <span className="text-xs text-gray-700">Create your team now</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-3">
          <div className="bg-[#EEE9FD] rounded-full size-8 items-center flex justify-center">
            <PanelsLeftBottom color="#6837E7" size={18} />
          </div>
          <div className="flex flex-col items-start gap-1">
            <p className="font-semibold">Create Board</p>
            <span className="text-xs text-gray-700">Create your board now</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-3">
          <div className="bg-[#EEE9FD] rounded-full size-8 items-center flex justify-center">
            <CalendarRange color="#6837E7" size={18} />
          </div>
          <div className="flex flex-col items-start gap-1">
            <p className="font-semibold">Create Timeline</p>
            <span className="text-xs text-gray-700">Create your timeline now</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
