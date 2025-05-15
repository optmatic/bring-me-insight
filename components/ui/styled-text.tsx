import { componentStyles } from "@/lib/styles"
import { cn } from "@/lib/utils"
import { type HTMLAttributes, forwardRef } from "react"

interface StyledTextProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: "body" | "small"
}

export const StyledText = forwardRef<HTMLParagraphElement, StyledTextProps>(
  ({ className, variant = "body", children, ...props }, ref) => {
    return (
      <p ref={ref} className={cn(componentStyles.text[variant], className)} {...props}>
        {children}
      </p>
    )
  },
)

StyledText.displayName = "StyledText"
