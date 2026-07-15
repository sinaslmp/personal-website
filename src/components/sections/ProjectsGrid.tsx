"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { AnimatedSection } from "@/components/common/AnimatedSection"
import { ProjectCard } from "@/components/common/ProjectCard"
import { cn } from "@/lib/utils"
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
            className={cn(
              "relative px-4 py-2 rounded-full text-sm font-medium transition-colors",
              activeFilter === filter
                ? "text-primary-foreground"
                : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
            )}
          >
            {activeFilter === filter && (
              <motion.span
                layoutId="project-filter-pill"
                className="absolute inset-0 bg-primary rounded-full"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{filter}</span>
          </button>
        ))}
      </AnimatedSection>

      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-muted-foreground">
          No projects match this filter.
        </div>
      )}
    </>
  )
}
