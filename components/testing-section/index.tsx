'use client';

import { Button } from '../ui/button';
import { Input } from '../ui/input';

export function TestingSection() {
  return (
    <div>
      <Input
        placeholder='Enter epoch time'
        type='number'
        className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
      />
      <div className='flex gap-2 mt-2 w-full justify-end'>
        <Button>Reset</Button>
        <Button>Set Epoch Time</Button>
      </div>
    </div>
  );
}
