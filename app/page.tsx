import { getPosts } from "@/lib/ghost";
import type { PostOrPage, PostsOrPages } from "@tryghost/content-api";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User } from "lucide-react";

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="w-full px-4 md:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Latest Insights
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Discover the latest articles and insights from our team of experts.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="w-full px-4 md:px-6 lg:px-8 pb-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: PostOrPage) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <Link href={`/article/${post.slug}`}>
                  <div className="relative h-48">
                    <Image
                      src={post.feature_image || "/placeholder.svg"}
                      alt={post.title || ""}
                      fill
                      className="object-cover"
                    />
                    {post.primary_tag && (
                      <div className="absolute top-0 left-0 bg-gradient-to-r from-lime-300 to-lime-500 px-3 py-1 rounded-br-lg">
                        <span className="text-green-800 text-xs font-medium">
                          {post.primary_tag.name.toUpperCase()}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt || post.custom_excerpt || ""}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        <span>{post.primary_author?.name || "Anonymous"}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>
                          {new Date(post.published_at || "").toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            }
                          )}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.reading_time || 5} min read</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Pagination */}
          {posts.meta?.pagination && posts.meta.pagination.pages > 1 && (
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center gap-2">
                {Array.from(
                  { length: posts.meta.pagination.pages },
                  (_, i) => i + 1
                ).map((page) => (
                  <Link
                    key={page}
                    href={`/?page=${page}`}
                    className={`px-4 py-2 rounded-lg ${
                      page === posts.meta?.pagination?.page
                        ? "bg-lime-500 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {page}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
