import contentData from "@/data/content.json";
import experienceData from "@/data/experience.json";
import projectsData from "@/data/projects.json";
import articlesData from "@/data/articles.json";

export interface Achievement {
  icon: string;
  value: string;
  label: string;
  color: string;
  gradient: string;
}

export const getPersonalInfo = () => contentData.personal;
export const getSocialLinks = () => contentData.social;
export const getStats = () => contentData.stats;
export const getAboutContent = () => contentData.about;
export const getWorkflowSteps = () => contentData.workflowSteps;
export const getSkillCategories = () => contentData.skillCategories;

export const getExperiences = () => experienceData.experiences;
export const getProjects = () => projectsData.projects;
export const getArticles = () => articlesData.articles;

export const getProjectById = (id: string) =>
  projectsData.projects.find((project) => project.id === id);

export const getArticleById = (id: string) =>
  articlesData.articles.find((article) => article.id === id);

export const getExperienceById = (id: string) =>
  experienceData.experiences.find((experience) => experience.id === id);

export const getAchievements = (): Achievement[] => contentData.achievements;

// Helper function to get color classes
export const getColorClasses = (color: string) => {
  const colorMap: Record<string, string> = {
    emerald:
      "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
    blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800",
    purple:
      "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800",
    orange:
      "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 border-orange-200 dark:border-orange-800",
    cyan: "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800",
  };
  return colorMap[color] || colorMap.blue;
};

// Helper function to get icon component
export const getIconComponent = (iconName: string) => {
  // This would need to be expanded based on your icon usage
  const iconMap: Record<string, any> = {
    Target: "Target",
    Lightbulb: "Lightbulb",
    Code2: "Code2",
    Cog: "Cog",
    BarChart3: "BarChart3",
    CheckCircle: "CheckCircle",
    Globe: "Globe",
    Zap: "Zap",
    Smartphone: "Smartphone",
    Cloud: "Cloud",
    Building: "Building",
    Users: "Users",
  };
  return iconMap[iconName] || "Code2";
};
