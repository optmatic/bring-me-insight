import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Calendar,
  ChevronRight,
  Clock,
  Share2,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getPost, getRelatedPosts } from "@/lib/ghost";
import { PostOrPage } from "@tryghost/content-api";
import { ArticleContent } from "./ArticleContent";
import { parse } from "node-html-parser";

interface ContentBlock {
  type: "paragraph" | "heading" | "quote" | "image";
  content?: string;
  id?: string;
  url?: string;
  caption?: string;
  author?: string;
}

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  // Check if Ghost configuration is available
  if (
    !process.env.NEXT_PUBLIC_GHOST_URL ||
    !process.env.NEXT_PUBLIC_GHOST_CONTENT_API_KEY
  ) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Configuration Error
          </h1>
          <p className="text-gray-600">
            Ghost CMS configuration is missing. Please check your environment
            variables.
          </p>
        </div>
      </div>
    );
  }

  try {
    const post = await getPost(slug);

    if (!post) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Article not found
          </h1>
        </div>
      );
    }

    // Get related posts
    const relatedPosts = await getRelatedPosts(
      post.tags?.map((tag) => tag.slug) || [],
      3
    );

    // Transform Ghost post data to match our component structure
    const article = {
      title: post.title,
      subtitle: post.custom_excerpt || post.excerpt,
      category: post.primary_tag?.name?.toUpperCase() || "UNCATEGORIZED",
      author: post.primary_author?.name || "Anonymous",
      authorTitle: post.primary_author?.bio || "Contributor",
      publishDate: new Date(post.published_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      readTime: `${post.reading_time || 5} min read`,
      heroImage: post.feature_image || "/placeholder.svg",
      content: parseGhostContent(post.html),
      tags: post.tags?.map((tag) => tag.name) || [],
      relatedArticles: Array.isArray(relatedPosts)
        ? relatedPosts.map((relatedPost: PostOrPage) => ({
            title: relatedPost.title,
            category:
              relatedPost.primary_tag?.name?.toUpperCase() || "UNCATEGORIZED",
            image: relatedPost.feature_image || "/placeholder.svg",
            time: getTimeAgo(relatedPost.published_at),
            slug: relatedPost.slug,
          }))
        : relatedPosts.posts.map((relatedPost: PostOrPage) => ({
            title: relatedPost.title,
            category:
              relatedPost.primary_tag?.name?.toUpperCase() || "UNCATEGORIZED",
            image: relatedPost.feature_image || "/placeholder.svg",
            time: getTimeAgo(relatedPost.published_at),
            slug: relatedPost.slug,
          })),
    };

    return <ArticleContent article={article} />;
  } catch (error) {
    console.error("Error fetching article:", error);
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Error Loading Article
          </h1>
          <p className="text-gray-600">
            There was an error loading this article. Please try again later.
          </p>
        </div>
      </div>
    );
  }
}

// Helper function to parse Ghost HTML content into our content blocks
function parseGhostContent(html: string): ContentBlock[] {
  const blocks: ContentBlock[] = [];
  const root = parse(html);

  // Process headings
  root.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((heading) => {
    blocks.push({
      type: "heading",
      content: heading.text,
      id: heading.text.toLowerCase().replace(/\s+/g, "-"),
    });
  });

  // Process paragraphs
  root.querySelectorAll("p").forEach((p) => {
    blocks.push({
      type: "paragraph",
      content: p.text,
    });
  });

  // Process blockquotes
  root.querySelectorAll("blockquote").forEach((quote) => {
    blocks.push({
      type: "quote",
      content: quote.text,
      author: quote.getAttribute("cite"),
    });
  });

  // Process images
  root.querySelectorAll("img").forEach((img) => {
    blocks.push({
      type: "image",
      url: img.getAttribute("src"),
      caption: img.getAttribute("alt"),
    });
  });

  return blocks;
}

// Helper function to get time ago string
function getTimeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInDays = Math.floor(
    (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (diffInDays === 0) return "TODAY";
  if (diffInDays === 1) return "YESTERDAY";
  if (diffInDays < 7) return `${diffInDays} DAYS AGO`;
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} WEEKS AGO`;
  return `${Math.floor(diffInDays / 30)} MONTHS AGO`;
}
