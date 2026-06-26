---
title: "Multimedia Scheduler"
description: "Full-stack queue scheduling simulator that visualizes and benchmarks CPU scheduling algorithms — FIFO, Priority Queue, and Round Robin — with real-time metrics, interactive controls, and live performance charts."
problem: "Understanding scheduling algorithms in theory is straightforward, but seeing how they behave under real workloads — with competing processes, priority inversions, and starvation scenarios — requires hands-on experimentation."
solution: "Built an interactive scheduling simulator where users define process sets, choose algorithms, and watch execution unfold step by step. Real-time charts show throughput, waiting time, turnaround time, and CPU utilization side-by-side across algorithms."
architecture: "FastAPI backend handles scheduling logic and simulation state — each algorithm is implemented as a clean Python class with deterministic, testable behavior. Next.js 14 frontend with TypeScript renders the simulation canvas and live charts. Docker Compose bundles the full stack for one-command startup."
techStack: ["FastAPI", "Python", "Next.js", "TypeScript", "Docker", "TailwindCSS"]
challenges: "Simulating real-time step-by-step execution with accurate time-slicing for Round Robin required careful state management on both backend and frontend. Keeping the UI in sync with simulation state at variable speeds demanded a clean event-driven architecture."
lessons: "Building a simulator forced a much deeper understanding of the algorithms than just implementing them. Edge cases like process arrival during execution and priority ties exposed subtle correctness issues invisible in textbook descriptions."
impact: "Used as a learning and teaching tool for OS concepts. Allows direct empirical comparison of algorithm performance across different workload profiles."
timeline: "3 months"
status: "Production"
featured: false
github: "https://github.com/sinaslmp/multimedia-scheduler"
demo: ""
tags: ["FastAPI", "Next.js", "Systems", "Simulation"]
---
