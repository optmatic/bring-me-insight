import type React from "react"
import { cn } from "@/lib/utils"
import { componentStyles } from "@/lib/design-system"

interface DSButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "inverse" | "topic"
  size?: "sm" | "md" | "lg" | "icon"
  children: React.ReactNode
}

export function DSButton({ variant = "primary", size = "md", className, children, ...props }: DSButtonProps) {
  const baseClasses = componentStyles.button.base
  const variantClasses = componentStyles.button[variant] || componentStyles.button.primary
  const sizeClasses = componentStyles.button.sizes[size] || componentStyles.button.sizes.md

  return (
    <button className={cn(baseClasses, variantClasses, sizeClasses, className)} {...props}>
      {children}
    </button>
  )
}
