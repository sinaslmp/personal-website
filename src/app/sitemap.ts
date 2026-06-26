import { MetadataRoute } from 'next'
import { getAllProjects, getAllBlogPosts } from '@/lib/mdx'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sinasoleymanpour.dev'

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/projects`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/experience`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.7 },
    { url: `${baseUrl}/skills`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.6 },
    { url: `${baseUrl}/resume`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
  ]

  const projects = getAllProjects().map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const blogPosts = getAllBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...projects, ...blogPosts]
}
