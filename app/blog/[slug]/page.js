import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { marked } from 'marked'
import { getAllPosts, getPostBySlug } from '../../../lib/blog'

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: 'Artículo no encontrado — CONECTADOS' }
  return {
    title: `${post.title} — CONECTADOS`,
    description: post.excerpt,
  }
}

function formatDate(d) {
  try {
    return new Date(d).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })
  } catch {
    return d
  }
}

function renderMarkdown(md) {
  const html = marked.parse(md)
  return html
    .replace(/<h2>/g, '<h2 class="text-2xl sm:text-3xl font-display font-bold text-violeta-700 mt-12 mb-5">')
    .replace(/<h3>/g, '<h3 class="text-xl font-display font-bold text-violeta-700 mt-8 mb-4">')
    .replace(/<h4>/g, '<h4 class="font-display font-bold text-violeta-700 mt-6 mb-3">')
    .replace(/<p>/g, '<p class="text-gray-700 leading-relaxed mb-5 text-base sm:text-lg">')
    .replace(/<ul>/g, '<ul class="list-disc pl-6 mb-5 space-y-2 text-gray-700 text-base sm:text-lg">')
    .replace(/<ol>/g, '<ol class="list-decimal pl-6 mb-5 space-y-2 text-gray-700 text-base sm:text-lg">')
    .replace(/<li>/g, '<li class="leading-relaxed">')
    .replace(/<blockquote>/g, '<blockquote class="border-l-4 border-turquesa-400 pl-5 py-2 my-6 bg-turquesa-50/40 rounded-r-xl text-violeta-700 italic">')
    .replace(/<a /g, '<a class="text-violeta-400 underline hover:text-violeta-700" ')
    .replace(/<strong>/g, '<strong class="font-bold text-violeta-700">')
    .replace(/<hr>/g, '<hr class="my-10 border-gray-200" />')
}

export default async function BlogPost({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-100 px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo-square.png" alt="CONECTADOS" width={32} height={32} />
            <span className="font-display font-bold text-violeta-400">CONECTADOS</span>
          </Link>
          <Link href="/blog" className="text-sm text-violeta-400 hover:text-turquesa-500 font-semibold">
            ← Todos los artículos
          </Link>
        </div>
      </nav>

      {post.cover && (
        <div className="w-full aspect-[16/5] sm:aspect-[16/4] max-h-[240px] overflow-hidden bg-violeta-50">
          <img src={post.cover} alt="" className="w-full h-full object-cover" />
        </div>
      )}

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
            post.color === 'violeta' ? 'bg-violeta-50 text-violeta-400' : 'bg-turquesa-50 text-turquesa-500'
          }`}>
            {post.tag}
          </span>
          <span className="text-xs text-gray-400">{post.readTime} de lectura</span>
          <span className="text-xs text-gray-400">· {formatDate(post.date)}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-violeta-700 leading-[1.2] mb-6">
          {post.title}
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed mb-10 border-l-4 border-violeta-200 pl-5">
          {post.excerpt}
        </p>

        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
        />

        <div className="mt-16 pt-8 border-t border-gray-200 flex items-center justify-between">
          <span className="text-sm text-gray-500">Por {post.author}</span>
          <Link href="/blog" className="text-sm text-violeta-400 hover:text-turquesa-500 font-semibold">
            Ver más artículos →
          </Link>
        </div>

        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-violeta-50 to-turquesa-50 border border-violeta-100">
          <h3 className="font-display font-bold text-violeta-700 text-xl mb-2">
            ¿Te suma este tipo de contenido?
          </h3>
          <p className="text-gray-700 mb-4">
            CONECTADOS es una comunidad abierta. Si quieres aprender, colaborar o apoyar, este es tu sitio.
          </p>
          <Link href="/#suma" className="btn-primary inline-block bg-violeta-400 hover:bg-violeta-500 text-white font-bold px-6 py-3 rounded-full text-sm">
            Sumarme
          </Link>
        </div>
      </article>
    </div>
  )
}
