import { cn } from "@/lib/utils"

interface SkillBadgeProps {
  skill: string
  category?: string
  size?: "sm" | "md" | "lg"
}

const categoryColors: Record<string, string> = {
  languages: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  frontend: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  backend: "bg-green-500/10 text-green-400 border-green-500/20",
  databases: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  ai: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  cloud: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  devops: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  tools: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
}

const sizeClasses = {
  sm: "text-xs px-2 py-0.5",
  md: "text-sm px-3 py-1",
  lg: "text-base px-4 py-1.5",
}

export function SkillBadge({ skill, category, size = "md" }: SkillBadgeProps) {
  const colorClass = category
    ? categoryColors[category] ?? "bg-muted text-muted-foreground border-border"
    : "bg-muted text-muted-foreground border-border"

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border font-medium transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-sm",
        colorClass,
        sizeClasses[size]
      )}
    >
      {skill}
    </span>
  )
}
