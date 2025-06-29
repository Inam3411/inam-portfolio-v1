import Link from "next/link"
import SocialLinks from "./social-links"
import { ThemeToggle } from "./theme-toggle"

export default function Header() {
  return (
    <header className="w-full py-6 px-4 border-b border-gray-200 dark:border-gray-800 transition-colors">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Left Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 font-medium transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/articles"
              className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 font-medium transition-colors"
            >
              Articles
            </Link>
          </nav>

          {/* Center Logo */}
          <div className="flex-1 md:flex-none flex justify-center md:justify-start">
            <Link
              href="/"
              className="w-12 h-12 bg-gray-900 dark:bg-gray-100 rounded-full flex items-center justify-center text-white dark:text-gray-900 font-bold text-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              CB
            </Link>
          </div>

          {/* Right Social Links and Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <SocialLinks />
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex items-center justify-center space-x-6 mt-4 pt-4 border-t border-gray-200 dark:border-gray-800 transition-colors">
          <Link
            href="/"
            className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 font-medium transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 font-medium transition-colors"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 font-medium transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/articles"
            className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 font-medium transition-colors"
          >
            Articles
          </Link>
        </nav>

        {/* Mobile Social Links and Theme Toggle */}
        <div className="md:hidden flex justify-center items-center space-x-4 mt-4">
          <SocialLinks />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
