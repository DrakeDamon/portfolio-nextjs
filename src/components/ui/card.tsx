import { ComponentProps } from 'react';

export default function Card({ children, className='', ...rest }: ComponentProps<'div'>) {
  return <div className={`bg-neutral-900 rounded-2xl p-6 border border-neutral-800 ${className}`} {...rest}>{children}</div>;
}