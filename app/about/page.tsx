import Header from "@/components/header"
import HireMeBadge from "@/components/hire-me-badge"
import LightbulbIcon from "@/components/lightbulb-icon"
import Image from "next/image"
import {
  Users,
  Briefcase,
  Calendar,
  Code2,
  Database,
  Globe,
  Smartphone,
  Cloud,
  Zap,
  Award,
  MapPin,
  Building,
} from "lucide-react"

export default function AboutPage() {
  const skillCategories = [
    {
      category: "Frontend",
      color: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800",
      icon: <Globe className="w-4 h-4" />,
      skills: ["React.js", "TypeScript", "JavaScript", "Tailwind CSS", "Ant Design"],
    },
    {
      category: "Backend",
      color:
        "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-800",
      icon: <Code2 className="w-4 h-4" />,
      skills: ["Node.js", "Express.js", "NestJS", "FastAPI", "Serverless"],
    },
    {
      category: "Database",
      color:
        "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800",
      icon: <Database className="w-4 h-4" />,
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
    },
    {
      category: "Cloud & DevOps",
      color:
        "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 border-orange-200 dark:border-orange-800",
      icon: <Cloud className="w-4 h-4" />,
      skills: ["AWS", "Docker", "CI/CD", "Git", "Deployment"],
    },
    {
      category: "AI & Integration",
      color: "bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300 border-pink-200 dark:border-pink-800",
      icon: <Zap className="w-4 h-4" />,
      skills: ["OpenAI", "Gemini", "LLMs", "Generative AI", "Stripe", "Firebase"],
    },
    {
      category: "Tools & Testing",
      color: "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800",
      icon: <Award className="w-4 h-4" />,
      skills: ["Swagger", "Chai and Mocha", "Jira", "GitHub", "Sentry", "PostHog"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-all duration-300">
      <Header />

      <main className="container mx-auto px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading with Gradient */}
          <div className="text-center mb-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 blur-3xl -z-10"></div>
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-gray-100 dark:via-blue-300 dark:to-gray-100 bg-clip-text text-transparent leading-tight px-4 animate-fade-in">
              Passion Fuels Purpose!
            </h1>
          </div>

          {/* Three Column Layout - Enhanced */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center mb-32 px-4 lg:px-6">
            {/* Biography - Left Column */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 tracking-wider">BIOGRAPHY</h2>
              </div>

              <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                <p className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200">
                  Hi, I'm <strong className="text-blue-600 dark:text-blue-400">CodeBucks</strong>, a web developer and
                  UI/UX designer with a passion for creating beautiful, functional, and user-centered digital
                  experiences. With 4 years of experience in the field. I am always looking for new and innovative ways
                  to bring my clients' visions to life.
                </p>

                <p className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200">
                  I believe that design is about more than just making things look pretty – it's about solving problems
                  and creating intuitive, enjoyable experiences for users.
                </p>

                <p className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200">
                  Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to
                  design excellence and user-centered thinking to every project I work on. I look forward to the
                  opportunity to bring my skills and passion to your next project.
                </p>
              </div>
            </div>

            {/* Portrait - Center Column - Enhanced */}
            <div className="lg:col-span-4 flex justify-center items-center">
              <div className="relative group">
                {/* Animated background gradient */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300 animate-pulse"></div>

                <div className="relative w-80 h-96 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-2xl border-2 border-gray-200 dark:border-gray-700 transform group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded-xl overflow-hidden relative">
                    <Image
                      src="/placeholder.svg?height=400&width=320"
                      alt="Professional portrait"
                      width={320}
                      height={400}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Statistics - Right Column - Enhanced */}
            <div className="lg:col-span-4 flex flex-col justify-center h-full space-y-12">
              <div className="text-right group cursor-pointer">
                <div className="flex items-center justify-end gap-4 mb-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-7xl lg:text-8xl xl:text-9xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent leading-none group-hover:scale-105 transition-transform duration-200">
                    40+
                  </div>
                </div>
                <div className="text-lg text-gray-600 dark:text-gray-400 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Satisfied Clients
                </div>
              </div>

              <div className="text-right group cursor-pointer">
                <div className="flex items-center justify-end gap-4 mb-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-7xl lg:text-8xl xl:text-9xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent leading-none group-hover:scale-105 transition-transform duration-200">
                    50+
                  </div>
                </div>
                <div className="text-lg text-gray-600 dark:text-gray-400 font-medium group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  Projects Completed
                </div>
              </div>

              <div className="text-right group cursor-pointer">
                <div className="flex items-center justify-end gap-4 mb-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-7xl lg:text-8xl xl:text-9xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent leading-none group-hover:scale-105 transition-transform duration-200">
                    4+
                  </div>
                </div>
                <div className="text-lg text-gray-600 dark:text-gray-400 font-medium group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  Years Of Experience
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section - Completely Redesigned */}
          <section className="py-20 mt-20 px-4 lg:px-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-cyan-50/50 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-cyan-900/10 rounded-3xl"></div>
            <div className="max-w-6xl mx-auto relative">
              {/* Skills Heading */}
              <div className="text-center mb-16">
                <h2 className="text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 dark:from-gray-100 dark:via-purple-300 dark:to-gray-100 bg-clip-text text-transparent mb-4">
                  Skills
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Technologies and tools I use to bring ideas to life
                </p>
              </div>

              {/* Skills by Category */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillCategories.map((category, categoryIndex) => (
                  <div
                    key={categoryIndex}
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 group hover:scale-105"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center ${category.color.split(" ")[0]} ${category.color.split(" ")[1]}`}
                      >
                        {category.icon}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{category.category}</h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 cursor-pointer ${category.color}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Experience Section - Enhanced */}
          <section className="py-20 mt-20 px-4 lg:px-6">
            <div className="max-w-6xl mx-auto">
              {/* Experience Heading */}
              <div className="text-center mb-16">
                <h2 className="text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-gray-900 via-cyan-800 to-gray-900 dark:from-gray-100 dark:via-cyan-300 dark:to-gray-100 bg-clip-text text-transparent mb-4">
                  Experience
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  My professional journey and key achievements
                </p>
              </div>

              {/* Timeline - Enhanced */}
              <div className="max-w-4xl mx-auto">
                <div className="relative">
                  {/* Timeline Line - Enhanced */}
                  <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 rounded-full shadow-lg"></div>

                  {/* Experience Items */}
                  <div className="space-y-16">
                    {/* Google Experience */}
                    <div className="relative flex items-start group">
                      {/* Timeline Dot - Enhanced */}
                      <div className="absolute left-6 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg group-hover:scale-125 transition-transform duration-200 z-10"></div>

                      {/* Content Card */}
                      <div className="ml-20 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group-hover:scale-105 w-full">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                              Software Engineer{" "}
                              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                                @Google
                              </span>
                            </h3>
                            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>2022-Present</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>Mountain View, CA</span>
                              </div>
                            </div>
                          </div>
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                            <Building className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          Worked on a team responsible for developing new features for Google's search engine, including
                          improving the accuracy and relevance of search results and developing new tools for data
                          analysis and visualization.
                        </p>

                        {/* Skills used */}
                        <div className="flex flex-wrap gap-2 mt-4">
                          {["React", "TypeScript", "Python", "GCP"].map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Facebook Experience */}
                    <div className="relative flex items-start group">
                      {/* Timeline Dot - Enhanced */}
                      <div className="absolute left-6 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg group-hover:scale-125 transition-transform duration-200 z-10"></div>

                      {/* Content Card */}
                      <div className="ml-20 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group-hover:scale-105 w-full">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                              Intern{" "}
                              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                                @Facebook
                              </span>
                            </h3>
                            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>Summer 2021</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>Menlo Park, CA</span>
                              </div>
                            </div>
                          </div>
                          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                            <Smartphone className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          Worked on a team responsible for developing a new mobile app feature that allowed users to
                          create and share short-form video content, including designing and implementing a new user
                          interface and developing the backend infrastructure to support the feature.
                        </p>

                        {/* Skills used */}
                        <div className="flex flex-wrap gap-2 mt-4">
                          {["React Native", "Node.js", "GraphQL", "AWS"].map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <HireMeBadge />
      <LightbulbIcon />
    </div>
  )
}
