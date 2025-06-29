import Header from "@/components/header"
import HireMeBadge from "@/components/hire-me-badge"
import LightbulbIcon from "@/components/lightbulb-icon"
import { Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-slate-800 transition-all duration-300">
      <Header />

      <main className="container mx-auto px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 via-blue-600/10 to-purple-600/10 blur-3xl -z-10"></div>
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-gray-900 via-emerald-800 to-gray-900 dark:from-gray-100 dark:via-emerald-300 dark:to-gray-100 bg-clip-text text-transparent leading-tight px-4">
              Let's Connect
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto">
              Ready to build your next automation-rich, integration-first system? Let's discuss how I can help scale
              your business.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Get In Touch</h2>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                      <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">inamk3411@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Phone</p>
                      <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">(+966) 0530554894</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                      <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">Riyadh, Saudi Arabia</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6">Connect With Me</h3>
                  <div className="flex gap-4">
                    <Button
                      asChild
                      size="lg"
                      className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white"
                    >
                      <Link
                        href="https://github.com/Inam3411"
                        target="_blank"
                        className="inline-flex items-center gap-2"
                      >
                        <Github className="w-5 h-5" />
                        GitHub
                      </Link>
                    </Button>

                    <Button asChild size="lg" variant="outline">
                      <Link
                        href="https://linkedin.com/in/mohammad-inamullah"
                        target="_blank"
                        className="inline-flex items-center gap-2"
                      >
                        <Linkedin className="w-5 h-5" />
                        LinkedIn
                      </Link>
                    </Button>

                    <Button asChild size="lg" variant="outline">
                      <Link href="/cv.pdf" className="inline-flex items-center gap-2">
                        <Download className="w-5 h-5" />
                        CV
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">Send a Message</h2>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-gray-700 dark:text-gray-300">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="Your first name"
                      className="mt-2 bg-white/50 dark:bg-gray-900/50 border-gray-300 dark:border-gray-600"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-gray-700 dark:text-gray-300">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Your last name"
                      className="mt-2 bg-white/50 dark:bg-gray-900/50 border-gray-300 dark:border-gray-600"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="mt-2 bg-white/50 dark:bg-gray-900/50 border-gray-300 dark:border-gray-600"
                  />
                </div>

                <div>
                  <Label htmlFor="company" className="text-gray-700 dark:text-gray-300">
                    Company (Optional)
                  </Label>
                  <Input
                    id="company"
                    placeholder="Your company name"
                    className="mt-2 bg-white/50 dark:bg-gray-900/50 border-gray-300 dark:border-gray-600"
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-gray-700 dark:text-gray-300">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    className="mt-2 bg-white/50 dark:bg-gray-900/50 border-gray-300 dark:border-gray-600"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project, requirements, or just say hello!"
                    rows={6}
                    className="mt-2 bg-white/50 dark:bg-gray-900/50 border-gray-300 dark:border-gray-600"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-32 text-center">
            <div className="bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl p-12 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                Let's Build Your Next Product
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                From backend architectures to frontend experiences, I'll help you build systems that automate,
                integrate, and scale — front to back.
              </p>
              <div className="text-lg text-gray-700 dark:text-gray-300">
                <strong>Response Time:</strong> Usually within 24 hours
              </div>
            </div>
          </div>
        </div>
      </main>

      <HireMeBadge />
      <LightbulbIcon />
    </div>
  )
}
