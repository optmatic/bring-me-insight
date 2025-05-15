import { componentStyles } from "@/lib/styles"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { type AnchorHTMLAttributes, forwardRef } from "react"

interface StyledLogoProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string
}

export const StyledLogo = forwardRef<HTMLAnchorElement, StyledLogoProps>(
  ({ className, href = "/", children, ...props }, ref) => {
    return (
      <Link
        ref={ref}
        href={href}
        className={cn(componentStyles.logo.DEFAULT, className)}
        style={{ fontFamily: "'Cinzel', serif" }}
        {...props}
      >
        {children || "BringMeInsight"}
      </Link>
    )
  },
)

StyledLogo.displayName = "StyledLogo"
