"use client"

import { useState } from "react"
import { AnimatedSection } from "@/components/common/AnimatedSection"
import { ProjectCard } from "@/components/common/ProjectCard"
import type { Project } from "@/types"

const filterOptions = ["All", "Featured", "AI", "Backend", "Frontend"]

interface ProjectsGridProps {
  projects: Project[]
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [activeFilter, setActiveFilter] = useState("All")

  const filtered = projects.filter((project) => {
    if (activeFilter === "All") return true
    if (activeFilter === "Featured") return project.featured
    return project.tags.some((tag) =>
      tag.toLowerCase().includes(activeFilter.toLowerCase())
    )
  })

  return (
    <>
      <AnimatedSection className="flex flex-wrap gap-2 mb-10">
        {filterOptions.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === filter
                ? "bg-primary text-primary-foreground"
                : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
            }`}
          >
            {filter}
          </button>
        ))}
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project, index) => (
          <AnimatedSection key={project.slug} delay={index * 0.05}>
            <ProjectCard project={project} />
          </AnimatedSection>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-muted-foreground">
          No projects match this filter.
        </div>
      )}
    </>
  )
}
