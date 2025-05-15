import { componentStyles } from "@/lib/styles"
import { cn } from "@/lib/utils"
import { type HTMLAttributes, forwardRef } from "react"

interface StyledHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6
}

export const StyledHeading = forwardRef<HTMLHeadingElement, StyledHeadingProps>(
  ({ className, level = 1, children, ...props }, ref) => {
    const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements

    let headingStyle = ""
    if (level === 1) headingStyle = componentStyles.heading.h1
    else if (level === 2) headingStyle = componentStyles.heading.h2
    else if (level === 3) headingStyle = componentStyles.heading.h3

    return (
      <HeadingTag ref={ref as any} className={cn(headingStyle, className)} {...props}>
        {children}
      </HeadingTag>
    )
  },
)

StyledHeading.displayName = "StyledHeading"
