'use client'
import { useReveal } from '../hooks/useReveal'

const steps = [
  {
    number: '01',
    title: 'Aprender en comunidad',
    description: 'El aprendizaje sucede en grupo. Las personas se acompañan, comparten conocimiento y avanzan juntas, construyendo confianza y vínculos reales.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Aprender haciendo',
    description: 'Trabajamos con herramientas reales y situaciones concretas. Cada persona aprende usando la inteligencia artificial en su vida cotidiana y laboral.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Acompañamiento cercano',
    description: 'Cada proceso cuenta con apoyo humano. Facilitamos espacios donde las personas pueden preguntar, experimentar y avanzar con seguridad.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Generar oportunidades reales',
    description: 'El aprendizaje se conecta con la vida. Lo trabajado se traduce en empleo, proyectos, autonomía y nuevas posibilidades.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
]

export default function ComoLoHacemos() {
  const [ref, visible] = useReveal()

  return (
    <section
      id="como"
      className="relative pt-8 pb-16 md:pt-10 md:pb-20 overflow-hidden noise-overlay"
      style={{ background: 'linear-gradient(135deg, #180924 0%, #311248 50%, #491C6D 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="flex items-center gap-3 justify-center mb-6">
              <div className="w-12 h-[2px] bg-turquesa-400" />
              <span className="text-turquesa-400 font-semibold text-sm uppercase tracking-widest">Cómo lo hacemos</span>
              <div className="w-12 h-[2px] bg-turquesa-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white leading-tight">
              <span className="text-turquesa-300">Nuestro método</span>
            </h2>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Connecting line - desktop */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-[2px] bg-gradient-to-r from-turquesa-400/0 via-turquesa-400/40 to-turquesa-400/0" />

            <div className={`stagger-children grid sm:grid-cols-2 lg:grid-cols-4 gap-8 ${visible ? 'visible' : ''}`}>
              {steps.map((step, i) => (
                <div key={i} className="relative text-center group">
                  {/* Number circle */}
                  <div className="relative inline-flex mb-8">
                    <div className="w-20 h-20 rounded-full bg-violeta-600/50 border-2 border-turquesa-400/30 flex items-center justify-center group-hover:border-turquesa-400 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-turquesa-400/20">
                      <span className="text-turquesa-300 font-display font-bold text-2xl">{step.number}</span>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-lg bg-turquesa-400/10 flex items-center justify-center text-turquesa-300 group-hover:bg-turquesa-400/20 transition-colors">
                      {step.icon}
                    </div>
                  </div>

                  <h3 className="text-lg font-display font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
