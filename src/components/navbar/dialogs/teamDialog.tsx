import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Users } from 'lucide-react';
import { NewTeamForm } from './forms/newTeamForm';

export function TeamDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <DropdownMenuItem className="flex gap-3" onSelect={(e) => e.preventDefault()}>
          <div className="bg-[#EEE9FD] rounded-full size-8 items-center flex justify-center">
            <Users color="#6837E7" size={18} />
          </div>
          <div className="flex flex-col items-start gap-1">
            <p className="font-semibold">Create Team</p>
            <span className="text-xs text-gray-700">Create your team now</span>
          </div>
        </DropdownMenuItem>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="flex flex-col gap-3">
          <DialogTitle>Create Team</DialogTitle>
          <div className="w-full border border-gray-300" />
        </DialogHeader>
        <NewTeamForm />
      </DialogContent>
    </Dialog>
  );
}
