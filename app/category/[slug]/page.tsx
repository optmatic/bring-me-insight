"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, ChevronRight, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

// Define types for our data
type CategoryArticle = {
  id: string
  title: string
  excerpt: string
  image: string
  category: string
  subcategory?: string
  author: string
  publishDate: string
  readTime: string
  featured?: boolean
  slug: string
}

type CategoryData = {
  slug: string
  title: string
  description: string
  subcategories: string[]
  featuredArticle?: CategoryArticle
  articles: CategoryArticle[]
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  // State for view mode (grid or list)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  // State for active subcategory filter
  const [activeFilter, setActiveFilter] = useState<string>("all")

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [params.slug])

  // This would normally fetch category data based on the slug
  // For demo purposes, we're using static content
  const category = {
    name: params.slug.charAt(0).toUpperCase() + params.slug.slice(1),
    description:
      "In-depth coverage of Australian politics, society, and culture, with a focus on the issues that matter most to Australians.",
    articles: [
      {
        title: "Australia's Climate Policy Faces New Challenges in Global Context",
        excerpt:
          "As international pressure mounts, Australia navigates complex terrain between economic interests and environmental commitments",
        category: "POLITICS",
        image: "/placeholder.svg?key=sit4r",
        readTime: "10 MIN READ",
        slug: "australias-climate-policy-faces-new-challenges",
        date: "May 14, 2025",
      },
      {
        title: "Indigenous Voice Proposal Sparks National Debate on Constitutional Recognition",
        excerpt:
          "The proposed Indigenous Voice to Parliament has ignited discussions across political and social spheres",
        category: "POLITICS",
        image: "/indigenous-voice-proposal.png",
        readTime: "8 MIN READ",
        slug: "indigenous-voice-proposal-sparks-debate",
        date: "May 12, 2025",
      },
      {
        title: "Electoral Reform Debate Intensifies as Next Federal Election Approaches",
        excerpt: "Calls for electoral system changes grow louder as parties prepare for the upcoming federal election",
        category: "POLITICS",
        image: "/electoral-reform-debate.png",
        readTime: "7 MIN READ",
        slug: "electoral-reform-debate-intensifies",
        date: "May 10, 2025",
      },
      {
        title: "Australian Parliament Debates New National Security Legislation",
        excerpt: "Proposed laws would expand intelligence agencies' powers while raising privacy concerns",
        category: "POLITICS",
        image: "/australian-parliament-debate.png",
        readTime: "9 MIN READ",
        slug: "australian-parliament-debates-security-legislation",
        date: "May 8, 2025",
      },
    ],
  }

  // Filter options
  const filters = ["All", "Latest", "Most Read", "Featured"]

  return (
    <div className="ds-bg-category">
      <main className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
        <div className="max-w-[1200px] mx-auto">
          <Link
            href="/"
            className="inline-flex items-center font-sans text-xs text-lime-500 hover:text-forest mb-6 transition-all duration-300 hover:translate-x-[-4px]"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            BACK TO HOME
          </Link>

          <div className="mb-12">
            <h1 className="font-heading text-5xl md:text-6xl font-semibold text-charcoal-darker mb-4 tracking-tight">
              {category.name.toUpperCase()}
            </h1>
            <p className="font-sans text-base text-charcoal/80 max-w-3xl">{category.description}</p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-charcoal/10 pb-4">
            {filters.map((filter, index) => (
              <button
                key={index}
                className={
                  index === 0
                    ? "topic-button"
                    : "font-sans text-xs text-charcoal/60 hover:text-lime-500 transition-all duration-300 px-4 py-2 rounded-full"
                }
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {category.articles.map((article, index) => (
              <div
                key={index}
                className="border border-charcoal/10 group hover:border-lime-500/50 transition-all duration-300 shadow-lg rounded-xl overflow-hidden transform hover:translate-y-[-5px] hover:shadow-xl"
              >
                <div className="relative h-48">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-charcoal-darker/20 mix-blend-overlay"></div>
                  <div className="absolute top-0 left-0 bg-gradient-to-r from-lime-300 to-lime-500 px-3 py-1 rounded-br-lg">
                    <span className="font-sans text-xs text-forest-dark font-medium">{article.category}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="p-4">
                  <Link href={`/article/${article.slug}`}>
                    <h2 className="font-heading text-xl font-semibold text-charcoal-darker group-hover:text-lime-500 transition-colors mb-2">
                      {article.title}
                    </h2>
                  </Link>
                  <p className="font-sans text-sm text-charcoal/70 mb-4 line-clamp-2">{article.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-sans text-xs text-charcoal/60 bg-charcoal/5 px-2 py-1 rounded-full border-b border-charcoal-darker/10">
                      {article.date}
                    </span>
                    <span className="font-sans text-xs text-charcoal/60 flex items-center">
                      <Clock className="h-3 w-3 mr-1" /> {article.readTime}
                    </span>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Link href={`/article/${article.slug}`}>
                      <span className="font-sans text-xs text-lime-500 font-medium hover:text-forest transition-all duration-300 hover:translate-x-1 flex items-center">
                        READ ARTICLE <ChevronRight className="ml-1 h-3 w-3" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full font-sans text-xs text-charcoal/60 hover:text-lime-500"
                disabled
              >
                Previous
              </Button>
              <Button
                size="sm"
                className="rounded-full font-sans text-xs bg-gradient-to-r from-lime-300 to-lime-500 hover:from-lime-400 hover:to-lime-600 text-forest-dark"
              >
                1
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full font-sans text-xs text-charcoal/60 hover:text-lime-500"
              >
                2
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full font-sans text-xs text-charcoal/60 hover:text-lime-500"
              >
                3
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full font-sans text-xs text-charcoal/60 hover:text-lime-500"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

// Helper function to get category data
function getCategoryData(slug: string): CategoryData {
  // This would normally fetch from an API or database
  // For demo purposes, we're using static content

  // Default category data
  const categoryData: CategoryData = {
    slug: slug,
    title: capitalizeFirstLetter(slug),
    description: "Comprehensive coverage and analysis of the most important stories.",
    subcategories: [],
    articles: [],
  }

  // Customize based on slug
  switch (slug) {
    case "australia":
      categoryData.title = "Australia"
      categoryData.description =
        "In-depth coverage of Australian politics, society, and culture, with a focus on the issues that matter most to Australians."
      categoryData.subcategories = [
        "Federal Politics",
        "State Politics",
        "Economy",
        "Environment",
        "Indigenous Affairs",
      ]
      categoryData.featuredArticle = {
        id: "aus-1",
        title: "Australia's Climate Policy Faces New Challenges in Global Context",
        excerpt:
          "As international pressure mounts, Australia navigates complex terrain between economic interests and environmental commitments.",
        image: "/australia-climate-policy.png",
        category: "Australia",
        subcategory: "Environment",
        author: "Sarah Johnson",
        publishDate: "May 14, 2025",
        readTime: "10 min read",
        featured: true,
        slug: "australia-climate-policy-challenges",
      }
      categoryData.articles = [
        {
          id: "aus-2",
          title: "Electoral Reform Bill Sparks Debate in Parliament",
          excerpt:
            "The proposed changes to voting procedures have drawn criticism from opposition parties and civil society groups.",
          image: "/australian-parliament-debate.png",
          category: "Australia",
          subcategory: "Federal Politics",
          author: "Michael Chen",
          publishDate: "May 13, 2025",
          readTime: "8 min read",
          slug: "electoral-reform-bill-debate",
        },
        {
          id: "aus-3",
          title: "Indigenous Voice Proposal Gains Momentum Across States",
          excerpt:
            "Support for constitutional recognition continues to grow as community consultations expand nationwide.",
          image: "/indigenous-voice-proposal.png",
          category: "Australia",
          subcategory: "Indigenous Affairs",
          author: "Emma Williams",
          publishDate: "May 12, 2025",
          readTime: "12 min read",
          slug: "indigenous-voice-proposal-momentum",
        },
        {
          id: "aus-4",
          title: "Reserve Bank Signals Shift in Interest Rate Strategy",
          excerpt:
            "Economists predict a new approach to monetary policy as inflation concerns persist in the housing market.",
          image: "/reserve-bank-australia.png",
          category: "Australia",
          subcategory: "Economy",
          author: "David Thompson",
          publishDate: "May 11, 2025",
          readTime: "7 min read",
          slug: "reserve-bank-interest-rate-strategy",
        },
        {
          id: "aus-5",
          title: "Renewable Energy Projects Accelerate in Rural Communities",
          excerpt: "Solar and wind initiatives are creating new economic opportunities in regional Australia.",
          image: "/renewable-energy-rural-australia.png",
          category: "Australia",
          subcategory: "Environment",
          author: "Jessica Lee",
          publishDate: "May 10, 2025",
          readTime: "9 min read",
          slug: "renewable-energy-rural-communities",
        },
        {
          id: "aus-6",
          title: "State Governments Clash Over Water Management Plan",
          excerpt: "Drought concerns have reignited tensions over the allocation of Murray-Darling Basin resources.",
          image: "/murray-darling-basin.png",
          category: "Australia",
          subcategory: "State Politics",
          author: "Robert Wilson",
          publishDate: "May 9, 2025",
          readTime: "11 min read",
          slug: "state-governments-water-management",
        },
        {
          id: "aus-7",
          title: "Housing Affordability Crisis Deepens in Major Cities",
          excerpt: "New data reveals the growing gap between income growth and property prices in metropolitan areas.",
          image: "/housing-affordability-australia.png",
          category: "Australia",
          subcategory: "Economy",
          author: "Sophia Martinez",
          publishDate: "May 8, 2025",
          readTime: "10 min read",
          slug: "housing-affordability-crisis-cities",
        },
        {
          id: "aus-8",
          title: "Indigenous Language Preservation Program Launches Nationwide",
          excerpt: "Federal funding aims to support community-led efforts to document and teach endangered languages.",
          image: "/placeholder.svg?height=400&width=600&query=indigenous language preservation",
          category: "Australia",
          subcategory: "Indigenous Affairs",
          author: "Thomas Brown",
          publishDate: "May 7, 2025",
          readTime: "8 min read",
          slug: "indigenous-language-preservation-program",
        },
        {
          id: "aus-9",
          title: "Infrastructure Investment Plan Targets Regional Development",
          excerpt:
            "The ten-year strategy focuses on improving connectivity between rural communities and urban centers.",
          image: "/placeholder.svg?height=400&width=600&query=regional infrastructure australia",
          category: "Australia",
          subcategory: "Federal Politics",
          author: "Olivia Johnson",
          publishDate: "May 6, 2025",
          readTime: "9 min read",
          slug: "infrastructure-investment-regional-development",
        },
      ]
      break

    case "world":
      categoryData.title = "World"
      categoryData.description =
        "Global news and analysis covering international politics, conflicts, diplomacy, and major world events."
      categoryData.subcategories = ["Asia-Pacific", "Europe", "Americas", "Middle East", "Africa"]
      categoryData.featuredArticle = {
        id: "world-1",
        title: "Pacific Nations Summit Addresses Regional Security Concerns",
        excerpt: "Island nations call for stronger international cooperation on climate change and maritime security.",
        image: "/placeholder.svg?height=400&width=600&query=pacific nations summit",
        category: "World",
        subcategory: "Asia-Pacific",
        author: "James Wilson",
        publishDate: "May 13, 2025",
        readTime: "11 min read",
        featured: true,
        slug: "pacific-nations-summit-security",
      }
      categoryData.articles = [
        {
          id: "world-2",
          title: "European Union Unveils New Digital Regulation Framework",
          excerpt: "The comprehensive legislation aims to address data privacy concerns and platform accountability.",
          image: "/placeholder.svg?height=400&width=600&query=eu digital regulation",
          category: "World",
          subcategory: "Europe",
          author: "Anna Schmidt",
          publishDate: "May 12, 2025",
          readTime: "9 min read",
          slug: "eu-digital-regulation-framework",
        },
        {
          id: "world-3",
          title: "Latin American Trade Alliance Expands Membership",
          excerpt: "The economic bloc welcomes two new countries as regional integration efforts strengthen.",
          image: "/placeholder.svg?height=400&width=600&query=latin american trade alliance",
          category: "World",
          subcategory: "Americas",
          author: "Carlos Mendez",
          publishDate: "May 11, 2025",
          readTime: "8 min read",
          slug: "latin-american-trade-alliance-expands",
        },
        {
          id: "world-4",
          title: "Middle East Peace Talks Resume After Year-Long Hiatus",
          excerpt: "Diplomatic efforts intensify as international mediators push for breakthrough in negotiations.",
          image: "/placeholder.svg?height=400&width=600&query=middle east peace talks",
          category: "World",
          subcategory: "Middle East",
          author: "Fatima Al-Hassan",
          publishDate: "May 10, 2025",
          readTime: "12 min read",
          slug: "middle-east-peace-talks-resume",
        },
        {
          id: "world-5",
          title: "African Union Launches Continental Free Trade Implementation",
          excerpt:
            "The historic agreement begins its operational phase, promising economic transformation across the continent.",
          image: "/placeholder.svg?height=400&width=600&query=african union free trade",
          category: "World",
          subcategory: "Africa",
          author: "Kwame Osei",
          publishDate: "May 9, 2025",
          readTime: "10 min read",
          slug: "african-union-free-trade-implementation",
        },
        {
          id: "world-6",
          title: "Southeast Asian Nations Address South China Sea Tensions",
          excerpt: "Regional forum calls for adherence to international law amid escalating maritime disputes.",
          image: "/placeholder.svg?height=400&width=600&query=south china sea tensions",
          category: "World",
          subcategory: "Asia-Pacific",
          author: "Lin Chen",
          publishDate: "May 8, 2025",
          readTime: "11 min read",
          slug: "southeast-asia-south-china-sea-tensions",
        },
      ]
      break

    case "politics":
      categoryData.title = "Politics"
      categoryData.description =
        "Comprehensive coverage of political developments, policy debates, and governance issues in Australia and beyond."
      categoryData.subcategories = ["Federal", "State", "International Relations", "Policy", "Elections"]
      // Add similar data structure as above
      break

    default:
    // Keep default values for other categories
  }

  return categoryData
}

function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
