import { componentStyles } from "@/lib/styles"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { type AnchorHTMLAttributes, forwardRef } from "react"

interface StyledNavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  isActive?: boolean
}

export const StyledNavLink = forwardRef<HTMLAnchorElement, StyledNavLinkProps>(
  ({ className, href, isActive = false, children, ...props }, ref) => {
    return (
      <Link
        ref={ref}
        href={href}
        className={cn(isActive ? componentStyles.nav.link.active : componentStyles.nav.link.DEFAULT, className)}
        {...props}
      >
        {children}
      </Link>
    )
  },
)

StyledNavLink.displayName = "StyledNavLink"
