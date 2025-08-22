import * as React from "react"

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'secondary' | 'outline'
  children: React.ReactNode
}

function Badge({ variant = 'default', className = '', children, ...props }: BadgeProps) {
  const baseClasses = 'inline-flex items-center rounded-full px-3 py-1 text-sm font-medium transition-colors'
  
  const variants = {
    default: 'bg-primary/10 text-primary border border-primary/20',
    secondary: 'bg-secondary text-secondary-foreground',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'
  }
  
  return (
    <span className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </span>
  )
}

export { Badge }