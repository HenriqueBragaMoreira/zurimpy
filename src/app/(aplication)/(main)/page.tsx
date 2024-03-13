'use client';
import { Button } from '@/components/ui/button';

export default function Main() {
  return (
    <div>
      <h1>Hello World!</h1>
      <Button onClick={() => console.log('entrou!')}>Test</Button>
    </div>
  );
}
