'use client'
import Link from 'next/link'
import { useReveal } from '../hooks/useReveal'

export default function IdeasClient({ posts }) {
  const [ref, visible] = useReveal()

  return (
    <section
      id="ideas"
      className="relative pt-8 pb-16 md:pt-10 md:pb-20 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #ffffff 0%, #F8F6FB 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[2px] bg-turquesa-400" />
                <span className="text-turquesa-500 font-semibold text-sm uppercase tracking-widest">Pensar el futuro</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-violeta-700 leading-tight">
                Ideas para
                <span className="gradient-text"> entender el cambio</span>
              </h2>
            </div>
            <div className="flex flex-col md:items-end gap-3">
              <p className="text-gray-600 max-w-md md:text-right">
                Pensamos la relación entre tecnología y sociedad. Escribimos para que más
                personas participen en esa conversación.
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-violeta-400 hover:text-turquesa-500 transition-colors"
              >
                Ver todo el blog
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className={`stagger-children grid md:grid-cols-3 gap-8 ${visible ? 'visible' : ''}`}>
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
                <div className={`h-2 ${post.color === 'violeta' ? 'bg-violeta-400' : 'bg-turquesa-400'}`} />

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                      post.color === 'violeta'
                        ? 'bg-violeta-50 text-violeta-400'
                        : 'bg-turquesa-50 text-turquesa-500'
                    }`}>
                      {post.tag}
                    </span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-violeta-700 mb-3 leading-snug group-hover:text-turquesa-500 transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-semibold text-violeta-400 group-hover:text-turquesa-500 transition-colors">
                    <span>Leer artículo</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
