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
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-violet-500/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl animate-pulse delay-500" />
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
              Based in Milan, open to EU remote opportunities.
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
                <span>Milan, Italy · Open to Remote EU</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-spin" style={{ animationDuration: "20s" }} />
              <div className="absolute inset-8 rounded-full border border-primary/30 animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }} />
              <div className="absolute inset-16 rounded-full border border-primary/40 animate-spin" style={{ animationDuration: "10s" }} />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-2xl shadow-indigo-500/25">
                    <span className="text-white text-3xl font-bold">S</span>
                  </div>
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 opacity-30 blur-md" />
                </div>
              </div>

              {[
                { label: "AI Engineering", position: "top-2 left-2" },
                { label: "Django / FastAPI", position: "top-2 right-2" },
                { label: "Next.js", position: "bottom-2 left-2" },
                { label: "PostgreSQL", position: "bottom-2 right-2" },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className={`absolute ${badge.position} bg-background/90 backdrop-blur-sm border border-border rounded-lg px-3 py-1.5 text-xs font-medium text-foreground shadow-lg`}
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
            { value: "8+", label: "Years Experience" },
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
