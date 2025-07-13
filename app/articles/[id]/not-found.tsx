import Header from "@/components/header";
import HireMeBadge from "@/components/hire-me-badge";
import LightbulbIcon from "@/components/lightbulb-icon";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ArticleNotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-slate-800 transition-all duration-300">
      <Header />

      <main className="container mx-auto px-6 lg:px-8 py-16">
        <div className="max-w-2xl mx-auto text-center">
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

          {/* 404 Content */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 p-12">
            <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <FileText className="w-12 h-12 text-white" />
            </div>

            <h1 className="text-6xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Article Not Found
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              The article you're looking for doesn't exist or may have been
              moved. Don't worry though - there are plenty of other interesting
              articles to explore!
            </p>

            <div className="space-y-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white"
              >
                <Link href="/articles">Browse All Articles</Link>
              </Button>

              <div>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <Link href="/">Back to Home</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <HireMeBadge />
      <LightbulbIcon />
    </div>
  );
}
