import type { Metadata } from "next"
import { PageHero } from "@/components/common/PageHero"
import { AnimatedSection } from "@/components/common/AnimatedSection"
import { SkillBadge } from "@/components/common/SkillBadge"
import { skills } from "@/config/skills"

export const metadata: Metadata = {
  title: "Skills",
  description: "Technical skills of Sina Soleymanpour — Full Stack Engineer specializing in Python, Django, FastAPI, and Next.js.",
}

const skillCategories = [
  { key: "languages" as keyof typeof skills, label: "Languages", description: "Programming languages I work with daily" },
  { key: "backend" as keyof typeof skills, label: "Backend", description: "Server-side frameworks and patterns" },
  { key: "frontend" as keyof typeof skills, label: "Frontend", description: "UI frameworks and styling tools" },
  { key: "databases" as keyof typeof skills, label: "Databases", description: "Data storage and retrieval systems" },
  { key: "ai" as keyof typeof skills, label: "AI & ML", description: "AI tools, APIs, and techniques" },
  { key: "cloud" as keyof typeof skills, label: "Cloud & Hosting", description: "Cloud platforms and deployment" },
  { key: "devops" as keyof typeof skills, label: "DevOps", description: "CI/CD, containerization, and automation" },
  { key: "tools" as keyof typeof skills, label: "Tools", description: "Development tools and productivity software" },
]

export default function SkillsPage() {
  return (
    <>
      <PageHero
        title="Skills"
        subtitle="The technologies, tools, and frameworks I use to build production-grade software."
        badge="Technical"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid sm:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={category.key} delay={index * 0.05}>
              <div className="p-6 rounded-xl border border-border bg-card h-full transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                <h2 className="text-base font-semibold text-foreground mb-1">{category.label}</h2>
                <p className="text-xs text-muted-foreground mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skills[category.key].map((skill) => (
                    <SkillBadge key={skill} skill={skill} category={category.key} />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </>
  )
}
