import { ComponentProps } from 'react';

export default function Badge({ children, variant = 'default', className='', ...rest }: { variant?: 'default' } & ComponentProps<'span'>) {
  return <span className={`inline-block bg-neutral-800 text-neutral-300 text-xs px-2 py-1 rounded-md ${className}`} {...rest}>{children}</span>;
}