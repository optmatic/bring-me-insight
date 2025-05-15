"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChevronRight,
  Grid3X3,
  List,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Define types for our data
type CategoryArticle = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  subcategory?: string;
  author: string;
  publishDate: string;
  readTime: string;
  featured?: boolean;
  slug: string;
};

type CategoryData = {
  slug: string;
  title: string;
  description: string;
  subcategories: string[];
  featuredArticle?: CategoryArticle;
  articles: CategoryArticle[];
};

export default function CategoryPage({ params }: { params: { slug: string } }) {
  // State for view mode (grid or list)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // State for active subcategory filter
  const [activeFilter, setActiveFilter] = useState<string>("all");

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.slug]);

  // This would normally fetch the category data based on the slug
  // For demo purposes, we're using static content
  const categoryData: CategoryData = getCategoryData(params.slug);

  // Filter articles based on active filter
  const filteredArticles =
    activeFilter === "all"
      ? categoryData.articles
      : categoryData.articles.filter(
          (article) => article.subcategory === activeFilter
        );

  return (
    <div className="min-h-screen bg-offwhite flex flex-col">
      <main className="flex-1">
        {/* Category Header */}
        <section className="bg-forest/5 border-b border-charcoal/10">
          <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
            <div className="max-w-[1200px] mx-auto">
              <div className="max-w-2xl">
                <h1 className="font-sans text-4xl md:text-5xl font-light text-black mb-4 capitalize">
                  {categoryData.title}
                </h1>
                <p className="font-mono text-sm text-charcoal/80">
                  {categoryData.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {categoryData.featuredArticle && (
          <section className="container mx-auto mt-8 px-4 md:px-6 lg:px-8">
            <div className="max-w-[1200px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border border-charcoal/20 p-4 md:p-8 shadow-sm">
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <span className="font-mono text-xs text-leafy uppercase tracking-wider mb-2">
                    FEATURED STORY
                  </span>
                  <Link href={`/article/${categoryData.featuredArticle.slug}`}>
                    <h2 className="font-sans text-3xl md:text-4xl font-light text-black mb-4 leading-tight">
                      {categoryData.featuredArticle.title}
                    </h2>
                  </Link>
                  <p className="font-mono text-sm text-charcoal/80 mb-6">
                    {categoryData.featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center">
                    <Link
                      href={`/article/${categoryData.featuredArticle.slug}`}
                    >
                      <Button className="bg-gradient-to-r from-[#328E6E] via-[#67AE6E] via-[#90C67C] to-[#E1EEBC] hover:from-[#328E6E] hover:via-[#67AE6E] hover:via-[#90C67C] hover:to-[#E1EEBC] text-black font-mono text-xs">
                        READ FEATURE <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <span className="ml-4 font-mono text-xs text-charcoal/60">
                      {categoryData.featuredArticle.readTime}
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-5 relative min-h-[300px] md:min-h-[400px]">
                  <Image
                    src={
                      categoryData.featuredArticle.image || "/placeholder.svg"
                    }
                    alt={categoryData.featuredArticle.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Category Controls */}
        <section className="container mx-auto mt-8 px-4 md:px-6 lg:px-8">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              {/* Subcategory Tabs */}
              <Tabs defaultValue="all" className="w-full md:w-auto">
                <TabsList className="bg-offwhite border border-charcoal/20 p-1 h-auto flex flex-nowrap overflow-x-auto scrollbar-hide">
                  <TabsTrigger
                    value="all"
                    className="font-mono text-xs data-[state=active]:bg-gradient-to-r data-[state=active]:from-forest data-[state=active]:to-leafy/60 data-[state=active]:text-white"
                    onClick={() => setActiveFilter("all")}
                  >
                    All
                  </TabsTrigger>
                  {categoryData.subcategories.map((subcategory) => (
                    <TabsTrigger
                      key={subcategory}
                      value={subcategory}
                      className="font-mono text-xs whitespace-nowrap data-[state=active]:bg-gradient-to-r data-[state=active]:from-forest data-[state=active]:to-leafy/60 data-[state=active]:text-white"
                      onClick={() => setActiveFilter(subcategory)}
                    >
                      {subcategory}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>

              {/* View Controls */}
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-charcoal/50" />
                  <input
                    type="search"
                    placeholder="Search articles..."
                    className="pl-8 pr-4 py-2 w-full md:w-64 font-mono text-xs border border-charcoal/20 focus-visible:ring-leafy focus-visible:outline-none focus-visible:ring-1"
                  />
                </div>
                <div className="flex border border-charcoal/20">
                  <button
                    className={`p-2 ${
                      viewMode === "grid" ? "bg-forest/10" : "bg-transparent"
                    }`}
                    onClick={() => setViewMode("grid")}
                    aria-label="Grid view"
                  >
                    <Grid3X3 className="h-4 w-4 text-charcoal/70" />
                  </button>
                  <button
                    className={`p-2 ${
                      viewMode === "list" ? "bg-forest/10" : "bg-transparent"
                    }`}
                    onClick={() => setViewMode("list")}
                    aria-label="List view"
                  >
                    <List className="h-4 w-4 text-charcoal/70" />
                  </button>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="font-mono text-xs border-charcoal/20"
                >
                  <SlidersHorizontal className="h-3 w-3 mr-2" /> Sort
                </Button>
              </div>
            </div>

            {/* Articles Grid/List */}
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article) => (
                  <div
                    key={article.id}
                    className="border border-charcoal/20 group hover:border-leafy/50 transition-colors shadow-sm"
                  >
                    <div className="relative h-48">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-0 left-0 bg-gradient-to-r from-[#328E6E] via-[#67AE6E] via-[#90C67C] to-[#E1EEBC]/40 px-3 py-1 text-black">
                        <Link
                          href={`/category/${article.category.toLowerCase()}?subcategory=${article.subcategory
                            ?.toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          className="text-white hover:text-white/90"
                        >
                          <span className="font-mono text-xs">
                            {article.subcategory || article.category}
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="p-4">
                      <Link href={`/article/${article.slug}`}>
                        <h3 className="font-sans text-xl font-light text-black group-hover:text-leafy transition-colors">
                          {article.title}
                        </h3>
                      </Link>
                      <p className="font-mono text-xs text-charcoal/80 mt-2 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="font-mono text-xs text-charcoal/60">
                          By {article.author}
                        </span>
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
            ) : (
              <div className="space-y-6">
                {filteredArticles.map((article) => (
                  <div
                    key={article.id}
                    className="border border-charcoal/20 group hover:border-leafy/50 transition-colors shadow-sm p-4 md:p-6"
                  >
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="relative h-48 md:h-auto md:w-1/4 shrink-0">
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-0 left-0 bg-gradient-to-r from-[#328E6E] via-[#67AE6E] via-[#90C67C] to-[#E1EEBC]/40 px-3 py-1 text-black">
                          <Link
                            href={`/category/${article.category.toLowerCase()}?subcategory=${article.subcategory
                              ?.toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="text-white hover:text-white/90"
                          >
                            <span className="font-mono text-xs">
                              {article.subcategory || article.category}
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className="flex-1">
                        <Link href={`/article/${article.slug}`}>
                          <h3 className="font-sans text-2xl font-light text-black group-hover:text-leafy transition-colors">
                            {article.title}
                          </h3>
                        </Link>
                        <p className="font-mono text-sm text-charcoal/80 mt-2">
                          {article.excerpt}
                        </p>
                        <div className="mt-4 flex flex-wrap justify-between items-center gap-2">
                          <div className="flex items-center gap-4">
                            <span className="font-mono text-xs text-charcoal/60">
                              By {article.author}
                            </span>
                            <span className="font-mono text-xs text-charcoal/60">
                              {article.publishDate}
                            </span>
                            <span className="font-mono text-xs text-charcoal/60">
                              {article.readTime}
                            </span>
                          </div>
                          <Link href={`/article/${article.slug}`}>
                            <Button
                              variant="outline"
                              size="sm"
                              className="font-mono text-xs border-charcoal/20 text-forest hover:text-leafy hover:border-leafy"
                            >
                              Read Article{" "}
                              <ChevronRight className="ml-1 h-3 w-3" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="font-mono text-xs border-charcoal/20"
                  disabled
                >
                  Previous
                </Button>
                {[1, 2, 3, 4, 5].map((page) => (
                  <Button
                    key={page}
                    variant={page === 1 ? "default" : "outline"}
                    size="sm"
                    className={`font-mono text-xs ${
                      page === 1
                        ? "bg-gradient-to-r from-forest to-leafy/60 hover:from-forest hover:to-leafy/80"
                        : "border-charcoal/20"
                    }`}
                  >
                    {page}
                  </Button>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  className="font-mono text-xs border-charcoal/20"
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup - Reused from homepage */}
        <section className="container mx-auto mt-16 mb-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-[1200px] mx-auto">
            <div className="border border-charcoal/20 p-8 bg-forest/5 shadow-sm">
              <div className="max-w-2xl mx-auto text-center">
                <h3 className="font-sans text-2xl font-light text-black mb-2">
                  Stay Informed
                </h3>
                <p className="font-mono text-sm text-charcoal/80 mb-6">
                  Subscribe to our weekly newsletter for in-depth analysis and
                  exclusive content.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="px-3 py-2 border border-charcoal/20 font-mono text-xs w-full focus:outline-none focus:ring-2 focus:ring-leafy"
                  />
                  <Button className="bg-gradient-to-r from-[#328E6E] via-[#67AE6E] via-[#90C67C] to-[#E1EEBC] hover:from-[#328E6E] hover:via-[#67AE6E] hover:via-[#90C67C] hover:to-[#E1EEBC] text-black font-mono text-xs">
                    SUBSCRIBE
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

// Helper function to get category data
function getCategoryData(slug: string): CategoryData {
  // This would normally fetch from an API or database
  // For demo purposes, we're using static content

  // Default category data
  const categoryData: CategoryData = {
    slug: slug,
    title: capitalizeFirstLetter(slug),
    description:
      "Comprehensive coverage and analysis of the most important stories.",
    subcategories: [],
    articles: [],
  };

  // Customize based on slug
  switch (slug) {
    case "australia":
      categoryData.title = "Australia";
      categoryData.description =
        "In-depth coverage of Australian politics, society, and culture, with a focus on the issues that matter most to Australians.";
      categoryData.subcategories = [
        "Federal Politics",
        "State Politics",
        "Economy",
        "Environment",
        "Indigenous Affairs",
      ];
      categoryData.featuredArticle = {
        id: "aus-1",
        title:
          "Australia's Climate Policy Faces New Challenges in Global Context",
        excerpt:
          "As international pressure mounts, Australia navigates complex terrain between economic interests and environmental commitments.",
        image: "/placeholder.svg?key=sit4r",
        category: "Australia",
        subcategory: "Environment",
        author: "Sarah Johnson",
        publishDate: "May 14, 2025",
        readTime: "10 min read",
        featured: true,
        slug: "australia-climate-policy-challenges",
      };
      categoryData.articles = [
        {
          id: "aus-2",
          title: "Electoral Reform Bill Sparks Debate in Parliament",
          excerpt:
            "The proposed changes to voting procedures have drawn criticism from opposition parties and civil society groups.",
          image: "/placeholder.svg?key=pxylr",
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
          image: "/placeholder.svg?key=6gjpx",
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
          image: "/placeholder.svg?key=4gvoa",
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
          excerpt:
            "Solar and wind initiatives are creating new economic opportunities in regional Australia.",
          image: "/placeholder.svg?key=dtor6",
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
          excerpt:
            "Drought concerns have reignited tensions over the allocation of Murray-Darling Basin resources.",
          image: "/placeholder.svg?key=71rnp",
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
          excerpt:
            "New data reveals the growing gap between income growth and property prices in metropolitan areas.",
          image: "/placeholder.svg?key=ujcfk",
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
          excerpt:
            "Federal funding aims to support community-led efforts to document and teach endangered languages.",
          image: "/placeholder.svg?key=81hrg",
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
          image: "/placeholder.svg?key=m1c5n",
          category: "Australia",
          subcategory: "Federal Politics",
          author: "Olivia Johnson",
          publishDate: "May 6, 2025",
          readTime: "9 min read",
          slug: "infrastructure-investment-regional-development",
        },
      ];
      break;

    case "world":
      categoryData.title = "World";
      categoryData.description =
        "Global news and analysis covering international politics, conflicts, diplomacy, and major world events.";
      categoryData.subcategories = [
        "Asia-Pacific",
        "Europe",
        "Americas",
        "Middle East",
        "Africa",
      ];
      categoryData.featuredArticle = {
        id: "world-1",
        title: "Pacific Nations Summit Addresses Regional Security Concerns",
        excerpt:
          "Island nations call for stronger international cooperation on climate change and maritime security.",
        image: "/placeholder.svg?key=m1c5n",
        category: "World",
        subcategory: "Asia-Pacific",
        author: "James Wilson",
        publishDate: "May 13, 2025",
        readTime: "11 min read",
        featured: true,
        slug: "pacific-nations-summit-security",
      };
      categoryData.articles = [
        {
          id: "world-2",
          title: "European Union Unveils New Digital Regulation Framework",
          excerpt:
            "The comprehensive legislation aims to address data privacy concerns and platform accountability.",
          image: "/placeholder.svg?key=pxylr",
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
          excerpt:
            "The economic bloc welcomes two new countries as regional integration efforts strengthen.",
          image: "/placeholder.svg?key=6gjpx",
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
          excerpt:
            "Diplomatic efforts intensify as international mediators push for breakthrough in negotiations.",
          image: "/placeholder.svg?key=4gvoa",
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
          image: "/placeholder.svg?key=dtor6",
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
          excerpt:
            "Regional forum calls for adherence to international law amid escalating maritime disputes.",
          image: "/placeholder.svg?key=71rnp",
          category: "World",
          subcategory: "Asia-Pacific",
          author: "Lin Chen",
          publishDate: "May 8, 2025",
          readTime: "11 min read",
          slug: "southeast-asia-south-china-sea-tensions",
        },
      ];
      break;

    case "politics":
      categoryData.title = "Politics";
      categoryData.description =
        "Comprehensive coverage of political developments, policy debates, and governance issues in Australia and beyond.";
      categoryData.subcategories = [
        "Federal",
        "State",
        "International Relations",
        "Policy",
        "Elections",
      ];
      // Add similar data structure as above
      break;

    default:
    // Keep default values for other categories
  }

  return categoryData;
}

function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
