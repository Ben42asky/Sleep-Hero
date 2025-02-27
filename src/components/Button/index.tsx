import { cva, type VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import { forwardRef } from 'react'

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 relative overflow-hidden disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg hover:shadow-xl disabled:bg-orange-500/50',
        secondary: 'bg-white/10 backdrop-blur-sm text-white/90 hover:bg-white/20 border border-white/10 shadow-lg hover:shadow-xl disabled:bg-white/5',
        outline: 'border-2 border-orange-500 text-orange-500 hover:bg-orange-50 disabled:border-orange-200 disabled:text-orange-200',
        ghost: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 disabled:text-gray-300',
        negative: 'bg-red-500 text-white hover:bg-red-600 shadow-lg hover:shadow-xl disabled:bg-red-500/50',
        success: 'bg-green-500 text-white hover:bg-green-600 shadow-lg hover:shadow-xl disabled:bg-green-500/50',
        selected: 'bg-orange-600 text-white shadow-lg cursor-default',
        disabled: 'bg-gray-300 text-white cursor-not-allowed opacity-50',
      },
      size: {
        sm: 'h-9 px-3 text-sm',
        md: 'h-11 px-6 text-base',
        lg: 'h-14 px-8 text-lg',
        xl: 'h-16 px-10 text-xl',
      },
      fullWidth: {
        true: 'w-full',
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: false,
    },
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
          <span className="mr-2">{leftIcon}</span>
        )}
        {children}
        {!loading && rightIcon && (
          <span className="ml-2">{rightIcon}</span>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }
