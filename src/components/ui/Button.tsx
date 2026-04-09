// src/components/ui/Button.tsx
import { ReactNode } from 'react'
import Link from 'next/link'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
  disabled?: boolean
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
}: ButtonProps) {
  const base =
    'font-body text-sm font-semibold tracking-wide px-6 py-3 transition-all duration-200 inline-block cursor-pointer select-none rounded-sm'
  const primary =
    'bg-cyan text-white hover:opacity-90 disabled:opacity-50'
  const secondary =
    'border border-border-strong text-ink-secondary hover:border-cyan hover:text-cyan disabled:opacity-50'

  const cls = `${base} ${variant === 'primary' ? primary : secondary} ${className}`

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={cls} disabled={disabled}>
      {children}
    </button>
  )
}
