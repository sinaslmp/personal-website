import { AnimatedSection } from "@/components/common/AnimatedSection"
import { Badge } from "@/components/ui/badge"
import type { Experience } from "@/types"

interface TimelineItemProps {
  experience: Experience
  index: number
  isLast: boolean
}

export function TimelineItem({ experience, index, isLast }: TimelineItemProps) {
  return (
    <AnimatedSection delay={index * 0.1}>
      <div className="relative flex gap-8">
        <div className="relative flex flex-col items-center">
          <div className="w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20 mt-1.5 shrink-0 z-10" />
          {!isLast && (
            <div className="w-px flex-1 bg-border mt-2" />
          )}
        </div>

        <div className="pb-12 flex-1">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
            <div>
              <h3 className="text-lg font-semibold text-foreground">{experience.role}</h3>
              <p className="text-primary font-medium">{experience.company}</p>
              <p className="text-sm text-muted-foreground">{experience.location}</p>
            </div>
            <span className="text-sm text-muted-foreground whitespace-nowrap shrink-0 mt-1">
              {experience.period}
            </span>
          </div>

          <p className="text-muted-foreground mb-4 leading-relaxed">{experience.description}</p>

          <ul className="space-y-2 mb-4">
            {experience.achievements.map((achievement, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-primary mt-1 shrink-0">▹</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5">
            {experience.tech.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
