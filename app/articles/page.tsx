import Header from "@/components/header"
import HireMeBadge from "@/components/hire-me-badge"
import LightbulbIcon from "@/components/lightbulb-icon"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ArticlesPage() {
  const articles = [
    {
      id: "gemini-ocr-automation",
      title: "How We Used Gemini to Automate Document Processing",
      excerpt:
        "Building an OCR service with Google Gemini that extracts structured data from documents, reducing manual processing time by 90% at SetupInSaudi.",
      content:
        "At SetupInSaudi, we process hundreds of legal documents daily. Manual data extraction was becoming a bottleneck. Here's how we built an automated OCR service using Google Gemini that transformed our document processing workflow.",
      image: "/placeholder.svg?height=300&width=500",
      category: "AI/Automation",
      tags: ["Gemini", "OCR", "Node.js", "Document Processing"],
      readTime: "8 min read",
      publishDate: "2024-01-15",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      id: "saudi-visa-systems",
      title: "Simplifying Saudi Visa Systems Through Code",
      excerpt:
        "How we built a comprehensive visa management system that handles multiple visa types, automated workflows, and real-time government portal integration.",
      content:
        "Saudi Arabia's visa system is complex, with multiple government portals and varying requirements. We built a unified system that simplifies the entire process for businesses and individuals.",
      image: "/placeholder.svg?height=300&width=500",
      category: "GovTech",
      tags: ["Saudi Arabia", "Government APIs", "Visa Management", "Compliance"],
      readTime: "12 min read",
      publishDate: "2024-01-08",
      gradient: "from-emerald-500 to-blue-600",
    },
    {
      id: "structured-backends-faster-frontends",
      title: "Why Structured Backends Make Frontends Faster",
      excerpt:
        "The architecture decisions that make the difference between a sluggish app and a lightning-fast user experience. Lessons from building scalable SaaS platforms.",
      content:
        "After building backends for multiple SaaS platforms, I've learned that frontend performance often depends on backend architecture decisions made months earlier. Here's what I've learned.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Architecture",
      tags: ["Backend", "Performance", "API Design", "Scalability"],
      readTime: "10 min read",
      publishDate: "2024-01-01",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      id: "e-invoicing-compliance",
      title: "Building ZATCA-Compliant E-invoicing Systems",
      excerpt:
        "A deep dive into implementing Saudi Arabia's e-invoicing requirements, integrating with Xero and Marmin, and ensuring 100% compliance with ZATCA regulations.",
      content:
        "Saudi Arabia's ZATCA e-invoicing requirements are complex and constantly evolving. Here's how we built a system that stays compliant while providing a seamless user experience.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Compliance",
      tags: ["ZATCA", "E-invoicing", "Saudi Arabia", "Xero", "Marmin"],
      readTime: "15 min read",
      publishDate: "2023-12-20",
      gradient: "from-orange-500 to-red-600",
    },
    {
      id: "ai-resume-matching",
      title: "Building AI-Powered Resume Matching at Scale",
      excerpt:
        "How we improved candidate-job matching efficiency by 40% using AI algorithms and smart data processing at Increw.",
      content:
        "Matching candidates to jobs is more complex than keyword matching. Here's how we built an AI system that understands context, skills, and cultural fit.",
      image: "/placeholder.svg?height=300&width=500",
      category: "AI/ML",
      tags: ["AI", "Machine Learning", "HRTech", "Resume Parsing"],
      readTime: "11 min read",
      publishDate: "2023-12-10",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      id: "hotel-search-optimization",
      title: "Optimizing Hotel Search for Millions of Listings",
      excerpt:
        "The technical challenges of building a fast, accurate hotel search engine with MongoDB, Redis caching, and smart indexing strategies.",
      content:
        "Searching through millions of hotel listings in real-time requires careful optimization. Here's how we built a search engine that stays fast at scale.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Performance",
      tags: ["MongoDB", "Redis", "Search Optimization", "Travel Tech"],
      readTime: "9 min read",
      publishDate: "2023-11-25",
      gradient: "from-teal-500 to-green-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-slate-800 transition-all duration-300">
      <Header />

      <main className="container mx-auto px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-blue-600/10 to-purple-600/10 blur-3xl -z-10"></div>
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 dark:from-gray-100 dark:via-purple-300 dark:to-gray-100 bg-clip-text text-transparent leading-tight px-4">
              Articles
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto">
              Insights from building automation-rich, integration-first systems across multiple industries
            </p>
          </div>

          {/* Featured Article */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 rounded-3xl p-8 lg:p-12 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white border-0 mb-4">
                    Featured Article
                  </Badge>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    {articles[0].title}
                  </h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{articles[0].content}</p>
                  <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(articles[0].publishDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{articles[0].readTime}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {articles[0].tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-purple-600 border-purple-600">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                  >
                    <Link href={`/articles/${articles[0].id}`} className="inline-flex items-center gap-2">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-2xl">
                    <Image
                      src={articles[0].image || "/placeholder.svg"}
                      alt={articles[0].title}
                      width={500}
                      height={300}
                      className="w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article, index) => (
              <article
                key={article.id}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 group hover:scale-105 overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`bg-gradient-to-r ${article.gradient} text-white border-0`}>
                      {article.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{article.excerpt}</p>

                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(article.publishDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {article.tags.slice(0, 2).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {article.tags.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{article.tags.length - 2}
                      </Badge>
                    )}
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-gray-50 dark:group-hover:bg-gray-700 bg-transparent"
                  >
                    <Link href={`/articles/${article.id}`} className="inline-flex items-center gap-2">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-32">
            <div className="bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl p-12 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 text-center">
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Get notified when I publish new articles about building scalable systems, automation, and integration
                strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="flex-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-900/50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <Button className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white px-6">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <HireMeBadge />
      <LightbulbIcon />
    </div>
  )
}
