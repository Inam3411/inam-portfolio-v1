import Link from "next/link"

export default function HireMeBadge() {
  return (
    <div className="fixed bottom-8 left-8 z-50">
      <Link
        href="/contact"
        className="w-20 h-20 bg-gray-900 dark:bg-gray-100 rounded-full flex items-center justify-center text-white dark:text-gray-900 font-medium text-sm hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
      >
        <div className="text-center leading-tight">
          <div>Hire</div>
          <div>Me</div>
        </div>
      </Link>
    </div>
  )
}
