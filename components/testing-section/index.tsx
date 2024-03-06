'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export function TestingSection() {
  const [epochTime, setEpochTime] = useState('0');
  const handleSubmit = async () => {
    await fetch('/api/epoch-time', {
      method: 'POST',
      body: JSON.stringify({ epochTime }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };
  return (
    <div>
      <Input
        placeholder='Enter epoch time'
        type='number'
        className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
        onChange={(e) => setEpochTime(e.target.value)}
      />
      <div className='flex gap-2 mt-2 w-full justify-end'>
        <Button>Reset</Button>
        <Button onClick={handleSubmit}>Set Epoch Time</Button>
      </div>
    </div>
  );
}
