import { ComponentProps } from 'react';

export default function Chip({ children, className='', ...rest }: ComponentProps<'span'>) {
  return <span className={`inline-block bg-emerald-500/10 text-emerald-400 text-sm px-3 py-1 rounded-full border border-emerald-500/20 ${className}`} {...rest}>{children}</span>;
}