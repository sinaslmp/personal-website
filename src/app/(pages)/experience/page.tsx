import type { Metadata } from "next"
import { GraduationCap } from "lucide-react"
import { PageHero } from "@/components/common/PageHero"
import { AnimatedSection } from "@/components/common/AnimatedSection"
import { TimelineItem } from "@/components/common/TimelineItem"
import { experiences, education } from "@/config/experience"

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience of Sina Soleymanpour — Senior Full Stack Engineer.",
}

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        title="Experience"
        subtitle="My professional journey building software across startups, agencies, and as an independent engineer."
        badge="Career"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <AnimatedSection className="mb-4">
          <h2 className="text-xl font-semibold text-foreground mb-10">Work Experience</h2>
        </AnimatedSection>

        <div>
          {experiences.map((experience, index) => (
            <TimelineItem
              key={`${experience.company}-${index}`}
              experience={experience}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>

        <AnimatedSection className="mt-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-primary/10">
              <GraduationCap className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-xl font-semibold text-foreground">Education</h2>
          </div>

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
