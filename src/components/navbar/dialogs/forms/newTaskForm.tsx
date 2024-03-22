import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Calendar } from '@/components/ui/calendar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { hours } from '@/utils/hoursOfTasks';

const NewTaskSchema = z.object({
  task_name: z.string().min(1, 'Enter a valid name'),
  due_date: z.date(),
  due_time: z.string().min(1, 'Select a time'),
  task_tag: z.string().optional(),
  task_to: z.string().min(1, 'Select a companion for the task')
});

export function NewTaskForm() {
  const form = useForm({
    resolver: zodResolver(NewTaskSchema),
    defaultValues: {
      task_name: '',
      due_date: new Date(),
      due_time: '',
      task_tag: '',
      task_to: ''
    }
  });

  return (
    <Form {...form}>
      <form className="flex flex-col gap-4" onSubmit={form.handleSubmit((a) => console.log(a))}>
        <FormField
          control={form.control}
          name="task_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Task Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter the name of the task" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-6">
          <FormField
            control={form.control}
            name="due_date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Due Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={'outline'}
                        className={cn(
                          'w-full pl-3 text-left font-normal',
                          !field.value && 'text-muted-foreground'
                        )}
                      >
                        <div className="flex w-[120px] justify-between items-center">
                          {field.value ? (
                            format(field.value, 'dd-MM-yyyy')
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </div>
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="due_time"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Due Time</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="min-w-[175px] max-w-[175px]">
                      <SelectValue placeholder="Select a time for the task" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {hours.map((hour) => (
                      <SelectItem key={hour} value={hour}>
                        {hour}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="task_tag"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Task Tag</FormLabel>
              <FormControl>
                <Input placeholder="Enter a tag for this task" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="task_to"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Assign this task to</FormLabel>
              <FormControl>
                <Input placeholder="Choose a person in charge of the task" {...field} />
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
