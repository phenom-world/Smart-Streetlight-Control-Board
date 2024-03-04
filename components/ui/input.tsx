import * as React from 'react';
import { RxEyeClosed, RxEyeOpen } from 'react-icons/rx';

import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
  errorText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const EyeIcon = React.useMemo(() => (showPassword ? RxEyeClosed : RxEyeOpen), [showPassword]);

  return (
    <div className={`flex items-center gap-3 p-1 relative`}>
      <input
        className={cn(
          'flex h-10 w-full rounded-md border focus:outline-none focus-visible:outline-none border-input bg-background px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
        type={props?.type === 'password' ? (showPassword ? 'text' : 'password') : props?.type}
      />
      {props?.type === 'password' && (
        <EyeIcon
          size={24}
          className='cursor-pointer text-gray-400 absolute right-3 file:right-2 top-1/2 file:top-1/2 transform -translate-y-1/2'
          onClick={() => setShowPassword((prev) => !prev)}
        />
      )}
    </div>
  );
});
Input.displayName = 'Input';

export { Input };
