import { componentStyles } from "@/lib/styles"
import { cn } from "@/lib/utils"
import { type HTMLAttributes, forwardRef } from "react"

interface StyledCardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

export const StyledCard = forwardRef<HTMLDivElement, StyledCardProps>(
  ({ className, hover = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(componentStyles.card.DEFAULT, hover && componentStyles.card.hover, className)}
        {...props}
      >
        {children}
      </div>
    )
  },
)

StyledCard.displayName = "StyledCard"
