import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/common/BrandIcons"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/common/AnimatedSection"
import { getBlogPostBySlug, getBlogSlugs } from "@/lib/mdx"
import { siteConfig } from "@/config/site"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  try {
    const post = getBlogPostBySlug(slug)
    return {
      title: post.title,
      description: post.description,
    }
  } catch {
    return { title: "Post Not Found" }
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params

  let post
  try {
    post = getBlogPostBySlug(slug)
  } catch {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <div className="pt-24 pb-8 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <Button asChild variant="ghost" className="gap-2 -ml-2 mb-8">
          <Link href="/blog">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        <AnimatedSection>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge variant="secondary">{post.category}</Badge>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-3.5 w-3.5" />
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              {post.readingTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{post.title}</h1>
          <div className="h-1 w-16 bg-primary rounded-full mb-6" />
          <p className="text-lg text-muted-foreground leading-relaxed">{post.description}</p>
        </AnimatedSection>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="whitespace-pre-wrap text-muted-foreground leading-relaxed">
          {post.content}
        </div>
      </article>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="p-6 rounded-xl border border-border bg-card">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shrink-0">
              <span className="text-white font-bold">S</span>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">{siteConfig.author.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">Senior Full Stack Engineer · Milan, Italy</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Building AI-powered systems, backend APIs, and modern web applications. Open to remote EU opportunities.
              </p>
              <div className="flex gap-2">
                <a
                  href={siteConfig.author.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
                <a
                  href={siteConfig.author.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
