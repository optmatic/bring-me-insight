"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronRight, Clock, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getPosts } from "@/lib/ghost";
import { use } from "react";
import { Calendar } from "lucide-react";
import type { PostOrPage, PostsOrPages } from "@tryghost/content-api";

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

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;

  let posts: PostsOrPages | null = null;
  let error: string | null = null;

  try {
    posts = await getPosts(1, 10, `tag:${slug}`);
  } catch (err) {
    error = "Failed to load posts. Please try again later.";
    console.error("Error fetching posts:", err);
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Error</h2>
            <p className="mt-4 text-lg text-gray-600">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!posts || !Array.isArray(posts) || posts.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">No Posts Found</h2>
            <p className="mt-4 text-lg text-gray-600">
              No posts found in this category. Please check back later.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              {slug.charAt(0).toUpperCase() + slug.slice(1)}
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Browse all posts in this category
            </p>
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post: PostOrPage) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {post.feature_image && (
                <div className="relative h-48">
                  <Image
                    src={post.feature_image}
                    alt={post.title || ""}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  {post.primary_author && (
                    <span className="mr-4">{post.primary_author.name}</span>
                  )}
                  <time dateTime={post.published_at || ""}>
                    {new Date(post.published_at || "").toLocaleDateString()}
                  </time>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  <Link
                    href={`/article/${post.slug}`}
                    className="hover:text-blue-600"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 line-clamp-3">
                  {post.excerpt || post.custom_excerpt || ""}
                </p>
                <div className="mt-4">
                  <Link
                    href={`/article/${post.slug}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {posts.meta?.pagination && posts.meta.pagination.pages > 1 && (
          <div className="mt-12 flex justify-center">
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
              {Array.from(
                { length: posts.meta.pagination.pages },
                (_, i) => i + 1
              ).map((page) => (
                <Link
                  key={page}
                  href={`/category/${slug}?page=${page}`}
                  className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                    page === posts.meta?.pagination?.page
                      ? "z-10 bg-blue-50 border-blue-500 text-blue-600"
                      : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  {page}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
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
        image: "/australia-climate-policy.png",
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
          excerpt:
            "Solar and wind initiatives are creating new economic opportunities in regional Australia.",
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
          excerpt:
            "Drought concerns have reignited tensions over the allocation of Murray-Darling Basin resources.",
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
          excerpt:
            "New data reveals the growing gap between income growth and property prices in metropolitan areas.",
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
          excerpt:
            "Federal funding aims to support community-led efforts to document and teach endangered languages.",
          image:
            "/placeholder.svg?height=400&width=600&query=indigenous language preservation",
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
          image:
            "/placeholder.svg?height=400&width=600&query=regional infrastructure australia",
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
        image:
          "/placeholder.svg?height=400&width=600&query=pacific nations summit",
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
          image:
            "/placeholder.svg?height=400&width=600&query=eu digital regulation",
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
          image:
            "/placeholder.svg?height=400&width=600&query=latin american trade alliance",
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
          image:
            "/placeholder.svg?height=400&width=600&query=middle east peace talks",
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
          image:
            "/placeholder.svg?height=400&width=600&query=african union free trade",
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
          image:
            "/placeholder.svg?height=400&width=600&query=south china sea tensions",
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
