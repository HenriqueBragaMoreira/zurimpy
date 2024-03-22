import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { PanelsLeftBottom } from 'lucide-react';
import { NewBoardForm } from './forms/newBoardForm';

export function BoardDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <DropdownMenuItem className="flex gap-3" onSelect={(e) => e.preventDefault()}>
          <div className="bg-[#EEE9FD] rounded-full size-8 items-center flex justify-center">
            <PanelsLeftBottom color="#6837E7" size={18} />
          </div>
          <div className="flex flex-col items-start gap-1">
            <p className="font-semibold">Create Board</p>
            <span className="text-xs text-gray-700">Create your board now</span>
          </div>
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="flex flex-col gap-3">
          <DialogTitle>Create Board Task</DialogTitle>
          <div className="w-full border border-gray-300" />
        </DialogHeader>
        <NewBoardForm />
      </DialogContent>
    </Dialog>
  );
}
