"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface ArticleInfo {
  title: string;
  category: string;
  image: string;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const isArticlePage = pathname.startsWith("/article/");
  const [articleInfo, setArticleInfo] = useState<ArticleInfo | null>(null);

  // Listen for article info updates
  useEffect(() => {
    const handleArticleInfoUpdate = (event: any) => {
      setArticleInfo(event.detail);
    };

    document.addEventListener("articleInfoUpdate", handleArticleInfoUpdate);

    return () => {
      document.removeEventListener(
        "articleInfoUpdate",
        handleArticleInfoUpdate
      );
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "AUSTRALIA", path: "/category/australia" },
    { name: "WORLD", path: "/category/world" },
    { name: "POLITICS", path: "/category/politics" },
    { name: "FEED", path: "/feed" },
    { name: "MEDIA", path: "/media" },
    { name: "DISCOVER", path: "/discover" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-offwhite">
      {/* Main header with logo, tagline, and search */}
      <div className="mx-auto max-w-[1200px] py-4 border-b border-charcoal/20">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Logo and tagline */}
            <div className="flex items-center">
              <Link href="/">
                <h1
                  className="inline-block text-3xl font-serif font-medium text-forest uppercase tracking-tight border-2 border-forest px-6 py-2 bg-offwhite transform -skew-x-3 shadow-[4px_4px_0px_0px_rgba(22,101,52,0.8)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  BringMeInsight
                </h1>
              </Link>
              <div className="hidden md:block h-6 w-px bg-charcoal/20 mx-4"></div>
              <p className="hidden md:block text-xs font-mono text-charcoal/50 tracking-wide">
                Australia in Focus. The World in Frame.
              </p>
            </div>

            {/* Search and subscribe */}
            <div className="flex items-center">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search articles..."
                  className="w-full md:w-64 font-mono text-xs pr-8 border-charcoal/20 focus-visible:ring-leafy"
                />
                <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-charcoal/50" />
              </div>
              <Button
                variant="outline"
                className="ml-2 hidden md:flex border-charcoal/20 text-forest hover:text-leafy hover:border-leafy"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Article info header - appears on scroll in article pages */}
      {isArticlePage && articleInfo && scrolled ? (
        <div className="bg-offwhite border-b border-charcoal/20 py-3 animate-fadeIn">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-[1200px] mx-auto">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 relative overflow-hidden bg-gray-100">
                    <Image
                      src={articleInfo.image || "/placeholder.svg"}
                      alt={articleInfo.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-xs text-leafy uppercase tracking-wider">
                      {articleInfo.category}
                    </span>
                    <h2 className="font-sans text-base font-light text-black truncate max-w-[500px]">
                      {articleInfo.title}
                    </h2>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="text-sm font-mono text-leafy hover:text-forest transition-colors"
                  >
                    Back to top
                  </button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-sm font-mono border-charcoal/20 text-forest hover:text-leafy hover:border-leafy rounded-md"
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Navigation - only show when not showing article info */
        <nav className="bg-offwhite border-b border-charcoal/20 py-2">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="max-w-[1200px] mx-auto overflow-x-auto scrollbar-hide">
              <ul className="flex space-x-6 min-w-max">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.path}
                      className={`font-mono text-xs tracking-wider ${
                        pathname === item.path ||
                        pathname.startsWith(`${item.path}/`)
                          ? "text-leafy font-medium"
                          : "text-charcoal hover:text-leafy"
                      } transition-colors`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
