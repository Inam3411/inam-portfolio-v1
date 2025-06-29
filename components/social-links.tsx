import Link from "next/link"
import { Twitter, Github, Linkedin } from "lucide-react"

export default function SocialLinks() {
  return (
    <div className="flex items-center space-x-4">
      <Link
        href="https://twitter.com"
        className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
        aria-label="Twitter"
      >
        <Twitter className="w-4 h-4" />
      </Link>

      <Link
        href="https://github.com"
        className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
        aria-label="GitHub"
      >
        <Github className="w-4 h-4" />
      </Link>

      <Link
        href="https://linkedin.com"
        className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-4 h-4" />
      </Link>

      <Link
        href="https://pinterest.com"
        className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white hover:bg-red-700 transition-colors"
        aria-label="Pinterest"
      >
        <span className="text-xs font-bold">P</span>
      </Link>

      <Link
        href="https://dribbble.com"
        className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-white hover:bg-pink-600 transition-colors"
        aria-label="Dribbble"
      >
        <span className="text-xs font-bold">D</span>
      </Link>

      <Link
        href="/portfolio"
        className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-gray-900 transition-colors"
        aria-label="Portfolio"
      >
        <span className="text-xs font-bold">→</span>
      </Link>
    </div>
  )
}
