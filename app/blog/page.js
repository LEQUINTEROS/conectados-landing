import Image from 'next/image'
import Link from 'next/link'
import { getAllPosts } from '../../lib/blog'

export const metadata = {
  title: 'Blog — CONECTADOS',
  description: 'Ideas, guías y reflexiones sobre inteligencia artificial, inclusión digital y el futuro del trabajo.',
}

function formatDate(d) {
  try {
    return new Date(d).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })
  } catch {
    return d
  }
}

export default function BlogIndex() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-100 px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-5xl mx-auto flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo-square.png" alt="CONECTADOS" width={32} height={32} />
            <span className="font-display font-bold text-violeta-400">CONECTADOS</span>
          </Link>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-[2px] bg-turquesa-400" />
          <span className="text-turquesa-500 font-semibold text-sm uppercase tracking-widest">Pensar el futuro</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-violeta-700 leading-tight mb-6">
          Ideas para <span className="gradient-text">entender el cambio</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mb-16">
          Pensamos la relación entre tecnología y sociedad. Escribimos para que más
          personas participen en esa conversación.
        </p>

        {posts.length === 0 ? (
          <p className="text-gray-500">Aún no hay artículos publicados.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card-hover group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm block"
              >
                {post.cover && (
                  <div className="aspect-[16/9] overflow-hidden bg-violeta-50">
                    <img
                      src={post.cover}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className={`h-1 ${post.color === 'violeta' ? 'bg-violeta-400' : 'bg-turquesa-400'}`} />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                      post.color === 'violeta' ? 'bg-violeta-50 text-violeta-400' : 'bg-turquesa-50 text-turquesa-500'
                    }`}>
                      {post.tag}
                    </span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                  </div>
                  <h2 className="text-lg font-display font-bold text-violeta-700 mb-2 leading-snug group-hover:text-turquesa-500 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <p className="text-xs text-gray-400">{formatDate(post.date)}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
