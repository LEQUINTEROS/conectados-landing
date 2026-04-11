'use client'
import { useReveal } from '../hooks/useReveal'

const audiences = [
  {
    emoji: '🌱',
    title: 'Personas en situación de vulnerabilidad',
    description: 'Quienes enfrentan barreras económicas, sociales o geográficas para acceder a la tecnología. La IA puede ser su herramienta de autonomía.',
    color: 'bg-violeta-400',
  },
  {
    emoji: '🚀',
    title: 'Jóvenes que buscan nuevas oportunidades',
    description: 'Jóvenes sin acceso a formación tecnológica de calidad que necesitan herramientas concretas para su empleabilidad y su futuro profesional.',
    color: 'bg-turquesa-400',
  },
  {
    emoji: '🏘️',
    title: 'Entidades y comunidades',
    description: 'Organizaciones sociales, colectivos y comunidades que quieren integrar la inteligencia artificial en su trabajo y adaptarse al cambio tecnológico.',
    color: 'bg-violeta-300',
  },
  {
    emoji: '🤝',
    title: 'Personas y organizaciones que quieren colaborar',
    description: 'Voluntarios/as, profesionales, empresas y entidades que creen en la inclusión digital y quieren aportar su tiempo, conocimiento o recursos.',
    color: 'bg-turquesa-500',
  },
]

export default function AQuienNosDirigimos() {
  const [ref, visible] = useReveal()

  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-violeta-400" />
            <span className="text-violeta-400 font-semibold text-sm uppercase tracking-widest">A quién nos dirigimos</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-violeta-700 leading-tight mb-6 max-w-3xl">
            La IA es para todas las personas.
            <span className="gradient-text"> Nosotros lo hacemos posible.</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mb-16">
            Trabajamos con y para quienes más necesitan que la tecnología sea un puente y no
            una barrera. Y también con quienes quieren construir ese puente.
          </p>

          <div className={`stagger-children grid sm:grid-cols-2 lg:grid-cols-4 gap-6 ${visible ? 'visible' : ''}`}>
            {audiences.map((a, i) => (
              <div key={i} className="card-hover group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:border-violeta-100">
                <div className={`w-12 h-12 rounded-xl ${a.color} flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  {a.emoji}
                </div>
                <h3 className="font-display font-bold text-violeta-700 text-lg mb-3 leading-snug">
                  {a.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {a.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
