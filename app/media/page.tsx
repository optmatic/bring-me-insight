"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Play,
  Clock,
  Calendar,
  ExternalLink,
  Search,
  Filter,
  Headphones,
  BarChart2,
  ImageIcon,
  Video,
  Info,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"
import { componentStyles } from "@/lib/styles"

export default function MediaPage() {
  // State for active media type
  const [activeTab, setActiveTab] = useState<string>("all")
  const [isPlaying, setIsPlaying] = useState<number | null>(null)
  const [showSearch, setShowSearch] = useState(false)
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({})

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Handle video play/pause
  const togglePlay = (id: number) => {
    if (isPlaying === id) {
      videoRefs.current[`video-${id}`]?.pause()
      setIsPlaying(null)
    } else {
      // Pause any currently playing video
      if (isPlaying !== null && videoRefs.current[`video-${isPlaying}`]) {
        videoRefs.current[`video-${isPlaying}`]?.pause()
      }

      // Play the new video
      videoRefs.current[`video-${id}`]?.play()
      setIsPlaying(id)
    }
  }

  // Media categories with icons
  const mediaCategories = [
    { id: "all", name: "All", icon: <Filter className="h-4 w-4" /> },
    { id: "videos", name: "Videos", icon: <Video className="h-4 w-4" /> },
    { id: "podcasts", name: "Podcasts", icon: <Headphones className="h-4 w-4" /> },
    { id: "shorts", name: "Shorts", icon: <Play className="h-4 w-4" /> },
    { id: "infographics", name: "Infographics", icon: <BarChart2 className="h-4 w-4" /> },
    { id: "photos", name: "Photos", icon: <ImageIcon className="h-4 w-4" /> },
  ]

  // Topics/Categories (replacing stories)
  const topics = [
    { id: 1, title: "Climate", image: "/placeholder.svg?key=climate-story" },
    { id: 2, title: "Politics", image: "/placeholder.svg?key=politics-story" },
    { id: 3, title: "Economy", image: "/placeholder.svg?key=economy-story" },
    { id: 4, title: "Tech", image: "/placeholder.svg?key=tech-story" },
    { id: 5, title: "Health", image: "/placeholder.svg?key=health-story" },
    { id: 6, title: "Culture", image: "/placeholder.svg?key=culture-story" },
    { id: 7, title: "Sport", image: "/placeholder.svg?key=sport-story" },
  ]

  // Featured videos data (external videos)
  const featuredVideos = [
    {
      id: 1,
      title: "The Changing Landscape of Australian Politics: What's Next?",
      thumbnail: "/placeholder.svg?key=featured-video",
      duration: "15:42",
      views: "24.5K",
      date: "May 15, 2025",
      category: "Politics",
      author: "Michael Chen",
      authorTitle: "Political Correspondent",
      source: "Cloudflare Stream",
      externalUrl: "https://example.com/video1",
    },
    {
      id: 2,
      title: "Economic Outlook: Post-Pandemic Recovery Strategies",
      thumbnail: "/placeholder.svg?key=video1",
      duration: "12:34",
      views: "18.2K",
      date: "May 12, 2025",
      category: "Economy",
      author: "Sarah Johnson",
      authorTitle: "Economics Editor",
      source: "Cloudflare Stream",
      externalUrl: "https://example.com/video2",
    },
    {
      id: 3,
      title: "Climate Policy Debate: Expert Panel Discussion",
      thumbnail: "/placeholder.svg?key=video2",
      duration: "28:17",
      views: "32.1K",
      date: "May 10, 2025",
      category: "Environment",
      author: "David Thompson",
      authorTitle: "Environmental Correspondent",
      source: "Cloudflare Stream",
      externalUrl: "https://example.com/video3",
    },
  ]

  // Shorts data (brief video clips)
  const shorts = [
    {
      id: 1,
      title: "60 Seconds: Today's Market Update",
      thumbnail: "/placeholder.svg?key=short1",
      duration: "0:58",
      views: "45.2K",
      author: "Emma Williams",
      authorTitle: "Finance Reporter",
      category: "Economy",
      source: "Cloudflare Stream",
      externalUrl: "https://example.com/short1",
    },
    {
      id: 2,
      title: "Quick Take: New Healthcare Initiative Explained",
      thumbnail: "/placeholder.svg?key=short2",
      duration: "1:24",
      views: "38.7K",
      author: "Robert Wilson",
      authorTitle: "Health Correspondent",
      category: "Health",
      source: "Cloudflare Stream",
      externalUrl: "https://example.com/short2",
    },
    {
      id: 3,
      title: "Breaking: Parliament Passes New Climate Bill",
      thumbnail: "/placeholder.svg?key=short3",
      duration: "0:47",
      views: "52.3K",
      author: "Jessica Lee",
      authorTitle: "Political Reporter",
      category: "Politics",
      source: "Cloudflare Stream",
      externalUrl: "https://example.com/short3",
    },
  ]

  // Grid content based on active tab
  const gridContent = [
    {
      type: "video",
      title: "International Relations: Pacific Alliances Explained",
      thumbnail: "/placeholder.svg?key=video3",
      duration: "18:45",
      date: "May 8, 2025",
      category: "World",
      views: "15.8K",
      source: "Cloudflare Stream",
      externalUrl: "https://example.com/video4",
    },
    {
      type: "podcast",
      title: "The Weekly Debrief: Parliamentary Highlights",
      thumbnail: "/placeholder.svg?key=podcast1",
      duration: "45:12",
      date: "May 14, 2025",
      category: "Politics",
      views: "12.3K",
      source: "Spotify",
      externalUrl: "https://example.com/podcast1",
    },
    {
      type: "infographic",
      title: "Budget Breakdown: Where Your Tax Dollars Go",
      thumbnail: "/placeholder.svg?key=infographic1",
      date: "May 5, 2025",
      category: "Economy",
      views: "28.7K",
      source: "Internal",
      externalUrl: "/infographics/budget-breakdown",
    },
    {
      type: "podcast",
      title: "Deep Dive: Understanding the Housing Crisis",
      thumbnail: "/placeholder.svg?key=podcast2",
      duration: "52:38",
      date: "May 7, 2025",
      category: "Society",
      views: "19.5K",
      source: "Apple Podcasts",
      externalUrl: "https://example.com/podcast2",
    },
    {
      type: "infographic",
      title: "Election Results: By the Numbers",
      thumbnail: "/placeholder.svg?key=infographic2",
      date: "May 1, 2025",
      category: "Politics",
      views: "34.2K",
      source: "Internal",
      externalUrl: "/infographics/election-results",
    },
    {
      type: "video",
      title: "Renewable Energy: Australia's Solar Revolution",
      thumbnail: "/placeholder.svg?key=video4",
      duration: "22:15",
      date: "May 3, 2025",
      category: "Environment",
      views: "21.6K",
      source: "YouTube",
      externalUrl: "https://example.com/video5",
    },
    {
      type: "photo",
      title: "Australia's Changing Landscapes: A Visual Journey",
      thumbnail: "/placeholder.svg?key=photo1",
      date: "May 2, 2025",
      category: "Environment",
      views: "31.4K",
      source: "Gallery",
      externalUrl: "/galleries/changing-landscapes",
    },
    {
      type: "photo",
      title: "Urban Development: Cities of Tomorrow",
      thumbnail: "/placeholder.svg?key=photo2",
      date: "April 28, 2025",
      category: "Society",
      views: "18.9K",
      source: "Gallery",
      externalUrl: "/galleries/urban-development",
    },
  ]

  return (
    <div className="bg-gradient-to-br from-offwhite to-white">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-forest/5 to-leafy/5 backdrop-blur-sm border-b border-charcoal/10">
        <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="font-heading text-3xl md:text-4xl font-bold text-charcoal-darker mb-2 uppercase tracking-tight">
                  Media Center
                </h1>
                <p className="font-sans text-sm text-charcoal/80 max-w-xl">
                  Explore our curated collection of videos, podcasts, and visual stories.
                </p>
              </div>
              <div className="flex items-center gap-2">
                {showSearch ? (
                  <div className="relative animate-fadeIn">
                    <Input
                      type="search"
                      placeholder="Search media..."
                      className="w-full md:w-64 font-sans text-xs pr-8 border-charcoal/10 focus-visible:ring-leafy rounded-full"
                      autoFocus
                    />
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-charcoal/50" />
                  </div>
                ) : (
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-charcoal/10"
                    onClick={() => setShowSearch(true)}
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics/Categories Section (Instagram-style) */}
      <section className="container mx-auto mt-6 px-4 md:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex overflow-x-auto scrollbar-hide gap-4 pb-4">
            {topics.map((topic) => (
              <div key={topic.id} className="flex flex-col items-center flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-forest to-leafy p-[2px] mb-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white p-[2px]">
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image src={topic.image || "/placeholder.svg"} alt={topic.title} fill className="object-cover" />
                    </div>
                  </div>
                </div>
                <span className="font-sans text-xs text-charcoal/80">{topic.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Type Tabs */}
      <section className="container mx-auto mt-6 px-4 md:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex overflow-x-auto scrollbar-hide gap-2 pb-2">
            {mediaCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                  activeTab === category.id
                    ? "bg-gradient-to-r from-lime-300 to-lime-500 text-forest-dark font-medium shadow-sm border border-lime-400/20 hover:shadow-md"
                    : "bg-white border border-charcoal/10 text-charcoal hover:border-leafy/30"
                }`}
              >
                {category.icon}
                <span className="font-sans text-xs whitespace-nowrap">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Videos (Horizontal Scroll) */}
      {(activeTab === "all" || activeTab === "videos") && (
        <section className="container mx-auto mt-8 px-4 md:px-6 lg:px-8">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-heading text-2xl font-bold text-charcoal-darker mb-4 uppercase tracking-tight">
              Featured Videos
            </h2>

            <div className="flex overflow-x-auto scrollbar-hide gap-6 pb-6">
              {featuredVideos.map((video) => (
                <div
                  key={video.id}
                  className={`${componentStyles.card.DEFAULT} ${componentStyles.card.hover} flex-shrink-0 w-full md:w-[400px]`}
                >
                  <div className="relative aspect-video w-full overflow-hidden rounded-t-xl">
                    <Image
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <a
                      href={video.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer group"
                    >
                      <div className="h-16 w-16 rounded-full bg-forest/90 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                        <Play className="h-8 w-8 text-white" fill="white" />
                      </div>
                    </a>
                    <div className="absolute top-0 left-0 bg-gradient-to-r from-lime-300 to-lime-500 px-3 py-1 rounded-br-lg">
                      <span className="font-sans text-xs text-forest font-medium">{video.category}</span>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded-md">
                      <span className="font-sans text-xs text-white flex items-center">
                        <Clock className="h-3 w-3 mr-1" /> {video.duration}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading text-xl font-bold text-charcoal-darker group-hover:text-forest transition-colors line-clamp-2 uppercase tracking-tight">
                      {video.title}
                    </h3>
                    <div className="flex items-center mt-3">
                      <div className="flex flex-col">
                        <span className="font-sans text-xs text-charcoal/70">{video.author}</span>
                        <span className="font-sans text-xs text-charcoal/50">{video.authorTitle}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-4 text-charcoal/60">
                        <span className="font-sans text-xs flex items-center">
                          <Calendar className="h-3 w-3 mr-1" /> {video.date}
                        </span>
                        <span className="font-sans text-xs">{video.views} views</span>
                      </div>
                      <a
                        href={video.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-leafy hover:text-forest transition-colors font-sans text-xs"
                      >
                        Watch <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* TikTok-style Shorts Section */}
      {(activeTab === "all" || activeTab === "shorts") && (
        <section className="container mx-auto mt-8 px-4 md:px-6 lg:px-8">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-heading text-2xl font-bold text-charcoal-darker mb-4 uppercase tracking-tight">
              Shorts
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {shorts.map((short) => (
                <div
                  key={short.id}
                  className={`${componentStyles.card.DEFAULT} ${componentStyles.card.hover} overflow-hidden`}
                >
                  <div className="relative h-[500px] w-full">
                    {/* This would be a video in a real implementation */}
                    <Image
                      src={short.thumbnail || "/placeholder.svg"}
                      alt={short.title}
                      fill
                      className="object-cover"
                    />

                    {/* Play button overlay */}
                    <a
                      href={short.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/30"
                    >
                      <div className="h-16 w-16 rounded-full bg-forest/70 flex items-center justify-center">
                        <Play className="h-8 w-8 text-white" fill="white" />
                      </div>
                    </a>

                    {/* Category tag */}
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-lime-300 to-lime-500 px-3 py-1 rounded-full">
                      <span className="font-sans text-xs text-forest font-medium">{short.category}</span>
                    </div>

                    {/* Bottom info overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <h3 className="font-heading text-lg font-bold text-white mb-2 uppercase tracking-tight">
                        {short.title}
                      </h3>
                      <div className="flex items-center mb-3">
                        <div className="flex flex-col">
                          <span className="font-sans text-xs text-white/80">{short.author}</span>
                          <span className="font-sans text-xs text-white/60">{short.authorTitle}</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-sans text-xs text-white/70">{short.views} views</span>
                        <a
                          href={short.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-white hover:text-leafy transition-colors font-sans text-xs"
                        >
                          Watch <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Instagram-style Grid */}
      <section className="container mx-auto mt-8 mb-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-heading text-2xl font-bold text-charcoal-darker mb-4 uppercase tracking-tight">
            Explore
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {gridContent
              .filter((item) => activeTab === "all" || item.type === activeTab)
              .map((item, index) => (
                <a
                  key={index}
                  href={item.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${componentStyles.card.DEFAULT} ${componentStyles.card.hover} overflow-hidden aspect-square cursor-pointer group`}
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={item.thumbnail || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="text-white text-center p-4">
                        <h3 className="font-heading text-sm font-bold mb-2 line-clamp-2 uppercase tracking-tight">
                          {item.title}
                        </h3>
                        <div className="flex justify-center gap-4">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span className="font-sans text-xs">{item.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Info className="h-4 w-4 mr-1" />
                            <span className="font-sans text-xs">{item.source}</span>
                          </div>
                        </div>
                      </div>

                      {/* Type indicator */}
                      <div className="absolute top-2 right-2 bg-black/70 rounded-full h-8 w-8 flex items-center justify-center">
                        {item.type === "video" && <Video className="h-4 w-4 text-white" />}
                        {item.type === "podcast" && <Headphones className="h-4 w-4 text-white" />}
                        {item.type === "infographic" && <BarChart2 className="h-4 w-4 text-white" />}
                        {item.type === "photo" && <ImageIcon className="h-4 w-4 text-white" />}
                      </div>

                      {/* Category tag */}
                      <div className="absolute bottom-2 left-2 bg-gradient-to-r from-forest/90 to-leafy/70 px-2 py-0.5 rounded-md">
                        <span className="font-sans text-[10px] text-white">{item.category}</span>
                      </div>

                      {/* Duration (if applicable) */}
                      {item.duration && (
                        <div className="absolute bottom-2 right-2 bg-black/70 px-1.5 py-0.5 rounded-md">
                          <span className="font-sans text-[10px] text-white flex items-center">
                            <Clock className="h-2 w-2 mr-0.5" /> {item.duration}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </a>
              ))}
          </div>

          {/* Load More Button */}
          <div className="flex justify-center mt-8">
            <Button className="bg-gradient-to-r from-lime-300 to-lime-500 hover:from-lime-400 hover:to-lime-600 text-forest-dark font-medium font-sans text-xs rounded-full transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm border border-lime-400/20 hover:shadow-md">
              LOAD MORE <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
