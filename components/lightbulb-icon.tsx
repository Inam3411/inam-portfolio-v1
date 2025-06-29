import { Lightbulb } from "lucide-react"

export default function LightbulbIcon() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="w-16 h-16 bg-yellow-400 dark:bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
        <Lightbulb className="w-8 h-8 text-yellow-900 dark:text-yellow-100" />
      </div>
    </div>
  )
}
