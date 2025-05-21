"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronRight, Mail, ArrowRight, TrendingUp, Globe, Clock, MapPin, MessageSquare } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import { componentStyles } from "@/lib/styles"

export default function Home() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-offwhite to-white flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto mt-8 px-4 md:px-6 lg:px-8">
          <div className="max-w-[1200px] mx-auto">
            <div
              className={`${componentStyles.card.DEFAULT} ${componentStyles.card.hover} overflow-hidden dark-edge shadow-elegant-lg hover:shadow-modern-lg backdrop-blur-[2px]`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-4 md:p-8">
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <span className="font-mono text-xs text-lime-500 uppercase tracking-wider mb-2 inline-flex items-center">
                    <TrendingUp className="mr-1 h-3 w-3" /> FEATURED STORY
                  </span>
                  <Link href="/article/australia-climate-policy-challenges">
                    <h2 className="gothic-title font-gothic text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-darker mb-4 leading-tight group-hover:text-forest transition-colors uppercase tracking-tight">
                      Australia's Climate Policy Faces New Challenges in Global Context
                    </h2>
                  </Link>
                  <p className="font-mono text-sm text-charcoal/80 mb-6">
                    As international pressure mounts, Australia navigates complex terrain between economic interests and
                    environmental commitments.
                  </p>
                  <div className="flex items-center">
                    <Link href="/article/australia-climate-policy-challenges">
                      <Button className="bg-gradient-to-r from-lime-300 to-lime-500 hover:from-lime-400 hover:to-lime-600 text-forest-dark font-medium font-mono text-xs shadow-sm hover:shadow-md border border-lime-400/20">
                        READ FEATURE <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <span className="ml-4 font-mono text-xs text-charcoal/60 flex items-center">
                      <Clock className="mr-1 h-3 w-3" /> 10 MIN READ
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-5 relative min-h-[300px] md:min-h-[400px]">
                  <div className="absolute inset-0 overflow-hidden shadow-elegant-md">
                    <Image
                      src="/australia-climate-policy.png"
                      alt="Australia's Climate Policy"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-charcoal-darker/20 mix-blend-overlay"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Articles Grid */}
        <section className="container mx-auto mt-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="gothic-title font-gothic text-2xl font-bold text-charcoal-darker flex items-center uppercase tracking-tight">
                <TrendingUp className="mr-2 h-5 w-5 text-lime-500" /> Latest Articles
              </h3>
              <div className="h-px flex-1 bg-gradient-to-r from-charcoal/5 via-charcoal/10 to-charcoal/5 mx-4"></div>
              <Link
                href="#"
                className="font-mono text-xs text-lime-500 hover:text-forest transition-colors flex items-center"
              >
                VIEW ALL <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  category: "POLITICS",
                  title: "Electoral Reform Bill Sparks Debate in Parliament",
                  image: "/electoral-reform-debate.png",
                  time: "3 HOURS AGO",
                  slug: "electoral-reform-bill-debate",
                },
                {
                  category: "SOCIETY",
                  title: "Indigenous Voice Proposal Gains Momentum Across States",
                  image: "/placeholder.svg?height=400&width=600&query=indigenous voice proposal",
                  time: "5 HOURS AGO",
                  slug: "indigenous-voice-proposal-momentum",
                },
                {
                  category: "ECONOMY",
                  title: "Reserve Bank Signals Shift in Interest Rate Strategy",
                  image: "/placeholder.svg?height=400&width=600&query=reserve bank interest rates",
                  time: "YESTERDAY",
                  slug: "reserve-bank-interest-rate-strategy",
                },
                {
                  category: "WORLD",
                  title: "Pacific Nations Summit Addresses Regional Security Concerns",
                  image: "/placeholder.svg?height=400&width=600&query=pacific nations summit",
                  time: "2 DAYS AGO",
                  slug: "pacific-nations-summit-security",
                },
                {
                  category: "CLIMATE",
                  title: "Renewable Energy Projects Accelerate in Rural Communities",
                  image: "/placeholder.svg?height=400&width=600&query=renewable energy rural",
                  time: "3 DAYS AGO",
                  slug: "renewable-energy-rural-communities",
                },
                {
                  category: "TECH",
                  title: "Government Unveils New Digital Identity Framework",
                  image: "/placeholder.svg?height=400&width=600&query=digital identity framework",
                  time: "4 DAYS AGO",
                  slug: "government-digital-identity-framework",
                },
              ].map((article, index) => (
                <div
                  key={index}
                  className={`${componentStyles.card.DEFAULT} ${componentStyles.card.hover} dark-edge shadow-elegant-md hover:shadow-modern-md card-modern`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-charcoal-darker/20 mix-blend-overlay"></div>
                    <div className="absolute top-0 left-0 bg-gradient-to-r from-lime-300 to-lime-500 px-3 py-1 shadow-elegant-sm">
                      <Link
                        href={`/category/${article.category.toLowerCase()}`}
                        className="text-forest-dark font-medium hover:text-forest/90"
                      >
                        <span className="font-mono text-xs">{article.category}</span>
                      </Link>
                    </div>
                  </div>
                  <div className="p-4">
                    <Link href={`/article/${article.slug}`}>
                      <h4 className="gothic-text font-gothic text-xl font-bold text-charcoal-darker group-hover:text-forest transition-colors">
                        {article.title}
                      </h4>
                    </Link>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="font-mono text-xs text-charcoal/60 flex items-center">
                        <Clock className="mr-1 h-3 w-3" /> {article.time}
                      </span>
                      <Link href={`/article/${article.slug}`}>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="font-mono text-xs text-lime-500 p-0 hover:bg-transparent hover:text-forest transition-colors"
                        >
                          READ <ArrowRight className="ml-1 h-3 w-3" />
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
                    <h3 className="gothic-title font-gothic text-xl font-bold text-charcoal-darker hover:text-forest transition-colors flex items-center uppercase tracking-tight">
                      <MapPin className="mr-2 h-4 w-4 text-lime-500" /> Australian Perspective
                    </h3>
                  </Link>
                  <div className="h-px flex-1 bg-gradient-to-r from-charcoal/5 via-charcoal/10 to-charcoal/5 mx-4"></div>
                </div>

                <div
                  className={`${componentStyles.card.DEFAULT} ${componentStyles.card.hover} p-4 dark-edge shadow-elegant-md hover:shadow-modern-md card-modern`}
                >
                  <div className="relative h-48 mb-4 overflow-hidden shadow-elegant-sm">
                    <Image
                      src="/placeholder.svg?height=400&width=600&query=australian identity politics"
                      alt="Australian Perspective"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-charcoal-darker/20 mix-blend-overlay"></div>
                  </div>
                  <span className="font-mono text-xs text-lime-500">ANALYSIS</span>
                  <h4 className="gothic-text font-gothic text-xl font-bold text-charcoal-darker mt-2">
                    <Link
                      href="/article/australian-identity-polarized-era"
                      className="hover:text-forest transition-colors"
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
                      className="font-mono text-xs text-lime-500 p-0 hover:bg-transparent hover:text-forest transition-colors"
                    >
                      <Link href="/article/australian-identity-polarized-era">
                        READ FULL ANALYSIS <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Global Perspective */}
              <div>
                <div className="flex items-center mb-6">
                  <Link href="/category/world">
                    <h3 className="gothic-title font-gothic text-xl font-bold text-charcoal-darker hover:text-forest transition-colors flex items-center uppercase tracking-tight">
                      <Globe className="mr-2 h-4 w-4 text-lime-500" /> Global Perspective
                    </h3>
                  </Link>
                  <div className="h-px flex-1 bg-gradient-to-r from-charcoal/5 via-charcoal/10 to-charcoal/5 mx-4"></div>
                </div>

                <div
                  className={`${componentStyles.card.DEFAULT} ${componentStyles.card.hover} p-4 dark-edge shadow-elegant-md hover:shadow-modern-md card-modern`}
                >
                  <div className="relative h-48 mb-4 overflow-hidden shadow-elegant-sm">
                    <Image
                      src="/placeholder.svg?height=400&width=600&query=global democratic institutions"
                      alt="Global Perspective"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-charcoal-darker/20 mix-blend-overlay"></div>
                  </div>
                  <span className="font-mono text-xs text-lime-500">INTERNATIONAL</span>
                  <h4 className="gothic-text font-gothic text-xl font-bold text-charcoal-darker mt-2">
                    <Link
                      href="/article/democratic-institutions-populist-movements"
                      className="hover:text-forest transition-colors"
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
                      className="font-mono text-xs text-lime-500 p-0 hover:bg-transparent hover:text-forest transition-colors"
                    >
                      <Link href="/article/democratic-institutions-populist-movements">
                        READ FULL ANALYSIS <ArrowRight className="ml-1 h-3 w-3" />
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
              <h3 className="gothic-title font-gothic text-2xl font-bold text-charcoal-darker flex items-center uppercase tracking-tight">
                <MessageSquare className="mr-2 h-5 w-5 text-lime-500" /> Opinion
              </h3>
              <div className="h-px flex-1 bg-gradient-to-r from-charcoal/5 via-charcoal/10 to-charcoal/5 mx-4"></div>
              <Link
                href="#"
                className="font-mono text-xs text-lime-500 hover:text-forest transition-colors flex items-center"
              >
                VIEW ALL <ArrowRight className="ml-1 h-3 w-3" />
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
                <div
                  key={index}
                  className={`${componentStyles.card.DEFAULT} ${componentStyles.card.hover} p-6 border-t-4 border-forest dark-edge shadow-elegant-md hover:shadow-modern-md card-modern`}
                >
                  <span className="font-mono text-xs text-charcoal/70">{opinion.author}</span>
                  <h4 className="gothic-text font-gothic text-xl font-bold text-charcoal-darker mt-2 group-hover:text-forest transition-colors">
                    <Link href={`/article/${opinion.slug}`} className="hover:text-forest transition-colors">
                      {opinion.title}
                    </Link>
                  </h4>
                  <p className="font-mono text-xs text-charcoal/80 mt-2">{opinion.excerpt}</p>
                  <Link href={`/article/${opinion.slug}`}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="font-mono text-xs text-lime-500 p-0 mt-4 hover:bg-transparent hover:text-forest transition-colors"
                    >
                      READ OPINION <ArrowRight className="ml-1 h-3 w-3" />
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
            <div
              className={`${componentStyles.card.glass} p-8 bg-gradient-to-br from-forest/5 to-lime-500/5 shadow-elegant-lg hover:shadow-modern-lg dark-edge card-modern`}
            >
              <div className="max-w-2xl mx-auto text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-forest to-lime-500/70 flex items-center justify-center shadow-elegant-md">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="gothic-title font-gothic text-2xl font-bold text-charcoal-darker mb-2 uppercase tracking-tight">
                  Stay Informed
                </h3>
                <p className="font-mono text-sm text-charcoal/80 mb-6">
                  Subscribe to our weekly newsletter for in-depth analysis and exclusive content.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="font-mono text-xs border-charcoal/10 focus-visible:ring-lime-500 shadow-elegant-sm focus:shadow-modern-sm transition-shadow duration-300 dark-edge"
                  />
                  <Button className="bg-gradient-to-r from-lime-300 to-lime-500 hover:from-lime-400 hover:to-lime-600 text-forest-dark font-medium font-mono text-xs shadow-sm hover:shadow-md border border-lime-400/20">
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
