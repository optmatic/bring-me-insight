import { Button as ShadcnButton } from "@/components/ui/button"
import { componentStyles } from "@/lib/styles"
import { cn } from "@/lib/utils"
import { type ButtonHTMLAttributes, forwardRef } from "react"

interface StyledButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
  withArrow?: boolean
}

export const StyledButton = forwardRef<HTMLButtonElement, StyledButtonProps>(
  ({ className, variant = "primary", size = "default", withArrow = false, children, ...props }, ref) => {
    const variantStyle = componentStyles.button[variant]

    return (
      <ShadcnButton ref={ref} className={cn(variantStyle, className)} size={size} {...props}>
        {children}
        {withArrow && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-2 h-4 w-4"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        )}
      </ShadcnButton>
    )
  },
)

StyledButton.displayName = "StyledButton"
