import { ComponentProps } from 'react';

interface MetricProps extends Omit<ComponentProps<'div'>, 'className'> {
  label: string;
  value: string;
  className?: string;
}

export default function Metric({ label, value, className = '', ...rest }: MetricProps) {
  return (
    <div className={`text-center ${className}`} {...rest}>
      <div className="text-2xl font-bold text-emerald-400">{value}</div>
      <div className="text-sm text-neutral-400">{label}</div>
    </div>
  );
}