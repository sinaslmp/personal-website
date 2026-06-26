---
title: "LearnItali"
description: "Full-stack Italian language learning platform built for Persian speakers. Combines spaced repetition, AI-powered conversation practice, and structured curriculum delivery via a Next.js frontend and NestJS backend."
problem: "Generic language apps like Duolingo don't account for the specific linguistic distance between Persian and Italian — learners from Persian backgrounds face unique vocabulary and grammar challenges that require targeted content."
solution: "Built a bilingual learning platform with Persian-to-Italian curriculum mapping, AI conversation partners for speaking practice, and a spaced repetition engine that adapts to each learner's retention curve."
architecture: "Next.js 14 frontend with server components for fast initial loads. NestJS backend exposing REST APIs with JWT auth, PostgreSQL for user progress and content, Redis for session management and caching, and Docker Compose for local development and deployment."
techStack: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Redis", "Docker", "OpenAI API", "TailwindCSS"]
challenges: "Mapping Persian linguistic patterns to Italian equivalents required domain expertise and careful content structuring. Also built a custom spaced repetition scheduler that outperformed generic SM-2 for this language pair."
lessons: "Bilingual UX requires more than translation — the entire information architecture must adapt to the primary language of the learner. Building for a specific cultural context produces dramatically better outcomes."
impact: "Used by Persian-speaking learners in Italy and abroad. The platform provides a uniquely native learning experience not available in any mainstream language app for this audience."
timeline: "4 months"
status: "Active"
featured: true
github: "https://github.com/sinaslmp/learnitali"
demo: ""
tags: ["Next.js", "NestJS", "EdTech", "Language Learning"]
---
