import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import HireMeBadge from "@/components/hire-me-badge"
import LightbulbIcon from "@/components/lightbulb-icon"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Header />

      <main className="container mx-auto px-4 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-200px)]">
          {/* Left side - Portrait */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full max-w-md mx-auto lg:max-w-none">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Artistic watercolor portrait"
                width={500}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
                Turning Vision Into Reality With Code And Design.
              </h1>

              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
                Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                asChild
                className="bg-gray-900 dark:bg-gray-100 hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-gray-900 px-6 py-3 text-base"
              >
                <Link href="/resume" className="inline-flex items-center gap-2">
                  Resume
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 px-6 py-3 text-base bg-transparent"
              >
                <Link href="/contact">Contact</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Fixed positioned elements */}
      <HireMeBadge />
      <LightbulbIcon />
    </div>
  )
}
