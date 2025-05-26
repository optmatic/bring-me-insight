import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { Twitter, Facebook, Instagram, Youtube, Rss } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="ds-footer">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand and Description */}
            <div className="md:col-span-2">
              <Link href="/">
                <h2 className="font-bokor inline-block text-2xl md:text-3xl text-black font-normal tracking-wide border-4 border-black px-3 py-2 bg-offwhite transform -skew-x-3 perspective-1000 transform-style-3d shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-300 hover:bg-gradient-to-r hover:from-lime-300 hover:to-lime-500 hover:text-black mb-4">
                  Bring Me Insight
                </h2>
              </Link>
              <p className="ds-footer-description">
                Independent journalism dedicated to providing insightful analysis on Australian and global politics,
                society, and culture. We believe in the power of informed citizens.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="ds-footer-social-link">
                  <span className="sr-only">Twitter</span>
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="ds-footer-social-link">
                  <span className="sr-only">Facebook</span>
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="ds-footer-social-link">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="ds-footer-social-link">
                  <span className="sr-only">YouTube</span>
                  <Youtube className="h-5 w-5" />
                </Link>
                <Link href="#" className="ds-footer-social-link">
                  <span className="sr-only">RSS</span>
                  <Rss className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Navigation Column */}
            <div>
              <h3 className="ds-footer-section-title">NAVIGATION</h3>
              <ul className="space-y-2">
                {["Australia", "World", "Politics", "Feed", "Media", "Discover"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item === "Australia" || item === "World" || item === "Politics" ? "category/" + item.toLowerCase() : item.toLowerCase()}`}
                      className="ds-footer-link"
                    >
                      <span className="ds-footer-link-icon">→</span> {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Information Column */}
            <div>
              <h3 className="ds-footer-section-title">INFORMATION</h3>
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
                    <Link href="#" className="ds-footer-link">
                      <span className="ds-footer-link-icon">→</span> {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Separator className="ds-footer-separator" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="ds-footer-copyright">© {new Date().getFullYear()} BringMeInsight. All rights reserved.</p>
            <p className="ds-footer-copyright mt-2 md:mt-0">Designed with integrity. Built for insight.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
