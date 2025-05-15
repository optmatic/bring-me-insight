"use client"

import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Play, Clock, Calendar } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function MediaPage() {
  // State for active media type
  const [activeTab, setActiveTab] = useState<string>("all")

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-offwhite flex flex-col">
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-forest/5 border-b border-charcoal/10">
          <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
            <div className="max-w-[1200px] mx-auto">
              <div className="max-w-2xl">
                <h1 className="font-sans text-4xl md:text-5xl font-light text-black mb-4">Media Center</h1>
                <p className="font-mono text-sm text-charcoal/80">
                  Explore our curated collection of videos, podcasts, and visual stories that provide deeper context and
                  analysis on current events.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Media Content */}
        <section className="container mx-auto mt-8 px-4 md:px-6 lg:px-8">
          <div className="max-w-[1200px] mx-auto">
            {/* Media Type Tabs */}
            <Tabs defaultValue="all" className="w-full mb-8" onValueChange={setActiveTab}>
              <TabsList className="bg-offwhite border border-charcoal/20 p-1 h-auto flex flex-nowrap overflow-x-auto scrollbar-hide">
                <TabsTrigger
                  value="all"
                  className="font-mono text-xs data-[state=active]:bg-gradient-to-r data-[state=active]:from-forest data-[state=active]:to-leafy/60 data-[state=active]:text-white"
                >
                  All Media
                </TabsTrigger>
                <TabsTrigger
                  value="videos"
                  className="font-mono text-xs data-[state=active]:bg-gradient-to-r data-[state=active]:from-forest data-[state=active]:to-leafy/60 data-[state=active]:text-white"
                >
                  Videos
                </TabsTrigger>
                <TabsTrigger
                  value="podcasts"
                  className="font-mono text-xs data-[state=active]:bg-gradient-to-r data-[state=active]:from-forest data-[state=active]:to-leafy/60 data-[state=active]:text-white"
                >
                  Podcasts
                </TabsTrigger>
                <TabsTrigger
                  value="shorts"
                  className="font-mono text-xs data-[state=active]:bg-gradient-to-r data-[state=active]:from-forest data-[state=active]:to-leafy/60 data-[state=active]:text-white"
                >
                  Shorts
                </TabsTrigger>
                <TabsTrigger
                  value="infographics"
                  className="font-mono text-xs data-[state=active]:bg-gradient-to-r data-[state=active]:from-forest data-[state=active]:to-leafy/60 data-[state=active]:text-white"
                >
                  Infographics
                </TabsTrigger>
              </TabsList>
            </Tabs>

            {/* Featured Media */}
            {(activeTab === "all" || activeTab === "videos") && (
              <div className="mb-12">
                <h2 className="font-sans text-2xl font-light text-black mb-6">Featured Video</h2>
                <div className="border border-charcoal/20 shadow-sm overflow-hidden">
                  <div className="relative aspect-video w-full">
                    <Image
                      src="/placeholder.svg?key=featured-video"
                      alt="Featured Video"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="h-16 w-16 rounded-full bg-forest/90 flex items-center justify-center">
                        <Play className="h-8 w-8 text-white" fill="white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <span className="font-mono text-xs text-leafy uppercase tracking-wider">ANALYSIS</span>
                      <span className="mx-2 text-charcoal/30">•</span>
                      <span className="font-mono text-xs text-charcoal/60">15:42</span>
                    </div>
                    <h3 className="font-sans text-2xl font-light text-black mb-2">
                      The Changing Landscape of Australian Politics: What's Next?
                    </h3>
                    <p className="font-mono text-sm text-charcoal/80 mb-4">
                      Our political editor breaks down the current political climate, recent policy shifts, and what
                      they mean for Australia's future both domestically and on the global stage.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="relative h-8 w-8 rounded-full overflow-hidden mr-2">
                          <Image src="/placeholder.svg?key=avatar-editor" alt="Editor" fill className="object-cover" />
                        </div>
                        <span className="font-mono text-xs text-charcoal/70">By Michael Chen</span>
                      </div>
                      <Button className="bg-gradient-to-r from-forest to-leafy/60 hover:from-forest hover:to-leafy/80 text-white font-mono text-xs">
                        WATCH NOW <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Media Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Videos */}
              {(activeTab === "all" || activeTab === "videos") && (
                <>
                  {[
                    {
                      type: "video",
                      title: "Economic Outlook: Post-Pandemic Recovery Strategies",
                      thumbnail: "/placeholder.svg?key=video1",
                      duration: "12:34",
                      date: "May 12, 2025",
                      category: "Economy",
                    },
                    {
                      type: "video",
                      title: "Climate Policy Debate: Expert Panel Discussion",
                      thumbnail: "/placeholder.svg?key=video2",
                      duration: "28:17",
                      date: "May 10, 2025",
                      category: "Environment",
                    },
                    {
                      type: "video",
                      title: "International Relations: Pacific Alliances Explained",
                      thumbnail: "/placeholder.svg?key=video3",
                      duration: "18:45",
                      date: "May 8, 2025",
                      category: "World",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="border border-charcoal/20 group hover:border-leafy/50 transition-colors shadow-sm"
                    >
                      <div className="relative h-48">
                        <Image
                          src={item.thumbnail || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="h-12 w-12 rounded-full bg-forest/90 flex items-center justify-center">
                            <Play className="h-6 w-6 text-white" fill="white" />
                          </div>
                        </div>
                        <div className="absolute top-0 left-0 bg-gradient-to-r from-forest to-leafy/40 px-3 py-1">
                          <span className="font-mono text-xs text-white">{item.category}</span>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded">
                          <span className="font-mono text-xs text-white">{item.duration}</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="font-sans text-xl font-light text-black group-hover:text-leafy transition-colors">
                          {item.title}
                        </h4>
                        <div className="mt-4 flex items-center text-charcoal/60">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span className="font-mono text-xs">{item.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}

              {/* Podcasts */}
              {(activeTab === "all" || activeTab === "podcasts") && (
                <>
                  {[
                    {
                      type: "podcast",
                      title: "The Weekly Debrief: Parliamentary Highlights",
                      thumbnail: "/placeholder.svg?key=podcast1",
                      duration: "45:12",
                      date: "May 14, 2025",
                      category: "Politics",
                    },
                    {
                      type: "podcast",
                      title: "Deep Dive: Understanding the Housing Crisis",
                      thumbnail: "/placeholder.svg?key=podcast2",
                      duration: "52:38",
                      date: "May 7, 2025",
                      category: "Society",
                    },
                  ].map((item, index) => (
                    <div
                      key={`podcast-${index}`}
                      className="border border-charcoal/20 group hover:border-leafy/50 transition-colors shadow-sm"
                    >
                      <div className="relative h-48">
                        <Image
                          src={item.thumbnail || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-0 left-0 bg-gradient-to-r from-forest to-leafy/40 px-3 py-1">
                          <span className="font-mono text-xs text-white">{item.category}</span>
                        </div>
                        <div className="absolute top-0 right-0 bg-black/70 px-2 py-1">
                          <span className="font-mono text-xs text-white">PODCAST</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="font-sans text-xl font-light text-black group-hover:text-leafy transition-colors">
                          {item.title}
                        </h4>
                        <div className="mt-4 flex justify-between items-center">
                          <div className="flex items-center text-charcoal/60">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span className="font-mono text-xs">{item.date}</span>
                          </div>
                          <div className="flex items-center text-charcoal/60">
                            <Clock className="h-3 w-3 mr-1" />
                            <span className="font-mono text-xs">{item.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}

              {/* Shorts */}
              {(activeTab === "all" || activeTab === "shorts") && (
                <>
                  {[
                    {
                      type: "short",
                      title: "60 Seconds: Today's Market Update",
                      thumbnail: "/placeholder.svg?key=short1",
                      duration: "0:58",
                      date: "Today",
                      category: "Economy",
                    },
                    {
                      type: "short",
                      title: "Quick Take: New Healthcare Initiative Explained",
                      thumbnail: "/placeholder.svg?key=short2",
                      duration: "1:24",
                      date: "Yesterday",
                      category: "Health",
                    },
                  ].map((item, index) => (
                    <div
                      key={`short-${index}`}
                      className="border border-charcoal/20 group hover:border-leafy/50 transition-colors shadow-sm"
                    >
                      <div className="relative h-48">
                        <Image
                          src={item.thumbnail || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="h-12 w-12 rounded-full bg-forest/90 flex items-center justify-center">
                            <Play className="h-6 w-6 text-white" fill="white" />
                          </div>
                        </div>
                        <div className="absolute top-0 left-0 bg-gradient-to-r from-forest to-leafy/40 px-3 py-1">
                          <span className="font-mono text-xs text-white">{item.category}</span>
                        </div>
                        <div className="absolute top-0 right-0 bg-black/70 px-2 py-1">
                          <span className="font-mono text-xs text-white">SHORT</span>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded">
                          <span className="font-mono text-xs text-white">{item.duration}</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="font-sans text-xl font-light text-black group-hover:text-leafy transition-colors">
                          {item.title}
                        </h4>
                        <div className="mt-4 flex items-center text-charcoal/60">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span className="font-mono text-xs">{item.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}

              {/* Infographics */}
              {(activeTab === "all" || activeTab === "infographics") && (
                <>
                  {[
                    {
                      type: "infographic",
                      title: "Budget Breakdown: Where Your Tax Dollars Go",
                      thumbnail: "/placeholder.svg?key=infographic1",
                      date: "May 5, 2025",
                      category: "Economy",
                    },
                    {
                      type: "infographic",
                      title: "Election Results: By the Numbers",
                      thumbnail: "/placeholder.svg?key=infographic2",
                      date: "May 1, 2025",
                      category: "Politics",
                    },
                  ].map((item, index) => (
                    <div
                      key={`infographic-${index}`}
                      className="border border-charcoal/20 group hover:border-leafy/50 transition-colors shadow-sm"
                    >
                      <div className="relative h-48">
                        <Image
                          src={item.thumbnail || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-0 left-0 bg-gradient-to-r from-forest to-leafy/40 px-3 py-1">
                          <span className="font-mono text-xs text-white">{item.category}</span>
                        </div>
                        <div className="absolute top-0 right-0 bg-black/70 px-2 py-1">
                          <span className="font-mono text-xs text-white">INFOGRAPHIC</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="font-sans text-xl font-light text-black group-hover:text-leafy transition-colors">
                          {item.title}
                        </h4>
                        <div className="mt-4 flex items-center text-charcoal/60">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span className="font-mono text-xs">{item.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>

            <div className="flex justify-center mt-12">
              <Button className="bg-gradient-to-r from-forest to-leafy/60 hover:from-forest hover:to-leafy/80 text-white font-mono text-xs">
                LOAD MORE <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
