import type { Metadata } from "next"
import { Brain, Server, Globe, Code2 } from "lucide-react"
import { PageHero } from "@/components/common/PageHero"
import { AnimatedSection } from "@/components/common/AnimatedSection"
import { SkillBadge } from "@/components/common/SkillBadge"
import { education } from "@/config/experience"

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Sina Soleymanpour — Senior Full Stack Engineer based in Milan, Italy.",
}

const whatIDo = [
  {
    icon: Brain,
    title: "AI Engineering",
    description: "Building production AI systems — from RAG pipelines to autonomous agents. I bridge the gap between AI research and practical software.",
  },
  {
    icon: Server,
    title: "Backend Architecture",
    description: "Designing scalable backend systems with Django and FastAPI. From database schema to API design to deployment.",
  },
  {
    icon: Globe,
    title: "Full Stack Products",
    description: "Shipping complete products end-to-end — from Next.js frontends to Python backends to cloud infrastructure.",
  },
  {
    icon: Code2,
    title: "Open Source",
    description: "Contributing to and maintaining open source projects. Building in public and sharing knowledge with the community.",
  },
]

const interests = [
  "LLM Applications", "RAG Systems", "API Design", "System Architecture",
  "Database Optimization", "Developer Experience", "Open Source", "Language Learning",
  "Italian Culture", "Football", "Coffee",
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Me"
        subtitle="Senior Full Stack Engineer based in Milan, building AI-powered products and backend systems."
        badge="About"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          <AnimatedSection className="lg:col-span-2 space-y-5">
            <p className="text-lg text-foreground leading-relaxed">
              I&apos;m Sina Soleymanpour, a Senior Full Stack Engineer based in Milan, Italy with a deep focus on AI-powered systems, backend architecture, and modern web applications. With expertise spanning Python, Django, FastAPI, and Next.js, I build products that are fast, reliable, and production-grade. Currently open to senior engineering roles at European companies — remote or hybrid.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey in software engineering began with a fascination for how intelligent systems could automate complex human tasks. Over the years, I&apos;ve architected and shipped backend services handling millions of requests, built AI agents that reduce manual work by 80%, and created full-stack products from zero to production.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m particularly drawn to the intersection of AI and practical software — building systems that don&apos;t just work, but genuinely improve people&apos;s lives. When I&apos;m not engineering, I&apos;m exploring the latest AI research, contributing to open source, or learning Italian in the city I now call home.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="space-y-4">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground mb-4">Quick Facts</h3>
              <dl className="space-y-3">
                {[
                  { label: "Location", value: "Milan, Italy" },
                  { label: "Status", value: "Open to opportunities" },
                  { label: "Focus", value: "AI & Backend Engineering" },
                  { label: "Experience", value: "4+ years" },
                  { label: "Languages", value: "English, Persian, Italian (learning)" },
                ].map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-xs text-muted-foreground uppercase tracking-wider">{fact.label}</dt>
                    <dd className="text-sm font-medium text-foreground mt-0.5">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection className="mb-20">
          <h2 className="text-2xl font-bold text-foreground mb-8">What I Do</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {whatIDo.map((item, index) => {
              const Icon = item.icon
              return (
                <AnimatedSection key={item.title} delay={index * 0.1}>
                  <div className="flex gap-4 p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors">
                    <div className="shrink-0 p-2 rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </AnimatedSection>

        <AnimatedSection className="mb-20">
          <h2 className="text-2xl font-bold text-foreground mb-6">Interests & Curiosities</h2>
          <div className="flex flex-wrap gap-2">
            {interests.map((interest) => (
              <SkillBadge key={interest} skill={interest} />
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <h2 className="text-2xl font-bold text-foreground mb-8">Education</h2>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.degree} className="p-6 rounded-xl border border-border bg-card">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                    <p className="text-primary text-sm">{edu.institution}</p>
                  </div>
                  <span className="text-sm text-muted-foreground shrink-0">{edu.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{edu.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </>
  )
}
