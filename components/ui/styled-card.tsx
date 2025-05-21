import { componentStyles } from "@/lib/styles"
import { cn } from "@/lib/utils"
import { type HTMLAttributes, forwardRef } from "react"

interface StyledCardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

export const StyledCard = forwardRef<HTMLDivElement, StyledCardProps>(
  ({ className, hover = true, children, ...props }, ref) => {
    // Define hover styles without the transform
    const hoverStyles = "transition-shadow duration-300 hover:shadow-modern-md"

    return (
      <div ref={ref} className={cn(componentStyles.card.DEFAULT, hover && hoverStyles, className)} {...props}>
        {children}
      </div>
    )
  },
)

StyledCard.displayName = "StyledCard"
