import Header from "@/components/header"
import HireMeBadge from "@/components/hire-me-badge"
import LightbulbIcon from "@/components/lightbulb-icon"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function ArticlesPage() {
  const articles = [
    {
      title: "Getting Started with Next.js 15",
      description:
        "A comprehensive guide to the latest features in Next.js 15 and how to migrate your existing projects.",
      date: "December 2024",
      readTime: "5 min read",
      slug: "nextjs-15-guide",
    },
    {
      title: "Building Responsive UIs with Tailwind CSS",
      description: "Learn how to create beautiful, responsive user interfaces using Tailwind CSS utility classes.",
      date: "November 2024",
      readTime: "8 min read",
      slug: "tailwind-responsive-ui",
    },
    {
      title: "TypeScript Best Practices for React",
      description: "Essential TypeScript patterns and practices for building robust React applications.",
      date: "October 2024",
      readTime: "6 min read",
      slug: "typescript-react-best-practices",
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-8">Articles</h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
            I write about web development, sharing insights and tutorials on modern technologies and best practices.
          </p>

          <div className="space-y-8">
            {articles.map((article, index) => (
              <Card
                key={index}
                className="border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <CardTitle className="text-2xl hover:text-gray-600 dark:hover:text-gray-400 transition-colors text-gray-900 dark:text-gray-100">
                    <Link href={`/articles/${article.slug}`}>{article.title}</Link>
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400 text-base">
                    {article.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href={`/articles/${article.slug}`}
                    className="text-gray-900 dark:text-gray-100 font-medium hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                  >
                    Read more →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <HireMeBadge />
      <LightbulbIcon />
    </div>
  )
}
