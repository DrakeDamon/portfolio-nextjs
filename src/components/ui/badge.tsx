import { ComponentProps, ReactNode } from 'react';

interface BadgeProps extends Omit<ComponentProps<'span'>, 'className'> {
  children: ReactNode;
  className?: string;
}

export default function Badge({ children, className = '', ...rest }: BadgeProps) {
  return <span className={`inline-block bg-neutral-800 text-neutral-300 text-xs px-2 py-1 rounded-md ${className}`} {...rest}>{children}</span>;
}