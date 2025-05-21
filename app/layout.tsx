import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeConfigProvider } from "@/components/theme-config-provider";
import { ThemeConfigPanel } from "@/components/theme-config-panel";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "BringMeInsight - Australian Politics & Society",
  description:
    "Independent journalism dedicated to providing insightful analysis on Australian and global politics, society, and culture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bokor&display=swap"
          rel="stylesheet"
          crossOrigin=""
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ThemeConfigProvider>
            <SiteHeader />
            {children}
            <SiteFooter />
            <ThemeConfigPanel />
          </ThemeConfigProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
