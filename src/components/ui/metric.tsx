import { ComponentProps } from 'react';

export default function Metric({ label, value, className='', ...rest }: { label: string; value: string } & ComponentProps<'div'>) {
  return (
    <div className={`text-center ${className}`} {...rest}>
      <div className="text-2xl font-bold text-emerald-400">{value}</div>
      <div className="text-sm text-neutral-400">{label}</div>
    </div>
  );
}