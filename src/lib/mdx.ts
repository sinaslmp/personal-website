import fs from "fs"
import path from "path"
import matter from "gray-matter"
import type { Project, BlogPost } from "@/types"

const projectsDirectory = path.join(process.cwd(), "content/projects")
const blogDirectory = path.join(process.cwd(), "content/blog")

export function getProjectSlugs(): string[] {
  return fs.readdirSync(projectsDirectory).map((file) => file.replace(/\.md$/, ""))
}

export function getProjectBySlug(slug: string): Project {
  const fullPath = path.join(projectsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data } = matter(fileContents)
  return { slug, ...data } as Project
}

export function getAllProjects(): Project[] {
  const slugs = getProjectSlugs()
  return slugs.map((slug) => getProjectBySlug(slug)).sort((a, b) =>
    a.featured === b.featured ? 0 : a.featured ? -1 : 1
  )
}

export function getBlogSlugs(): string[] {
  return fs.readdirSync(blogDirectory).map((file) => file.replace(/\.md$/, ""))
}

export function getBlogPostBySlug(slug: string): BlogPost {
  const fullPath = path.join(blogDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)
  return { slug, content, ...data } as BlogPost
}

export function getAllBlogPosts(): BlogPost[] {
  const slugs = getBlogSlugs()
  return slugs
    .map((slug) => getBlogPostBySlug(slug))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
