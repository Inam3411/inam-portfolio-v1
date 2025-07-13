import Header from "@/components/header";
import HireMeBadge from "@/components/hire-me-badge";
import LightbulbIcon from "@/components/lightbulb-icon";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { notFound } from "next/navigation";
import ShareButton from "@/components/share-button";

// Import articles data
const articles = [
  {
    id: "gemini-ocr-automation",
    title: "How We Used Gemini to Automate Document Processing",
    excerpt:
      "Building an OCR service with Google Gemini that extracts structured data from documents, reducing manual processing time by 90% at SetupInSaudi.",
    content: `
      <p>At SetupInSaudi, we process hundreds of legal documents daily. Manual data extraction was becoming a bottleneck. Here's how we built an automated OCR service using Google Gemini that transformed our document processing workflow.</p>
      
      <h2>The Challenge</h2>
      <p>Our team was spending countless hours manually extracting data from various document types - contracts, Licenses, Certificates, invoices, legal forms, and more. The process was error-prone, time-consuming, and simply not scalable as our business grew.</p>
      
      <h2>The Solution</h2>
      <p>We decided to leverage Google's Gemini AI to build a comprehensive OCR service that could:</p>
      <ul>
        <li>Extract structured data from any document type</li>
        <li>Handle multiple languages (Arabic and English)</li>
        <li>Provide confidence scores for extracted data</li>
        <li>Integrate seamlessly with our existing workflows</li>
      </ul>
      
      <h2>Technical Implementation</h2>
      <p>We built the system using Node.js and the Google Gemini API. The architecture includes:</p>
      <ul>
        <li>Document preprocessing</li>
        <li>Intelligent prompt engineering for different document types</li>
        <li>Data validation and error handling</li>
        <li>Integration with our existing database systems</li>
      </ul>
      
      <h2>Results</h2>
      <p>The implementation was a game-changer:</p>
      <ul>
        <li>90% reduction in manual processing time</li>
        <li>95% accuracy in data extraction</li>
        <li>Support for 15+ document types</li>
        <li>Real-time processing capabilities</li>
      </ul>
      
      <h2>Lessons Learned</h2>
      <p>Building this system taught us valuable lessons about AI integration, prompt engineering, and building robust automation systems. The key was starting simple and iterating based on real-world usage.</p>
    `,
    image: "/placeholder.svg?height=300&width=500",
    category: "AI/Automation",
    tags: ["Gemini", "OCR", "Node.js", "Document Processing"],
    readTime: "8 min read",
    publishDate: "2024-01-15",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    id: "saudi-visa-systems",
    title: "Simplifying Saudi Visa Systems Through Code",
    excerpt:
      "How we built a smart visa management system that streamlines documentation, eligibility checks, and real-time status tracking — all within a unified platform.",
    content: `
      <p>Saudi Arabia's visa process involves complex workflows and heavy documentation. We built a platform that brings clarity and automation to this process — helping businesses and individuals navigate it with ease.</p>
      
      <h2>The Complexity of Saudi Visa Systems</h2>
      <p>Different visa types — work, business, family visit, or investor — come with different requirements. Manual tracking leads to delays, missing documents, and confusion, especially for companies managing multiple applicants at once.</p>
      
      <h2>Our Approach</h2>
      <p>We created a central system that:</p>
      <ul>
        <li>Unifies all visa workflows in one guided interface</li>
        <li>Supports smart document uploads with OCR-based data extraction</li>
        <li>Helps determine visa eligibility based on rules and previous cases</li>
        <li>Gives users full visibility into their application's progress</li>
        <li>Enables internal teams to manage submissions and validations efficiently</li>
      </ul>
      
      <h2>Technical Architecture</h2>
      <p>The platform is built on a modern stack:</p>
      <ul>
        <li>React + TypeScript frontend</li>
        <li>Node.js (Express) backend</li>
        <li>PostgreSQL for core data management</li>
        <li>Redis for sessions and workflow state</li>
        <li>OCR engine for parsing official documents</li>
      </ul>
      
      <h2>Key Features</h2>
      <ul>
        <li>Smart forms tailored to visa types</li>
        <li>Real-time document validation and feedback</li>
        <li>Status tracking dashboard for applicants and admins</li>
        <li>Reminders and notifications for missing or expiring documents</li>
        <li>Multi-language support for international users</li>
      </ul>
      
      <h2>Impact</h2>
      <p>Part of the broader <strong>SetupInSaudi</strong> ecosystem, our visa system has processed thousands of applications and significantly reduced manual effort. It streamlined internal operations while keeping applicants informed — cutting internal processing time by over 70%.</p>
    `,
    image: "/placeholder.svg?height=300&width=500",
    category: "GovTech",
    tags: ["Saudi Arabia", "Visa Management", "OCR", "SetupInSaudi"],
    readTime: "12 min read",
    publishDate: "2024-01-08",
    gradient: "from-emerald-500 to-blue-600",
  },
  {
    id: "structured-backends-faster-frontends",
    title: "Why Structured Backends Make Frontends Faster",
    excerpt:
      "The architecture decisions that make the difference between a sluggish app and a lightning-fast user experience. Lessons from building scalable SaaS platforms.",
    content: `
      <p>After building backends for multiple SaaS platforms, I've learned that frontend performance often depends on backend architecture decisions made months earlier. Here's what I've learned.</p>
      
      <h2>The Performance Chain</h2>
      <p>Frontend performance is only as good as the data it receives. A well-structured backend can make even a simple frontend feel lightning-fast, while a poorly designed backend can make the most optimized frontend feel sluggish.</p>
      
      <h2>Key Architecture Principles</h2>
      <p>Here are the principles that have made the biggest difference:</p>
      <ul>
        <li><strong>Data Denormalization:</strong> Pre-compute and store frequently accessed data</li>
        <li><strong>Efficient Queries:</strong> Design APIs that return exactly what's needed</li>
        <li><strong>Caching Strategy:</strong> Implement intelligent caching at multiple levels</li>
        <li><strong>Database Indexing:</strong> Optimize for read patterns, not just write patterns</li>
      </ul>
      
      <h2>Real-World Examples</h2>
      <p>In our hotel search platform, we:</p>
      <ul>
        <li>Pre-computed search results for popular destinations</li>
        <li>Used Redis for session and query caching</li>
        <li>Implemented database read replicas for search queries</li>
        <li>Designed APIs that returned paginated, filtered results</li>
      </ul>
      
      <h2>Performance Metrics</h2>
      <p>The results were dramatic:</p>
      <ul>
        <li>Search response time: 200ms → 50ms</li>
        <li>Page load time: 3s → 1.2s</li>
        <li>Database query count: 15 → 3 per page</li>
        <li>User engagement: +40%</li>
      </ul>
      
      <h2>Lessons for Frontend Developers</h2>
      <p>Frontend developers should:</p>
      <ul>
        <li>Understand the data flow from database to UI</li>
        <li>Work closely with backend teams on API design</li>
        <li>Implement proper loading states and error handling</li>
        <li>Use tools like React Query for efficient data fetching</li>
      </ul>
    `,
    image: "/placeholder.svg?height=300&width=500",
    category: "Architecture",
    tags: ["Backend", "Performance", "API Design", "Scalability"],
    readTime: "10 min read",
    publishDate: "2024-01-01",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    id: "e-invoicing-compliance",
    title: "Building ZATCA-Compliant E-invoicing Systems",
    excerpt:
      "A deep dive into implementing Saudi Arabia's e-invoicing requirements, integrating with Xero and Marmin, and ensuring 100% compliance with ZATCA regulations.",
    content: `
      <p>Saudi Arabia's ZATCA e-invoicing requirements are complex and constantly evolving. Here's how we built a system that stays compliant while providing a seamless user experience.</p>
      
      <h2>Understanding ZATCA Requirements</h2>
      <p>ZATCA (Zakat, Tax and Customs Authority) requires all businesses to implement e-invoicing systems that:</p>
      <ul>
        <li>Generate QR codes for each invoice</li>
        <li>Include specific tax calculations</li>
        <li>Report to ZATCA in real-time</li>
        <li>Maintain audit trails</li>
      </ul>
      
      <h2>Our Implementation Strategy</h2>
      <p>We built a comprehensive system that:</p>
      <ul>
        <li>Integrates with existing accounting software (Xero, Marmin)</li>
        <li>Automatically generates compliant invoices</li>
        <li>Handles real-time reporting to ZATCA</li>
        <li>Provides detailed compliance monitoring</li>
      </ul>
      
      <h2>Technical Architecture</h2>
      <p>The system architecture includes:</p>
      <ul>
        <li>RESTful APIs for integration</li>
        <li>Webhook support for real-time updates</li>
        <li>Secure data encryption</li>
        <li>Comprehensive error handling</li>
        <li>Audit logging for compliance</li>
      </ul>
      
      <h2>Integration Challenges</h2>
      <p>Key challenges we solved:</p>
      <ul>
        <li>Mapping different accounting software data structures</li>
        <li>Handling Xero API rate limits</li>
        <li>Ensuring data consistency across systems</li>
        <li>Managing certificate renewals</li>
      </ul>
      
      <h2>Results and Compliance</h2>
      <p>Our system has achieved:</p>
      <ul>
        <li>100% ZATCA compliance rate</li>
        <li>99.9% uptime for reporting</li>
        <li>Integration with 10+ accounting platforms</li>
        <li>Processing of 50,000+ invoices monthly</li>
      </ul>
    `,
    image: "/placeholder.svg?height=300&width=500",
    category: "Compliance",
    tags: ["ZATCA", "E-invoicing", "Saudi Arabia", "Xero", "Marmin"],
    readTime: "15 min read",
    publishDate: "2023-12-20",
    gradient: "from-orange-500 to-red-600",
  },
  {
    id: "ai-resume-matching",
    title: "Building AI-Powered Resume Matching at Scale",
    excerpt:
      "How we improved candidate-job matching efficiency by 40% using AI algorithms and smart data processing at Increw.",
    content: `
      <p>Matching candidates to jobs is more complex than keyword matching. Here's how we built an AI system that understands context, skills, and cultural fit.</p>
      
      <h2>The Problem with Traditional Matching</h2>
      <p>Traditional resume matching relies heavily on keyword matching, which often misses:</p>
      <ul>
        <li>Context and experience relevance</li>
        <li>Skill transferability</li>
        <li>Cultural fit indicators</li>
        <li>Growth potential</li>
      </ul>
      
      <h2>Our AI Approach</h2>
      <p>We developed a multi-layered AI system that:</p>
      <ul>
        <li>Uses NLP to understand job descriptions and resumes</li>
        <li>Analyzes skill relationships and transferability</li>
        <li>Considers cultural and company fit</li>
        <li>Learns from hiring outcomes</li>
      </ul>
      
      <h2>Technical Implementation</h2>
      <p>The system is built with:</p>
      <ul>
        <li>Python with TensorFlow and PyTorch</li>
        <li>Custom NLP models for skill extraction</li>
        <li>Graph databases for skill relationships</li>
        <li>Machine learning pipelines for continuous improvement</li>
      </ul>
      
      <h2>Key Features</h2>
      <p>Our platform includes:</p>
      <ul>
        <li>Intelligent skill mapping and scoring</li>
        <li>Cultural fit analysis</li>
        <li>Predictive hiring success models</li>
        <li>Bias detection and mitigation</li>
        <li>Real-time matching updates</li>
      </ul>
      
      <h2>Results</h2>
      <p>The impact has been significant:</p>
      <ul>
        <li>40% improvement in matching accuracy</li>
        <li>30% faster time-to-hire</li>
        <li>25% better candidate retention</li>
        <li>Reduced bias in hiring decisions</li>
      </ul>
    `,
    image: "/placeholder.svg?height=300&width=500",
    category: "AI/ML",
    tags: ["AI", "Machine Learning", "HRTech", "Resume Parsing"],
    readTime: "11 min read",
    publishDate: "2023-12-10",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: "hotel-search-optimization",
    title: "Optimizing Hotel Search for Millions of Listings",
    excerpt:
      "The technical challenges of building a fast, accurate hotel search engine with MongoDB, Redis caching, and smart indexing strategies.",
    content: `
      <p>Searching through millions of hotel listings in real-time requires careful optimization. Here's how we built a search engine that stays fast at scale.</p>
      
      <h2>The Scale Challenge</h2>
      <p>Our hotel search platform handles:</p>
      <ul>
        <li>2.8 million hotel listings worldwide</li>
        <li>Real-time availability and pricing</li>
        <li>Complex filtering and sorting</li>
        <li>Sub-second response times</li>
      </ul>
      
      <h2>Database Architecture</h2>
      <p>We chose MongoDB for its flexibility and built:</p>
      <ul>
        <li>Optimized indexes for common search patterns</li>
        <li>Geospatial indexes for location-based searches</li>
        <li>Compound indexes for multi-criteria filtering</li>
        <li>Read replicas for search queries</li>
      </ul>
      
      <h2>Caching Strategy</h2>
      <p>Redis caching at multiple levels:</p>
      <ul>
        <li>Query result caching</li>
        <li>Hotel metadata caching</li>
        <li>User session caching</li>
        <li>Popular destination caching</li>
      </ul>
      
      <h2>Search Optimization</h2>
      <p>Key optimizations include:</p>
      <ul>
        <li>Elasticsearch for full-text search</li>
        <li>Query result pagination</li>
        <li>Lazy loading of hotel details</li>
        <li>CDN for static content</li>
      </ul>
      
      <h2>Performance Results</h2>
      <p>Our optimizations achieved:</p>
      <ul>
        <li>Average search time: 150ms</li>
        <li>99.9% uptime</li>
        <li>Support for 10,000+ concurrent users</li>
        <li>50% reduction in database load</li>
      </ul>
      
      <h2>Lessons Learned</h2>
      <p>Key takeaways:</p>
      <ul>
        <li>Index design is crucial for performance</li>
        <li>Caching strategy must be multi-layered</li>
        <li>Monitor and optimize based on real usage patterns</li>
        <li>Plan for scale from the beginning</li>
      </ul>
    `,
    image: "/placeholder.svg?height=300&width=500",
    category: "Performance",
    tags: ["MongoDB", "Redis", "Search Optimization", "Travel Tech"],
    readTime: "9 min read",
    publishDate: "2023-11-25",
    gradient: "from-teal-500 to-green-600",
  },
];

