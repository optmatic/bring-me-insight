"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight, ExternalLink, Globe, Calendar, BookOpen } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"

export default function DiscoverPage() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-offwhite">
      {/* Page Header */}
      <section className="bg-forest/5 border-b border-charcoal/10">
        <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
          <div className="max-w-[1200px] mx-auto">
            <div className="max-w-2xl">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-charcoal-darker mb-4 uppercase tracking-tight">
                Discover
              </h1>
              <p className="font-sans text-sm text-charcoal/80">
                Explore our curated selection of essential reading from around the web. We highlight the most insightful
                analysis, thought-provoking commentary, and in-depth reporting on current events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured External Content */}
      <section className="container mx-auto mt-8 px-4 md:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-heading text-2xl font-bold text-charcoal-darker mb-6 uppercase tracking-tight">
            Editor's Picks
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border border-charcoal/20 p-4 md:p-8 shadow-elegant-md mb-12">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex items-center mb-2">
                <span className="font-sans text-xs text-leafy uppercase tracking-wider">FEATURED</span>
                <span className="mx-2 text-charcoal/30">•</span>
                <span className="font-sans text-xs text-charcoal/60">THE ECONOMIST</span>
              </div>
              <a href="#" target="_blank" rel="noopener noreferrer" className="group">
                <h3 className="font-heading text-3xl md:text-4xl font-bold text-charcoal-darker mb-4 leading-tight group-hover:text-leafy transition-colors uppercase tracking-tight">
                  The Geopolitical Implications of Australia's New Defense Strategy
                </h3>
              </a>
              <p className="font-sans text-sm text-charcoal/80 mb-6">
                A comprehensive analysis of Australia's shifting defense priorities and what they mean for regional
                stability in the Indo-Pacific. The article examines historical context, current challenges, and future
                projections.
              </p>
              <div className="flex items-center">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-lime-300 to-lime-500 hover:from-lime-400 hover:to-lime-600 text-forest-dark font-medium font-sans text-xs shadow-sm border border-lime-400/20 hover:shadow-md">
                    READ ARTICLE <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <div className="flex items-center ml-4">
                  <Calendar className="h-4 w-4 text-charcoal/60 mr-1" />
                  <span className="font-sans text-xs text-charcoal/60">May 14, 2025</span>
                </div>
                <div className="flex items-center ml-4">
                  <BookOpen className="h-4 w-4 text-charcoal/60 mr-1" />
                  <span className="font-sans text-xs text-charcoal/60">15 min read</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 relative min-h-[300px] md:min-h-[400px]">
              <Image src="/placeholder.svg?key=featured-article" alt="Featured Article" fill className="object-cover" />
            </div>
          </div>

          {/* External Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "The Hidden Costs of Australia's Housing Crisis",
                excerpt:
                  "Beyond the headlines about property prices lies a complex social problem affecting everything from mental health to economic mobility.",
                source: "The Guardian",
                image: "/placeholder.svg?key=housing",
                date: "May 12, 2025",
                readTime: "8 min read",
                category: "Society",
              },
              {
                title: "Climate Policy Success Stories: What Australia Can Learn",
                excerpt:
                  "Case studies from around the world offer valuable lessons for effective climate action that balances economic and environmental concerns.",
                source: "Nature Climate Change",
                image: "/placeholder.svg?key=climate",
                date: "May 10, 2025",
                readTime: "12 min read",
                category: "Environment",
              },
              {
                title: "Digital Democracy: How Technology is Changing Political Participation",
                excerpt:
                  "New platforms are transforming how citizens engage with government, with both promising opportunities and concerning challenges.",
                source: "MIT Technology Review",
                image: "/placeholder.svg?key=tech",
                date: "May 9, 2025",
                readTime: "10 min read",
                category: "Technology",
              },
              {
                title: "The Future of Work in Australia's Changing Economy",
                excerpt:
                  "As automation and AI reshape industries, experts predict significant shifts in employment patterns and necessary skills.",
                source: "Harvard Business Review",
                image: "/placeholder.svg?key=work",
                date: "May 7, 2025",
                readTime: "14 min read",
                category: "Economy",
              },
              {
                title: "Pacific Partnerships: A New Era of Regional Cooperation",
                excerpt:
                  "Emerging alliances between Pacific nations are creating new frameworks for addressing shared challenges from climate change to security.",
                source: "Foreign Affairs",
                image: "/placeholder.svg?key=pacific",
                date: "May 5, 2025",
                readTime: "11 min read",
                category: "International",
              },
              {
                title: "The Psychological Impact of Political Polarization",
                excerpt:
                  "Research reveals how increasing political division affects mental health, social cohesion, and democratic institutions.",
                source: "The Atlantic",
                image: "/placeholder.svg?key=psychology",
                date: "May 3, 2025",
                readTime: "9 min read",
                category: "Psychology",
              },
            ].map((article, index) => (
              <div
                key={index}
                className="border border-charcoal/20 group hover:border-leafy/50 transition-colors shadow-elegant-sm"
              >
                <div className="relative h-48">
                  <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                  <div className="absolute top-0 left-0 bg-gradient-to-r from-lime-300 to-lime-500 px-3 py-1">
                    <span className="font-sans text-xs text-forest font-medium">{article.category}</span>
                  </div>
                  <div className="absolute top-0 right-0 bg-black/70 px-2 py-1">
                    <div className="flex items-center">
                      <Globe className="h-3 w-3 text-white mr-1" />
                      <span className="font-sans text-xs text-white">{article.source}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="group">
                    <h4 className="font-heading text-xl font-bold text-charcoal-darker group-hover:text-leafy transition-colors uppercase tracking-tight">
                      {article.title}
                    </h4>
                  </a>
                  <p className="font-sans text-xs text-charcoal/80 mt-2 line-clamp-2">{article.excerpt}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <div className="flex items-center text-charcoal/60">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span className="font-sans text-xs">{article.date}</span>
                    </div>
                    <div className="flex items-center text-charcoal/60">
                      <BookOpen className="h-3 w-3 mr-1" />
                      <span className="font-sans text-xs">{article.readTime}</span>
                    </div>
                  </div>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center font-sans text-xs text-leafy hover:text-forest transition-colors"
                  >
                    READ FULL ARTICLE <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button className="bg-gradient-to-r from-lime-300 to-lime-500 hover:from-lime-400 hover:to-lime-600 text-forest-dark font-medium font-sans text-xs shadow-sm border border-lime-400/20 hover:shadow-md">
              LOAD MORE <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Sources Section */}
      <section className="container mx-auto mt-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto mb-16">
          <h2 className="font-heading text-2xl font-bold text-charcoal-darker mb-6 uppercase tracking-tight">
            Our Sources
          </h2>
          <p className="font-sans text-sm text-charcoal/80 mb-8 max-w-3xl">
            We curate content from a diverse range of reputable publications to provide you with balanced perspectives
            and in-depth analysis. Here are some of the trusted sources we regularly feature:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "The Guardian",
              "The Economist",
              "Foreign Affairs",
              "Nature",
              "Harvard Business Review",
              "The Atlantic",
              "MIT Technology Review",
              "Financial Times",
              "The Conversation",
              "Foreign Policy",
              "Science",
              "New York Times",
            ].map((source, index) => (
              <div
                key={index}
                className="border border-charcoal/20 p-4 text-center hover:border-leafy/50 transition-colors shadow-elegant-sm"
              >
                <span className="font-sans text-sm text-charcoal/80">{source}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
