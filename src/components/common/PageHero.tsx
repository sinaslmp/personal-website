import { AnimatedSection } from "@/components/common/AnimatedSection"

interface PageHeroProps {
  title: string
  subtitle?: string
  badge?: string
}

export function PageHero({ title, subtitle, badge }: PageHeroProps) {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          {badge && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              {badge}
            </div>
          )}
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">{title}</h1>
          <div className="h-1 w-16 bg-primary rounded-full mb-6" />
          {subtitle && (
            <p className="text-lg text-muted-foreground max-w-2xl">{subtitle}</p>
          )}
        </AnimatedSection>
      </div>
    </section>
  )
}
