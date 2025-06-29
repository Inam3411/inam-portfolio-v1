import { Github, Linkedin, Mail, FileText } from "lucide-react"

export default function SocialLinks() {
  return (
    <div className="flex items-center space-x-4">
      <a
        href="https://github.com/Inam3411"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-gray-600 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors"
        aria-label="GitHub"
      >
        <Github className="w-5 h-5" />
      </a>
      <a
        href="https://linkedin.com/in/mohammad-inamullah"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-gray-600 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-5 h-5" />
      </a>
      <a
        href="mailto:inamk3411@gmail.com"
        className="p-2 text-gray-600 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors"
        aria-label="Email"
      >
        <Mail className="w-5 h-5" />
      </a>
      <a
        href="/cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-gray-600 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors"
        aria-label="Download CV"
      >
        <FileText className="w-5 h-5" />
      </a>
    </div>
  )
}
