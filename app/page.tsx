"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Github,
  Linkedin,
  Download,
  Code2,
  Zap,
  Database,
  Rocket,
  Users,
  FileText,
  Brain,
  Building2,
  CreditCard,
  Hotel,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import HireMeBadge from "@/components/hire-me-badge"
import LightbulbIcon from "@/components/lightbulb-icon"
import { getPersonalInfo, getSocialLinks, getAchievements } from "@/lib/content"

export default function HomePage() {
  const personal = getPersonalInfo()
  const social = getSocialLinks()
  const achievements = getAchievements()

  const getIcon = (iconName: string) => {
    const iconMap: Record<string, any> = {
      Code2,
      Rocket,
      Users,
      Zap,
      FileText,
      Brain,
      Building2,
      CreditCard,
      Hotel,
    }
    const IconComponent = iconMap[iconName] || Code2
    return IconComponent
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-slate-800 transition-all duration-300">
      <Header />

      <main className="container mx-auto px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-200px)]">
          {/* Left side - Portrait */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full max-w-md mx-auto lg:max-w-none group">
              {/* Animated background gradient */}
              <div className="absolute -inset-8 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 animate-pulse"></div>

              {/* Floating code elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-emerald-500/10 dark:bg-emerald-400/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-emerald-200 dark:border-emerald-800 animate-float">
                <Code2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
              </div>

              <div className="absolute -top-2 -right-6 w-12 h-12 bg-blue-500/10 dark:bg-blue-400/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-blue-200 dark:border-blue-800 animate-float-delayed">
                <Database className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>

              <div className="absolute -bottom-4 -right-2 w-14 h-14 bg-purple-500/10 dark:bg-purple-400/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-purple-200 dark:border-purple-800 animate-float">
                <Zap className="w-7 h-7 text-purple-600 dark:text-purple-400" />
              </div>

              <div className="relative">
                <Image
                  src={personal.profileImage || "/placeholder.svg"}
                  alt={`${personal.name} - ${personal.title}`}
                  width={500}
                  height={600}
                  className="w-full h-auto rounded-2xl shadow-2xl border-4 border-white dark:border-gray-800 group-hover:scale-105 transition-transform duration-500"
                  priority
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-6">
              {/* Greeting */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                {personal.availability}
              </div>

              {/* Name and Title */}
              <div>
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4">
                  <span className="text-gray-900 dark:text-gray-100">{personal.name.split(" ")[0]}</span>
                  <br />
                  <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {personal.name.split(" ")[1]}
                  </span>
                </h1>

                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
                  {personal.title}
                </h2>
              </div>

              {/* Tagline */}
              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                {personal.tagline}
              </p>

              {/* Description */}
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl">
                {personal.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Link href={social.github} className="inline-flex items-center gap-3">
                  <Github className="w-5 h-5" />
                  GitHub
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-4 text-lg font-semibold bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
              >
                <Link href={social.linkedin} className="inline-flex items-center gap-3">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-purple-300 dark:border-purple-600 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 px-8 py-4 text-lg font-semibold bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
              >
                <Link href={social.cv} className="inline-flex items-center gap-3">
                  <Download className="w-5 h-5" />
                  Download CV
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Track Record That Speaks
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Real impact across SaaS platforms, serving thousands of users and processing millions in transactions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = getIcon(achievement.icon)
              return (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden"
                >
                  <CardContent className="p-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${achievement.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="space-y-2">
                      <div
                        className={`text-2xl font-bold bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent`}
                      >
                        {achievement.value}
                      </div>
                      <div className="text-gray-700 dark:text-gray-300 font-medium leading-tight">
                        {achievement.label}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Console Message */}
        <div className="mt-24 p-6 bg-gray-900 dark:bg-gray-800 rounded-2xl border border-gray-700">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-gray-400 text-sm">console</span>
          </div>
          <code className="text-green-400 font-mono text-sm lg:text-base">
            console.log("Hey recruiter 👋 These numbers aren't just metrics — they're real systems serving real
            users.");
          </code>
        </div>
      </main>

      <HireMeBadge />
      <LightbulbIcon />

      <style jsx>{`
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      
      @keyframes float-delayed {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-15px); }
      }
      
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
      
      .animate-float-delayed {
        animation: float-delayed 3s ease-in-out infinite 1.5s;
      }
    `}</style>
    </div>
  )
}
