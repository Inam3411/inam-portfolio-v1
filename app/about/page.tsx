import Header from "@/components/header";
import HireMeBadge from "@/components/hire-me-badge";
import LightbulbIcon from "@/components/lightbulb-icon";
import {
  Users,
  Calendar,
  Code2,
  Globe,
  Smartphone,
  Cloud,
  Zap,
  MapPin,
  Building,
  ArrowRight,
  CheckCircle,
  Target,
  Lightbulb,
  Cog,
  BarChart3,
} from "lucide-react";
import {
  getAboutContent,
  getWorkflowSteps,
  getSkillCategories,
  getExperiences,
  getColorClasses,
} from "@/lib/content";

export default function AboutPage() {
  const about = getAboutContent();
  const workflowSteps = getWorkflowSteps();
  const skillCategories = getSkillCategories();
  const experiences = getExperiences();

  const getIconComponent = (iconName: string) => {
    const iconMap: Record<string, any> = {
      Target: Target,
      Lightbulb: Lightbulb,
      Code2: Code2,
      Cog: Cog,
      BarChart3: BarChart3,
      CheckCircle: CheckCircle,
      Globe: Globe,
      Zap: Zap,
      Smartphone: Smartphone,
      Cloud: Cloud,
      Building: Building,
      Users: Users,
    };
    const IconComponent = iconMap[iconName] || Code2;
    return <IconComponent className="w-6 h-6" />;
  };

  const getExperienceIcon = (iconName: string) => {
    const iconMap: Record<string, any> = {
      Building: Building,
      Users: Users,
      Globe: Globe,
      BarChart3: BarChart3,
    };
    const IconComponent = iconMap[iconName] || Building;
    return <IconComponent className="w-6 h-6 text-white" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-slate-800 transition-all duration-300">
      <Header />

      <main className="container mx-auto px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <div className="text-center mb-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-blue-600/10 to-purple-600/10 blur-3xl -z-10"></div>
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-gray-900 via-emerald-800 to-gray-900 dark:from-gray-100 dark:via-emerald-300 dark:to-gray-100 bg-clip-text text-transparent leading-tight px-4">
              About Me
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto">
              Building automation-rich, integration-first systems that solve
              real-world problems
            </p>
          </div>

          {/* About Narrative */}
          <section className="mb-32">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                  {about.intro}
                </p>

                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                  {about.currentWork}
                </p>

                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                  {about.specialization}
                </p>

                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                  {about.aiWork}
                </p>

                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  {about.philosophy}
                </p>
              </div>
            </div>
          </section>

          {/* How I Work Section */}
          <section className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-gray-100 dark:via-blue-300 dark:to-gray-100 bg-clip-text text-transparent mb-4">
                How I Work
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                My systematic approach to building scalable, automated solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workflowSteps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 group hover:scale-105 relative"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200">
                      {getIconComponent(step.icon)}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>

                  {index < workflowSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-gray-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 dark:from-gray-100 dark:via-purple-300 dark:to-gray-100 bg-clip-text text-transparent mb-4">
                Tech Stack
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Technologies I use to build automation-rich, integration-first
                systems
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillCategories.map((category, categoryIndex) => (
                <div
                  key={categoryIndex}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 group hover:scale-105"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        getColorClasses(category.color).split(" ")[0]
                      } ${getColorClasses(category.color).split(" ")[1]}`}
                    >
                      {getIconComponent(category.icon)}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                      {category.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => {
                      const colorClasses = getColorClasses(category.color);
                      return (
                        <span
                          key={skillIndex}
                          className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 cursor-pointer ${colorClasses}`}
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Timeline */}
          <section className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-cyan-800 to-gray-900 dark:from-gray-100 dark:via-cyan-300 dark:to-gray-100 bg-clip-text text-transparent mb-4">
                Experience
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                4+ years building scalable systems across multiple industries
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 via-blue-500 to-purple-500 rounded-full shadow-lg"></div>

                <div className="space-y-16">
                  {experiences.map((experience, index) => (
                    <div
                      key={experience.id}
                      className="relative flex items-start group"
                    >
                      <div
                        className={`absolute left-6 w-6 h-6 bg-gradient-to-r ${experience.gradient} rounded-full border-4 border-white dark:border-gray-900 shadow-lg group-hover:scale-125 transition-transform duration-200 z-10`}
                      ></div>

                      <div className="ml-20 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group-hover:scale-105 w-full">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                              {experience.position}{" "}
                              <span
                                className={`text-transparent bg-clip-text bg-gradient-to-r ${experience.gradient}`}
                              >
                                @{experience.company}
                              </span>
                            </h3>
                            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>
                                  {experience.startDate} - {experience.endDate}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>{experience.location}</span>
                              </div>
                            </div>
                          </div>
                          <div
                            className={`w-12 h-12 bg-gradient-to-r ${experience.gradient} rounded-xl flex items-center justify-center`}
                          >
                            {getExperienceIcon(experience.icon)}
                          </div>
                        </div>

                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                          {experience.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className={`px-3 py-1 bg-${
                                experience.gradient.split("-")[1]
                              }-100 dark:bg-${
                                experience.gradient.split("-")[1]
                              }-900/30 text-${
                                experience.gradient.split("-")[1]
                              }-800 dark:text-${
                                experience.gradient.split("-")[1]
                              }-300 rounded-full text-sm`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <HireMeBadge />
      <LightbulbIcon />
    </div>
  );
}
