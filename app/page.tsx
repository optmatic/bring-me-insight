import { ArrowRight, ArrowUpRight, ChevronRight, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  // Featured article data
  const featuredArticle = {
    title: "Australia's Climate Policy Faces New Challenges in Global Context",
    excerpt:
      "As international pressure mounts, Australia navigates complex terrain between economic interests and environmental commitments",
    category: "POLITICS",
    image: "/placeholder.svg?key=sit4r",
    readTime: "10 MIN READ",
    slug: "australias-climate-policy-faces-new-challenges",
  }

  // Recent articles data
  const recentArticles = [
    {
      title: "Indigenous Voice Proposal Sparks National Debate on Constitutional Recognition",
      excerpt:
        "The proposed Indigenous Voice to Parliament has ignited discussions across political and social spheres",
      category: "POLITICS",
      image: "/indigenous-voice-proposal.png",
      readTime: "8 MIN READ",
      slug: "indigenous-voice-proposal-sparks-debate",
    },
    {
      title: "Electoral Reform Debate Intensifies as Next Federal Election Approaches",
      excerpt: "Calls for electoral system changes grow louder as parties prepare for the upcoming federal election",
      category: "POLITICS",
      image: "/electoral-reform-debate.png",
      readTime: "7 MIN READ",
      slug: "electoral-reform-debate-intensifies",
    },
    {
      title: "Australian Parliament Debates New National Security Legislation",
      excerpt: "Proposed laws would expand intelligence agencies' powers while raising privacy concerns",
      category: "POLITICS",
      image: "/australian-parliament-debate.png",
      readTime: "9 MIN READ",
      slug: "australian-parliament-debates-security-legislation",
    },
  ]

  // Trending topics data
  const trendingTopics = [
    "Climate Policy",
    "Federal Election",
    "Indigenous Voice",
    "Housing Crisis",
    "Economic Outlook",
    "Healthcare Reform",
  ]

  return (
    <main className="bg-gradient-to-br from-offwhite to-white min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8 pt-8 pb-16">
        <div className="max-w-[1200px] mx-auto">
          {/* Featured Article */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[500px]">
              {/* Content */}
              <div className="lg:col-span-3 p-6 md:p-10 flex flex-col justify-center bg-gradient-to-br from-white to-offwhite relative z-10">
                <div className="flex flex-col h-full justify-center">
                  <div className="relative inline-block mb-4">
                    <span className="ds-body-xs text-lime-500 uppercase tracking-wider font-medium bg-lime-500/10 px-3 py-1 rounded-full">
                      FEATURED STORY
                    </span>
                  </div>
                  <Link href={`/article/${featuredArticle.slug}`}>
                    <h1 className="ds-display-h1 mb-4 leading-tight hover:text-lime-500 transition-colors">
                      {featuredArticle.title}
                    </h1>
                  </Link>
                  <p className="ds-body-base text-charcoal/80 mb-6 max-w-2xl">{featuredArticle.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <Link href={`/category/${featuredArticle.category.toLowerCase()}`} className="ds-btn-topic">
                      {featuredArticle.category}
                    </Link>
                    <div className="relative inline-flex items-center">
                      <span className="ds-body-xs text-charcoal/60 bg-charcoal/5 px-3 py-1 rounded-full flex items-center">
                        <Clock className="h-3 w-3 mr-1.5" /> 10 MIN READ
                      </span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <button className="font-bokor inline-block text-base text-black font-normal tracking-wide border-2 border-black px-3 py-2 bg-offwhite transform -skew-x-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-300 hover:bg-gradient-to-r hover:from-lime-300 hover:to-lime-500 hover:text-black flex items-center">
                      READ FEATURE <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
              {/* Image */}
              <div className="lg:col-span-2 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent lg:from-transparent z-10"></div>
                <Image
                  src={featuredArticle.image || "/placeholder.svg"}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Recent Articles */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <h2 className="ds-display-h2">Recent Articles</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-charcoal/5 via-charcoal/20 to-charcoal/5 mx-4"></div>
              <Link
                href="/discover"
                className="ds-body-xs text-lime-500 font-medium hover:text-forest transition-all duration-300 hover:translate-x-1 flex items-center"
              >
                VIEW ALL <ChevronRight className="ml-1 h-3 w-3" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentArticles.map((article, index) => (
                <div key={index} className="ds-card ds-card-hover rounded-xl">
                  <div className="relative h-48">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-charcoal-darker/20 mix-blend-overlay"></div>
                    <div className="absolute top-0 left-0 bg-lime-300 px-3 py-1 rounded-br-lg">
                      <Link
                        href={`/category/${article.category.toLowerCase()}`}
                        className="text-forest-dark font-medium hover:text-forest/90"
                      >
                        <span className="ds-body-xs">{article.category}</span>
                      </Link>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                  <div className="p-4">
                    <Link href={`/article/${article.slug}`}>
                      <h3 className="ds-display-h3 group-hover:text-lime-500 transition-colors mb-2">
                        {article.title}
                      </h3>
                    </Link>
                    <p className="ds-body-small text-charcoal/70 mb-4 line-clamp-2">{article.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="ds-body-xs text-charcoal/60 bg-charcoal/5 px-2 py-1 rounded-full border-b border-charcoal-darker/10">
                        {article.readTime}
                      </span>
                      <Link href={`/article/${article.slug}`}>
                        <span className="ds-body-xs text-lime-500 font-medium hover:text-forest transition-all duration-300 hover:translate-x-1 flex items-center">
                          READ <ChevronRight className="ml-1 h-3 w-3" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter and Trending Topics */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Newsletter Signup */}
            <div className="lg:col-span-2">
              <div className="ds-newsletter">
                {/* Decorative elements */}
                <div className="ds-newsletter-decorative w-64 h-64 border-lime-500/10 top-0 right-0 transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="ds-newsletter-decorative w-48 h-48 border-charcoal-darker/10 bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2"></div>

                <div className="relative z-10">
                  <h3 className="ds-newsletter-title">Stay Informed</h3>
                  <p className="ds-newsletter-description">
                    Subscribe to our weekly newsletter for in-depth analysis and exclusive content.
                  </p>
                  <div className="ds-newsletter-form">
                    <input type="email" placeholder="Your email address" className="ds-newsletter-input" />
                    <button className="ds-newsletter-button">SUBSCRIBE</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Trending Topics */}
            <div className="lg:col-span-1">
              <div className="ds-card p-6 rounded-xl bg-white">
                <h3 className="ds-display-h4 mb-4">Trending Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {trendingTopics.map((topic, index) => (
                    <Link
                      key={index}
                      href={`/category/${topic.toLowerCase().replace(/\s+/g, "-")}`}
                      className="ds-btn-topic"
                    >
                      {topic}
                    </Link>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-charcoal/10">
                  <Link
                    href="/discover"
                    className="ds-body-xs text-lime-500 font-medium hover:text-forest transition-all duration-300 hover:translate-x-1 flex items-center"
                  >
                    EXPLORE ALL TOPICS <ArrowUpRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
