import { Button as ShadcnButton } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { type ButtonHTMLAttributes, forwardRef } from "react"

interface StyledButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost" | "inverse"
  size?: "default" | "sm" | "lg" | "icon"
  withArrow?: boolean
}

export const StyledButton = forwardRef<HTMLButtonElement, StyledButtonProps>(
  ({ className, variant = "primary", size = "default", withArrow = false, children, ...props }, ref) => {
    // Define styles for each variant
    const variantStyles = {
      primary:
        "bg-gradient-to-r from-lime-300 to-lime-500 hover:from-lime-400 hover:to-lime-600 text-forest-dark border border-lime-400/20",
      outline: "bg-white text-forest border border-charcoal/10 hover:text-forest hover:border-lime-500/30",
      ghost: "bg-transparent text-forest p-0 hover:bg-transparent hover:text-forest/80 shadow-none",
      inverse:
        "bg-gradient-to-r from-charcoal to-charcoal-dark hover:from-charcoal-dark hover:to-charcoal-darker text-white border border-charcoal-dark/20",
    }

    // Apply consistent 2D shadow
    const shadowStyle = variant !== "ghost" ? "shadow-sm hover:shadow-md" : ""

    return (
      <ShadcnButton
        ref={ref}
        className={cn(
          "rounded-full font-medium font-mono text-xs transition-all duration-300",
          variantStyles[variant],
          shadowStyle,
          className,
        )}
        size={size}
        {...props}
      >
        <span className="relative z-10 flex items-center justify-center">
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
        </span>
      </ShadcnButton>
    )
  },
)

StyledButton.displayName = "StyledButton"
