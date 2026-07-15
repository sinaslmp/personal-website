"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Download, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SocialLinks } from "@/components/common/SocialLinks"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:56px_56px] opacity-[0.35] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
        <motion.div
          className="absolute top-0 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 -right-24 w-md h-112 bg-primary/5 rounded-full blur-3xl"
          animate={{ x: [0, -25, 0], y: [0, -15, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                Available for opportunities
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6"
            >
              Building products{" "}
              <span className="text-primary">that matter.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl"
            >
              Senior Full Stack Engineer specializing in AI, Backend & Modern Web.
              Based in Pavia, open to EU remote opportunities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <Button asChild size="lg" className="gap-2">
                <Link href="/projects">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href="/resume.pdf" download>
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg" className="gap-2">
                <Link href="/contact">
                  <Mail className="h-4 w-4" />
                  Contact Me
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row sm:items-center gap-4"
            >
              <SocialLinks />
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Pavia, Italy · Open to Remote EU</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="rounded-xl border border-border bg-card/80 backdrop-blur-sm shadow-xl overflow-hidden">
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-muted/40">
                  <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                  <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                  <span className="ml-3 text-xs text-muted-foreground font-mono">engineer.ts</span>
                </div>
                <div className="p-5 font-mono text-sm leading-relaxed">
                  <div><span className="text-primary">const</span> <span className="text-foreground">engineer</span> = {"{"}</div>
                  <div className="pl-4"><span className="text-muted-foreground">role:</span> <span className="text-emerald-500">&quot;Senior Full Stack&quot;</span>,</div>
                  <div className="pl-4"><span className="text-muted-foreground">stack:</span> [<span className="text-emerald-500">&quot;Next.js&quot;</span>, <span className="text-emerald-500">&quot;Django&quot;</span>, <span className="text-emerald-500">&quot;FastAPI&quot;</span>],</div>
                  <div className="pl-4"><span className="text-muted-foreground">focus:</span> <span className="text-emerald-500">&quot;AI &amp; production systems&quot;</span>,</div>
                  <div className="pl-4"><span className="text-muted-foreground">shipping:</span> <span className="text-primary">true</span>,</div>
                  <div>{"}"}</div>
                </div>
              </div>

              {[
                { label: "AI Engineering", position: "-top-4 -left-6" },
                { label: "PostgreSQL", position: "-bottom-4 -right-6" },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className={`absolute ${badge.position} bg-background border border-border rounded-lg px-3 py-1.5 text-xs font-medium text-foreground shadow-lg`}
                >
                  {badge.label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 border-t border-border"
        >
          {[
            { value: "4+", label: "Years Experience" },
            { value: "5+", label: "Production Apps" },
            { value: "3", label: "Countries Worked" },
            { value: "10k+", label: "Users Served" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
