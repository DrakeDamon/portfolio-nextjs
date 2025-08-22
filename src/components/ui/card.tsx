import { ComponentProps, ReactNode } from 'react';

interface CardProps extends Omit<ComponentProps<'div'>, 'className'> {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = '', ...rest }: CardProps) {
  return <div className={`bg-neutral-900 rounded-2xl p-6 border border-neutral-800 ${className}`} {...rest}>{children}</div>;
}