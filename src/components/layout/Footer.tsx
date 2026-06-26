import Link from "next/link"
import { Mail, MapPin } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/common/BrandIcons"
import { siteConfig } from "@/config/site"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-1 mb-3">
              <span className="text-lg font-bold text-foreground">Sina</span>
              <span className="text-lg font-bold text-primary">.</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Senior Full Stack Engineer specializing in AI, Backend & Modern Web. Based in Milan, open to EU remote opportunities.
            </p>
            <div className="flex items-center gap-1 mt-3 text-sm text-muted-foreground">
              <MapPin className="h-3 w-3" />
              <span>Milan, Italy</span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Navigation</h3>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About" },
                { href: "/projects", label: "Projects" },
                { href: "/experience", label: "Experience" },
                { href: "/skills", label: "Skills" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Connect</h3>
            <div className="flex flex-col gap-2">
              <a
                href={siteConfig.author.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub profile"
              >
                <GithubIcon className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <a
                href={siteConfig.author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${siteConfig.author.email}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Send email"
              >
                <Mail className="h-4 w-4" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Sina Soleymanpour. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Next.js
            </a>{" "}
            & deployed on{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Vercel
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
