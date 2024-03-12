import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const CreateAccountSchema = z.object({
  email: z.string().min(1, 'Required field'),
  password: z.string().min(1, 'Required field'),
  term: z.literal(true),
  opcionalField: z.boolean()
});

export function CreateAccountForm() {
  const form = useForm({
    resolver: zodResolver(CreateAccountSchema),
    defaultValues: {
      email: '',
      password: '',
      term: false,
      opcionalField: false
    }
  });

  return (
    <div className="flex flex-col gap-2 w-full">
      <Form {...form}>
        <form
          className="flex flex-col gap-4"
          onSubmit={form.handleSubmit((a) => console.log(a))}
          autoComplete="off"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="Type your e-mail" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Type your password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="term"
            render={({ field }) => (
              <FormItem>
                <div className="flex flex-row items-start space-x-3 space-y-0 rounded-md px-4">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormDescription>
                      I accept Zurimpy <span className="text-purple-500">Terms of Service</span> and{' '}
                      <span className="text-purple-500">Privacy Policy.</span> Also I agreed zurimpy{' '}
                      <span className="text-purple-500">Refund policy</span>
                    </FormDescription>
                  </div>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="opcionalField"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md px-4">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormDescription>I wish to receive UI tips offers from Zurimpy</FormDescription>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full mt-6" type="submit">
            Register New
          </Button>
        </form>
      </Form>
    </div>
  );
}
