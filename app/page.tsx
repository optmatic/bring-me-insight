"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronRight, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"

export default function Home() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-offwhite flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto mt-8 px-4 md:px-6 lg:px-8">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border border-charcoal/20 p-4 md:p-8 shadow-sm">
              <div className="lg:col-span-7 flex flex-col justify-center">
                <span className="font-mono text-xs text-leafy uppercase tracking-wider mb-2">FEATURED STORY</span>
                <Link href="/article/australia-climate-policy-challenges">
                  <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-light text-black mb-4 leading-tight">
                    Australia's Climate Policy Faces New Challenges in Global Context
                  </h2>
                </Link>
                <p className="font-mono text-sm text-charcoal/80 mb-6">
                  As international pressure mounts, Australia navigates complex terrain between economic interests and
                  environmental commitments.
                </p>
                <div className="flex items-center">
                  <Link href="/article/australia-climate-policy-challenges">
                    <Button className="bg-gradient-to-r from-forest to-leafy/60 hover:from-forest hover:to-leafy/80 text-white font-mono text-xs">
                      READ FEATURE <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <span className="ml-4 font-mono text-xs text-charcoal/60">10 MIN READ</span>
                </div>
              </div>
              <div className="lg:col-span-5 relative min-h-[300px] md:min-h-[400px]">
                <Image
                  src="/placeholder.svg?key=sit4r"
                  alt="Australia's Climate Policy"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Latest Articles Grid */}
        <section className="container mx-auto mt-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-sans text-2xl font-light text-black">Latest Articles</h3>
              <div className="h-px flex-1 bg-charcoal/20 mx-4"></div>
              <Link href="#" className="font-mono text-xs text-leafy hover:underline">
                VIEW ALL
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  category: "POLITICS",
                  title: "Electoral Reform Bill Sparks Debate in Parliament",
                  image: "/placeholder.svg?key=pxylr",
                  time: "3 HOURS AGO",
                  slug: "electoral-reform-bill-debate",
                },
                {
                  category: "SOCIETY",
                  title: "Indigenous Voice Proposal Gains Momentum Across States",
                  image: "/placeholder.svg?key=6gjpx",
                  time: "5 HOURS AGO",
                  slug: "indigenous-voice-proposal-momentum",
                },
                {
                  category: "ECONOMY",
                  title: "Reserve Bank Signals Shift in Interest Rate Strategy",
                  image: "/placeholder.svg?key=4gvoa",
                  time: "YESTERDAY",
                  slug: "reserve-bank-interest-rate-strategy",
                },
                {
                  category: "WORLD",
                  title: "Pacific Nations Summit Addresses Regional Security Concerns",
                  image: "/placeholder.svg?key=m1c5n",
                  time: "2 DAYS AGO",
                  slug: "pacific-nations-summit-security",
                },
                {
                  category: "CLIMATE",
                  title: "Renewable Energy Projects Accelerate in Rural Communities",
                  image: "/placeholder.svg?key=dtor6",
                  time: "3 DAYS AGO",
                  slug: "renewable-energy-rural-communities",
                },
                {
                  category: "TECH",
                  title: "Government Unveils New Digital Identity Framework",
                  image: "/placeholder.svg?key=71rnp",
                  time: "4 DAYS AGO",
                  slug: "government-digital-identity-framework",
                },
              ].map((article, index) => (
                <div
                  key={index}
                  className="border border-charcoal/20 group hover:border-leafy/50 transition-colors shadow-sm"
                >
                  <div className="relative h-48">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-0 left-0 bg-gradient-to-r from-forest to-leafy/40 px-3 py-1">
                      <Link
                        href={`/category/${article.category.toLowerCase()}`}
                        className="text-white hover:text-white/90"
                      >
                        <span className="font-mono text-xs">{article.category}</span>
                      </Link>
                    </div>
                  </div>
                  <div className="p-4">
                    <Link href={`/article/${article.slug}`}>
                      <h4 className="font-sans text-xl font-light text-black group-hover:text-leafy transition-colors">
                        {article.title}
                      </h4>
                    </Link>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="font-mono text-xs text-charcoal/60">{article.time}</span>
                      <Link href={`/article/${article.slug}`}>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="font-mono text-xs text-leafy p-0 hover:bg-transparent hover:text-leafy"
                        >
                          READ <ChevronRight className="ml-1 h-3 w-3" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Perspectives Sections */}
        <section className="container mx-auto mt-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Australian Perspective */}
              <div>
                <div className="flex items-center mb-6">
                  <Link href="/category/australia">
                    <h3 className="font-sans text-xl font-light text-black hover:text-leafy transition-colors">
                      Australian Perspective
                    </h3>
                  </Link>
                  <div className="h-px flex-1 bg-charcoal/20 mx-4"></div>
                </div>

                <div className="border border-charcoal/20 p-4 shadow-sm">
                  <div className="relative h-48 mb-4">
                    <Image
                      src="/placeholder.svg?key=ujcfk"
                      alt="Australian Perspective"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="font-mono text-xs text-leafy">ANALYSIS</span>
                  <h4 className="font-sans text-xl font-light text-black mt-2">
                    <Link
                      href="/article/australian-identity-polarized-era"
                      className="hover:text-leafy transition-colors"
                    >
                      The Shifting Landscape of Australian Identity in a Polarized Era
                    </Link>
                  </h4>
                  <p className="font-mono text-xs text-charcoal/80 mt-2">
                    Examining how national identity evolves amid political and cultural divisions.
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="font-mono text-xs text-charcoal/60">BY SARAH JOHNSON</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="font-mono text-xs text-leafy p-0 hover:bg-transparent hover:text-leafy"
                    >
                      <Link href="/article/australian-identity-polarized-era">
                        READ FULL ANALYSIS <ChevronRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Global Perspective */}
              <div>
                <div className="flex items-center mb-6">
                  <Link href="/category/world">
                    <h3 className="font-sans text-xl font-light text-black hover:text-leafy transition-colors">
                      Global Perspective
                    </h3>
                  </Link>
                  <div className="h-px flex-1 bg-charcoal/20 mx-4"></div>
                </div>

                <div className="border border-charcoal/20 p-4 shadow-sm">
                  <div className="relative h-48 mb-4">
                    <Image src="/placeholder.svg?key=81hrg" alt="Global Perspective" fill className="object-cover" />
                  </div>
                  <span className="font-mono text-xs text-leafy">INTERNATIONAL</span>
                  <h4 className="font-sans text-xl font-light text-black mt-2">
                    <Link
                      href="/article/democratic-institutions-populist-movements"
                      className="hover:text-leafy transition-colors"
                    >
                      How Democratic Institutions Are Responding to Populist Movements Worldwide
                    </Link>
                  </h4>
                  <p className="font-mono text-xs text-charcoal/80 mt-2">
                    A comparative analysis of institutional resilience across democratic systems.
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="font-mono text-xs text-charcoal/60">BY MICHAEL CHEN</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="font-mono text-xs text-leafy p-0 hover:bg-transparent hover:text-leafy"
                    >
                      <Link href="/article/democratic-institutions-populist-movements">
                        READ FULL ANALYSIS <ChevronRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Opinion Section */}
        <section className="container mx-auto mt-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex items-center mb-8">
              <h3 className="font-sans text-2xl font-light text-black">Opinion</h3>
              <div className="h-px flex-1 bg-charcoal/20 mx-4"></div>
              <Link href="#" className="font-mono text-xs text-leafy hover:underline">
                VIEW ALL
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  author: "PROFESSOR ALAN DAVIES",
                  title: "Why Australia's Education Reform Needs a Complete Rethink",
                  excerpt: "Current approaches fail to address fundamental challenges in our education system.",
                  slug: "australia-education-reform-rethink",
                },
                {
                  author: "DR. LISA WONG",
                  title: "The False Promise of Quick Climate Solutions",
                  excerpt: "Technology alone won't save us from the climate crisis without policy change.",
                  slug: "false-promise-quick-climate-solutions",
                },
                {
                  author: "JAMES MCINTYRE",
                  title: "Media Diversity Is Essential for Democratic Health",
                  excerpt: "Concentration of media ownership threatens the quality of our public discourse.",
                  slug: "media-diversity-democratic-health",
                },
              ].map((opinion, index) => (
                <div key={index} className="border-t-2 border-forest pt-4 group">
                  <span className="font-mono text-xs text-charcoal/70">{opinion.author}</span>
                  <h4 className="font-sans text-xl font-light text-black mt-2 group-hover:text-leafy transition-colors">
                    <Link href={`/article/${opinion.slug}`} className="hover:text-leafy transition-colors">
                      {opinion.title}
                    </Link>
                  </h4>
                  <p className="font-mono text-xs text-charcoal/80 mt-2">{opinion.excerpt}</p>
                  <Link href={`/article/${opinion.slug}`}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="font-mono text-xs text-leafy p-0 mt-4 hover:bg-transparent hover:text-leafy"
                    >
                      READ OPINION <ChevronRight className="ml-1 h-3 w-3" />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="container mx-auto mt-16 mb-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-[1200px] mx-auto">
            <div className="border border-charcoal/20 p-8 bg-forest/5 shadow-sm">
              <div className="max-w-2xl mx-auto text-center">
                <Mail className="h-8 w-8 text-leafy mx-auto mb-4" />
                <h3 className="font-sans text-2xl font-light text-black mb-2">Stay Informed</h3>
                <p className="font-mono text-sm text-charcoal/80 mb-6">
                  Subscribe to our weekly newsletter for in-depth analysis and exclusive content.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="font-mono text-xs border-charcoal/20"
                  />
                  <Button className="bg-gradient-to-r from-forest to-leafy/60 hover:from-forest hover:to-leafy/80 text-white font-mono text-xs">
                    SUBSCRIBE
                  </Button>
                </div>
                <p className="font-mono text-xs text-charcoal/60 mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
