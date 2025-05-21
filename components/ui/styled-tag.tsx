import { componentStyles } from "@/lib/styles"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { type AnchorHTMLAttributes, forwardRef } from "react"

interface StyledTagProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  elevated?: boolean
}

export const StyledTag = forwardRef<HTMLAnchorElement, StyledTagProps>(
  ({ className, href, elevated = false, children, ...props }, ref) => {
    // Add elevation styles if requested
    const elevationStyles = elevated
      ? "shadow-sm hover:shadow-md border border-lime-400/20 transform hover:-translate-y-0.5"
      : ""

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(
          componentStyles.tag.DEFAULT,
          elevated && elevationStyles,
          "no-underline", // Remove underlines
          className,
        )}
        {...props}
      >
        {children}
      </Link>
    )
  },
)

StyledTag.displayName = "StyledTag"
