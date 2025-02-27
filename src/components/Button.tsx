import { cva, type VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import { forwardRef } from 'react'

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 relative overflow-hidden hover-lift",
  {
    variants: {
      variant: {
        primary: [
          'bg-gradient-to-r from-[#0d3c26] to-[#0d3c26]',
          'text-white',
          'shadow-lg hover:shadow-xl',
          'hover:from-[#0d3c26] hover:to-[#0d3c26]',
          'active:from-[#0d3c26] active:to-[#0d3c26]',
          'disabled:from-[#0d3c26]/50 disabled:to-[#0d3c26]/50',
          'disabled:cursor-not-allowed',
          'disabled:shadow-none',
          'after:absolute after:inset-0 after:bg-gradient-to-r after:from-white/0 after:via-white/10 after:to-white/0',
          'after:translate-x-[-200%] hover:after:translate-x-[200%] after:transition-transform after:duration-1000'
        ].join(' '),
        secondary: [
          'bg-white/10 backdrop-blur-sm',
          'text-[#0d3c26]',
          'hover:bg-white/20',
          'border border-white/10',
          'shadow-lg hover:shadow-xl',
          'disabled:bg-white/5',
          'disabled:cursor-not-allowed',
          'disabled:shadow-none'
        ].join(' '),
        outline: [
          'border-2 border-[#0d3c26]',
          'text-[#0d3c26]',
          'hover:bg-[#daf2ce]',
          'disabled:border-[#0d3c26]/50',
          'disabled:text-[#0d3c26]/50',
          'disabled:cursor-not-allowed'
        ].join(' '),
        ghost: [
          'text-[#0d3c26]',
          'hover:text-[#0d3c26]',
          'hover:bg-[#daf2ce]',
          'disabled:text-[#0d3c26]/50',
          'disabled:hover:bg-transparent'
        ].join(' '),
        success: [
          'bg-gradient-to-r from-green-500 to-emerald-500',
          'text-white',
          'shadow-lg hover:shadow-xl',
          'hover:from-green-600 hover:to-emerald-600',
          'disabled:from-green-500/50 disabled:to-emerald-500/50'
        ].join(' '),
        selected: [
          'bg-gradient-to-r from-orange-500 to-orange-600',
          'text-white shadow-lg',
          'cursor-default'
        ].join(' '),
        disabled: [
          'bg-gray-300',
          'text-white',
          'cursor-not-allowed',
          'opacity-50'
        ].join(' ')
      },
      size: {
        sm: 'h-9 px-3 text-sm',
        md: 'h-11 px-6 text-base',
        lg: 'h-14 px-8 text-lg',
        xl: 'h-16 px-10 text-xl'
      },
      fullWidth: {
        true: 'w-full'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: false
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant, size, fullWidth, loading, disabled, leftIcon, rightIcon, children, ...props }, ref) => {
    return (
      <button
        className={buttonVariants({ variant, size, fullWidth, className })}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
        )}
        {!loading && leftIcon && (
          <span className="mr-2 transition-transform group-hover:scale-110">{leftIcon}</span>
        )}
        <span className="relative">
          {children}
        </span>
        {!loading && rightIcon && (
          <span className="ml-2 transition-transform group-hover:translate-x-1">{rightIcon}</span>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }
