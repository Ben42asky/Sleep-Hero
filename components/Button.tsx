import type { ReactNode } from "react"

interface ButtonProps {
    children: ReactNode
    onClick: () => void
    disabled?: boolean
    variant?: "primary" | "secondary" | "neutral" | "negative" | "success"
    leftIcon?: ReactNode
    rightIcon?: ReactNode
    className?: string
  }

export function Button({
  children,
  onClick,
  disabled = false,
  variant = "primary",
  leftIcon,
  rightIcon,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "flex items-center justify-center rounded-lg px-4 py-2 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"

  const variantStyles = {
    primary: "bg-[#0d3c26] text-white hover:bg-[#0d3c26]/90 focus:ring-[#0d3c26]",
    secondary: "bg-white border border-[#0d3c26]/20 text-[#0d3c26] hover:bg-[#0d3c26]/10 focus:ring-[#0d3c26]",
    neutral:
      "bg-white border border-[#0d3c26]/20 text-[#0d3c26] hover:bg-[#0d3c26]/10 focus:ring-[#0d3c26] data-[state=selected]:bg-[#0d3c26] data-[state=selected]:text-white",
    negative: "bg-red-500 text-white hover:bg-red-500/90 focus:ring-red-500",
    success: "bg-green-500 text-white hover:bg-green-500/90 focus:ring-green-500",
  }

  const disabledStyles = "opacity-50 cursor-not-allowed"

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      data-state={disabled ? "selected" : undefined}
      className={`${baseStyles} ${variantStyles[variant]} ${disabled ? disabledStyles : ""} ${className} text-center w-full justify-center items-center`}
    >
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  )
}

