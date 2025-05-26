import { cn } from "@/lib/utils"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

export function LoadingSpinner({ size = "md", className }: LoadingSpinnerProps) {
  return (
    <div
      className={cn(
        "ds-loading-spinner",
        {
          "w-4 h-4": size === "sm",
          "w-6 h-6": size === "md",
          "w-8 h-8 border-[3px]": size === "lg",
        },
        className,
      )}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export function LoadingDots({ className }: { className?: string }) {
  return (
    <div className={cn("ds-loading-dots", className)} role="status" aria-label="Loading">
      <div className="ds-loading-dot" />
      <div className="ds-loading-dot" />
      <div className="ds-loading-dot" />
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export function LoadingSkeleton({
  className,
  width,
  height,
}: {
  className?: string
  width?: string
  height?: string
}) {
  return (
    <div
      className={cn("ds-loading-skeleton", className)}
      style={{ width, height }}
      role="status"
      aria-label="Loading content"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}
