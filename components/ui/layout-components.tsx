import type React from "react"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"

// =============================================================================
// SECTION COMPONENT
// =============================================================================

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "accent" | "hero" | "feature"
  spacing?: "none" | "sm" | "md" | "lg" | "xl"
  children: React.ReactNode
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = "default", spacing = "md", children, ...props }, ref) => {
    const variantStyles = {
      default: "bg-transparent",
      accent: "ds-bg-section-accent",
      hero: "ds-bg-hero",
      feature: "bg-gradient-to-br from-white to-offwhite",
    }

    const spacingStyles = {
      none: "py-0",
      sm: "py-8",
      md: "py-12",
      lg: "py-16",
      xl: "py-24",
    }

    return (
      <section ref={ref} className={cn(variantStyles[variant], spacingStyles[spacing], className)} {...props}>
        {children}
      </section>
    )
  },
)
Section.displayName = "Section"

// =============================================================================
// CONTAINER COMPONENT
// =============================================================================

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full"
  padding?: "none" | "sm" | "md" | "lg"
  children: React.ReactNode
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "xl", padding = "md", children, ...props }, ref) => {
    const sizeStyles = {
      sm: "max-w-screen-sm",
      md: "max-w-screen-md",
      lg: "max-w-screen-lg",
      xl: "max-w-[1200px]",
      "2xl": "max-w-screen-2xl",
      full: "max-w-none",
    }

    const paddingStyles = {
      none: "px-0",
      sm: "px-4",
      md: "px-4 md:px-6 lg:px-8",
      lg: "px-6 md:px-8 lg:px-12",
    }

    return (
      <div ref={ref} className={cn("mx-auto w-full", sizeStyles[size], paddingStyles[padding], className)} {...props}>
        {children}
      </div>
    )
  },
)
Container.displayName = "Container"

// =============================================================================
// GRID COMPONENT
// =============================================================================

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12
  gap?: "none" | "sm" | "md" | "lg" | "xl"
  responsive?: {
    sm?: 1 | 2 | 3 | 4 | 6
    md?: 1 | 2 | 3 | 4 | 6
    lg?: 1 | 2 | 3 | 4 | 6
    xl?: 1 | 2 | 3 | 4 | 6
  }
  children: React.ReactNode
}

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ className, cols = 1, gap = "md", responsive, children, ...props }, ref) => {
    const gapStyles = {
      none: "gap-0",
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6",
      xl: "gap-8",
    }

    const colsStyles = {
      1: "grid-cols-1",
      2: "grid-cols-2",
      3: "grid-cols-3",
      4: "grid-cols-4",
      5: "grid-cols-5",
      6: "grid-cols-6",
      12: "grid-cols-12",
    }

    return (
      <div
        ref={ref}
        className={cn(
          "grid",
          colsStyles[cols],
          gapStyles[gap],
          responsive?.sm && `sm:grid-cols-${responsive.sm}`,
          responsive?.md && `md:grid-cols-${responsive.md}`,
          responsive?.lg && `lg:grid-cols-${responsive.lg}`,
          responsive?.xl && `xl:grid-cols-${responsive.xl}`,
          className,
        )}
        {...props}
      >
        {children}
      </div>
    )
  },
)
Grid.displayName = "Grid"

// =============================================================================
// FLEX COMPONENT
// =============================================================================

interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "col" | "row-reverse" | "col-reverse"
  align?: "start" | "center" | "end" | "stretch" | "baseline"
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly"
  wrap?: boolean
  gap?: "none" | "sm" | "md" | "lg" | "xl"
  children: React.ReactNode
}

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      className,
      direction = "row",
      align = "start",
      justify = "start",
      wrap = false,
      gap = "none",
      children,
      ...props
    },
    ref,
  ) => {
    const directionStyles = {
      row: "flex-row",
      col: "flex-col",
      "row-reverse": "flex-row-reverse",
      "col-reverse": "flex-col-reverse",
    }

    const alignStyles = {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
      baseline: "items-baseline",
    }

    const justifyStyles = {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    }

    const gapStyles = {
      none: "gap-0",
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6",
      xl: "gap-8",
    }

    return (
      <div
        ref={ref}
        className={cn(
          "flex",
          directionStyles[direction],
          alignStyles[align],
          justifyStyles[justify],
          wrap && "flex-wrap",
          gapStyles[gap],
          className,
        )}
        {...props}
      >
        {children}
      </div>
    )
  },
)
Flex.displayName = "Flex"

// =============================================================================
// STACK COMPONENT
// =============================================================================

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  spacing?: "none" | "xs" | "sm" | "md" | "lg" | "xl"
  align?: "start" | "center" | "end" | "stretch"
  children: React.ReactNode
}

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ className, spacing = "md", align = "stretch", children, ...props }, ref) => {
    const spacingStyles = {
      none: "space-y-0",
      xs: "space-y-1",
      sm: "space-y-2",
      md: "space-y-4",
      lg: "space-y-6",
      xl: "space-y-8",
    }

    const alignStyles = {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
    }

    return (
      <div ref={ref} className={cn("flex flex-col", spacingStyles[spacing], alignStyles[align], className)} {...props}>
        {children}
      </div>
    )
  },
)
Stack.displayName = "Stack"

// =============================================================================
// DIVIDER COMPONENT
// =============================================================================

interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical"
  variant?: "solid" | "dashed" | "dotted" | "gradient"
  spacing?: "none" | "sm" | "md" | "lg"
  label?: string
}

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  ({ className, orientation = "horizontal", variant = "solid", spacing = "md", label, ...props }, ref) => {
    const orientationStyles = {
      horizontal: "w-full h-px",
      vertical: "h-full w-px",
    }

    const variantStyles = {
      solid: "bg-charcoal-200",
      dashed: "border-dashed border-t border-charcoal-200",
      dotted: "border-dotted border-t border-charcoal-200",
      gradient: "bg-gradient-to-r from-transparent via-charcoal-200 to-transparent",
    }

    const spacingStyles = {
      none: orientation === "horizontal" ? "my-0" : "mx-0",
      sm: orientation === "horizontal" ? "my-2" : "mx-2",
      md: orientation === "horizontal" ? "my-4" : "mx-4",
      lg: orientation === "horizontal" ? "my-6" : "mx-6",
    }

    if (label && orientation === "horizontal") {
      return (
        <div className={cn("relative flex items-center", spacingStyles[spacing], className)} ref={ref} {...props}>
          <div className={cn("flex-1", variantStyles[variant])} />
          <span className="px-4 text-sm text-charcoal-500 bg-white">{label}</span>
          <div className={cn("flex-1", variantStyles[variant])} />
        </div>
      )
    }

    return (
      <div
        ref={ref}
        className={cn(orientationStyles[orientation], variantStyles[variant], spacingStyles[spacing], className)}
        {...props}
      />
    )
  },
)
Divider.displayName = "Divider"
