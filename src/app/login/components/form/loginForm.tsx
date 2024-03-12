'use client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const loginFormSchema = z.object({
  email: z
    .string({
      required_error: 'Campo obrigatório'
    })
    .trim()
    .min(1, { message: 'Campo obrigatório' }),
  password: z
    .string({
      required_error: 'Campo obrigatório'
    })
    .trim()
    .min(1, { message: 'Campo obrigatório' })
});

export function LoginForm() {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  return (
    <div className="flex flex-col gap-4 w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(() => router.push('/'))} autoComplete="off">
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
          <div className="mt-4">
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
