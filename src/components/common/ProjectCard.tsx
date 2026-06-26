import Link from "next/link"
import { ExternalLink, Star } from "lucide-react"
import { GithubIcon } from "@/components/common/BrandIcons"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import type { Project } from "@/types"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className={cn(
      "group h-full flex flex-col transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5",
      project.featured && "border-primary/30"
    )}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              {project.featured && (
                <span className="flex items-center gap-1 text-xs text-primary font-medium">
                  <Star className="h-3 w-3 fill-current" />
                  Featured
                </span>
              )}
              <span className={cn(
                "text-xs px-2 py-0.5 rounded-full font-medium",
                project.status === "Active" ? "bg-green-500/10 text-green-500" :
                project.status === "Production" ? "bg-blue-500/10 text-blue-500" :
                "bg-muted text-muted-foreground"
              )}>
                {project.status}
              </span>
            </div>
            <Link href={`/projects/${project.slug}`}>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
            </Link>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} GitHub repository`}
                className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col gap-4">
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.techStack.slice(0, 5).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 5 && (
            <Badge variant="outline" className="text-xs text-muted-foreground">
              +{project.techStack.length - 5}
            </Badge>
          )}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="text-sm text-primary hover:underline font-medium mt-1"
        >
          View case study →
        </Link>
      </CardContent>
    </Card>
  )
}
