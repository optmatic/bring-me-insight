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
import { useEffect, useRef, useState, use } from "react";

export default function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;

  // State for tracking scroll position and active section
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);

  // Refs for section headings and main header
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const mainHeaderRef = useRef<HTMLDivElement>(null);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Get the main header height on mount and window resize
  useEffect(() => {
    const updateHeaderHeight = () => {
      // Get the main site header height
      const siteHeader = document.querySelector("header");
      if (siteHeader) {
        setHeaderHeight(siteHeader.offsetHeight);
      }
    };

    // Initial measurement
    updateHeaderHeight();

    // Update on resize
    window.addEventListener("resize", updateHeaderHeight);

    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);

  // This would normally fetch the article data based on the slug
  // For demo purposes, we're using static content
  const article = {
    title: "Australia's Climate Policy Faces New Challenges in Global Context",
    subtitle:
      "As international pressure mounts, Australia navigates complex terrain between economic interests and environmental commitments",
    category: "POLITICS",
    author: "Sarah Johnson",
    authorTitle: "Political Correspondent",
    publishDate: "May 14, 2025",
    readTime: "10 min read",
    heroImage: "/placeholder.svg?key=sit4r",
    content: [
      {
        type: "paragraph",
        content:
          "Australia stands at a critical juncture in its climate policy development. As global leaders intensify their commitments to emissions reduction targets, the pressure on Australia to align with international standards has never been greater. The recent UN Climate Summit saw renewed pledges from major economies, leaving Australia's current policy framework under increased scrutiny.",
      },
      {
        type: "paragraph",
        content:
          'Prime Minister\'s recent statements indicate a potential shift in the government\'s approach, acknowledging the economic opportunities that could arise from a more ambitious climate agenda. "We recognize that the global economy is transitioning," the Prime Minister stated at a press conference last week. "Australia has an opportunity to become a renewable energy superpower."',
      },
      {
        type: "heading",
        content: "Economic Implications",
        id: "economic-implications",
      },
      {
        type: "paragraph",
        content:
          "The economic implications of climate policy reform remain a contentious issue. Traditional industries, particularly coal and natural gas, continue to represent significant export revenue and employment. However, emerging research from the Climate Council suggests that renewable energy investments could generate three times more jobs per dollar invested than fossil fuel projects.",
      },
      {
        type: "quote",
        content:
          "The transition to a low-carbon economy presents both challenges and opportunities. Those nations that move decisively now will secure competitive advantages in the industries of the future.",
        author: "Dr. Helena Wong, Climate Economics Institute",
      },
      {
        type: "paragraph",
        content:
          "Regional communities, particularly those dependent on fossil fuel industries, have expressed concerns about the pace of transition. The government has proposed a $3.5 billion Regional Transition Fund aimed at supporting affected communities through economic diversification programs.",
      },
      {
        type: "image",
        url: "/placeholder.svg?key=4gvoa",
        caption:
          "Solar farm in regional Victoria, part of Australia's growing renewable energy sector",
      },
      {
        type: "heading",
        content: "International Relations",
        id: "international-relations",
      },
      {
        type: "paragraph",
        content:
          "Australia's climate policies have implications beyond domestic politics. Trade partners, particularly in Europe and increasingly in Asia, are considering carbon border adjustment mechanisms that could disadvantage exports from countries perceived to have inadequate climate policies.",
      },
      {
        type: "paragraph",
        content:
          "The recent diplomatic exchanges with the European Union highlighted this challenge, with EU representatives explicitly linking future trade negotiations to climate commitments. Similarly, Japan and South Korea—key markets for Australian resources—have announced net-zero targets and are reviewing their import policies accordingly.",
      },
      {
        type: "paragraph",
        content:
          '"Australia cannot afford to be isolated on climate policy," warned former diplomat Richard Chen in a recent policy paper. "Our economic and strategic interests are increasingly aligned with more ambitious climate action."',
      },
      {
        type: "heading",
        content: "The Path Forward",
        id: "the-path-forward",
      },
      {
        type: "paragraph",
        content:
          "As the government prepares to release its updated climate strategy next month, observers are watching closely for signals of change. The opposition has already announced it would support a more ambitious 2030 target if elected, creating a potential bipartisan pathway for stronger action.",
      },
      {
        type: "paragraph",
        content:
          "Public opinion appears to be shifting as well. Recent polling indicates that 68% of Australians now support stronger climate policies, up from 54% just two years ago. This shift crosses traditional political divides, with majority support now evident across rural and urban constituencies.",
      },
      {
        type: "paragraph",
        content:
          "The coming months will be critical in determining whether Australia can reconcile its economic interests with environmental commitments and international expectations. The decisions made now will shape not only the nation's contribution to global climate efforts but also its position in a rapidly evolving global economy.",
      },
    ],
    tags: [
      "Climate Policy",
      "International Relations",
      "Economic Transition",
      "Renewable Energy",
    ],
    relatedArticles: [
      {
        title: "Renewable Energy Projects Accelerate in Rural Communities",
        category: "CLIMATE",
        image: "/placeholder.svg?key=dtor6",
        time: "3 DAYS AGO",
        slug: "renewable-energy-rural-communities",
      },
      {
        title: "Pacific Nations Summit Addresses Regional Security Concerns",
        category: "WORLD",
        image: "/placeholder.svg?key=m1c5n",
        time: "2 DAYS AGO",
        slug: "pacific-nations-summit-security",
      },
      {
        title: "Reserve Bank Signals Shift in Interest Rate Strategy",
        category: "ECONOMY",
        image: "/placeholder.svg?key=4gvoa",
        time: "YESTERDAY",
        slug: "reserve-bank-interest-rate-strategy",
      },
    ],
  };

  // Extract sections for the table of contents
  const sections = article.content
    .filter((block) => block.type === "heading")
    .map((block) => ({
      id:
        (block as any).id ||
        (block.content as string).toLowerCase().replace(/\s+/g, "-"),
      title: block.content as string,
    }));

  // Handle scroll events to update UI
  useEffect(() => {
    const handleScroll = () => {
      // Show/hide the persistent header
      setScrolled(window.scrollY > 100); // Changed from 300 to 100 for earlier trigger

      // Calculate scroll progress
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);

      // Update active section based on scroll position
      const currentPosition = window.scrollY + 100;

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
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  // Set article info for the header via context
  useEffect(() => {
    // Update article info in the global context
    const articleInfo = {
      title: article.title,
      category: article.category,
      image: article.heroImage,
    };

    // Dispatch a custom event that the header component can listen for
    const event = new CustomEvent("articleInfoUpdate", {
      detail: articleInfo,
    });
    document.dispatchEvent(event);
  }, [article]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-offwhite via-white to-offwhite flex flex-col">
      <main className="flex-1 relative">
        {/* Minimized header that appears on scroll - positioned below the main header */}
        {scrolled && (
          <div
            className="sticky bg-white border-b border-charcoal/10 shadow-elegant-sm animate-fadeIn z-40"
            style={{ top: `${headerHeight - 1}px` }}
          >
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="max-w-[1200px] mx-auto flex items-center gap-4 py-4">
                {/* Article thumbnail */}
                <div className="relative h-10 w-16 rounded-md overflow-hidden shadow-sm border border-charcoal/10 hidden sm:block">
                  <Image
                    src={article.heroImage || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Category tag */}
                <div className="flex-shrink-0">
                  <span className="font-mono text-xs text-lime-500 bg-lime-500/10 px-2 py-1 rounded-full border border-lime-500/20">
                    {article.category}
                  </span>
                </div>

                {/* Article title - make it take up remaining space */}
                <div className="flex-1 overflow-hidden">
                  <h3 className="font-mono text-sm font-medium text-charcoal-darker truncate">
                    {article.title}
                  </h3>
                  <div className="flex items-center mt-1">
                    <span className="font-mono text-xs text-charcoal/60 flex items-center mr-3">
                      <User className="h-3 w-3 mr-1" /> {article.author}
                    </span>
                    <span className="font-mono text-xs text-charcoal/60 flex items-center">
                      <Clock className="h-3 w-3 mr-1" /> {article.readTime}
                    </span>
                  </div>
                </div>

                {/* Reading progress indicator */}
                <div className="w-24 hidden md:block">
                  <div className="h-2 w-full bg-charcoal/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-lime-300 to-lime-500 transition-all duration-300 rounded-full"
                      style={{ width: `${scrollProgress}%` }}
                      role="progressbar"
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={Math.round(scrollProgress)}
                    />
                  </div>
                  <p className="font-mono text-xs text-charcoal/60 mt-1 text-right">
                    {Math.round(scrollProgress)}%
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Decorative geometric elements */}
        <div className="absolute top-0 right-0 w-1/3 h-screen overflow-hidden pointer-events-none opacity-10 z-0">
          <div className="absolute top-20 right-20 w-64 h-64 rounded-full border-4 border-lime-500/30 transform rotate-45"></div>
          <div className="absolute top-40 right-40 w-96 h-96 rounded-full border-4 border-charcoal-darker/20 transform -rotate-15"></div>
          <div className="absolute top-60 right-10 w-32 h-32 bg-gradient-to-br from-lime-500/10 to-charcoal-darker/10 rounded-xl transform rotate-12"></div>
        </div>

        {/* Article Header */}
        <section className="container mx-auto mt-8 px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-[1200px] mx-auto">
            <Link
              href="/"
              className="inline-flex items-center font-mono text-xs text-lime-500 hover:text-forest mb-6 transition-all duration-300 hover:translate-x-[-4px]"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              BACK TO HOME
            </Link>

            <div className="mb-6">
              <span className="font-mono text-xs text-lime-500 uppercase tracking-wider inline-block px-3 py-1 bg-gradient-to-r from-forest/10 to-lime-500/10 rounded-full">
                <Link
                  href={`/category/${article.category.toLowerCase()}`}
                  className="hover:underline"
                >
                  {article.category}
                </Link>
              </span>
              <h1 className="gothic-title font-serif text-3xl md:text-4xl lg:text-6xl font-medium text-charcoal-darker mt-4 leading-tight uppercase tracking-tight transform -skew-x-1 border-b border-charcoal-darker/10 pb-2">
                {article.title}
              </h1>
              <p className="font-mono text-sm text-charcoal/80 mt-4 md:text-base max-w-3xl backdrop-blur-sm">
                {article.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between border-t border-b border-charcoal/10 py-4 mb-8 relative">
              <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-lime-500/30 to-transparent"></div>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-forest to-lime-500/40 flex items-center justify-center text-white shadow-lg border-b border-charcoal-darker/20">
                  <User className="h-6 w-6" />
                </div>
                <div className="ml-3">
                  <p className="font-sans text-sm font-medium">
                    {article.author}
                  </p>
                  <p className="font-mono text-xs text-charcoal/60">
                    {article.authorTitle}
                  </p>
                </div>
              </div>
              <div className="flex items-center mt-2 sm:mt-0">
                <div className="flex items-center mr-4 bg-charcoal/5 px-3 py-1 rounded-full border-b border-charcoal-darker/10">
                  <Calendar className="h-4 w-4 text-lime-500 mr-1" />
                  <span className="font-mono text-xs text-charcoal/60">
                    {article.publishDate}
                  </span>
                </div>
                <div className="flex items-center bg-charcoal/5 px-3 py-1 rounded-full border-b border-charcoal-darker/10">
                  <Clock className="h-4 w-4 text-lime-500 mr-1" />
                  <span className="font-mono text-xs text-charcoal/60">
                    {article.readTime}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-2 text-charcoal/60 hover:text-lime-500"
                >
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="absolute left-0 bottom-0 w-full h-px bg-gradient-to-r from-transparent via-lime-500/30 to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="container mx-auto mb-12 px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-[1200px] mx-auto relative h-[300px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-forest/20 to-lime-500/10 mix-blend-overlay z-10"></div>
            <Image
              src={article.heroImage || "/placeholder.svg"}
              alt={article.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-charcoal-darker/30 mix-blend-overlay"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </section>

        {/* Article Content with Sidebar */}
        <section className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-8">
            {/* Main Article Content */}
            <article className="prose prose-lg max-w-none lg:max-w-3xl order-1 flex-1">
              {article.content.map((block, index) => {
                switch (block.type) {
                  case "paragraph":
                    return (
                      <p
                        key={index}
                        className="font-mono text-sm md:text-base text-charcoal/90 leading-relaxed mb-6"
                      >
                        {block.content}
                      </p>
                    );
                  case "heading":
                    const headingId =
                      (block as any).id ||
                      (block.content as string)
                        .toLowerCase()
                        .replace(/\s+/g, "-");
                    return (
                      <h2
                        key={index}
                        id={headingId}
                        className="gothic-title font-serif text-2xl md:text-3xl font-medium text-charcoal-darker mt-10 mb-6 scroll-mt-32 relative pl-4 border-l-4 border-gradient-to-b from-forest to-lime-500 uppercase tracking-tight transform -skew-x-1"
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
                        className="my-8 p-6 bg-gradient-to-br from-forest/5 to-lime-500/5 backdrop-blur-sm rounded-xl border-l-4 border-lime-500 relative dark-edge"
                      >
                        <div className="absolute top-2 left-4 text-lime-500/20 text-4xl font-serif">
                          "
                        </div>
                        <p className="font-mono text-sm md:text-base text-charcoal/80 italic relative z-10">
                          {block.content}
                        </p>
                        {block.author && (
                          <cite className="block font-sans text-sm mt-2 not-italic text-forest">
                            — {block.author}
                          </cite>
                        )}
                        <div className="absolute bottom-2 right-4 text-lime-500/20 text-4xl font-serif">
                          "
                        </div>
                      </blockquote>
                    );
                  case "image":
                    return (
                      <figure key={index} className="my-8">
                        <div className="relative h-[250px] md:h-[400px] rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.01] transition-transform duration-500 dark-edge">
                          <Image
                            src={block.url || "/placeholder.svg"}
                            alt={block.caption || ""}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-charcoal-darker/20 mix-blend-overlay"></div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                        </div>
                        {block.caption && (
                          <figcaption className="text-center font-mono text-xs text-charcoal/60 mt-2 bg-charcoal/5 py-2 px-4 rounded-full inline-block mx-auto border-b border-charcoal-darker/10">
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
                <h3 className="gothic-title font-serif text-lg font-medium text-charcoal-darker mb-4 inline-block px-3 py-1 bg-gradient-to-r from-forest/10 to-lime-500/10 rounded-full uppercase tracking-tight transform -skew-x-1">
                  TOPICS
                </h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <Link
                      key={index}
                      href={`/category/${tag
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="px-3 py-1 bg-gradient-to-r from-lime-300 to-lime-500 border border-lime-400/20 font-mono text-xs text-forest-dark font-medium hover:from-lime-400 hover:to-lime-600 transition-all duration-300 rounded-full shadow-modern-sm hover:shadow-modern-md transform hover:-translate-y-1 active:translate-y-0"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Author Bio */}
              <div className="border-t border-charcoal/10 pt-8 mb-16 relative">
                <div className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-lime-500/30 to-transparent"></div>
                <div className="flex items-start p-6 bg-gradient-to-br from-forest/5 to-lime-500/5 backdrop-blur-sm rounded-xl dark-edge">
                  <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-forest to-lime-500/40 flex items-center justify-center text-white shadow-lg border-b border-charcoal-darker/20">
                    <User className="h-8 w-8" />
                  </div>
                  <div className="ml-4">
                    <h3 className="gothic-title font-serif text-xl font-medium text-charcoal-darker uppercase tracking-tight transform -skew-x-1">
                      {article.author}
                    </h3>
                    <p className="font-mono text-xs text-charcoal/60 mb-2">
                      {article.authorTitle}
                    </p>
                    <p className="font-mono text-sm text-charcoal/80">
                      Sarah Johnson is a political correspondent with over 15
                      years of experience covering Australian and international
                      politics. She specializes in climate policy, international
                      relations, and economic analysis.
                    </p>
                    <span className="font-mono text-xs text-lime-500 font-medium mt-2 hover:text-forest transition-all duration-300 hover:translate-x-1 inline-flex items-center cursor-pointer">
                      VIEW ALL ARTICLES{" "}
                      <ChevronRight className="ml-1 h-3 w-3" />
                    </span>
                  </div>
                </div>
              </div>
            </article>

            {/* Table of Contents Sidebar */}
            <aside className="lg:w-64 order-2 shrink-0">
              <div
                className="lg:sticky bg-gradient-to-br from-white to-offwhite/80 backdrop-blur-sm border border-charcoal/10 shadow-modern-md p-6 rounded-none"
                style={{ top: `${headerHeight + 96}px` }}
              >
                <h2 className="gothic-title font-serif text-lg font-medium text-charcoal-darker mb-4 pb-2 border-b border-charcoal/10 relative uppercase tracking-tight transform -skew-x-1">
                  In This Article
                  <div className="absolute bottom-0 left-0 w-1/3 h-px bg-gradient-to-r from-forest to-lime-500"></div>
                </h2>
                <nav aria-label="Table of contents">
                  <ul className="space-y-3">
                    {sections.map((section) => (
                      <li key={section.id}>
                        <button
                          onClick={() => scrollToSection(section.id)}
                          className={`font-mono text-xs text-left w-full hover:text-lime-500 transition-colors ${
                            activeSection === section.id
                              ? "text-lime-500 font-medium pl-2 border-l-2 border-lime-500"
                              : "text-charcoal/80 pl-2 border-l-2 border-transparent"
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

                <div className="my-4 h-px bg-gradient-to-r from-transparent via-charcoal/20 to-transparent"></div>

                <div className="space-y-3">
                  <button
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="font-mono text-xs text-lime-500 hover:text-forest transition-colors w-full text-left flex items-center"
                  >
                    <ArrowLeft className="mr-2 h-3 w-3" /> Back to top
                  </button>
                  <button className="font-mono text-xs text-lime-500 hover:text-forest transition-colors w-full text-left flex items-center">
                    <Share2 className="mr-2 h-3 w-3" /> Share article
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Related Articles */}
        <section className="container mx-auto mb-16 px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex items-center mb-8">
              <h3 className="gothic-title font-serif text-2xl font-medium text-charcoal-darker uppercase tracking-tight transform -skew-x-1">
                Related Articles
              </h3>
              <div className="h-px flex-1 bg-gradient-to-r from-charcoal/5 via-charcoal/20 to-charcoal/5 mx-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {article.relatedArticles.map((related, index) => (
                <div
                  key={index}
                  className="border border-charcoal/10 group hover:border-lime-500/50 transition-all duration-300 shadow-lg rounded-xl overflow-hidden transform hover:translate-y-[-5px] hover:shadow-xl dark-edge"
                >
                  <div className="relative h-48">
                    <Image
                      src={related.image || "/placeholder.svg"}
                      alt={related.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-charcoal-darker/20 mix-blend-overlay"></div>
                    <div className="absolute top-0 left-0 bg-gradient-to-r from-lime-300 to-lime-500 px-3 py-1 rounded-br-lg">
                      <Link
                        href={`/category/${related.category.toLowerCase()}`}
                        className="text-forest-dark font-medium hover:text-forest/90"
                      >
                        <span className="font-mono text-xs">
                          {related.category}
                        </span>
                      </Link>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                  <div className="p-4">
                    <Link href={`/article/${related.slug || "article-slug"}`}>
                      <h4 className="gothic-text font-serif text-xl font-medium text-charcoal-darker group-hover:text-lime-500 transition-colors">
                        {related.title}
                      </h4>
                    </Link>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="font-mono text-xs text-charcoal/60 bg-charcoal/5 px-2 py-1 rounded-full border-b border-charcoal-darker/10">
                        {related.time}
                      </span>
                      <Link href={`/article/${related.slug || "article-slug"}`}>
                        <span className="font-mono text-xs text-lime-500 font-medium hover:text-forest transition-all duration-300 hover:translate-x-1 flex items-center">
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

        {/* Newsletter Signup - Reused from homepage but with modernistic styling */}
        <section className="container mx-auto mb-16 px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-[1200px] mx-auto">
            <div className="border border-charcoal/10 p-8 bg-gradient-to-br from-forest/5 to-lime-500/5 backdrop-blur-sm rounded-xl shadow-lg relative overflow-hidden dark-edge">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full border-4 border-lime-500/10 transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full border-4 border-charcoal-darker/10 transform -translate-x-1/2 translate-y-1/2"></div>

              <div className="max-w-2xl mx-auto text-center relative z-10">
                <h3 className="gothic-title font-serif text-2xl font-medium text-charcoal-darker mb-2 uppercase tracking-tight transform -skew-x-1">
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
                    className="px-4 py-2 border border-charcoal/10 font-mono text-xs w-full focus:outline-none focus:ring-2 focus:ring-lime-500 rounded-full shadow-sm dark-edge"
                  />
                  <Button className="bg-gradient-to-r from-lime-300 to lime-500 hover:from-lime-400 hover:to-lime-600 text-forest-dark font-mono text-xs font-medium rounded-full shadow-modern-md hover:shadow-modern-lg transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 border border-lime-400/20">
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
