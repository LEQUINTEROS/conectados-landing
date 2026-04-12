import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

export function getAllPosts() {
  if (!fs.existsSync(BLOG_DIR)) return []

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'))

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, '')
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf-8')
    const { data, content } = matter(raw)
    return {
      slug,
      content,
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      author: data.author || 'CONECTADOS',
      tag: data.tag,
      readTime: data.readTime,
      color: data.color || 'violeta',
      cover: data.cover || null,
    }
  })

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getPostBySlug(slug) {
  const posts = getAllPosts()
  return posts.find((p) => p.slug === slug) || null
}

export function getLatestPosts(n = 3) {
  return getAllPosts().slice(0, n)
}
