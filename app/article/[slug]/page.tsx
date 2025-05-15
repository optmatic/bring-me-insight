"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
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

export default function ArticlePage({ params }: { params: { slug: string } }) {
  // State for tracking scroll position and active section
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Refs for section headings
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.slug]);

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
      id: (block as any).id || block.content.toLowerCase().replace(/\s+/g, "-"),
      title: block.content,
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
    <div className="min-h-screen bg-offwhite flex flex-col">
      <main className="flex-1 relative">
        {/* Article Header */}
        <section className="container mx-auto mt-8 px-4 md:px-6 lg:px-8">
          <div className="max-w-[1200px] mx-auto">
            <Link
              href="/"
              className="inline-flex items-center font-mono text-xs text-leafy hover:text-forest mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              BACK TO HOME
            </Link>

            <div className="mb-6">
              <span className="font-mono text-xs text-leafy uppercase tracking-wider">
                <Link
                  href={`/category/${article.category.toLowerCase()}`}
                  className="hover:underline"
                >
                  {article.category}
                </Link>
              </span>
              <h1 className="font-sans text-3xl md:text-4xl lg:text-5xl font-light text-black mt-2 leading-tight">
                {article.title}
              </h1>
              <p className="font-mono text-sm text-charcoal/80 mt-4 md:text-base">
                {article.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between border-t border-b border-charcoal/20 py-4 mb-8">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-forest/20 flex items-center justify-center text-forest">
                  <User className="h-5 w-5" />
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
                <div className="flex items-center mr-4">
                  <Calendar className="h-4 w-4 text-charcoal/60 mr-1" />
                  <span className="font-mono text-xs text-charcoal/60">
                    {article.publishDate}
                  </span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-charcoal/60 mr-1" />
                  <span className="font-mono text-xs text-charcoal/60">
                    {article.readTime}
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-2 text-charcoal/60 hover:text-leafy"
                >
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="container mx-auto mb-12 px-4 md:px-6 lg:px-8">
          <div className="max-w-[1200px] mx-auto relative h-[300px] md:h-[500px] shadow-sm">
            <Image
              src={article.heroImage || "/placeholder.svg"}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* Article Content with Sidebar */}
        <section className="container mx-auto px-4 md:px-6 lg:px-8">
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
                      block.content.toLowerCase().replace(/\s+/g, "-");
                    return (
                      <h2
                        key={index}
                        id={headingId}
                        className="font-sans text-2xl font-light text-black mt-10 mb-6 scroll-mt-32"
                        ref={(el) => (sectionRefs.current[headingId] = el)}
                      >
                        {block.content}
                      </h2>
                    );
                  case "quote":
                    return (
                      <blockquote
                        key={index}
                        className="border-l-4 border-leafy pl-4 italic my-8 font-mono text-sm md:text-base text-charcoal/80"
                      >
                        <p>{block.content}</p>
                        {block.author && (
                          <cite className="block font-sans text-sm mt-2">
                            — {block.author}
                          </cite>
                        )}
                      </blockquote>
                    );
                  case "image":
                    return (
                      <figure key={index} className="my-8">
                        <div className="relative h-[250px] md:h-[400px] shadow-sm">
                          <Image
                            src={block.url || "/placeholder.svg"}
                            alt={block.caption || ""}
                            fill
                            className="object-cover"
                          />
                        </div>
                        {block.caption && (
                          <figcaption className="text-center font-mono text-xs text-charcoal/60 mt-2">
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
                <h3 className="font-mono text-sm font-bold mb-4">TOPICS</h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <Link
                      key={index}
                      href={`/category/${tag
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="px-3 py-1 bg-gradient-to-r from-[#328E6E] via-[#67AE6E] via-[#90C67C] to-[#E1EEBC]/40 border border-charcoal/20 font-mono text-xs text-black hover:bg-gradient-to-r hover:from-[#328E6E] hover:via-[#67AE6E] hover:via-[#90C67C] hover:to-[#E1EEBC]/60 transition-colors shadow-sm"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Author Bio */}
              <div className="border-t border-charcoal/20 pt-8 mb-16">
                <div className="flex items-start">
                  <div className="h-16 w-16 rounded-full bg-forest/20 flex items-center justify-center text-forest">
                    <User className="h-8 w-8" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-sans text-xl font-light">
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
                    <Button
                      variant="ghost"
                      className="font-mono text-xs text-leafy p-0 mt-2 hover:bg-transparent hover:text-leafy"
                    >
                      VIEW ALL ARTICLES{" "}
                      <ChevronRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </article>

            {/* Table of Contents Sidebar */}
            <aside className="lg:w-64 order-2 shrink-0">
              <div className="lg:sticky lg:top-24 p-4 border border-charcoal/20 shadow-sm bg-offwhite">
                <h2 className="font-sans text-lg font-light text-black mb-4">
                  In This Article
                </h2>
                <nav aria-label="Table of contents">
                  <ul className="space-y-3">
                    {sections.map((section) => (
                      <li key={section.id}>
                        <button
                          onClick={() => scrollToSection(section.id)}
                          className={`font-mono text-xs text-left w-full hover:text-leafy transition-colors ${
                            activeSection === section.id
                              ? "text-leafy font-medium"
                              : "text-charcoal/80"
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

                <Separator className="my-4 bg-charcoal/20" />

                <div className="space-y-3">
                  <button
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="font-mono text-xs text-charcoal/80 hover:text-leafy transition-colors w-full text-left"
                  >
                    Back to top
                  </button>
                  <button className="font-mono text-xs text-charcoal/80 hover:text-leafy transition-colors w-full text-left">
                    Share article
                  </button>
                  <Link
                    href="/"
                    className="font-mono text-xs text-charcoal/80 hover:text-leafy transition-colors block"
                  >
                    Back to home
                  </Link>
                </div>

                {/* Reading Progress Indicator */}
                <div className="mt-6">
                  <div className="h-1 w-full bg-charcoal/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-forest to-leafy/60 transition-all duration-300"
                      style={{ width: `${scrollProgress}%` }}
                      role="progressbar"
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={Math.round(scrollProgress)}
                    />
                  </div>
                  <p className="font-mono text-xs text-charcoal/60 mt-2">
                    Reading progress
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Related Articles */}
        <section className="container mx-auto mb-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex items-center mb-8">
              <h3 className="font-sans text-2xl font-light text-black">
                Related Articles
              </h3>
              <div className="h-px flex-1 bg-charcoal/20 mx-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {article.relatedArticles.map((related, index) => (
                <div
                  key={index}
                  className="border border-charcoal/20 group hover:border-leafy/50 transition-colors shadow-sm"
                >
                  <div className="relative h-48">
                    <Image
                      src={related.image || "/placeholder.svg"}
                      alt={related.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-0 left-0 bg-gradient-to-r from-[#328E6E] via-[#67AE6E] via-[#90C67C] to-[#E1EEBC]/40 px-3 py-1 text-black">
                      <Link
                        href={`/category/${related.category.toLowerCase()}`}
                        className="text-white hover:text-white/90"
                      >
                        <span className="font-mono text-xs">
                          {related.category}
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="p-4">
                    <Link href={`/article/${related.slug || "article-slug"}`}>
                      <h4 className="font-sans text-xl font-light text-black group-hover:text-leafy transition-colors">
                        {related.title}
                      </h4>
                    </Link>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="font-mono text-xs text-charcoal/60">
                        {related.time}
                      </span>
                      <Link href={`/article/${related.slug || "article-slug"}`}>
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
          </div>
        </section>

        {/* Newsletter Signup - Reused from homepage */}
        <section className="container mx-auto mb-16 px-4 md:px-6 lg:px-8">
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

      {/* Remove the footer from here - it's already in the root layout */}
    </div>
  );
}
