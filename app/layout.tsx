import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeConfigProvider } from "@/components/theme-config-provider"
import { ThemeConfigPanel } from "@/components/theme-config-panel"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "BringMeInsight - Australian Politics & Society",
  description:
    "Independent journalism dedicated to providing insightful analysis on Australian and global politics, society, and culture.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ThemeConfigProvider>
            <SiteHeader />
            {children}
            <SiteFooter />
            <ThemeConfigPanel />
          </ThemeConfigProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
