import { Mail } from "lucide-react"
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/common/BrandIcons"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

interface SocialLinksProps {
  className?: string
  iconSize?: number
}

export function SocialLinks({ className, iconSize = 20 }: SocialLinksProps) {
  const links = [
    { href: siteConfig.author.github, icon: GithubIcon, label: "GitHub" },
    { href: siteConfig.author.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
    { href: siteConfig.author.twitter, icon: TwitterIcon, label: "Twitter" },
    { href: `mailto:${siteConfig.author.email}`, icon: Mail, label: "Email" },
  ]

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {links.map((link) => {
        const Icon = link.icon
        return (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto") ? undefined : "_blank"}
            rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
            aria-label={link.label}
            className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
          >
            <Icon style={{ width: iconSize, height: iconSize }} />
          </a>
        )
      })}
    </div>
  )
}
