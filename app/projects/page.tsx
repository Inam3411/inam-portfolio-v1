import Header from "@/components/header"
import HireMeBadge from "@/components/hire-me-badge"
import LightbulbIcon from "@/components/lightbulb-icon"
import Image from "next/image"
import Link from "next/link"
import {
  ExternalLink,
  Database,
  Zap,
  Shield,
  CreditCard,
  FileText,
  Users,
  Search,
  BarChart3,
  Globe,
  Building,
  Calendar,
  ArrowRight,
  Heart,
  Smartphone,
  Activity,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ProjectsPage() {
  const projects = [
    {
      id: "setupinsaudi",
      title: "SetupInSaudi",
      subtitle: "Compliance-First SaaS Platform",
      description:
        "Leading development of a B2B SaaS platform automating legal workflows for business setup in Saudi Arabia. Achieved 83 paying clients in the first month post-launch.",
      longDescription:
        "A comprehensive compliance-first SaaS platform that streamlines business setup and payments in KSA. The platform handles everything from document management to government portal monitoring, ensuring full compliance with Saudi regulations.",
      image: "/placeholder.svg?height=400&width=600",
      liveUrl: "https://www.setupinsaudi.com/",
      dashboardUrl: "https://www.dashboard.setupinsaudi.com/",
      category: "GovTech",
      status: "Live",
      timeline: "Oct 2023 - Present",
      role: "Full Stack Engineer (Lead)",
      impact: {
        clients: "83+ paying clients",
        revenue: "First month success",
        compliance: "100% Saudi compliant",
      },
      keyFeatures: [
        {
          icon: <Shield className="w-5 h-5" />,
          title: "E-invoicing Integration",
          description: "Automated Saudi e-invoicing with Xero, Marmin, and ZATCA integration",
        },
        {
          icon: <CreditCard className="w-5 h-5" />,
          title: "Payment System",
          description: "Multi-channel billing with Checkout.com, Stripe, and automated tracking",
        },
        {
          icon: <Zap className="w-5 h-5" />,
          title: "OCR Service",
          description: "Google Gemini-powered document processing and data extraction",
        },
        {
          icon: <BarChart3 className="w-5 h-5" />,
          title: "Government Monitoring",
          description: "Real-time monitoring of QIWA, MISA, MUQEEM portals with alerting",
        },
        {
          icon: <FileText className="w-5 h-5" />,
          title: "Document Management",
          description: "Automated expiration tracking, classification, and audit trails",
        },
        {
          icon: <Users className="w-5 h-5" />,
          title: "Employee Management",
          description: "Saudization tracking, visa status, and WPS-compliant payroll",
        },
      ],
      techStack: [
        "Node.js",
        "Express.js",
        "React",
        "PostgreSQL",
        "MySQL",
        "GCP",
        "Google Cloud Run",
        "Gemini AI",
        "Xero API",
        "HubSpot",
        "DocuSign",
        "Checkout.com",
        "Stripe",
        "ZATCA",
        "Marmin",
        "Sentry",
        "BullMQ",
        "Microservices",
      ],
      gradient: "from-emerald-500 to-blue-600",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    },
    {
      id: "preventscripts",
      title: "Prevent Scripts",
      subtitle: "Digital Health Platform",
      description:
        "Developed backend systems for a digital health platform that raised $5M in seed funding, enabling seamless integration of patient behavior tracking and biometric monitoring.",
      longDescription:
        "Built comprehensive backend infrastructure for a digital health platform focused on preventive care. The system integrates patient behavior tracking, biometric monitoring from mobile applications, and personalized action plans to improve health outcomes.",
      image: "/placeholder.svg?height=400&width=600",
      liveUrl: "https://www.preventscripts.com/",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.preventscripts.application",
      category: "HealthTech",
      status: "Live",
      timeline: "2023 - 2024",
      role: "Backend Developer",
      impact: {
        funding: "$5M seed funding",
        performance: "8s → 900ms API",
        efficiency: "Improved workflows",
      },
      keyFeatures: [
        {
          icon: <Heart className="w-5 h-5" />,
          title: "Patient Behavior Tracking",
          description: "Seamless integration of patient behavior monitoring and analytics",
        },
        {
          icon: <Activity className="w-5 h-5" />,
          title: "Biometric Monitoring",
          description: "Real-time biometric data collection from mobile applications",
        },
        {
          icon: <FileText className="w-5 h-5" />,
          title: "Personalized Action Plans",
          description: "AI-driven personalized health improvement recommendations",
        },
        {
          icon: <Users className="w-5 h-5" />,
          title: "Provider Tools",
          description: "Clinic workflow optimization and patient management systems",
        },
        {
          icon: <Zap className="w-5 h-5" />,
          title: "API Optimization",
          description: "Reduced analytics API response time from 8s to 900ms",
        },
        {
          icon: <BarChart3 className="w-5 h-5" />,
          title: "Healthcare Analytics",
          description: "Advanced analytics for improved healthcare delivery efficiency",
        },
      ],
      techStack: [
        "Node.js",
        "Express.js",
        "React.js",
        "MySQL",
        "PostgreSQL",
        "AWS Lambda",
        "AWS EC2",
        "AWS S3",
        "AWS SES",
        "GCP",
        "GCS",
        "Mailgun",
        "Gemini",
        "Sentry",
        "Stripe",
        "HubSpot",
        "DocuSign",
        "Swagger",
      ],
      gradient: "from-red-500 to-pink-600",
      bgColor: "bg-red-50 dark:bg-red-900/20",
    },
    {
      id: "increw",
      title: "Increw",
      subtitle: "AI-Powered Talent Platform",
      description:
        "Developed backend services for a platform connecting talents with companies, featuring AI-powered candidate-job matching and resume parsing.",
      longDescription:
        "Built comprehensive backend infrastructure for a talent acquisition platform, including AI-powered matching algorithms and automated resume processing systems.",
      image: "/placeholder.svg?height=400&width=600",
      liveUrl: "https://increw.io/",
      category: "HRTech",
      status: "Live",
      timeline: "Jul 2022 - Sep 2023",
      role: "Backend Developer",
      impact: {
        efficiency: "40% matching improvement",
        automation: "AI resume parsing",
        performance: "Optimized queries",
      },
      keyFeatures: [
        {
          icon: <Zap className="w-5 h-5" />,
          title: "AI Matching Engine",
          description: "Automated candidate-job matching with 40% efficiency improvement",
        },
        {
          icon: <FileText className="w-5 h-5" />,
          title: "Resume Parser",
          description: "AI-powered resume parsing for automated profile building",
        },
        {
          icon: <Database className="w-5 h-5" />,
          title: "Query Optimization",
          description: "Improved database performance for expensive API operations",
        },
        {
          icon: <Users className="w-5 h-5" />,
          title: "Talent Matching",
          description: "Advanced algorithms for connecting talents with companies",
        },
      ],
      techStack: ["Node.js", "NestJS", "Express.js", "TypeScript", "MySQL", "PostgreSQL", "Swagger", "GitHub"],
      gradient: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      id: "ccms",
      title: "CCMS",
      subtitle: "Hospital Inventory Management",
      description:
        "Developed a comprehensive hospital inventory management system improving stock accuracy by 30% and streamlining medical supply tracking.",
      longDescription:
        "Built a complete hospital inventory management system (CCMS) that automates medical supply tracking, improves stock accuracy, and streamlines hospital operations through efficient resource management.",
      image: "/placeholder.svg?height=400&width=600",
      category: "HealthTech",
      status: "Live",
      timeline: "2022 - 2023",
      role: "Backend Developer",
      impact: {
        accuracy: "30% stock improvement",
        automation: "Supply tracking",
        efficiency: "Streamlined ops",
      },
      keyFeatures: [
        {
          icon: <BarChart3 className="w-5 h-5" />,
          title: "Inventory Tracking",
          description: "Real-time medical supply and equipment tracking system",
        },
        {
          icon: <Database className="w-5 h-5" />,
          title: "Stock Management",
          description: "Automated stock level monitoring with 30% accuracy improvement",
        },
        {
          icon: <Zap className="w-5 h-5" />,
          title: "Resource Allocation",
          description: "Efficient allocation and distribution of medical resources",
        },
        {
          icon: <FileText className="w-5 h-5" />,
          title: "Reporting System",
          description: "Comprehensive reporting for hospital administration",
        },
      ],
      techStack: ["Node.js", "Express.js", "MySQL", "PostgreSQL", "TypeScript"],
      gradient: "from-teal-500 to-cyan-600",
      bgColor: "bg-teal-50 dark:bg-teal-900/20",
    },
    {
      id: "holidayfinds",
      title: "HolidayFinds",
      subtitle: "Hotel Search & Booking Platform",
      description:
        "Built a comprehensive hotel search engine with advanced filtering, real-time inventory, and secure payment processing for millions of listings.",
      longDescription:
        "Developed a scalable hotel booking platform with advanced search capabilities, real-time inventory management, and integrated payment systems for seamless user experience.",
      image: "/placeholder.svg?height=400&width=600",
      liveUrl: "https://www.holidayfinds.com/",
      category: "Travel",
      status: "Live",
      timeline: "Jun 2021 - Jul 2022",
      role: "Backend Developer",
      impact: {
        scale: "Millions of listings",
        performance: "Redis caching",
        payments: "Secure gateways",
      },
      keyFeatures: [
        {
          icon: <Search className="w-5 h-5" />,
          title: "Advanced Search",
          description: "MongoDB-powered search with filtering, sorting, and pagination",
        },
        {
          icon: <Globe className="w-5 h-5" />,
          title: "OTA Integrations",
          description: "Real-time hotel inventory and pricing from multiple sources",
        },
        {
          icon: <Database className="w-5 h-5" />,
          title: "Performance Optimization",
          description: "Redis caching and efficient query handling at scale",
        },
        {
          icon: <CreditCard className="w-5 h-5" />,
          title: "Payment Processing",
          description: "Secure Stripe and PayPal integration for bookings",
        },
      ],
      techStack: ["Node.js", "Express", "TypeScript", "MongoDB", "Redis", "AWS S3", "AWS SES", "AWS EC2", "Stripe"],
      gradient: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
    {
      id: "mondoq",
      title: "Mondoq",
      subtitle: "Quality Management Platform",
      description:
        "Developed backend for a quality management platform enabling efficient audits, service tracking, and automated workflows with 300% efficiency improvement.",
      longDescription:
        "Built a comprehensive quality management system that automates resource allocation, task management, and reporting processes for improved operational efficiency.",
      image: "/placeholder.svg?height=400&width=600",
      liveUrl: "https://www.mondoq.eu/en",
      category: "Enterprise",
      status: "Live",
      timeline: "Jul 2020 - May 2021",
      role: "Backend Developer",
      impact: {
        efficiency: "300% improvement",
        automation: "Workflow automation",
        reporting: "60% better communication",
      },
      keyFeatures: [
        {
          icon: <BarChart3 className="w-5 h-5" />,
          title: "Audit Management",
          description: "Efficient audit workflows and service order tracking",
        },
        {
          icon: <Zap className="w-5 h-5" />,
          title: "Task Automation",
          description: "Automated resource allocation and task management",
        },
        {
          icon: <FileText className="w-5 h-5" />,
          title: "Automated Reporting",
          description: "Enhanced communication efficiency by 60%",
        },
        {
          icon: <Database className="w-5 h-5" />,
          title: "Document Tracking",
          description: "Comprehensive document management and tracking system",
        },
      ],
      techStack: ["Node.js", "Express", "MySQL", "AWS EC2", "AWS S3", "AWS SES", "ClickUp"],
      gradient: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-slate-800 transition-all duration-300">
      <Header />

      <main className="container mx-auto px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-blue-600/10 to-purple-600/10 blur-3xl -z-10"></div>
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-gray-100 dark:via-blue-300 dark:to-gray-100 bg-clip-text text-transparent leading-tight px-4">
              Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto">
              Real-world systems that automate operations, integrate ecosystems, and scale businesses across multiple
              industries
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-32">
            {projects.map((project, index) => (
              <div key={project.id} className="relative">
                {/* Project Card */}
                <div
                  className={`${project.bgColor} rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm`}
                >
                  <div
                    className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                  >
                    {/* Content */}
                    <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                      <div className="space-y-6">
                        {/* Project Header */}
                        <div>
                          <div className="flex items-center gap-4 mb-4">
                            <Badge
                              variant="secondary"
                              className={`bg-gradient-to-r ${project.gradient} text-white border-0`}
                            >
                              {project.category}
                            </Badge>
                            <Badge variant="outline" className="text-green-600 border-green-600">
                              {project.status}
                            </Badge>
                          </div>

                          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                            {project.title}
                          </h2>
                          <h3
                            className={`text-xl font-semibold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-4`}
                          >
                            {project.subtitle}
                          </h3>

                          <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-6">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{project.timeline}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Building className="w-4 h-4" />
                              <span>{project.role}</span>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                          {project.longDescription}
                        </p>

                        {/* Impact Metrics */}
                        <div className="grid grid-cols-3 gap-4">
                          {Object.entries(project.impact).map(([key, value]) => (
                            <div key={key} className="text-center p-4 bg-white/60 dark:bg-gray-800/60 rounded-xl">
                              <div
                                className={`text-2xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                              >
                                {value.split(" ")[0]}
                              </div>
                              <div className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                                {value.split(" ").slice(1).join(" ") || key}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4">
                          {project.liveUrl && (
                            <Button
                              asChild
                              className={`bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white shadow-lg`}
                            >
                              <Link href={project.liveUrl} target="_blank" className="inline-flex items-center gap-2">
                                <ExternalLink className="w-4 h-4" />
                                View Live
                              </Link>
                            </Button>
                          )}
                          {project.dashboardUrl && (
                            <Button asChild variant="outline">
                              <Link
                                href={project.dashboardUrl}
                                target="_blank"
                                className="inline-flex items-center gap-2"
                              >
                                <BarChart3 className="w-4 h-4" />
                                Dashboard
                              </Link>
                            </Button>
                          )}
                          {project.playStoreUrl && (
                            <Button asChild variant="outline">
                              <Link
                                href={project.playStoreUrl}
                                target="_blank"
                                className="inline-flex items-center gap-2"
                              >
                                <Smartphone className="w-4 h-4" />
                                Play Store
                              </Link>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Project Image */}
                    <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                      <div className="relative group">
                        <div
                          className={`absolute -inset-4 bg-gradient-to-r ${project.gradient} rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300`}
                        ></div>
                        <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-2xl">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={`${project.title} screenshot`}
                            width={600}
                            height={400}
                            className="w-full h-auto rounded-xl"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mt-12">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">Key Features</h4>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {project.keyFeatures.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105"
                        >
                          <div
                            className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-200`}
                          >
                            {feature.icon}
                          </div>
                          <h5 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                            {feature.title}
                          </h5>
                          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mt-12">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Tech Stack</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-800 dark:text-gray-200 rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-medium hover:scale-105 transition-transform duration-200 cursor-pointer"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-32 text-center">
            <div className="bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl p-12 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                Let's Build Something Amazing
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Ready to automate your operations and scale your business? Let's discuss how I can help build your next
                system.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Link href="/contact" className="inline-flex items-center gap-3">
                  Get In Touch
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <HireMeBadge />
      <LightbulbIcon />
    </div>
  )
}
