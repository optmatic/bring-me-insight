"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { componentStyles } from "@/lib/styles"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Check if a nav link is active
  const isActive = (path: string) => {
    if (path === "/" && pathname !== "/") return false
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  return (
    <header
      className={`${componentStyles.nav.container} transition-all duration-300 border-b border-charcoal/10 ${
        isScrolled ? "py-2" : "py-3"
      }`}
    >
      {/* Main header with logo, tagline, and search */}
      <div className="container mx-auto py-4 px-4 md:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Logo and tagline */}
            <div className="flex items-center">
              <Link href="/">
                <div className="inline-block text-3xl font-gothic font-bold text-forest uppercase tracking-tight border-2 border-forest px-6 py-2 bg-offwhite transform -skew-x-3 shadow-elegant-lg hover:shadow-modern-lg hover:translate-x-1 hover:translate-y-1 transition-all duration-300">
                  BRINGMEINSIGHT
                </div>
              </Link>
              <div className="hidden md:block h-8 w-px bg-charcoal/10 mx-4"></div>
              <p className="hidden md:block font-mono text-xs text-charcoal/70">
                Australia in Focus. The World in Frame.
              </p>
            </div>

            {/* Search and subscribe */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-charcoal/50" />
                <Input
                  type="search"
                  placeholder="Search articles..."
                  className="pl-10 font-mono text-xs border-charcoal/10 focus-visible:ring-lime-500 rounded-full"
                />
              </div>
              <Button className="hidden md:flex bg-gradient-to-r from-lime-300 to-lime-500 hover:from-lime-400 hover:to-lime-600 text-forest-dark font-medium font-mono text-xs shadow-sm border border-lime-400/20 hover:shadow-md rounded-full">
                Subscribe
              </Button>
              <button
                className="md:hidden p-2 text-charcoal hover:text-forest"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="container mx-auto px-4 md:px-6 lg:px-8 hidden md:block">
        <div className="max-w-[1200px] mx-auto">
          <ul className="flex space-x-8">
            {[
              { name: "AUSTRALIA", path: "/category/australia" },
              { name: "WORLD", path: "/category/world" },
              { name: "POLITICS", path: "/category/politics" },
              { name: "FEED", path: "/feed" },
              { name: "MEDIA", path: "/media" },
              { name: "DISCOVER", path: "/discover" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={
                    isActive(item.path)
                      ? "bg-gradient-to-r from-lime-300 to-lime-500 text-forest-dark font-medium px-3 py-1 rounded-full font-mono text-xs"
                      : "font-mono text-xs text-charcoal hover:text-lime-500 transition-colors"
                  }
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-charcoal/10 py-4">
          <div className="container mx-auto px-4">
            <ul className="space-y-4">
              {[
                { name: "AUSTRALIA", path: "/category/australia" },
                { name: "WORLD", path: "/category/world" },
                { name: "POLITICS", path: "/category/politics" },
                { name: "FEED", path: "/feed" },
                { name: "MEDIA", path: "/media" },
                { name: "DISCOVER", path: "/discover" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className={
                      isActive(item.path)
                        ? "bg-gradient-to-r from-lime-300 to-lime-500 text-forest-dark font-medium px-3 py-1 rounded-full font-mono text-xs"
                        : "font-mono text-xs text-charcoal hover:text-lime-500 transition-colors"
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-charcoal/10">
                <Button className="font-mono text-xs bg-gradient-to-r from-lime-300 to-lime-500 hover:from-lime-400 hover:to-lime-600 text-forest-dark font-medium shadow-sm border border-lime-400/20 hover:shadow-md rounded-full w-full">
                  Subscribe
                </Button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}
