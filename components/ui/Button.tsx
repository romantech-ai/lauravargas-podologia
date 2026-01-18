'use client'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  href,
  onClick,
  type = 'button',
  disabled = false
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 rounded-full'

  const variants = {
    primary: 'bg-primary-600 text-white shadow-lg shadow-primary-600/25 hover:bg-primary-700 hover:shadow-xl',
    secondary: 'bg-white text-gray-700 border-2 border-gray-200 hover:border-primary-600 hover:text-primary-600',
    ghost: 'text-gray-600 hover:text-primary-600'
  }

  const sizes = {
    sm: 'px-6 py-2.5 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg'
  }

  const classes = cn(baseStyles, variants[variant], sizes[size], className)

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={classes}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(classes, disabled && 'opacity-50 cursor-not-allowed')}
    >
      {children}
    </motion.button>
  )
}
