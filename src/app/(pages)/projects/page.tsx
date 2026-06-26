import type { Metadata } from "next"
import { PageHero } from "@/components/common/PageHero"
import { ProjectsGrid } from "@/components/sections/ProjectsGrid"
import { getAllProjects } from "@/lib/mdx"

export const metadata: Metadata = {
  title: "Projects",
  description: "A selection of production applications built and shipped by Sina Soleymanpour.",
}

export default function ProjectsPage() {
  const projects = getAllProjects()

  return (
    <>
      <PageHero
        title="Projects"
        subtitle="A selection of production applications I have designed, built, and shipped."
        badge="Work"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <ProjectsGrid projects={projects} />
      </div>
    </>
  )
}
