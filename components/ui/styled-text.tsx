import { DSText } from "@/components/design-system"
import { cn } from "@/lib/utils"
import type React from "react"

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: "default" | "small" | "lead"
  as?: "p" | "span" | "div"
  children: React.ReactNode
}

export function StyledText({ variant = "default", as: Component = "p", className, children, ...props }: TextProps) {
  // Map old variants to new design system variants
  const dsVariant =
    variant === "default" ? "base" : variant === "small" ? "small" : variant === "lead" ? "large" : "base"

  if (Component !== "p") {
    const textClass = variant === "small" ? "ds-body-small" : variant === "lead" ? "ds-body-large" : "ds-body-base"
    return (
      <Component className={cn(textClass, className)} {...props}>
        {children}
      </Component>
    )
  }

  return (
    <DSText variant={dsVariant} className={className} {...props}>
      {children}
    </DSText>
  )
}
