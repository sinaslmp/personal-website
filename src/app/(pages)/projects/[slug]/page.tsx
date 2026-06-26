import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink, Clock, CheckCircle2 } from "lucide-react"
import { GithubIcon } from "@/components/common/BrandIcons"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/common/AnimatedSection"
import { getAllProjects, getProjectBySlug, getProjectSlugs } from "@/lib/mdx"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  try {
    const project = getProjectBySlug(slug)
    return {
      title: project.title,
      description: project.description,
    }
  } catch {
    return { title: "Project Not Found" }
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params

  let project
  try {
    project = getProjectBySlug(slug)
  } catch {
    notFound()
  }

  const allProjects = getAllProjects()
  const currentIndex = allProjects.findIndex((p) => p.slug === slug)
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null

  return (
    <div className="min-h-screen">
      <div className="pt-24 pb-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <Button asChild variant="ghost" className="gap-2 -ml-2">
          <Link href="/projects">
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-12">
        <AnimatedSection>
          <div className="flex items-center gap-2 mb-4">
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
              project.status === "Active" ? "bg-green-500/10 text-green-500" :
              "bg-blue-500/10 text-blue-500"
            }`}>
              {project.status}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              {project.timeline}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">{project.title}</h1>
          <div className="h-1 w-16 bg-primary rounded-full mb-6" />
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>

          <div className="flex gap-3">
            {project.github && (
              <Button asChild variant="outline" className="gap-2">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <GithubIcon className="h-4 w-4" />
                  View on GitHub
                </a>
              </Button>
            )}
            {project.demo && (
              <Button asChild className="gap-2">
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </AnimatedSection>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pb-24">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {[
            { title: "The Problem", content: project.problem },
            { title: "The Solution", content: project.solution },
          ].map((section) => (
            <AnimatedSection key={section.title}>
              <div className="p-6 rounded-xl border border-border bg-card h-full">
                <h2 className="text-lg font-semibold text-foreground mb-3">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mb-8">
          <div className="p-6 rounded-xl border border-border bg-card">
            <h2 className="text-lg font-semibold text-foreground mb-3">Architecture</h2>
            <p className="text-muted-foreground leading-relaxed">{project.architecture}</p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <AnimatedSection>
            <div className="p-6 rounded-xl border border-border bg-card h-full">
              <h2 className="text-lg font-semibold text-foreground mb-3">Key Challenges</h2>
              <p className="text-muted-foreground leading-relaxed">{project.challenges}</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="p-6 rounded-xl border border-border bg-card h-full">
              <h2 className="text-lg font-semibold text-foreground mb-3">Lessons Learned</h2>
              <p className="text-muted-foreground leading-relaxed">{project.lessons}</p>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection className="mb-16">
          <div className="p-6 rounded-xl border border-primary/20 bg-primary/5">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h2 className="text-lg font-semibold text-foreground mb-2">Impact & Results</h2>
                <p className="text-muted-foreground leading-relaxed">{project.impact}</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="flex justify-between gap-4 pt-8 border-t border-border">
          {prevProject ? (
            <Button asChild variant="outline" className="gap-2">
              <Link href={`/projects/${prevProject.slug}`}>
                <ArrowLeft className="h-4 w-4" />
                <div className="text-left">
                  <div className="text-xs text-muted-foreground">Previous</div>
                  <div className="text-sm">{prevProject.title}</div>
                </div>
              </Link>
            </Button>
          ) : <div />}

          {nextProject && (
            <Button asChild variant="outline" className="gap-2 ml-auto">
              <Link href={`/projects/${nextProject.slug}`}>
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">Next</div>
                  <div className="text-sm">{nextProject.title}</div>
                </div>
                <ArrowLeft className="h-4 w-4 rotate-180" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
