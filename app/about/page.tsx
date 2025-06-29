"use client"

import Image from "next/image"
import { Target, Lightbulb, Code2, Cog, BarChart3, CheckCircle, Globe, Zap, Smartphone, Cloud } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import HireMeBadge from "@/components/hire-me-badge"
import LightbulbIcon from "@/components/lightbulb-icon"
import { getPersonalInfo, getAboutInfo, getWorkflowSteps, getSkillCategories, getExperiences } from "@/lib/content"

export default function AboutPage() {
  const personal = getPersonalInfo()
  const about = getAboutInfo()
  const workflowSteps = getWorkflowSteps()
  const skillCategories = getSkillCategories()
  const experiences = getExperiences()

  const getIcon = (iconName: string) => {
    const iconMap: Record<string, any> = {
      Target,
      Lightbulb,
      Code2,
      Cog,
      BarChart3,
      CheckCircle,
      Globe,
      Zap,
      Smartphone,
      Cloud,
    }
    const IconComponent = iconMap[iconName] || Code2
    return IconComponent
  }

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { text: string; bg: string; border: string }> = {
      emerald: {
        text: "text-emerald-600 dark:text-emerald-400",
        bg: "bg-emerald-100 dark:bg-emerald-900/30",
        border: "border-emerald-200 dark:border-emerald-800",
      },
      blue: {
        text: "text-blue-600 dark:text-blue-400",
        bg: "bg-blue-100 dark:bg-blue-900/30",
        border: "border-blue-200 dark:border-blue-800",
      },
      purple: {
        text: "text-purple-600 dark:text-purple-400",
        bg: "bg-purple-100 dark:bg-purple-900/30",
        border: "border-purple-200 dark:border-purple-800",
      },
      orange: {
        text: "text-orange-600 dark:text-orange-400",
        bg: "bg-orange-100 dark:bg-orange-900/30",
        border: "border-orange-200 dark:border-orange-800",
      },
      cyan: {
        text: "text-cyan-600 dark:text-cyan-400",
        bg: "bg-cyan-100 dark:bg-cyan-900/30",
        border: "border-cyan-200 dark:border-cyan-800",
      },
    }
    return colorMap[color] || colorMap.blue
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-slate-800">
      <Header />

      <main className="container mx-auto px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6">About Me</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">{about.intro}</p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Current Focus</h3>
                <p className="text-gray-600 dark:text-gray-400">{about.currentWork}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Core Specialization</h3>
                <p className="text-gray-600 dark:text-gray-400">{about.specialization}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">AI & Innovation</h3>
                <p className="text-gray-600 dark:text-gray-400">{about.aiWork}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Philosophy</h3>
                <p className="text-gray-600 dark:text-gray-400">{about.philosophy}</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-60"></div>
              <Image
                src={personal.profileImage || "/placeholder.svg"}
                alt={personal.name}
                width={400}
                height={500}
                className="relative w-full h-auto rounded-2xl shadow-2xl border-4 border-white dark:border-gray-800"
              />
            </div>
          </div>
        </div>

        {/* Workflow Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">How I Work</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              My systematic approach to building scalable SaaS solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workflowSteps.map((step, index) => {
              const IconComponent = getIcon(step.icon)
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Technical Expertise</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Technologies and tools I use to build robust, scalable solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = getIcon(category.icon)
              const colors = getColorClasses(category.color)

              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
                >
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <h3 className={`text-xl font-semibold mb-4 ${colors.text}`}>{category.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Work Experience</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Building impactful solutions across diverse industries
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <Card
                key={index}
                className="border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">{experience.company}</h3>
                      <p className="text-lg font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
                        {experience.position}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">{experience.duration}</p>
                      <p className="text-gray-500 dark:text-gray-500">{experience.location}</p>
                    </div>

                    <div className="lg:col-span-2 space-y-6">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{experience.description}</p>

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Key Achievements</h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
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
