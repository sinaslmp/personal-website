import type { Metadata } from "next"
import Link from "next/link"
import { Calendar, Clock, Tag } from "lucide-react"
import { PageHero } from "@/components/common/PageHero"
import { AnimatedSection } from "@/components/common/AnimatedSection"
import { Badge } from "@/components/ui/badge"
import { getAllBlogPosts } from "@/lib/mdx"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles on software engineering, AI, Python, and building production systems by Sina Soleymanpour.",
}

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <>
      <PageHero
        title="Blog"
        subtitle="Thoughts on software engineering, AI, Python, and building things that work in production."
        badge="Writing"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="space-y-6">
          {posts.map((post, index) => (
            <AnimatedSection key={post.slug} delay={index * 0.1}>
              <Link href={`/blog/${post.slug}`}>
                <article className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 group">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {post.readingTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                    {post.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <span key={tag} className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Tag className="h-3 w-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            No posts yet. Check back soon.
          </div>
        )}

        {posts.length > 0 && (
          <AnimatedSection delay={posts.length * 0.1} className="mt-6">
            <div className="p-6 rounded-xl border border-dashed border-border text-center">
              <p className="text-sm text-muted-foreground">
                More writing on engineering and AI is on the way. In the meantime, follow along on{" "}
                <a
                  href={siteConfig.author.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  GitHub
                </a>{" "}
                or{" "}
                <Link href="/contact" className="text-primary hover:underline">
                  get in touch
                </Link>
                .
              </p>
            </div>
          </AnimatedSection>
        )}
      </div>
    </>
  )
}
