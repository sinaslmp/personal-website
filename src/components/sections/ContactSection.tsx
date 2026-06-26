"use client"

import { useState } from "react"
import { Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/common/AnimatedSection"
import { siteConfig } from "@/config/site"

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("submitting")

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/mnjkpkgw", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })

      if (response.ok) {
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <AnimatedSection>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1.5">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
            placeholder="What is this about?"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
            placeholder="Tell me about your project, opportunity, or just say hello..."
          />
        </div>

        <div className="flex items-center gap-4">
          <Button
            type="submit"
            disabled={status === "submitting"}
            className="gap-2"
            size="lg"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Send Message
              </>
            )}
          </Button>

          {status === "success" && (
            <p className="text-sm text-green-500 font-medium">
              Message sent successfully! I will get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-500 font-medium">
              Something went wrong. Please try emailing me directly at{" "}
              <a href={`mailto:${siteConfig.author.email}`} className="underline">
                {siteConfig.author.email}
              </a>
            </p>
          )}
        </div>
      </form>
    </AnimatedSection>
  )
}
