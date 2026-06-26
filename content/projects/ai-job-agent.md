---
title: "AI Job Agent"
description: "Autonomous AI agent that searches job boards, matches opportunities to your profile, customizes application materials, and tracks your job search pipeline — all without manual effort."
problem: "Job searching is a full-time job. Manually browsing boards, tailoring CVs, and tracking applications is exhausting and error-prone. Most candidates apply to ill-fitting roles."
solution: "Built a multi-agent system that continuously monitors job boards (LinkedIn, Indeed, company career pages), scores opportunities against a candidate profile using semantic similarity, generates tailored cover letters, and maintains a searchable CRM for the entire pipeline."
architecture: "FastAPI backend with APScheduler for periodic scraping, LangChain agents for reasoning and generation, pgvector for semantic job matching, and a React dashboard for pipeline visibility."
techStack: ["Python", "FastAPI", "LangChain", "OpenAI API", "PostgreSQL", "pgvector", "React", "Playwright", "APScheduler"]
challenges: "Anti-scraping measures on major job boards required building a resilient scraping layer with rotating proxies, rate limiting, and fallback strategies."
lessons: "LLM quality is only as good as your prompt engineering. Structured output with Pydantic validation was essential for reliable agent outputs."
impact: "Reduced job search time from 20+ hours/week to under 2 hours of review. Increased application-to-interview rate by matching only high-fit opportunities."
timeline: "4 months"
status: "Active"
featured: true
github: "https://github.com/sinaslmp/ai-job-agent"
demo: ""
tags: ["AI", "FastAPI", "LangChain", "Automation"]
---
