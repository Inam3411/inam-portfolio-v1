import contentData from "@/data/content.json"
import experienceData from "@/data/experience.json"
import projectsData from "@/data/projects.json"
import articlesData from "@/data/articles.json"

// Types
export interface PersonalInfo {
  name: string
  title: string
  tagline: string
  description: string
  email: string
  phone: string
  location: string
  availability: string
  profileImage: string
}

export interface SocialLinks {
  github: string
  linkedin: string
  cv: string
}

export interface Achievement {
  icon: string
  value: string
  label: string
  color: string
  gradient: string
}

export interface AboutInfo {
  intro: string
  currentWork: string
  specialization: string
  aiWork: string
  philosophy: string
}

export interface WorkflowStep {
  title: string
  description: string
  icon: string
}

export interface SkillCategory {
  category: string
  color: string
  icon: string
  skills: string[]
}

export interface Experience {
  company: string
  position: string
  duration: string
  location: string
  description: string
  achievements: string[]
  technologies: string[]
}

export interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  features: string[]
  metrics: Record<string, string>
  status: string
  link: string
}

export interface Article {
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
  image: string
  slug: string
}

// Content getters
export const getPersonalInfo = (): PersonalInfo => contentData.personal
export const getSocialLinks = (): SocialLinks => contentData.social
export const getAchievements = (): Achievement[] => contentData.achievements
export const getAboutInfo = (): AboutInfo => contentData.about
export const getWorkflowSteps = (): WorkflowStep[] => contentData.workflowSteps
export const getSkillCategories = (): SkillCategory[] => contentData.skillCategories

export const getExperiences = (): Experience[] => experienceData.experiences
export const getProjects = (): Project[] => projectsData.projects
export const getArticles = (): Article[] => articlesData.articles

// Utility functions
export const getColorClasses = (color: string) => {
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
    indigo: {
      text: "text-indigo-600 dark:text-indigo-400",
      bg: "bg-indigo-100 dark:bg-indigo-900/30",
      border: "border-indigo-200 dark:border-indigo-800",
    },
    rose: {
      text: "text-rose-600 dark:text-rose-400",
      bg: "bg-rose-100 dark:bg-rose-900/30",
      border: "border-rose-200 dark:border-rose-800",
    },
    green: {
      text: "text-green-600 dark:text-green-400",
      bg: "bg-green-100 dark:bg-green-900/30",
      border: "border-green-200 dark:border-green-800",
    },
    violet: {
      text: "text-violet-600 dark:text-violet-400",
      bg: "bg-violet-100 dark:bg-violet-900/30",
      border: "border-violet-200 dark:border-violet-800",
    },
    amber: {
      text: "text-amber-600 dark:text-amber-400",
      bg: "bg-amber-100 dark:bg-amber-900/30",
      border: "border-amber-200 dark:border-amber-800",
    },
  }
  return colorMap[color] || colorMap.blue
}
