import { getPosts } from "@/lib/ghost";
import type { PostOrPage, PostsOrPages } from "@tryghost/content-api";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User, ChevronRight, ArrowRight } from "lucide-react";

export default async function HomePage() {
  let posts: PostsOrPages | null = null;
  let error: string | null = null;

  try {
    posts = await getPosts();
  } catch (err) {
    console.error("Error fetching posts:", err);
    error = "Failed to load posts. Please try again later.";
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
              No posts are available at the moment. Please check back later.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Find the featured post (first one with featured: true)
  const featured = posts.find((post: PostOrPage) => post.featured);
  // Filter out the featured post from the rest
  const recent = posts.filter((post: PostOrPage) => !post.featured);

  return (
    <main className="bg-gradient-to-br from-offwhite to-white min-h-screen">
      <section className="container mx-auto px-4 md:px-6 lg:px-8 pt-8 pb-16">
        <div className="max-w-[1200px] mx-auto">
          {/* Featured Article */}
          {featured && (
            <div className="relative overflow-hidden rounded-2xl shadow-xl mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-5 items-stretch">
                {/* Content */}
                <div className="lg:col-span-3 p-6 md:p-10 flex flex-col justify-center bg-gradient-to-br from-white to-offwhite relative z-10">
                  <div className="flex flex-col h-full justify-center">
                    <div className="relative inline-block mb-4">
                      <span className="text-lime-500 uppercase tracking-wider font-medium bg-lime-500/10 px-3 py-1 rounded-full text-xs">
                        FEATURED STORY
                      </span>
                    </div>
                    <Link href={`/article/${featured.slug}`}>
                      <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight hover:text-lime-500 transition-colors">
                        {featured.title}
                      </h1>
                    </Link>
                    <p className="text-lg text-charcoal/80 mb-6 max-w-2xl">
                      {featured.excerpt || featured.custom_excerpt || ""}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <Link
                        href={`/category/${
                          featured.primary_tag?.name?.toLowerCase() || ""
                        }`}
                        className="px-3 py-1 bg-lime-100 text-green-700 text-xs font-medium rounded-full uppercase tracking-wider"
                      >
                        {featured.primary_tag?.name?.toUpperCase() ||
                          "UNCATEGORIZED"}
                      </Link>
                      <div className="relative inline-flex items-center">
                        <span className="text-xs text-charcoal/60 bg-charcoal/5 px-3 py-1 rounded-full flex items-center">
                          <Clock className="h-3 w-3 mr-1.5" />{" "}
                          {featured.reading_time || 5} MIN READ
                        </span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Link href={`/article/${featured.slug}`}>
                        <button className="font-bokor inline-block text-base text-black font-normal tracking-wide border-2 border-black px-3 py-2 bg-offwhite transform -skew-x-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-300 hover:bg-gradient-to-r hover:from-lime-300 hover:to-lime-500 hover:text-black flex items-center">
                          READ FEATURE <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Image */}
                <div className="lg:col-span-2 relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent lg:from-transparent z-10"></div>
                  <Image
                    src={featured.feature_image || "/placeholder.svg"}
                    alt={featured.title}
                    fill
                    className="object-cover h-full w-full rounded-r-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          )}

          {/* Recent Articles */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Recent Articles
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-charcoal/5 via-charcoal/20 to-charcoal/5 mx-4"></div>
              <Link
                href="/discover"
                className="text-lime-500 text-xs font-medium hover:text-forest transition-all duration-300 hover:translate-x-1 flex items-center"
              >
                VIEW ALL <ChevronRight className="ml-1 h-3 w-3" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recent.map((article) => (
                <div
                  key={article.id}
                  className="rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
                >
                  <div className="relative h-48">
                    <Image
                      src={article.feature_image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-charcoal-darker/20 mix-blend-overlay"></div>
                    <div className="absolute top-0 left-0 bg-lime-300 px-3 py-1 rounded-br-lg">
                      <Link
                        href={`/category/${
                          article.primary_tag?.name?.toLowerCase() || ""
                        }`}
                        className="text-forest-dark font-medium hover:text-forest/90"
                      >
                        <span className="text-xs">
                          {article.primary_tag?.name?.toUpperCase() ||
                            "UNCATEGORIZED"}
                        </span>
                      </Link>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                  <div className="p-4">
                    <Link href={`/article/${article.slug}`}>
                      <h3 className="text-xl font-semibold group-hover:text-lime-500 transition-colors mb-2">
                        {article.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {article.excerpt || article.custom_excerpt || ""}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-charcoal/60 bg-charcoal/5 px-2 py-1 rounded-full border-b border-charcoal-darker/10">
                        {article.reading_time || 5} MIN READ
                      </span>
                      <Link href={`/article/${article.slug}`}>
                        <span className="text-lime-500 text-xs font-medium hover:text-forest transition-all duration-300 hover:translate-x-1 flex items-center">
                          READ <ChevronRight className="ml-1 h-3 w-3" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
