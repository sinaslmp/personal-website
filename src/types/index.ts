export interface Project {
  slug: string
  title: string
  description: string
  problem: string
  solution: string
  architecture: string
  techStack: string[]
  challenges: string
  lessons: string
  impact: string
  timeline: string
  status: string
  featured: boolean
  github: string
  demo: string
  tags: string[]
}

export interface BlogPost {
  slug: string
  title: string
  date: string
  category: string
  tags: string[]
  description: string
  readingTime: string
  content: string
}

export interface Experience {
  role: string
  company: string
  location: string
  period: string
  description: string
  achievements: string[]
  tech: string[]
}

export interface Education {
  degree: string
  institution: string
  period: string
  description: string
}

export interface Certification {
  name: string
  issuer: string
  year: string
  url: string
}

export interface NavLink {
  href: string
  label: string
}
