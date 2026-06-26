---
title: "MedTech Mini WebApp"
description: "Medical imaging phase simulator that processes CT scan images to distinguish arterial and venous phases. Built with a Vue.js frontend, FastAPI backend, and an ML model hosted on Hugging Face Spaces."
problem: "Radiologists and medical students need tools to understand and practice identifying arterial vs. venous contrast phases in CT imaging — a critical skill that typically requires expensive clinical software or physical training."
solution: "Built a web-based image processing tool where users upload CT scan images, the system applies arterial and venous phase simulation algorithms, and returns annotated outputs with phase classification. Deployed the ML model on Hugging Face Spaces for free, accessible inference."
architecture: "Vue.js + Vite frontend hosted on GitHub Pages for zero-cost static hosting. FastAPI backend handles image upload, preprocessing, and inference orchestration. ML model served via Hugging Face Spaces API. Docker Compose for local full-stack development."
techStack: ["Vue.js", "TypeScript", "FastAPI", "Python", "Docker", "Hugging Face Spaces", "Vite"]
challenges: "Medical image processing demands precision — small errors in phase simulation produce clinically misleading outputs. Calibrating the contrast enhancement parameters for realistic arterial/venous appearance required close collaboration with domain knowledge."
lessons: "Deploying ML models doesn't require expensive GPU infrastructure. Hugging Face Spaces provided production-quality inference at zero cost, making the tool freely accessible to medical students worldwide."
impact: "Deployed and publicly accessible via GitHub Pages and Hugging Face Spaces. Provides a free, browser-based alternative to expensive clinical imaging software for educational purposes."
timeline: "3 months"
status: "Production"
featured: false
github: "https://github.com/sinaslmp/medtech-mini-webapp"
demo: ""
tags: ["FastAPI", "Vue.js", "MedTech", "Machine Learning"]
---
