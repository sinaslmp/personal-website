import type { Metadata } from "next"
import { Mail, MapPin, Clock } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/common/BrandIcons"
import { PageHero } from "@/components/common/PageHero"
import { AnimatedSection } from "@/components/common/AnimatedSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Sina Soleymanpour — Senior Full Stack Engineer available for remote EU opportunities.",
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get in Touch"
        subtitle="Have a project in mind, a role to discuss, or just want to say hello? I'd love to hear from you."
        badge="Contact"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-5 gap-12">
          <AnimatedSection className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">Contact Info</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">Email</p>
                    <a
                      href={`mailto:${siteConfig.author.email}`}
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {siteConfig.author.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">Location</p>
                    <p className="text-sm font-medium text-foreground">Pavia, Italy</p>
                    <p className="text-xs text-muted-foreground">Open to Remote EU</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                    <Clock className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">Response time</p>
                    <p className="text-sm font-medium text-foreground">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">Find Me Online</h2>
              <div className="flex flex-col gap-3">
                <a
                  href={siteConfig.author.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors group"
                >
                  <GithubIcon className="h-5 w-5 text-muted-foreground group-hover:text-foreground" />
                  <div>
                    <p className="text-sm font-medium text-foreground">GitHub</p>
                    <p className="text-xs text-muted-foreground">@sinaslmp</p>
                  </div>
                </a>
                <a
                  href={siteConfig.author.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors group"
                >
                  <LinkedinIcon className="h-5 w-5 text-muted-foreground group-hover:text-foreground" />
                  <div>
                    <p className="text-sm font-medium text-foreground">LinkedIn</p>
                    <p className="text-xs text-muted-foreground">Sina Soleymanpour</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="text-foreground font-medium">Currently open to opportunities.</span>{" "}
                Looking for senior engineering roles at European companies building ambitious products.
                Remote or hybrid in Pavia.
              </p>
            </div>
          </AnimatedSection>

          <div className="lg:col-span-3">
            <AnimatedSection delay={0.1}>
              <h2 className="text-lg font-semibold text-foreground mb-6">Send a Message</h2>
            </AnimatedSection>
            <ContactSection />
          </div>
        </div>
      </div>
    </>
  )
}
