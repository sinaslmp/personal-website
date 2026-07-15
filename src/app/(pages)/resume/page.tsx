import type { Metadata } from "next"
import Link from "next/link"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/common/AnimatedSection"
import { experiences, education, certifications } from "@/config/experience"
import { skills } from "@/config/skills"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume of Sina Soleymanpour — Senior Full Stack Engineer.",
}

export default function ResumePage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="flex items-start justify-between mb-12 flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Resume</h1>
            <p className="text-muted-foreground mt-1">Senior Full Stack Engineer — Pavia, Italy</p>
          </div>
          <Button asChild className="gap-2">
            <a href="/resume.pdf" download>
              <Download className="h-4 w-4" />
              Download PDF
            </a>
          </Button>
        </AnimatedSection>

        <div className="border border-border rounded-2xl bg-card overflow-hidden">
          <div className="p-8 border-b border-border bg-primary/5">
            <h2 className="text-2xl font-bold text-foreground">{siteConfig.author.name}</h2>
            <p className="text-primary font-medium mt-1">Senior Full Stack Engineer</p>
            <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
              <span>{siteConfig.author.location}</span>
              <span>·</span>
              <a href={`mailto:${siteConfig.author.email}`} className="hover:text-foreground transition-colors">
                {siteConfig.author.email}
              </a>
              <span>·</span>
              <a href={siteConfig.author.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                GitHub
              </a>
              <span>·</span>
              <a href={siteConfig.author.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          <section className="p-8 border-b border-border">
            <h3 className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">Summary</h3>
            <p className="text-muted-foreground leading-relaxed">
              Senior Full Stack Engineer with 4+ years of experience building production applications. Specializing in AI-powered systems, Python backend development (Django, FastAPI), and modern web frontends (Next.js, React). Based in Pavia, Italy, open to remote EU opportunities.
            </p>
          </section>

          <section className="p-8 border-b border-border">
            <h3 className="text-xs font-semibold text-primary uppercase tracking-wider mb-6">Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp) => (
                <div key={exp.company}>
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-1 mb-2">
                    <div>
                      <h4 className="font-semibold text-foreground">{exp.role}</h4>
                      <p className="text-sm text-primary">{exp.company} — {exp.location}</p>
                    </div>
                    <span className="text-sm text-muted-foreground shrink-0">{exp.period}</span>
                  </div>
                  <ul className="space-y-1 mt-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1 shrink-0">▹</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="p-8 border-b border-border">
            <h3 className="text-xs font-semibold text-primary uppercase tracking-wider mb-6">Skills</h3>
            <dl className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "Languages", value: skills.languages.join(", ") },
                { label: "Backend", value: skills.backend.join(", ") },
                { label: "Frontend", value: skills.frontend.join(", ") },
                { label: "Databases", value: skills.databases.join(", ") },
                { label: "AI / ML", value: skills.ai.join(", ") },
                { label: "Cloud / DevOps", value: [...skills.cloud, ...skills.devops].join(", ") },
              ].map((item) => (
                <div key={item.label}>
                  <dt className="text-xs font-medium text-muted-foreground mb-0.5">{item.label}</dt>
                  <dd className="text-sm text-foreground">{item.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="p-8 border-b border-border">
            <h3 className="text-xs font-semibold text-primary uppercase tracking-wider mb-6">Education</h3>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.degree} className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <div>
                    <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                    <p className="text-sm text-primary">{edu.institution}</p>
                  </div>
                  <span className="text-sm text-muted-foreground shrink-0">{edu.period}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="p-8">
            <h3 className="text-xs font-semibold text-primary uppercase tracking-wider mb-6">Certifications</h3>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div key={cert.name} className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <div>
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      {cert.name}
                    </a>
                    <p className="text-sm text-primary">{cert.issuer}</p>
                  </div>
                  <span className="text-sm text-muted-foreground shrink-0">{cert.year}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Want the full PDF?{" "}
          <a href="/resume.pdf" download className="text-primary hover:underline">
            Download it here
          </a>
          {" "}or{" "}
          <Link href="/contact" className="text-primary hover:underline">
            get in touch
          </Link>
          .
        </p>
      </div>
    </div>
  )
}
