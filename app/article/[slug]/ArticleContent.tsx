"use client";

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
import { useEffect, useRef, useState } from "react";

interface ContentBlock {
  type: "paragraph" | "heading" | "quote" | "image";
  content?: string;
  id?: string;
  url?: string;
  caption?: string;
  author?: string;
}

interface ArticleContentProps {
  article: {
    title: string;
    subtitle: string;
    category: string;
    author: string;
    authorTitle: string;
    publishDate: string;
    readTime: string;
    heroImage: string;
    content: ContentBlock[];
    tags: string[];
    relatedArticles: {
      title: string;
      category: string;
      image: string;
      time: string;
      slug: string;
    }[];
  };
}

export function ArticleContent({ article }: ArticleContentProps) {
  // State for tracking scroll position and active section
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  // Refs for section headings
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Extract sections for the table of contents
  const sections = article.content
    .filter(
      (block): block is ContentBlock & { type: "heading" } =>
        block.type === "heading"
    )
    .map((block) => ({
      id: block.id || (block.content?.toLowerCase().replace(/\s+/g, "-") ?? ""),
      title: block.content ?? "",
    }));

  // Handle scroll events to update UI
  useEffect(() => {
    const handleScroll = () => {
      // Show/hide the persistent header
      setScrolled(window.scrollY > 300);

      // Calculate scroll progress
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);

      // Calculate sidebar visibility boundaries - simplified approach
      const articleContentStart = 800; // Approximate position after hero
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const articleContentEnd = documentHeight - windowHeight * 2; // Hide before footer area

      // Show sidebar when in article content area
      setSidebarVisible(
        window.scrollY > articleContentStart &&
          window.scrollY < articleContentEnd
      );

      // Update active section based on scroll position
      const currentPosition = window.scrollY + 200;

      // Find the current section
      let currentSection = "";
      Object.keys(sectionRefs.current).forEach((id) => {
        const section = sectionRefs.current[id];
        if (section && section.offsetTop <= currentPosition) {
          currentSection = id;
        }
      });

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call to set initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  // Scroll to section when clicking on TOC links
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 120; // Account for both headers
      const elementPosition = element.offsetTop - headerOffset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-white">
      {/* Minimized header that appears on scroll */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg transition-all duration-300 ${
          scrolled ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="w-full px-4 md:px-6 lg:px-8">
          <div className="max-w-[1200px] mx-auto flex items-center gap-4 py-3">
            {/* Article thumbnail */}
            <div className="relative h-12 w-20 rounded-lg overflow-hidden shadow-sm border border-gray-200 hidden sm:block">
              <Image
                src={article.heroImage || "/placeholder.svg"}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Category tag */}
            <div className="flex-shrink-0">
              <span className="px-3 py-1 bg-gradient-to-r from-lime-300 to-lime-500 text-green-800 text-xs font-medium rounded-full">
                {article.category}
              </span>
            </div>

            {/* Article title */}
            <div className="flex-1 overflow-hidden">
              <h3 className="text-lg font-semibold text-gray-900 truncate">
                {article.title}
              </h3>
              <div className="flex items-center mt-1">
                <span className="text-xs text-gray-600 flex items-center mr-3">
                  <User className="h-3 w-3 mr-1" /> {article.author}
                </span>
                <span className="text-xs text-gray-600 flex items-center">
                  <Clock className="h-3 w-3 mr-1" /> {article.readTime}
                </span>
              </div>
            </div>

            {/* Reading progress */}
            <div className="w-24 hidden md:block">
              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-lime-300 to-lime-500 transition-all duration-300 rounded-full"
                  style={{ width: `${scrollProgress}%` }}
                />
              </div>
              <p className="text-xs mt-1 text-right text-gray-600">
                {Math.round(scrollProgress)}%
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <section className="w-full px-4 md:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-xs text-lime-600 hover:text-green-700 mb-6 pt-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            BACK TO HOME
          </Link>

          <div className="mb-6">
            <span className="text-xs text-green-700 uppercase tracking-wider inline-block px-3 py-1 bg-lime-100 rounded-full">
              <Link
                href={`/category/${article.category.toLowerCase()}`}
                className="hover:underline"
              >
                {article.category}
              </Link>
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 leading-tight">
              {article.title}
            </h1>
            <p className="text-lg text-gray-700 mt-4 max-w-3xl">
              {article.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between border-t border-b border-gray-200 py-4 mb-8">
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-green-600 to-lime-500 flex items-center justify-center text-white shadow-lg">
                <User className="h-6 w-6" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  {article.author}
                </p>
                <p className="text-xs text-gray-600">{article.authorTitle}</p>
              </div>
            </div>
            <div className="flex items-center mt-2 sm:mt-0">
              <div className="flex items-center mr-4 bg-lime-100 px-3 py-1 rounded-full">
                <Calendar className="h-4 w-4 text-green-700 mr-1" />
                <span className="text-xs text-green-700 font-medium">
                  {article.publishDate}
                </span>
              </div>
              <div className="flex items-center bg-lime-100 px-3 py-1 rounded-full">
                <Clock className="h-4 w-4 text-green-700 mr-1" />
                <span className="text-xs text-green-700 font-medium">
                  {article.readTime}
                </span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="ml-2 text-green-800 hover:text-lime-600 hover:bg-lime-100"
              >
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="w-full px-4 md:px-6 lg:px-8 mb-12">
        <div className="max-w-[1200px] mx-auto relative h-[300px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={article.heroImage || "/placeholder.svg"}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Article Content with Sidebar */}
      <section className="w-full px-4 md:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Article Content */}
            <article className="lg:col-span-4 lg:max-w-3xl">
              {article.content.map((block, index) => {
                switch (block.type) {
                  case "paragraph":
                    return (
                      <p
                        key={index}
                        className="text-base text-gray-800 leading-relaxed mb-6"
                      >
                        {block.content}
                      </p>
                    );
                  case "heading":
                    const headingId =
                      block.id ||
                      (block.content?.toLowerCase().replace(/\s+/g, "-") ?? "");
                    return (
                      <h2
                        key={index}
                        id={headingId}
                        className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-6 scroll-mt-32 border-l-4 border-lime-500 pl-4"
                        ref={(el) => {
                          if (el) sectionRefs.current[headingId] = el;
                        }}
                      >
                        {block.content}
                      </h2>
                    );
                  case "quote":
                    return (
                      <blockquote
                        key={index}
                        className="my-8 p-6 bg-gradient-to-br from-lime-50 to-green-50 rounded-xl border-l-4 border-lime-500"
                      >
                        <p className="text-base text-gray-800 italic">
                          &quot;{block.content}&quot;
                        </p>
                        {block.author && (
                          <cite className="block text-sm mt-2 not-italic text-green-700">
                            — {block.author}
                          </cite>
                        )}
                      </blockquote>
                    );
                  case "image":
                    return (
                      <figure key={index} className="my-8">
                        <div className="relative h-[250px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
                          <Image
                            src={block.url || "/placeholder.svg"}
                            alt={block.caption || ""}
                            fill
                            className="object-cover"
                          />
                        </div>
                        {block.caption && (
                          <figcaption className="text-center text-sm text-gray-600 mt-2">
                            {block.caption}
                          </figcaption>
                        )}
                      </figure>
                    );
                  default:
                    return null;
                }
              })}

              {/* Tags */}
              <div className="mt-12 mb-16">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  TOPICS
                </h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <Link
                      key={index}
                      href={`/category/${tag
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="px-3 py-1 bg-lime-100 text-green-700 text-sm font-medium hover:bg-lime-200 transition-all duration-300 rounded-full"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Author Bio */}
              <div className="border-t border-gray-200 pt-8 mb-16">
                <div className="flex items-start p-6 bg-gradient-to-br from-lime-50 to-green-50 rounded-xl">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-green-600 to-lime-500 flex items-center justify-center text-white shadow-lg">
                    <User className="h-8 w-8" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {article.author}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {article.authorTitle}
                    </p>
                    <p className="text-sm text-gray-700">
                      Sarah Johnson is a political correspondent with over 15
                      years of experience covering Australian and international
                      politics. She specializes in climate policy, international
                      relations, and economic analysis.
                    </p>
                    <div className="font-bokor inline-block text-sm text-black font-normal tracking-wide border-2 border-black px-2 py-1 bg-lime-100 transform -skew-x-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-300 hover:bg-lime-200 mt-2 cursor-pointer">
                      VIEW ALL ARTICLES{" "}
                      <ChevronRight className="ml-1 h-3 w-3 inline" />
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Table of Contents Sidebar */}
            <aside className="lg:col-span-1">
              <div
                className={`fixed w-64 bg-white border border-gray-200 shadow-lg p-6 rounded-lg z-30 hidden lg:block transition-opacity duration-300 ${
                  sidebarVisible
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
                style={{
                  top: scrolled ? "80px" : "120px",
                  right: "max(1rem, calc((100vw - 1200px) / 2))",
                }}
              >
                <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  In This Article
                </h2>
                <nav aria-label="Table of contents">
                  <ul className="space-y-3">
                    {sections.map((section) => (
                      <li key={section.id}>
                        <button
                          onClick={() => scrollToSection(section.id)}
                          className={`text-sm text-left w-full hover:text-lime-600 transition-colors ${
                            activeSection === section.id
                              ? "text-lime-600 font-medium pl-2 border-l-2 border-lime-500"
                              : "text-gray-700 pl-2 border-l-2 border-transparent"
                          }`}
                          aria-current={
                            activeSection === section.id
                              ? "location"
                              : undefined
                          }
                        >
                          {section.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="my-4 h-px bg-gray-200"></div>

                <div className="space-y-3">
                  <button
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="text-sm text-lime-600 hover:text-green-700 transition-colors w-full text-left flex items-center"
                  >
                    <ArrowLeft className="mr-2 h-3 w-3" /> Back to top
                  </button>
                  <button className="text-sm text-lime-600 hover:text-green-700 transition-colors w-full text-left flex items-center">
                    <Share2 className="mr-2 h-3 w-3" /> Share article
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="w-full px-4 md:px-6 lg:px-8 mt-16 mb-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900">
              Related Articles
            </h3>
            <div className="h-px flex-1 bg-gray-200 mx-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {article.relatedArticles.map((related, index) => (
              <div
                key={index}
                className="border border-gray-200 group hover:border-lime-500 transition-all duration-300 shadow-lg rounded-xl overflow-hidden hover:shadow-xl"
              >
                <div className="relative h-48">
                  <Image
                    src={related.image || "/placeholder.svg"}
                    alt={related.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-0 left-0 bg-gradient-to-r from-lime-300 to-lime-500 px-3 py-1 rounded-br-lg">
                    <Link
                      href={`/category/${related.category.toLowerCase()}`}
                      className="text-green-800 font-medium hover:text-green-900"
                    >
                      <span className="text-xs">{related.category}</span>
                    </Link>
                  </div>
                </div>
                <div className="p-4">
                  <Link href={`/article/${related.slug || "article-slug"}`}>
                    <h4 className="text-xl font-medium text-gray-900 group-hover:text-lime-600 transition-colors">
                      {related.title}
                    </h4>
                  </Link>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-xs text-green-700 bg-lime-100 px-2 py-1 rounded-full font-medium">
                      {related.time}
                    </span>
                    <Link href={`/article/${related.slug || "article-slug"}`}>
                      <span className="text-sm text-green-700 font-medium hover:text-green-800 transition-colors underline decoration-2 underline-offset-2 flex items-center">
                        READ <ChevronRight className="ml-1 h-3 w-3" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
