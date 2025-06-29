import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mohammad Inamullah - Full Stack Engineer",
  description:
    "Full Stack Engineer specializing in automation-rich, integration-first SaaS platforms across govtech, HRtech, travel, and health industries.",
  keywords: ["Full Stack Engineer", "Node.js", "React", "SaaS", "Automation", "Integration", "Saudi Arabia", "Govtech"],
  authors: [{ name: "Mohammad Inamullah" }],
  creator: "Mohammad Inamullah",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mohammadInamullah.dev",
    title: "Mohammad Inamullah - Full Stack Engineer",
    description: "Full Stack Engineer specializing in automation-rich, integration-first SaaS platforms",
    siteName: "Mohammad Inamullah Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Inamullah - Full Stack Engineer",
    description: "Full Stack Engineer specializing in automation-rich, integration-first SaaS platforms",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              console.log("Hey recruiter 👋 scroll down to Projects — that's where the fun starts.");
              console.log("Built with Next.js, TypeScript, and Tailwind CSS");
              console.log("Check out the source: https://github.com/Inam3411");
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
