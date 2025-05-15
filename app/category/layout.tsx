import type React from "react"

export default function CategoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // No header here, just render children
  return <>{children}</>
}
