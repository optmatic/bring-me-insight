"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight, Twitter, Instagram, Facebook } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"

export default function FeedPage() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-offwhite">
      <section className="bg-forest/5 border-b border-charcoal/10">
        <div className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
          <div className="max-w-[1200px] mx-auto">
            <div className="max-w-2xl">
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-charcoal-darker mb-4 uppercase tracking-tight">
                Social Feed
              </h1>
              <p className="font-sans text-sm text-charcoal/80">
                The most insightful commentary from across social media, curated by our editors to bring you diverse
                perspectives on current events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Feed */}
      <section className="container mx-auto mt-8 px-4 md:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Main Feed */}
            <div className="md:col-span-8 space-y-8">
              <h2 className="font-heading text-2xl font-bold text-charcoal-darker uppercase tracking-tight">
                Trending Conversations
              </h2>

              {/* Twitter Posts */}
              {[
                {
                  platform: "Twitter",
                  author: "Dr. Jane Wilson",
                  handle: "@DrJaneWilson",
                  avatar: "/placeholder.svg?key=avatar1",
                  content:
                    "The latest climate data from the Bureau of Meteorology shows a concerning trend. We're seeing record temperatures across multiple regions, and this isn't just a statistical anomaly anymore. #ClimateAction",
                  date: "2 hours ago",
                  likes: 1243,
                  retweets: 567,
                  comments: 89,
                  verified: true,
                  topic: "Climate",
                },
                {
                  platform: "Twitter",
                  author: "Economic Policy Institute",
                  handle: "@EconPolicyInst",
                  avatar: "/placeholder.svg?key=avatar2",
                  content:
                    "New analysis: The proposed tax reforms would benefit the middle class more than previous estimates suggested. Our research indicates a potential 4.2% increase in disposable income for households earning between $45K-$75K annually.",
                  date: "5 hours ago",
                  likes: 892,
                  retweets: 412,
                  comments: 67,
                  verified: true,
                  topic: "Economy",
                },
                {
                  platform: "Instagram",
                  author: "Parliament Watch",
                  handle: "@parliamentwatch",
                  avatar: "/placeholder.svg?key=avatar3",
                  content:
                    "Today's session was particularly revealing about the government's infrastructure priorities. The regional development package seems to be gaining cross-bench support, which could be significant for the upcoming budget negotiations.",
                  date: "Yesterday",
                  likes: 3452,
                  comments: 213,
                  image: "/placeholder.svg?key=parliament",
                  verified: true,
                  topic: "Politics",
                },
                {
                  platform: "Facebook",
                  author: "International Relations Forum",
                  handle: "International Relations Forum",
                  avatar: "/placeholder.svg?key=avatar4",
                  content:
                    "The diplomatic tensions in the South Pacific require a nuanced approach. Historical context matters here - this isn't just about current geopolitical positioning but decades of complex regional relationships and economic dependencies.",
                  date: "2 days ago",
                  likes: 567,
                  shares: 124,
                  comments: 78,
                  verified: false,
                  topic: "International",
                },
              ].map((post, index) => (
                <div key={index} className="border border-charcoal/20 rounded-md p-4 shadow-elegant-sm">
                  <div className="flex items-start">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden mr-3 flex-shrink-0">
                      <Image src={post.avatar || "/placeholder.svg"} alt={post.author} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center">
                        <p className="font-heading text-sm font-bold uppercase tracking-tight">{post.author}</p>
                        {post.verified && (
                          <span className="ml-1 bg-leafy text-white rounded-full p-0.5 flex items-center justify-center">
                            <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                            </svg>
                          </span>
                        )}
                      </div>
                      <p className="font-sans text-xs text-charcoal/60 mb-2">{post.handle}</p>
                      <p className="font-sans text-sm text-charcoal/90 mb-3">{post.content}</p>

                      {post.image && (
                        <div className="relative h-48 w-full mb-3 rounded overflow-hidden">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt="Post image"
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}

                      <div className="flex items-center justify-between">
                        <span className="font-sans text-xs text-charcoal/60">{post.date}</span>
                        <div className="flex items-center space-x-4">
                          {post.platform === "Twitter" && (
                            <>
                              <span className="font-sans text-xs text-charcoal/60">{post.comments} replies</span>
                              <span className="font-sans text-xs text-charcoal/60">{post.retweets} retweets</span>
                              <span className="font-sans text-xs text-charcoal/60">{post.likes} likes</span>
                            </>
                          )}
                          {post.platform === "Instagram" && (
                            <>
                              <span className="font-sans text-xs text-charcoal/60">{post.likes} likes</span>
                              <span className="font-sans text-xs text-charcoal/60">{post.comments} comments</span>
                            </>
                          )}
                          {post.platform === "Facebook" && (
                            <>
                              <span className="font-sans text-xs text-charcoal/60">{post.likes} likes</span>
                              <span className="font-sans text-xs text-charcoal/60">{post.shares} shares</span>
                              <span className="font-sans text-xs text-charcoal/60">{post.comments} comments</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-charcoal/10">
                    <div className="flex items-center justify-between">
                      <span className="inline-block px-2 py-1 bg-gradient-to-r from-lime-300 to-lime-500 text-forest-dark font-medium font-sans text-xs rounded-sm shadow-sm border border-lime-400/20">
                        {post.topic}
                      </span>
                      <div className="flex items-center">
                        {post.platform === "Twitter" && <Twitter className="h-4 w-4 text-[#1DA1F2] mr-1" />}
                        {post.platform === "Instagram" && <Instagram className="h-4 w-4 text-[#E1306C] mr-1" />}
                        {post.platform === "Facebook" && <Facebook className="h-4 w-4 text-[#4267B2] mr-1" />}
                        <span className="font-sans text-xs text-charcoal/60">{post.platform}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex justify-center mt-8">
                <Button className="bg-gradient-to-r from-lime-300 to-lime-500 hover:from-lime-400 hover:to-lime-600 text-forest-dark font-medium font-sans text-xs shadow-sm border border-lime-400/20 hover:shadow-md">
                  LOAD MORE <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-4">
              <div className="sticky top-24">
                {/* Trending Topics */}
                <div className="border border-charcoal/20 p-4 shadow-elegant-sm mb-6">
                  <h3 className="font-heading text-xl font-bold text-charcoal-darker mb-4 uppercase tracking-tight">
                    Trending Topics
                  </h3>
                  <ul className="space-y-3">
                    {[
                      { name: "Climate Policy", count: 1243 },
                      { name: "Economic Reform", count: 892 },
                      { name: "Election Analysis", count: 756 },
                      { name: "International Relations", count: 634 },
                      { name: "Healthcare", count: 521 },
                    ].map((topic, index) => (
                      <li key={index} className="flex items-center justify-between">
                        <span className="font-sans text-sm text-charcoal/80">#{topic.name.replace(/\s+/g, "")}</span>
                        <span className="font-sans text-xs text-charcoal/60">{topic.count} posts</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Featured Accounts */}
                <div className="border border-charcoal/20 p-4 shadow-elegant-sm">
                  <h3 className="font-heading text-xl font-bold text-charcoal-darker mb-4 uppercase tracking-tight">
                    Featured Accounts
                  </h3>
                  <ul className="space-y-4">
                    {[
                      {
                        name: "Policy Institute",
                        handle: "@PolicyInst",
                        avatar: "/placeholder.svg?key=avatar5",
                        platform: "Twitter",
                      },
                      {
                        name: "Economic Analysis",
                        handle: "@EconAnalysis",
                        avatar: "/placeholder.svg?key=avatar6",
                        platform: "Twitter",
                      },
                      {
                        name: "Global Affairs",
                        handle: "Global Affairs",
                        avatar: "/placeholder.svg?key=avatar7",
                        platform: "Facebook",
                      },
                      {
                        name: "Parliament Watch",
                        handle: "@parliamentwatch",
                        avatar: "/placeholder.svg?key=avatar3",
                        platform: "Instagram",
                      },
                    ].map((account, index) => (
                      <li key={index} className="flex items-center">
                        <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3 flex-shrink-0">
                          <Image
                            src={account.avatar || "/placeholder.svg"}
                            alt={account.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-heading text-sm font-bold uppercase tracking-tight">{account.name}</p>
                          <div className="flex items-center">
                            <p className="font-sans text-xs text-charcoal/60 mr-2">{account.handle}</p>
                            {account.platform === "Twitter" && <Twitter className="h-3 w-3 text-[#1DA1F2]" />}
                            {account.platform === "Instagram" && <Instagram className="h-3 w-3 text-[#E1306C]" />}
                            {account.platform === "Facebook" && <Facebook className="h-3 w-3 text-[#4267B2]" />}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" size="sm" className="w-full mt-4 font-sans text-xs border-charcoal/20">
                    View All Featured Accounts
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
