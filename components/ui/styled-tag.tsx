import { componentStyles } from "@/lib/styles"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { type AnchorHTMLAttributes, forwardRef } from "react"

interface StyledTagProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
}

export const StyledTag = forwardRef<HTMLAnchorElement, StyledTagProps>(
  ({ className, href, children, ...props }, ref) => {
    return (
      <Link ref={ref} href={href} className={cn(componentStyles.tag.DEFAULT, className)} {...props}>
        {children}
      </Link>
    )
  },
)

StyledTag.displayName = "StyledTag"
