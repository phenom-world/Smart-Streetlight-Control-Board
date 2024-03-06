'use client';

import { Button } from '../ui/button';
import { Input } from '../ui/input';

export function TestingSection() {
  const handleSubmit = async () => {
    console.log('submitting');
    await fetch('/api/epoch-time', {
      method: 'POST',
      body: JSON.stringify({ epochTime: '123434343' }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('submitted');
  };
  return (
    <div>
      <Input
        placeholder='Enter epoch time'
        type='number'
        className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
      />
      <div className='flex gap-2 mt-2 w-full justify-end'>
        <Button>Reset</Button>
        <Button onClick={handleSubmit}>Set Epoch Time</Button>
      </div>
    </div>
  );
}
