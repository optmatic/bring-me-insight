"use client"

import type React from "react"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

// =============================================================================
// TABLE COMPONENT
// =============================================================================

interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  children: React.ReactNode
}

export const Table = forwardRef<HTMLTableElement, TableProps>(({ className, children, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table ref={ref} className={cn("w-full caption-bottom text-sm", className)} {...props}>
      {children}
    </table>
  </div>
))
Table.displayName = "Table"

export const TableHeader = forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />,
)
TableHeader.displayName = "TableHeader"

export const TableBody = forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <tbody ref={ref} className={cn("[&_tr:last-child]:border-0", className)} {...props} />
  ),
)
TableBody.displayName = "TableBody"

export const TableRow = forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
  ({ className, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn(
        "border-b border-charcoal-200/10 transition-colors hover:bg-charcoal-50/50 data-[state=selected]:bg-charcoal-100",
        className,
      )}
      {...props}
    />
  ),
)
TableRow.displayName = "TableRow"

export const TableHead = forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <th
      ref={ref}
      className={cn(
        "h-12 px-4 text-left align-middle font-medium text-charcoal-500 [&:has([role=checkbox])]:pr-0",
        className,
      )}
      {...props}
    />
  ),
)
TableHead.displayName = "TableHead"

export const TableCell = forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => (
    <td ref={ref} className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)} {...props} />
  ),
)
TableCell.displayName = "TableCell"

// =============================================================================
// PAGINATION COMPONENT
// =============================================================================

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  showFirstLast?: boolean
  showPrevNext?: boolean
  maxVisiblePages?: number
  className?: string
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  showFirstLast = true,
  showPrevNext = true,
  maxVisiblePages = 5,
  className,
}: PaginationProps) {
  const getVisiblePages = () => {
    const delta = Math.floor(maxVisiblePages / 2)
    const start = Math.max(1, currentPage - delta)
    const end = Math.min(totalPages, start + maxVisiblePages - 1)

    return Array.from({ length: end - start + 1 }, (_, i) => start + i)
  }

  const visiblePages = getVisiblePages()

  return (
    <nav className={cn("flex items-center justify-center space-x-1", className)}>
      {/* First page */}
      {showFirstLast && currentPage > 1 && (
        <>
          <button onClick={() => onPageChange(1)} className="ds-btn-secondary px-3 py-2 text-xs">
            First
          </button>
          {visiblePages[0] > 2 && (
            <span className="px-2 text-charcoal-500">
              <MoreHorizontal className="h-4 w-4" />
            </span>
          )}
        </>
      )}

      {/* Previous page */}
      {showPrevNext && (
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          className="ds-btn-secondary px-3 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
      )}

      {/* Page numbers */}
      {visiblePages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={cn(
            "px-3 py-2 text-xs rounded-full transition-colors",
            page === currentPage ? "ds-btn-primary" : "ds-btn-secondary",
          )}
        >
          {page}
        </button>
      ))}

      {/* Next page */}
      {showPrevNext && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className="ds-btn-secondary px-3 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      )}

      {/* Last page */}
      {showFirstLast && currentPage < totalPages && (
        <>
          {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
            <span className="px-2 text-charcoal-500">
              <MoreHorizontal className="h-4 w-4" />
            </span>
          )}
          <button onClick={() => onPageChange(totalPages)} className="ds-btn-secondary px-3 py-2 text-xs">
            Last
          </button>
        </>
      )}
    </nav>
  )
}

// =============================================================================
// AVATAR COMPONENT
// =============================================================================

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  fallback?: string
  size?: "sm" | "md" | "lg" | "xl"
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt, fallback, size = "md", ...props }, ref) => {
    const sizeStyles = {
      sm: "h-8 w-8 text-xs",
      md: "h-10 w-10 text-sm",
      lg: "h-12 w-12 text-base",
      xl: "h-16 w-16 text-lg",
    }

    const getInitials = (name: string) => {
      return name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    }

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex shrink-0 overflow-hidden rounded-full bg-charcoal-100",
          sizeStyles[size],
          className,
        )}
        {...props}
      >
        {src ? (
          <img src={src || "/placeholder.svg"} alt={alt} className="aspect-square h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-lime-400 to-forest-600 text-white font-medium">
            {fallback ? getInitials(fallback) : "?"}
          </div>
        )}
      </div>
    )
  },
)
Avatar.displayName = "Avatar"

// =============================================================================
// BREADCRUMB COMPONENT
// =============================================================================

interface BreadcrumbItem {
  label: string
  href?: string
  isActive?: boolean
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  separator?: React.ReactNode
  className?: string
}

export function Breadcrumb({ items, separator = "/", className }: BreadcrumbProps) {
  return (
    <nav className={cn("flex items-center space-x-1 text-sm text-charcoal-600", className)}>
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <span className="mx-2 text-charcoal-400">{separator}</span>}
          {item.href && !item.isActive ? (
            <a href={item.href} className="hover:text-lime-600 transition-colors">
              {item.label}
            </a>
          ) : (
            <span className={cn(item.isActive && "text-charcoal-900 font-medium")}>{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  )
}

// =============================================================================
// TOOLTIP COMPONENT
// =============================================================================

interface TooltipProps {
  content: string
  children: React.ReactNode
  position?: "top" | "bottom" | "left" | "right"
  className?: string
}

export function Tooltip({ content, children, position = "top", className }: TooltipProps) {
  const positionStyles = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
  }

  return (
    <div className="relative inline-block group">
      {children}
      <div
        className={cn(
          "absolute z-tooltip invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200",
          "bg-charcoal-900 text-white text-xs rounded-md px-2 py-1 whitespace-nowrap",
          positionStyles[position],
          className,
        )}
      >
        {content}
        {/* Arrow */}
        <div
          className={cn(
            "absolute w-2 h-2 bg-charcoal-900 transform rotate-45",
            position === "top" && "top-full left-1/2 -translate-x-1/2 -mt-1",
            position === "bottom" && "bottom-full left-1/2 -translate-x-1/2 -mb-1",
            position === "left" && "left-full top-1/2 -translate-y-1/2 -ml-1",
            position === "right" && "right-full top-1/2 -translate-y-1/2 -mr-1",
          )}
        />
      </div>
    </div>
  )
}
