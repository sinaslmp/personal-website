import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { HeroSection } from "@/components/sections/HeroSection"
import { AnimatedSection } from "@/components/common/AnimatedSection"
import { ProjectCard } from "@/components/common/ProjectCard"
import { SkillBadge } from "@/components/common/SkillBadge"
import { Button } from "@/components/ui/button"
import { getAllProjects } from "@/lib/mdx"
import { skills } from "@/config/skills"

export const metadata: Metadata = {
  title: "Sina Soleymanpour — Senior Full Stack Engineer",
  description: "Senior Full Stack Engineer specializing in AI, Python, Django, FastAPI, and Next.js. Based in Milan, Italy.",
}

export default function HomePage() {
  const featuredProjects = getAllProjects().filter((p) => p.featured).slice(0, 3)
  const highlightSkills = [
    ...skills.languages.slice(0, 3),
    ...skills.backend.slice(0, 3),
    ...skills.frontend.slice(0, 2),
    ...skills.ai.slice(0, 3),
  ]

  return (
    <>
      <HeroSection />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Featured Projects</h2>
              <p className="text-muted-foreground">Production applications I have built and shipped.</p>
            </div>
            <Button asChild variant="ghost" className="gap-2 hidden sm:flex">
              <Link href="/projects">
                View all projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <AnimatedSection key={project.slug} delay={index * 0.1}>
                <ProjectCard project={project} />
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Button asChild variant="outline">
              <Link href="/projects">View all projects</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-2">Technical Toolkit</h2>
            <p className="text-muted-foreground">Technologies I use to build production-grade applications.</p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3">
              {highlightSkills.map((skill) => (
                <SkillBadge key={skill} skill={skill} size="lg" />
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3} className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/skills">View full skill set</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5 border-y border-border">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Let&apos;s Build Something Great Together
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I am currently open to senior engineering roles at European companies — remote or hybrid.
              If you are building something ambitious and need a full stack engineer who ships,
              let&apos;s talk.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="gap-2">
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/resume">View Resume</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
