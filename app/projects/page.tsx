import Header from "@/components/header"
import HireMeBadge from "@/components/hire-me-badge"
import LightbulbIcon from "@/components/lightbulb-icon"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with Next.js and Stripe integration.",
      tech: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "#",
      demo: "#",
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with location-based forecasts.",
      tech: ["React", "Weather API", "Chart.js", "CSS3"],
      github: "#",
      demo: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-8">My Projects</h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl">
            Here are some of my recent projects that showcase my skills in full-stack development, UI/UX design, and
            problem-solving.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-gray-100">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 bg-transparent"
                      >
                        <Link href={project.github} className="inline-flex items-center gap-2">
                          <Github className="w-4 h-4" />
                          Code
                        </Link>
                      </Button>
                      <Button
                        asChild
                        size="sm"
                        className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200"
                      >
                        <Link href={project.demo} className="inline-flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </Link>
                      </Button>
                    </div>
                  </div>
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
