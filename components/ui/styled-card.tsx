import { DSCard } from "@/components/design-system"
import { type HTMLAttributes, forwardRef } from "react"

interface StyledCardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

export const StyledCard = forwardRef<HTMLDivElement, StyledCardProps>(
  ({ className, hover = true, children, ...props }, ref) => {
    return (
      <DSCard ref={ref} hover={hover} className={className} {...props}>
        {children}
      </DSCard>
    )
  },
)

StyledCard.displayName = "StyledCard"
