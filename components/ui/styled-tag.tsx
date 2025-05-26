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
          "bg-lime-100 text-green-700 rounded-full px-3 py-1.5 font-semibold text-sm inline-flex items-center hover:bg-lime-200 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2 transition-colors",
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
