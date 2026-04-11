'use client'
import { useReveal } from '../hooks/useReveal'

const articles = [
  {
    tag: 'Reflexión',
    title: 'La IA no va a esperar: por qué la inclusión digital es urgente',
    excerpt: 'Mientras debatimos sobre regulación y ética, millones de personas se quedan fuera de una revolución que ya está transformando el empleo, la salud y la vida cotidiana. El momento de actuar es ahora.',
    readTime: '5 min',
    color: 'violeta',
  },
  {
    tag: 'Guía práctica',
    title: '¿Qué es la inteligencia artificial? Explicada para quienes nunca la han usado',
    excerpt: 'Sin jerga, sin miedo y sin exageraciones. Una guía pensada para personas que quieren entender de qué va todo esto de la IA y cómo puede ayudarles en su día a día.',
    readTime: '7 min',
    color: 'turquesa',
  },
  {
    tag: 'Futuro del trabajo',
    title: 'Empleos que cambian, empleos que nacen: la IA y el mercado laboral en España',
    excerpt: 'El 65% de los trabajos actuales se transformarán por la inteligencia artificial. Pero eso no significa que desaparezcan: significa que necesitamos prepararnos para los que vienen.',
    readTime: '6 min',
    color: 'violeta',
  },
]

export default function Ideas() {
  const [ref, visible] = useReveal()

  return (
    <section
      id="ideas"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #ffffff 0%, #F8F6FB 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
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
            <p className="text-gray-600 max-w-md md:text-right">
              Pensamos la relación entre tecnología y sociedad. Escribimos para que más
              personas participen en esa conversación.
            </p>
          </div>

          <div className={`stagger-children grid md:grid-cols-3 gap-8 ${visible ? 'visible' : ''}`}>
            {articles.map((article, i) => (
              <article
                key={i}
                className="card-hover group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm"
              >
                {/* Top colored bar */}
                <div className={`h-2 ${
                  article.color === 'violeta' ? 'bg-violeta-400' : 'bg-turquesa-400'
                }`} />

                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                      article.color === 'violeta'
                        ? 'bg-violeta-50 text-violeta-400'
                        : 'bg-turquesa-50 text-turquesa-500'
                    }`}>
                      {article.tag}
                    </span>
                    <span className="text-xs text-gray-400">{article.readTime}</span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-violeta-700 mb-3 leading-snug group-hover:text-turquesa-500 transition-colors duration-300">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-semibold text-violeta-400 group-hover:text-turquesa-500 transition-colors">
                    <span>Leer artículo</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
