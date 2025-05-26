import type React from "react"
import { cn } from "@/lib/utils"

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full"
}

export function Container({ children, className, size = "xl" }: ContainerProps) {
  return (
    <div
      className={cn(
        "ds-container",
        {
          "max-w-screen-sm": size === "sm",
          "max-w-screen-md": size === "md",
          "max-w-screen-lg": size === "lg",
          "max-w-screen-xl": size === "xl",
          "max-w-screen-2xl": size === "2xl",
          "max-w-none": size === "full",
        },
        className,
      )}
    >
      {children}
    </div>
  )
}

interface GridProps {
  children: React.ReactNode
  className?: string
  cols?: 1 | 2 | 3 | 4 | 6 | 12
  gap?: "sm" | "md" | "lg" | "xl"
  responsive?: {
    sm?: 1 | 2 | 3 | 4 | 6
    md?: 1 | 2 | 3 | 4 | 6
    lg?: 1 | 2 | 3 | 4 | 6
  }
}

export function Grid({ children, className, cols = 1, gap = "md", responsive }: GridProps) {
  return (
    <div
      className={cn(
        "ds-grid",
        `ds-grid-cols-${cols}`,
        {
          "gap-2": gap === "sm",
          "gap-4": gap === "md",
          "gap-6": gap === "lg",
          "gap-8": gap === "xl",
        },
        responsive?.sm && `sm:ds-grid-cols-${responsive.sm}`,
        responsive?.md && `md:ds-grid-cols-${responsive.md}`,
        responsive?.lg && `lg:ds-grid-cols-${responsive.lg}`,
        className,
      )}
    >
      {children}
    </div>
  )
}

interface StackProps {
  children: React.ReactNode
  className?: string
  gap?: "sm" | "md" | "lg" | "xl"
  align?: "start" | "center" | "end" | "stretch"
}

export function Stack({ children, className, gap = "md", align = "stretch" }: StackProps) {
  return (
    <div
      className={cn(
        "ds-stack",
        {
          "ds-stack-sm": gap === "sm",
          "ds-stack": gap === "md",
          "ds-stack-lg": gap === "lg",
          "ds-stack-xl": gap === "xl",
          "items-start": align === "start",
          "items-center": align === "center",
          "items-end": align === "end",
          "items-stretch": align === "stretch",
        },
        className,
      )}
    >
      {children}
    </div>
  )
}

interface FlexProps {
  children: React.ReactNode
  className?: string
  direction?: "row" | "col"
  align?: "start" | "center" | "end" | "stretch"
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly"
  wrap?: boolean
  gap?: "sm" | "md" | "lg" | "xl"
}

export function Flex({
  children,
  className,
  direction = "row",
  align = "center",
  justify = "start",
  wrap = false,
  gap = "md",
}: FlexProps) {
  return (
    <div
      className={cn(
        "flex",
        {
          "flex-row": direction === "row",
          "flex-col": direction === "col",
          "items-start": align === "start",
          "items-center": align === "center",
          "items-end": align === "end",
          "items-stretch": align === "stretch",
          "justify-start": justify === "start",
          "justify-center": justify === "center",
          "justify-end": justify === "end",
          "justify-between": justify === "between",
          "justify-around": justify === "around",
          "justify-evenly": justify === "evenly",
          "flex-wrap": wrap,
          "gap-2": gap === "sm",
          "gap-4": gap === "md",
          "gap-6": gap === "lg",
          "gap-8": gap === "xl",
        },
        className,
      )}
    >
      {children}
    </div>
  )
}
