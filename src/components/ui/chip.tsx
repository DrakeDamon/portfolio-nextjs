import { ComponentProps, ReactNode } from 'react';

interface ChipProps extends Omit<ComponentProps<'span'>, 'className'> {
  children: ReactNode;
  className?: string;
}

export default function Chip({ children, className = '', ...rest }: ChipProps) {
  return <span className={`inline-block bg-emerald-500/10 text-emerald-400 text-sm px-3 py-1 rounded-full border border-emerald-500/20 ${className}`} {...rest}>{children}</span>;
}