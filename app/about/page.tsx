import Header from "@/components/header"
import HireMeBadge from "@/components/hire-me-badge"
import LightbulbIcon from "@/components/lightbulb-icon"
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
} from "lucide-react"

export default function AboutPage() {
  const skillCategories = [
    {
      category: "Backend",
      color:
        "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
      icon: <Code2 className="w-4 h-4" />,
      skills: ["Node.js", "NestJS", "Express", "PostgreSQL", "MongoDB", "Redis", "MySQL", "Serverless", "BullMQ"],
    },
    {
      category: "Frontend",
      color: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800",
      icon: <Globe className="w-4 h-4" />,
      skills: ["React.js", "Sanity", "PostHog", "Tailwind CSS", "Ant Design"],
    },
    {
      category: "AI/Automation",
      color:
        "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800",
      icon: <Zap className="w-4 h-4" />,
      skills: ["Gemini", "Generative AI", "LLMs", "OCR"],
    },
    {
      category: "Integrations",
      color:
        "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 border-orange-200 dark:border-orange-800",
      icon: <Smartphone className="w-4 h-4" />,
      skills: ["Stripe", "Checkout.com", "HubSpot", "DocuSign", "Xero", "ZATCA", "Marmin"],
    },
    {
      category: "Infrastructure",
      color: "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800",
      icon: <Cloud className="w-4 h-4" />,
      skills: ["AWS", "GCP", "Docker", "CI/CD", "Swagger", "Sentry", "GitHub", "Jira"],
    },
  ]

  const workflowSteps = [
    { icon: <Target className="w-6 h-6" />, title: "Understand", description: "Deep dive into business requirements" },
    { icon: <Lightbulb className="w-6 h-6" />, title: "Architect", description: "Design scalable system architecture" },
    { icon: <Code2 className="w-6 h-6" />, title: "Integrate", description: "Connect systems and APIs seamlessly" },
    { icon: <Cog className="w-6 h-6" />, title: "Automate", description: "Build workflows that run themselves" },
    { icon: <BarChart3 className="w-6 h-6" />, title: "Monitor", description: "Track performance and reliability" },
    { icon: <CheckCircle className="w-6 h-6" />, title: "Improve", description: "Iterate based on real-world usage" },
  ]

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
              Building automation-rich, integration-first systems that solve real-world problems
            </p>
          </div>

          {/* About Narrative */}
          <section className="mb-32">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                  I'm a full stack engineer with 4+ years working on B2B and B2C SaaS platforms across industries like
                  govtech (Saudi), HRtech, travel, health, and telematics. I excel in creating backend architectures,
                  integrating systems, managing deployments and monitoring — as well as crafting frontends enriched with
                  user analytics and CMS-powered content.
                </p>

                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                  Currently working on <strong className="text-emerald-600 dark:text-emerald-400">SetupInSaudi</strong>{" "}
                  — a compliance-first SaaS platform streamlining business setup and payments in KSA.
                </p>

                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                  A core part of my work is designing and implementing a fully compliant e-invoicing and payment service
                  integrated with <strong className="text-blue-600 dark:text-blue-400">Xero</strong>,{" "}
                  <strong className="text-blue-600 dark:text-blue-400">Marmin</strong>, and{" "}
                  <strong className="text-blue-600 dark:text-blue-400">ZATCA</strong> — ensuring Saudi government
                  regulations are met seamlessly. This includes automated billing workflows, real-time invoice tracking,
                  and multi-channel payment processing via Checkout.com and Stripe.
                </p>

                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                  Additionally, I developed an OCR service leveraging{" "}
                  <strong className="text-purple-600 dark:text-purple-400">Generative AI</strong> to extract structured
                  data from documents — along with systems to track company compliance across multiple Saudi government
                  portals.
                </p>

                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  I enjoy solving messy real-world problems with structured systems — built to automate, scale, and save
                  time.
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
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{step.description}</p>

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
                Technologies I use to build automation-rich, integration-first systems
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
                  {/* SetupInSaudi */}
                  <div className="relative flex items-start group">
                    <div className="absolute left-6 w-6 h-6 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg group-hover:scale-125 transition-transform duration-200 z-10"></div>

                    <div className="ml-20 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group-hover:scale-105 w-full">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                            Full Stack Engineer{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-600">
                              @Astrolabs
                            </span>
                          </h3>
                          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>Oct 2023 - Present</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span>Riyadh, Saudi Arabia</span>
                            </div>
                          </div>
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center">
                          <Building className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        Leading backend development for a B2B SaaS platform automating legal workflows for business
                        setup in Saudi Arabia. Built OCR services, government API monitoring, visa/payroll systems, and
                        integrated with Xero, HubSpot, and ZATCA for compliance.
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {["Node.js", "React", "PostgreSQL", "GCP", "Gemini AI", "Xero", "HubSpot"].map(
                          (tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ),
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Increw */}
                  <div className="relative flex items-start group">
                    <div className="absolute left-6 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg group-hover:scale-125 transition-transform duration-200 z-10"></div>

                    <div className="ml-20 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group-hover:scale-105 w-full">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                            Backend Developer{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                              @Bircube
                            </span>
                          </h3>
                          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>Jul 2022 - Sep 2023</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span>Remote</span>
                            </div>
                          </div>
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                          <Users className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        Built AI-powered candidate-job matching system and resume parsing service. Developed backend
                        services for talent platform and hospital inventory management system (CCMS), improving
                        efficiency by 40%.
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {["Node.js", "NestJS", "TypeScript", "PostgreSQL", "AI/ML"].map((tech, index) => (
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

                  {/* HolidayFinds */}
                  <div className="relative flex items-start group">
                    <div className="absolute left-6 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg group-hover:scale-125 transition-transform duration-200 z-10"></div>

                    <div className="ml-20 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group-hover:scale-105 w-full">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                            Backend Developer{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
                              @HolidayFinds
                            </span>
                          </h3>
                          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>Jun 2021 - Jul 2022</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span>London, UK</span>
                            </div>
                          </div>
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                          <Globe className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        Built hotel search engine with MongoDB advanced search, Redis caching, and OTA integrations.
                        Implemented secure payment gateways and optimized performance for millions of listings.
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {["Node.js", "MongoDB", "Redis", "AWS", "Stripe"].map((tech, index) => (
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

                  {/* Mondoq */}
                  <div className="relative flex items-start group">
                    <div className="absolute left-6 w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg group-hover:scale-125 transition-transform duration-200 z-10"></div>

                    <div className="ml-20 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group-hover:scale-105 w-full">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                            Backend Developer{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                              @Software Agency
                            </span>
                          </h3>
                          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>Jul 2020 - May 2021</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span>Koblenz, Germany</span>
                            </div>
                          </div>
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                          <BarChart3 className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        Developed and maintained the backend of MondoQ, a quality management and service order platform,
                        enabling real-time audits, automated workflows, and streamlined task tracking. Improved
                        operational efficiency by 300% through automation and enhanced communication by 60%.
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {["Node.js", "Express", "MySQL", "AWS EC2", "AWS S3", "AWS SES", "ClickUp"].map(
                          (tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ),
                        )}
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
