import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { Twitter, Facebook, Instagram, Youtube, Rss } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-gradient-to-br from-forest to-forest-dark text-white py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand and Description */}
            <div className="md:col-span-2">
              <Link href="/">
                <h2 className="text-2xl font-gothic font-bold mb-4 inline-block bg-white/10 backdrop-blur-sm px-4 py-2 shadow-elegant-md">
                  BringMeInsight
                </h2>
              </Link>
              <p className="font-mono text-xs text-white/70 max-w-md mb-6">
                Independent journalism dedicated to providing insightful analysis on Australian and global politics,
                society, and culture. We believe in the power of informed citizens.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-lime-300 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-lime-300 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-lime-300 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-lime-300 hover:text-white transition-colors">
                  <span className="sr-only">YouTube</span>
                  <Youtube className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-lime-300 hover:text-white transition-colors">
                  <span className="sr-only">RSS</span>
                  <Rss className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Navigation Column */}
            <div>
              <h3 className="font-mono text-sm font-bold uppercase tracking-wider mb-4 pb-2 border-b border-white/20">
                NAVIGATION
              </h3>
              <ul className="space-y-2">
                {["Australia", "World", "Politics", "Feed", "Media", "Discover"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item === "Australia" || item === "World" || item === "Politics" ? "category/" + item.toLowerCase() : item.toLowerCase()}`}
                      className="font-mono text-xs text-white/70 hover:text-lime-300 transition-colors flex items-center"
                    >
                      <span className="mr-2 text-lime-300">→</span> {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Information Column */}
            <div>
              <h3 className="font-mono text-sm font-bold uppercase tracking-wider mb-4 pb-2 border-b border-white/20">
                INFORMATION
              </h3>
              <ul className="space-y-2">
                {[
                  "Subscribe",
                  "Contact Us",
                  "Editorial Policy",
                  "Privacy Policy",
                  "Terms of Use",
                  "Advertise",
                  "Careers",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="font-mono text-xs text-white/70 hover:text-lime-300 transition-colors flex items-center"
                    >
                      <span className="mr-2 text-lime-300">→</span> {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-lime-500/20" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-mono text-xs text-white/50">
              © {new Date().getFullYear()} BringMeInsight. All rights reserved.
            </p>
            <p className="font-mono text-xs text-white/50 mt-2 md:mt-0">Designed with integrity. Built for insight.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
