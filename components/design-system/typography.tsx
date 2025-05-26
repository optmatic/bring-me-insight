import React from "react"
import { cn } from "@/lib/utils"
import { componentStyles } from "@/lib/design-system"

interface DSHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6
  children: React.ReactNode
}

export function DSHeading({ level, className, children, ...props }: DSHeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements
  const headingClass =
    componentStyles.typography.display[`h${level}` as keyof typeof componentStyles.typography.display] ||
    componentStyles.typography.display.h4

  return React.createElement(
    Tag,
    {
      className: cn(headingClass, className),
      ...props,
    },
    children,
  )
}

interface DSTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: "large" | "base" | "small" | "xs"
  children: React.ReactNode
}

export function DSText({ variant = "base", className, children, ...props }: DSTextProps) {
  const textClass = componentStyles.typography.body[variant] || componentStyles.typography.body.base

  return (
    <p className={cn(textClass, className)} {...props}>
      {children}
    </p>
  )
}
