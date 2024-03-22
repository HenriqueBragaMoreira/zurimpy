import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const NewTeamSchema = z.object({
  team_name: z.string().min(1, 'Enter a valid name'),
  description: z.string().optional(),
  invite_members: z.string().optional()
});

export function NewTeamForm() {
  const form = useForm({
    resolver: zodResolver(NewTeamSchema),
    defaultValues: {
      team_name: '',
      description: '',
      invite_members: ''
    }
  });

  return (
    <Form {...form}>
      <form className="flex flex-col gap-4" onSubmit={form.handleSubmit((a) => console.log(a))}>
        <FormField
          control={form.control}
          name="team_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Team Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter the name of the team" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Write about this task..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="invite_members"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Invite Members</FormLabel>
              <FormControl>
                <Input placeholder="Choose the person you want on the team" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button>Create</Button>
      </form>
    </Form>
  );
}
