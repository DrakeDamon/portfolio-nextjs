import Link from 'next/link';
import { ComponentProps } from 'react';

export default function Button({ href, children, className='', ...rest }:{href?:string}&ComponentProps<'button'>){
  const cls = "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium bg-emerald-500 text-neutral-900 hover:bg-emerald-400 transition " + className;
  if (href) return <Link href={href} className={cls}>{children}</Link>;
  return <button className={cls} {...rest}>{children}</button>;
}