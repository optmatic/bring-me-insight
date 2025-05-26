import { DSHeading } from "@/components/design-system"
import { cn } from "@/lib/utils"
import type React from "react"

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  variant?: "default" | "category"
  children: React.ReactNode
}

export function StyledHeading({ level = 1, as, variant = "default", className, children, ...props }: HeadingProps) {
  if (variant === "category") {
    const Tag = as || (`h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6")
    return (
      <Tag className={cn("ds-category", className)} {...props}>
        {children}
      </Tag>
    )
  }

  return (
    <DSHeading level={level} className={className} {...props}>
      {children}
    </DSHeading>
  )
}
