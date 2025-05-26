import type React from "react"
import { cn } from "@/lib/utils"
import { componentStyles } from "@/lib/design-system"

interface DSCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  glass?: boolean
  children: React.ReactNode
}

export function DSCard({ hover = false, glass = false, className, children, ...props }: DSCardProps) {
  const baseClasses = componentStyles.card.base
  const hoverClasses = hover ? componentStyles.card.hover : ""
  const glassClasses = glass ? componentStyles.card.glass : ""

  return (
    <div className={cn(baseClasses, hoverClasses, glassClasses, className)} {...props}>
      {children}
    </div>
  )
}
