import type React from "react"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"

interface InteractiveCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  press?: boolean
  focus?: boolean
  disabled?: boolean
  children: React.ReactNode
}

export const InteractiveCard = forwardRef<HTMLDivElement, InteractiveCardProps>(
  ({ className, hover = true, press = true, focus = true, disabled, children, ...props }, ref) => {
    return (
      <div
        className={cn(
          "ds-card",
          hover && "ds-card-hover",
          press && "ds-interactive",
          focus && "focus-visible:focus",
          disabled && "ds-interactive:disabled",
          className,
        )}
        ref={ref}
        tabIndex={disabled ? -1 : 0}
        role="button"
        {...props}
      >
        {children}
      </div>
    )
  },
)
InteractiveCard.displayName = "InteractiveCard"