interface ArticlePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { id } = await params;
  const article = articles.find((a) => a.id === id);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-slate-800 transition-all duration-300">
      <Header />

      <main className="container mx-auto px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <Button
              asChild
              variant="outline"
              className="inline-flex items-center gap-2"
            >
              <Link href="/articles">
                <ArrowLeft className="w-4 h-4" />
                Back to Articles
              </Link>
            </Button>
          </div>

          {/* Article Header */}
          <article className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
            {/* Hero Image */}
            <div className="relative h-64 lg:h-80">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute top-6 left-6">
                <Badge
                  className={`bg-gradient-to-r ${article.gradient} text-white border-0`}
                >
                  {article.category}
                </Badge>
              </div>
            </div>

            {/* Article Content */}
            <div className="p-8 lg:p-12">
              {/* Title and Meta */}
              <div className="mb-8">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight">
                  {article.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {new Date(article.publishDate).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    <span>{article.category}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {article.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-emerald-600 border-emerald-600"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Excerpt */}
                <div className="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 rounded-2xl p-6 mb-8">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Article Body */}
              <div
                className="prose prose-lg dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>
          </article>

          {/* Share Section */}
          {/* <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4 p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50">
              <span className="text-gray-600 dark:text-gray-400">
                Share this article:
              </span>
              <ShareButton
                title={article.title}
                text={article.excerpt}
                url={`${
                  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
                }/articles/${article.id}`}
              />
            </div>
          </div> */}
        </div>
      </main>

      <HireMeBadge />
      <LightbulbIcon />
    </div>
  );
}
